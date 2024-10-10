//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>
//!

use num_derive::FromPrimitive;
use thiserror::Error;

#[derive(Clone, Debug, Eq, Error, FromPrimitive, PartialEq)]
pub enum TensorAmmError {
    /// 12000 - wrong whitelist
    #[error("wrong whitelist")]
    WrongWhitelist = 0x2EE0,
    /// 12001 - operation not permitted on this pool type
    #[error("operation not permitted on this pool type")]
    WrongPoolType = 0x2EE1,
    /// 12002 - fees entered above allowed threshold
    #[error("fees entered above allowed threshold")]
    FeesTooHigh = 0x2EE2,
    /// 12003 - delta too large
    #[error("delta too large")]
    DeltaTooLarge = 0x2EE3,
    /// 12004 - arithmetic error
    #[error("arithmetic error")]
    ArithmeticError = 0x2EE4,
    /// 12005 - specified price not within current price
    #[error("specified price not within current price")]
    PriceMismatch = 0x2EE5,
    /// 12006 - cannot close pool with nfts in escrow -- withdraw all before closing
    #[error("cannot close pool with nfts in escrow -- withdraw all before closing")]
    ExistingNfts = 0x2EE6,
    /// 12007 - fees not allowed for non-trade pools
    #[error("fees not allowed for non-trade pools")]
    FeesNotAllowed = 0x2EE7,
    /// 12008 - wrong pool version provided
    #[error("wrong pool version provided")]
    WrongPoolVersion = 0x2EE8,
    /// 12009 - bad mint proof account
    #[error("bad mint proof account")]
    BadMintProof = 0x2EE9,
    /// 12010 - wrong cosigner
    #[error("wrong cosigner")]
    WrongCosigner = 0x2EEA,
    /// 12011 - bad shared escrow account
    #[error("bad shared escrow account")]
    BadSharedEscrow = 0x2EEB,
    /// 12012 - expected a non-shared escrow pool to be passed in
    #[error("expected a non-shared escrow pool to be passed in")]
    PoolOnSharedEscrow = 0x2EEC,
    /// 12013 - cannot use shared escrow in NFT pools
    #[error("cannot use shared escrow in NFT pools")]
    CannotUseSharedEscrow = 0x2EED,
    /// 12014 - max taker sell count exceeded, pool cannot buy anymore NFTs
    #[error("max taker sell count exceeded, pool cannot buy anymore NFTs")]
    MaxTakerSellCountExceeded = 0x2EEE,
    /// 12015 - max taker sell count is too small
    #[error("max taker sell count is too small")]
    MaxTakerSellCountTooSmall = 0x2EEF,
    /// 12016 - starting price can't be smaller than 1 lamport
    #[error("starting price can't be smaller than 1 lamport")]
    StartingPriceTooSmall = 0x2EF0,
    /// 12017 - Pool must keep minimum rent balance
    #[error("Pool must keep minimum rent balance")]
    PoolInsufficientRent = 0x2EF1,
    /// 12018 - Wrong rent payer
    #[error("Wrong rent payer")]
    WrongRentPayer = 0x2EF2,
    /// 12019 - Expiry too large
    #[error("Expiry too large")]
    ExpiryTooLarge = 0x2EF3,
    /// 12020 - Expired Pool
    #[error("Expired Pool")]
    ExpiredPool = 0x2EF4,
    /// 12021 - Pool not expired
    #[error("Pool not expired")]
    PoolNotExpired = 0x2EF5,
    /// 12022 - Invalid pool amount
    #[error("Invalid pool amount")]
    InvalidPoolAmount = 0x2EF6,
    /// 12023 - Wrong maker broker account
    #[error("Wrong maker broker account")]
    WrongMakerBroker = 0x2EF7,
    /// 12024 - Wrong owner
    #[error("Wrong owner")]
    WrongOwner = 0x2EF8,
    /// 12025 - Escrow program not set
    #[error("Escrow program not set")]
    EscrowProgramNotSet = 0x2EF9,
    /// 12026 - Missing maker broker account
    #[error("Missing maker broker account")]
    MissingMakerBroker = 0x2EFA,
    /// 12027 - Missing cosigner account
    #[error("Missing cosigner account")]
    MissingCosigner = 0x2EFB,
}

impl solana_program::program_error::PrintProgramError for TensorAmmError {
    fn print<E>(&self) {
        solana_program::msg!(&self.to_string());
    }
}
