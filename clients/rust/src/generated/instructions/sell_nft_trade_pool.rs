//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::AuthorizationDataLocal;
use crate::generated::types::PoolConfig;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct SellNftTradePool {
    pub shared: solana_program::pubkey::Pubkey,

    pub nft_escrow_owner: solana_program::pubkey::Pubkey,
    /// Implicitly checked via transfer. Will fail if wrong account
    pub nft_escrow: solana_program::pubkey::Pubkey,

    pub nft_receipt: solana_program::pubkey::Pubkey,

    pub token_program: solana_program::pubkey::Pubkey,

    pub system_program: solana_program::pubkey::Pubkey,

    pub rent: solana_program::pubkey::Pubkey,

    pub associated_token_program: solana_program::pubkey::Pubkey,

    pub nft_edition: solana_program::pubkey::Pubkey,

    pub owner_token_record: solana_program::pubkey::Pubkey,

    pub dest_token_record: solana_program::pubkey::Pubkey,

    pub pnft_shared: solana_program::pubkey::Pubkey,

    pub auth_rules: solana_program::pubkey::Pubkey,

    pub margin_account: solana_program::pubkey::Pubkey,

    pub taker_broker: solana_program::pubkey::Pubkey,
}

impl SellNftTradePool {
    pub fn instruction(
        &self,
        args: SellNftTradePoolInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: SellNftTradePoolInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(15 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.shared,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.nft_escrow_owner,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.nft_escrow,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.nft_receipt,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.rent, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.associated_token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.nft_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.owner_token_record,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.dest_token_record,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.pnft_shared,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.auth_rules,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.margin_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.taker_broker,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = SellNftTradePoolInstructionData::new().try_to_vec().unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::AMM_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct SellNftTradePoolInstructionData {
    discriminator: [u8; 8],
}

impl SellNftTradePoolInstructionData {
    fn new() -> Self {
        Self {
            discriminator: [131, 82, 125, 77, 13, 157, 36, 90],
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct SellNftTradePoolInstructionArgs {
    pub config: PoolConfig,
    pub min_price: u64,
    pub rules_acc_present: bool,
    pub authorization_data: Option<AuthorizationDataLocal>,
    pub optional_royalty_pct: Option<u16>,
}

/// Instruction builder for `SellNftTradePool`.
///
/// ### Accounts:
///
///   0. `[]` shared
///   1. `[writable]` nft_escrow_owner
///   2. `[writable]` nft_escrow
///   3. `[writable]` nft_receipt
///   4. `[optional]` token_program (default to `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`)
///   5. `[optional]` system_program (default to `11111111111111111111111111111111`)
///   6. `[optional]` rent (default to `SysvarRent111111111111111111111111111111111`)
///   7. `[]` associated_token_program
///   8. `[]` nft_edition
///   9. `[writable]` owner_token_record
///   10. `[writable]` dest_token_record
///   11. `[]` pnft_shared
///   12. `[]` auth_rules
///   13. `[writable]` margin_account
///   14. `[writable]` taker_broker
#[derive(Default)]
pub struct SellNftTradePoolBuilder {
    shared: Option<solana_program::pubkey::Pubkey>,
    nft_escrow_owner: Option<solana_program::pubkey::Pubkey>,
    nft_escrow: Option<solana_program::pubkey::Pubkey>,
    nft_receipt: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    associated_token_program: Option<solana_program::pubkey::Pubkey>,
    nft_edition: Option<solana_program::pubkey::Pubkey>,
    owner_token_record: Option<solana_program::pubkey::Pubkey>,
    dest_token_record: Option<solana_program::pubkey::Pubkey>,
    pnft_shared: Option<solana_program::pubkey::Pubkey>,
    auth_rules: Option<solana_program::pubkey::Pubkey>,
    margin_account: Option<solana_program::pubkey::Pubkey>,
    taker_broker: Option<solana_program::pubkey::Pubkey>,
    config: Option<PoolConfig>,
    min_price: Option<u64>,
    rules_acc_present: Option<bool>,
    authorization_data: Option<AuthorizationDataLocal>,
    optional_royalty_pct: Option<u16>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl SellNftTradePoolBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn shared(&mut self, shared: solana_program::pubkey::Pubkey) -> &mut Self {
        self.shared = Some(shared);
        self
    }
    #[inline(always)]
    pub fn nft_escrow_owner(
        &mut self,
        nft_escrow_owner: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.nft_escrow_owner = Some(nft_escrow_owner);
        self
    }
    /// Implicitly checked via transfer. Will fail if wrong account
    #[inline(always)]
    pub fn nft_escrow(&mut self, nft_escrow: solana_program::pubkey::Pubkey) -> &mut Self {
        self.nft_escrow = Some(nft_escrow);
        self
    }
    #[inline(always)]
    pub fn nft_receipt(&mut self, nft_receipt: solana_program::pubkey::Pubkey) -> &mut Self {
        self.nft_receipt = Some(nft_receipt);
        self
    }
    /// `[optional account, default to 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA']`
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account, default to 'SysvarRent111111111111111111111111111111111']`
    #[inline(always)]
    pub fn rent(&mut self, rent: solana_program::pubkey::Pubkey) -> &mut Self {
        self.rent = Some(rent);
        self
    }
    #[inline(always)]
    pub fn associated_token_program(
        &mut self,
        associated_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.associated_token_program = Some(associated_token_program);
        self
    }
    #[inline(always)]
    pub fn nft_edition(&mut self, nft_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.nft_edition = Some(nft_edition);
        self
    }
    #[inline(always)]
    pub fn owner_token_record(
        &mut self,
        owner_token_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.owner_token_record = Some(owner_token_record);
        self
    }
    #[inline(always)]
    pub fn dest_token_record(
        &mut self,
        dest_token_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.dest_token_record = Some(dest_token_record);
        self
    }
    #[inline(always)]
    pub fn pnft_shared(&mut self, pnft_shared: solana_program::pubkey::Pubkey) -> &mut Self {
        self.pnft_shared = Some(pnft_shared);
        self
    }
    #[inline(always)]
    pub fn auth_rules(&mut self, auth_rules: solana_program::pubkey::Pubkey) -> &mut Self {
        self.auth_rules = Some(auth_rules);
        self
    }
    #[inline(always)]
    pub fn margin_account(&mut self, margin_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.margin_account = Some(margin_account);
        self
    }
    #[inline(always)]
    pub fn taker_broker(&mut self, taker_broker: solana_program::pubkey::Pubkey) -> &mut Self {
        self.taker_broker = Some(taker_broker);
        self
    }
    #[inline(always)]
    pub fn config(&mut self, config: PoolConfig) -> &mut Self {
        self.config = Some(config);
        self
    }
    #[inline(always)]
    pub fn min_price(&mut self, min_price: u64) -> &mut Self {
        self.min_price = Some(min_price);
        self
    }
    #[inline(always)]
    pub fn rules_acc_present(&mut self, rules_acc_present: bool) -> &mut Self {
        self.rules_acc_present = Some(rules_acc_present);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn authorization_data(&mut self, authorization_data: AuthorizationDataLocal) -> &mut Self {
        self.authorization_data = Some(authorization_data);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn optional_royalty_pct(&mut self, optional_royalty_pct: u16) -> &mut Self {
        self.optional_royalty_pct = Some(optional_royalty_pct);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = SellNftTradePool {
            shared: self.shared.expect("shared is not set"),
            nft_escrow_owner: self.nft_escrow_owner.expect("nft_escrow_owner is not set"),
            nft_escrow: self.nft_escrow.expect("nft_escrow is not set"),
            nft_receipt: self.nft_receipt.expect("nft_receipt is not set"),
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            rent: self.rent.unwrap_or(solana_program::pubkey!(
                "SysvarRent111111111111111111111111111111111"
            )),
            associated_token_program: self
                .associated_token_program
                .expect("associated_token_program is not set"),
            nft_edition: self.nft_edition.expect("nft_edition is not set"),
            owner_token_record: self
                .owner_token_record
                .expect("owner_token_record is not set"),
            dest_token_record: self
                .dest_token_record
                .expect("dest_token_record is not set"),
            pnft_shared: self.pnft_shared.expect("pnft_shared is not set"),
            auth_rules: self.auth_rules.expect("auth_rules is not set"),
            margin_account: self.margin_account.expect("margin_account is not set"),
            taker_broker: self.taker_broker.expect("taker_broker is not set"),
        };
        let args = SellNftTradePoolInstructionArgs {
            config: self.config.clone().expect("config is not set"),
            min_price: self.min_price.clone().expect("min_price is not set"),
            rules_acc_present: self
                .rules_acc_present
                .clone()
                .expect("rules_acc_present is not set"),
            authorization_data: self.authorization_data.clone(),
            optional_royalty_pct: self.optional_royalty_pct.clone(),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `sell_nft_trade_pool` CPI accounts.
pub struct SellNftTradePoolCpiAccounts<'a, 'b> {
    pub shared: &'b solana_program::account_info::AccountInfo<'a>,

    pub nft_escrow_owner: &'b solana_program::account_info::AccountInfo<'a>,
    /// Implicitly checked via transfer. Will fail if wrong account
    pub nft_escrow: &'b solana_program::account_info::AccountInfo<'a>,

    pub nft_receipt: &'b solana_program::account_info::AccountInfo<'a>,

    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub rent: &'b solana_program::account_info::AccountInfo<'a>,

    pub associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub nft_edition: &'b solana_program::account_info::AccountInfo<'a>,

    pub owner_token_record: &'b solana_program::account_info::AccountInfo<'a>,

    pub dest_token_record: &'b solana_program::account_info::AccountInfo<'a>,

    pub pnft_shared: &'b solana_program::account_info::AccountInfo<'a>,

    pub auth_rules: &'b solana_program::account_info::AccountInfo<'a>,

    pub margin_account: &'b solana_program::account_info::AccountInfo<'a>,

    pub taker_broker: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `sell_nft_trade_pool` CPI instruction.
pub struct SellNftTradePoolCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub shared: &'b solana_program::account_info::AccountInfo<'a>,

    pub nft_escrow_owner: &'b solana_program::account_info::AccountInfo<'a>,
    /// Implicitly checked via transfer. Will fail if wrong account
    pub nft_escrow: &'b solana_program::account_info::AccountInfo<'a>,

    pub nft_receipt: &'b solana_program::account_info::AccountInfo<'a>,

    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub rent: &'b solana_program::account_info::AccountInfo<'a>,

    pub associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub nft_edition: &'b solana_program::account_info::AccountInfo<'a>,

    pub owner_token_record: &'b solana_program::account_info::AccountInfo<'a>,

    pub dest_token_record: &'b solana_program::account_info::AccountInfo<'a>,

    pub pnft_shared: &'b solana_program::account_info::AccountInfo<'a>,

    pub auth_rules: &'b solana_program::account_info::AccountInfo<'a>,

    pub margin_account: &'b solana_program::account_info::AccountInfo<'a>,

    pub taker_broker: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: SellNftTradePoolInstructionArgs,
}

impl<'a, 'b> SellNftTradePoolCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: SellNftTradePoolCpiAccounts<'a, 'b>,
        args: SellNftTradePoolInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            shared: accounts.shared,
            nft_escrow_owner: accounts.nft_escrow_owner,
            nft_escrow: accounts.nft_escrow,
            nft_receipt: accounts.nft_receipt,
            token_program: accounts.token_program,
            system_program: accounts.system_program,
            rent: accounts.rent,
            associated_token_program: accounts.associated_token_program,
            nft_edition: accounts.nft_edition,
            owner_token_record: accounts.owner_token_record,
            dest_token_record: accounts.dest_token_record,
            pnft_shared: accounts.pnft_shared,
            auth_rules: accounts.auth_rules,
            margin_account: accounts.margin_account,
            taker_broker: accounts.taker_broker,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(15 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.shared.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.nft_escrow_owner.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.nft_escrow.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.nft_receipt.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.rent.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.associated_token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.nft_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.owner_token_record.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.dest_token_record.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.pnft_shared.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.auth_rules.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.margin_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.taker_broker.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = SellNftTradePoolInstructionData::new().try_to_vec().unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::AMM_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(15 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.shared.clone());
        account_infos.push(self.nft_escrow_owner.clone());
        account_infos.push(self.nft_escrow.clone());
        account_infos.push(self.nft_receipt.clone());
        account_infos.push(self.token_program.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.rent.clone());
        account_infos.push(self.associated_token_program.clone());
        account_infos.push(self.nft_edition.clone());
        account_infos.push(self.owner_token_record.clone());
        account_infos.push(self.dest_token_record.clone());
        account_infos.push(self.pnft_shared.clone());
        account_infos.push(self.auth_rules.clone());
        account_infos.push(self.margin_account.clone());
        account_infos.push(self.taker_broker.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `SellNftTradePool` via CPI.
///
/// ### Accounts:
///
///   0. `[]` shared
///   1. `[writable]` nft_escrow_owner
///   2. `[writable]` nft_escrow
///   3. `[writable]` nft_receipt
///   4. `[]` token_program
///   5. `[]` system_program
///   6. `[]` rent
///   7. `[]` associated_token_program
///   8. `[]` nft_edition
///   9. `[writable]` owner_token_record
///   10. `[writable]` dest_token_record
///   11. `[]` pnft_shared
///   12. `[]` auth_rules
///   13. `[writable]` margin_account
///   14. `[writable]` taker_broker
pub struct SellNftTradePoolCpiBuilder<'a, 'b> {
    instruction: Box<SellNftTradePoolCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> SellNftTradePoolCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SellNftTradePoolCpiBuilderInstruction {
            __program: program,
            shared: None,
            nft_escrow_owner: None,
            nft_escrow: None,
            nft_receipt: None,
            token_program: None,
            system_program: None,
            rent: None,
            associated_token_program: None,
            nft_edition: None,
            owner_token_record: None,
            dest_token_record: None,
            pnft_shared: None,
            auth_rules: None,
            margin_account: None,
            taker_broker: None,
            config: None,
            min_price: None,
            rules_acc_present: None,
            authorization_data: None,
            optional_royalty_pct: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn shared(
        &mut self,
        shared: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.shared = Some(shared);
        self
    }
    #[inline(always)]
    pub fn nft_escrow_owner(
        &mut self,
        nft_escrow_owner: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_escrow_owner = Some(nft_escrow_owner);
        self
    }
    /// Implicitly checked via transfer. Will fail if wrong account
    #[inline(always)]
    pub fn nft_escrow(
        &mut self,
        nft_escrow: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_escrow = Some(nft_escrow);
        self
    }
    #[inline(always)]
    pub fn nft_receipt(
        &mut self,
        nft_receipt: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_receipt = Some(nft_receipt);
        self
    }
    #[inline(always)]
    pub fn token_program(
        &mut self,
        token_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn rent(&mut self, rent: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.rent = Some(rent);
        self
    }
    #[inline(always)]
    pub fn associated_token_program(
        &mut self,
        associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.associated_token_program = Some(associated_token_program);
        self
    }
    #[inline(always)]
    pub fn nft_edition(
        &mut self,
        nft_edition: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_edition = Some(nft_edition);
        self
    }
    #[inline(always)]
    pub fn owner_token_record(
        &mut self,
        owner_token_record: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.owner_token_record = Some(owner_token_record);
        self
    }
    #[inline(always)]
    pub fn dest_token_record(
        &mut self,
        dest_token_record: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.dest_token_record = Some(dest_token_record);
        self
    }
    #[inline(always)]
    pub fn pnft_shared(
        &mut self,
        pnft_shared: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.pnft_shared = Some(pnft_shared);
        self
    }
    #[inline(always)]
    pub fn auth_rules(
        &mut self,
        auth_rules: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.auth_rules = Some(auth_rules);
        self
    }
    #[inline(always)]
    pub fn margin_account(
        &mut self,
        margin_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.margin_account = Some(margin_account);
        self
    }
    #[inline(always)]
    pub fn taker_broker(
        &mut self,
        taker_broker: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.taker_broker = Some(taker_broker);
        self
    }
    #[inline(always)]
    pub fn config(&mut self, config: PoolConfig) -> &mut Self {
        self.instruction.config = Some(config);
        self
    }
    #[inline(always)]
    pub fn min_price(&mut self, min_price: u64) -> &mut Self {
        self.instruction.min_price = Some(min_price);
        self
    }
    #[inline(always)]
    pub fn rules_acc_present(&mut self, rules_acc_present: bool) -> &mut Self {
        self.instruction.rules_acc_present = Some(rules_acc_present);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn authorization_data(&mut self, authorization_data: AuthorizationDataLocal) -> &mut Self {
        self.instruction.authorization_data = Some(authorization_data);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn optional_royalty_pct(&mut self, optional_royalty_pct: u16) -> &mut Self {
        self.instruction.optional_royalty_pct = Some(optional_royalty_pct);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = SellNftTradePoolInstructionArgs {
            config: self.instruction.config.clone().expect("config is not set"),
            min_price: self
                .instruction
                .min_price
                .clone()
                .expect("min_price is not set"),
            rules_acc_present: self
                .instruction
                .rules_acc_present
                .clone()
                .expect("rules_acc_present is not set"),
            authorization_data: self.instruction.authorization_data.clone(),
            optional_royalty_pct: self.instruction.optional_royalty_pct.clone(),
        };
        let instruction = SellNftTradePoolCpi {
            __program: self.instruction.__program,

            shared: self.instruction.shared.expect("shared is not set"),

            nft_escrow_owner: self
                .instruction
                .nft_escrow_owner
                .expect("nft_escrow_owner is not set"),

            nft_escrow: self.instruction.nft_escrow.expect("nft_escrow is not set"),

            nft_receipt: self
                .instruction
                .nft_receipt
                .expect("nft_receipt is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            rent: self.instruction.rent.expect("rent is not set"),

            associated_token_program: self
                .instruction
                .associated_token_program
                .expect("associated_token_program is not set"),

            nft_edition: self
                .instruction
                .nft_edition
                .expect("nft_edition is not set"),

            owner_token_record: self
                .instruction
                .owner_token_record
                .expect("owner_token_record is not set"),

            dest_token_record: self
                .instruction
                .dest_token_record
                .expect("dest_token_record is not set"),

            pnft_shared: self
                .instruction
                .pnft_shared
                .expect("pnft_shared is not set"),

            auth_rules: self.instruction.auth_rules.expect("auth_rules is not set"),

            margin_account: self
                .instruction
                .margin_account
                .expect("margin_account is not set"),

            taker_broker: self
                .instruction
                .taker_broker
                .expect("taker_broker is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct SellNftTradePoolCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    shared: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    nft_escrow_owner: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    nft_escrow: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    nft_receipt: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    associated_token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    nft_edition: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    owner_token_record: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    dest_token_record: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    pnft_shared: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    auth_rules: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    margin_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    taker_broker: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    config: Option<PoolConfig>,
    min_price: Option<u64>,
    rules_acc_present: Option<bool>,
    authorization_data: Option<AuthorizationDataLocal>,
    optional_royalty_pct: Option<u16>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
