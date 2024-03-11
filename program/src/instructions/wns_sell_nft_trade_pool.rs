//! User selling an NFT into a Trade pool
//! We separate this from Token pool since the NFT will go into an NFT escrow w/ a receipt.
//! (!) Keep common logic in sync with sell_nft_token_pool.rs.
use anchor_spl::{
    associated_token::AssociatedToken,
    token_interface::{Token2022, TransferChecked},
};
use mpl_token_metadata::types::TokenStandard;
use tensor_toolbox::{
    calc_creators_fee,
    token_2022::{
        token::{safe_initialize_token_account, InitializeTokenAccount},
        transfer::transfer_checked,
        wns::{wns_approve, wns_validate_mint, ApproveAccounts},
    },
    transfer_lamports_from_pda,
};
use vipers::{throw_err, unwrap_int, Validate};

use self::constants::CURRENT_POOL_VERSION;
use crate::{error::ErrorCode, *};

#[derive(Accounts)]
pub struct WnsSellNftTradePool<'info> {
    shared: SellNftSharedT22<'info>,

    /// CHECK: seeds checked so must be Tamm PDA
    #[account(mut,
    seeds = [
        b"nft_owner",
        shared.nft_mint.key().as_ref(),
        ],
        bump
    )]
    pub nft_escrow_owner: AccountInfo<'info>,

    /// CHECK: initialized on instruction; implicitly checked via transfer (will fail if wrong account)
    #[account(mut,
        seeds = [
            b"nft_escrow".as_ref(),
            shared.nft_mint.key().as_ref(),
        ],
        bump,
    )]
    pub nft_escrow: UncheckedAccount<'info>,

    #[account(
        init,
        payer = shared.seller,
        seeds=[
            b"nft_receipt".as_ref(),
            shared.nft_mint.key().as_ref(),
        ],
        bump,
        space = DEPOSIT_RECEIPT_SIZE,
    )]
    pub nft_receipt: Box<Account<'info, NftDepositReceipt>>,

    pub token_program: Program<'info, Token2022>,

    pub associated_token_program: Program<'info, AssociatedToken>,

    pub system_program: Program<'info, System>,

    /// CHECK: optional, manually handled in handler: 1)seeds, 2)program owner, 3)normal owner, 4)margin acc stored on pool
    #[account(mut)]
    pub margin_account: UncheckedAccount<'info>,

    /// CHECK: checked in handler
    #[account(mut)]
    pub taker_broker: UncheckedAccount<'info>,

    // ---- WNS royalty enforcement
    /// CHECK: checked on approve CPI
    #[account(mut)]
    pub approve_account: UncheckedAccount<'info>,

    /// CHECK: checked on approve CPI
    #[account(mut)]
    pub distribution: UncheckedAccount<'info>,

    /// CHECK: checked on approve CPI
    pub wns_program: UncheckedAccount<'info>,

    /// CHECK: checked on approve CPI
    pub distribution_program: UncheckedAccount<'info>,

    /// CHECK: checked on transfer CPI
    pub extra_metas: UncheckedAccount<'info>,
}

impl<'info> Validate<'info> for WnsSellNftTradePool<'info> {
    fn validate(&self) -> Result<()> {
        match self.shared.pool.config.pool_type {
            PoolType::Trade => (),
            _ => {
                throw_err!(ErrorCode::WrongPoolType);
            }
        }
        if self.shared.pool.version != CURRENT_POOL_VERSION {
            throw_err!(ErrorCode::WrongPoolVersion);
        }

        self.shared.pool.taker_allowed_to_sell()?;

        Ok(())
    }
}

#[access_control(ctx.accounts.shared.verify_whitelist(); ctx.accounts.validate())]
pub fn process_wns_sell_nft_trade_pool<'a, 'b, 'c, 'info>(
    ctx: Context<'a, 'b, 'c, 'info, WnsSellNftTradePool<'info>>,
    // Min vs exact so we can add slippage later.
    min_price: u64,
) -> Result<()> {
    let pool = &ctx.accounts.shared.pool;

    // validate mint account
    let seller_fee_basis_points =
        wns_validate_mint(&ctx.accounts.shared.nft_mint.to_account_info())?;

    let current_price = pool.current_price(TakerSide::Sell)?;
    let creators_fee = calc_creators_fee(
        seller_fee_basis_points,
        current_price,
        Some(TokenStandard::ProgrammableNonFungible), // <- enforced royalties
        None,
    )?;

    let approve_accounts = ApproveAccounts {
        payer: ctx.accounts.shared.seller.to_account_info(),
        authority: ctx.accounts.shared.seller.to_account_info(),
        mint: ctx.accounts.shared.nft_mint.to_account_info(),
        approve_account: ctx.accounts.approve_account.to_account_info(),
        payment_mint: None,
        payer_address: ctx.accounts.shared.seller.to_account_info(),
        distribution: ctx.accounts.distribution.to_account_info(),
        distribution_address: ctx.accounts.distribution.to_account_info(),
        system_program: ctx.accounts.system_program.to_account_info(),
        distribution_program: ctx.accounts.distribution_program.to_account_info(),
        wns_program: ctx.accounts.wns_program.to_account_info(),
        token_program: ctx.accounts.token_program.to_account_info(),
        associated_token_program: ctx.accounts.associated_token_program.to_account_info(),
    };
    // royalty payment
    wns_approve(approve_accounts, current_price, creators_fee)?;

    // initialize escrow token account

    safe_initialize_token_account(
        InitializeTokenAccount {
            token_info: &ctx.accounts.nft_escrow,
            mint: &ctx.accounts.shared.nft_mint.to_account_info(),
            authority: &ctx.accounts.nft_escrow_owner.to_account_info(),
            payer: &ctx.accounts.shared.seller,
            system_program: &ctx.accounts.system_program,
            token_program: &ctx.accounts.token_program,
            signer_seeds: &[
                b"nft_escrow".as_ref(),
                ctx.accounts.shared.nft_mint.key().as_ref(),
                &[ctx.bumps.nft_escrow],
            ],
        },
        true, // allow existing (might have dangling nft escrow account)
    )?;

    // transfer the NFT

    let transfer_cpi = CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        TransferChecked {
            from: ctx.accounts.shared.nft_seller_acc.to_account_info(),
            to: ctx.accounts.nft_escrow.to_account_info(),
            authority: ctx.accounts.shared.seller.to_account_info(),
            mint: ctx.accounts.shared.nft_mint.to_account_info(),
        },
    );

    transfer_checked(
        transfer_cpi.with_remaining_accounts(vec![
            ctx.accounts.wns_program.to_account_info(),
            ctx.accounts.extra_metas.to_account_info(),
            ctx.accounts.approve_account.to_account_info(),
        ]),
        1, // supply = 1
        0, // decimals = 0
    )?;

    let Fees {
        tswap_fee,
        maker_rebate: _,
        broker_fee,
        taker_fee,
    } = calc_fees_rebates(current_price)?;
    let mm_fee = pool.calc_mm_fee(current_price)?;

    // for keeping track of current price + fees charged (computed dynamically)
    // we do this before PriceMismatch for easy debugging eg if there's a lot of slippage
    emit!(BuySellEvent {
        current_price,
        tswap_fee: taker_fee,
        //record MM here instead of buy tx (when it's technically paid to the MMer)
        //this is because offchain we use the event to determine "true" price paid by taker, which in this case is current price - mm fee
        mm_fee,
        creators_fee,
    });

    // Need to include mm_fee to prevent someone editing the MM fee from rugging the seller.

    if unwrap_int!(current_price.checked_sub(mm_fee)) < min_price {
        throw_err!(ErrorCode::PriceMismatch);
    }

    let mut left_for_seller = current_price;

    // --------------------------------------- SOL transfers

    //decide where we're sending the money from - margin (marginated pool) or escrow (normal pool)
    let from = match &pool.shared_escrow {
        Some(stored_margin_account) => {
            assert_decode_shared_escrow_account(
                &ctx.accounts.margin_account,
                &ctx.accounts.shared.owner.to_account_info(),
            )?;
            if *ctx.accounts.margin_account.key != *stored_margin_account {
                throw_err!(ErrorCode::BadSharedEscrow);
            }
            ctx.accounts.margin_account.to_account_info()
        }
        None => ctx.accounts.shared.sol_escrow.to_account_info(),
    };

    // transfer fees
    left_for_seller = unwrap_int!(left_for_seller.checked_sub(taker_fee));
    transfer_lamports_from_pda(
        &from,
        &ctx.accounts.shared.fee_vault.to_account_info(),
        tswap_fee,
    )?;
    transfer_lamports_from_pda(
        &from,
        &ctx.accounts.taker_broker.to_account_info(),
        broker_fee,
    )?;

    // no need to subtract royalty payment since seller payed for them
    // already
    // TODO: this might change once PDAs are used for royalties
    //left_for_seller = unwrap_int!(left_for_seller.checked_sub(creators_fee));

    // subtract MM spread before wiring to seller
    left_for_seller = unwrap_int!(left_for_seller.checked_sub(mm_fee));

    // transfer remainder to seller
    // (!) fees/royalties are paid by TAKER, which in this case is the SELLER
    // (!) maker rebate already taken out of this amount
    transfer_lamports_from_pda(
        &from,
        &ctx.accounts.shared.seller.to_account_info(),
        left_for_seller,
    )?;

    // --------------------------------------- accounting

    //create nft receipt for trade pool
    let receipt_state = &mut ctx.accounts.nft_receipt;
    receipt_state.bump = ctx.bumps.nft_receipt;
    receipt_state.nft_mint = ctx.accounts.shared.nft_mint.key();
    receipt_state.nft_escrow = ctx.accounts.nft_escrow.key();

    //update pool accounting
    let pool = &mut ctx.accounts.shared.pool;
    pool.nfts_held = unwrap_int!(pool.nfts_held.checked_add(1));
    pool.taker_sell_count = unwrap_int!(pool.taker_sell_count.checked_add(1));
    pool.stats.taker_sell_count = unwrap_int!(pool.stats.taker_sell_count.checked_add(1));
    pool.updated_at = Clock::get()?.unix_timestamp;

    //MM profit no longer recorded during taker sell txs, only taker buy txs

    Ok(())
}
