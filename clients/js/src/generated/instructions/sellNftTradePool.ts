/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  Option,
  OptionOrNullable,
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { AMM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  AuthorizationDataLocal,
  AuthorizationDataLocalArgs,
  getAuthorizationDataLocalDecoder,
  getAuthorizationDataLocalEncoder,
} from '../types';

export type SellNftTradePoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountRentPayer extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSeller extends string | IAccountMeta<string> = string,
  TAccountFeeVault extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountWhitelist extends string | IAccountMeta<string> = string,
  TAccountMintProof extends string | IAccountMeta<string> = string,
  TAccountSellerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountPoolAta extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountNftReceipt extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountSellerTokenRecord extends string | IAccountMeta<string> = string,
  TAccountPoolTokenRecord extends string | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountInstructions extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountAuthRules extends string | IAccountMeta<string> = string,
  TAccountSharedEscrow extends string | IAccountMeta<string> = string,
  TAccountTakerBroker extends string | IAccountMeta<string> = string,
  TAccountCosigner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountRentPayer extends string
        ? WritableSignerAccount<TAccountRentPayer> &
            IAccountSignerMeta<TAccountRentPayer>
        : TAccountRentPayer,
      TAccountOwner extends string
        ? WritableAccount<TAccountOwner>
        : TAccountOwner,
      TAccountSeller extends string
        ? ReadonlySignerAccount<TAccountSeller> &
            IAccountSignerMeta<TAccountSeller>
        : TAccountSeller,
      TAccountFeeVault extends string
        ? WritableAccount<TAccountFeeVault>
        : TAccountFeeVault,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountWhitelist extends string
        ? ReadonlyAccount<TAccountWhitelist>
        : TAccountWhitelist,
      TAccountMintProof extends string
        ? ReadonlyAccount<TAccountMintProof>
        : TAccountMintProof,
      TAccountSellerTokenAccount extends string
        ? WritableAccount<TAccountSellerTokenAccount>
        : TAccountSellerTokenAccount,
      TAccountPoolAta extends string
        ? WritableAccount<TAccountPoolAta>
        : TAccountPoolAta,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountNftReceipt extends string
        ? WritableAccount<TAccountNftReceipt>
        : TAccountNftReceipt,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountEdition extends string
        ? ReadonlyAccount<TAccountEdition>
        : TAccountEdition,
      TAccountSellerTokenRecord extends string
        ? WritableAccount<TAccountSellerTokenRecord>
        : TAccountSellerTokenRecord,
      TAccountPoolTokenRecord extends string
        ? WritableAccount<TAccountPoolTokenRecord>
        : TAccountPoolTokenRecord,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountInstructions extends string
        ? ReadonlyAccount<TAccountInstructions>
        : TAccountInstructions,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthRules extends string
        ? ReadonlyAccount<TAccountAuthRules>
        : TAccountAuthRules,
      TAccountSharedEscrow extends string
        ? WritableAccount<TAccountSharedEscrow>
        : TAccountSharedEscrow,
      TAccountTakerBroker extends string
        ? WritableAccount<TAccountTakerBroker>
        : TAccountTakerBroker,
      TAccountCosigner extends string
        ? ReadonlySignerAccount<TAccountCosigner> &
            IAccountSignerMeta<TAccountCosigner>
        : TAccountCosigner,
      ...TRemainingAccounts,
    ]
  >;

export type SellNftTradePoolInstructionData = {
  discriminator: Array<number>;
  minPrice: bigint;
  rulesAccPresent: boolean;
  authorizationData: Option<AuthorizationDataLocal>;
  optionalRoyaltyPct: Option<number>;
};

export type SellNftTradePoolInstructionDataArgs = {
  minPrice: number | bigint;
  rulesAccPresent: boolean;
  authorizationData: OptionOrNullable<AuthorizationDataLocalArgs>;
  optionalRoyaltyPct: OptionOrNullable<number>;
};

export function getSellNftTradePoolInstructionDataEncoder(): Encoder<SellNftTradePoolInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['minPrice', getU64Encoder()],
      ['rulesAccPresent', getBooleanEncoder()],
      [
        'authorizationData',
        getOptionEncoder(getAuthorizationDataLocalEncoder()),
      ],
      ['optionalRoyaltyPct', getOptionEncoder(getU16Encoder())],
    ]),
    (value) => ({
      ...value,
      discriminator: [131, 82, 125, 77, 13, 157, 36, 90],
    })
  );
}

export function getSellNftTradePoolInstructionDataDecoder(): Decoder<SellNftTradePoolInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['minPrice', getU64Decoder()],
    ['rulesAccPresent', getBooleanDecoder()],
    ['authorizationData', getOptionDecoder(getAuthorizationDataLocalDecoder())],
    ['optionalRoyaltyPct', getOptionDecoder(getU16Decoder())],
  ]);
}

export function getSellNftTradePoolInstructionDataCodec(): Codec<
  SellNftTradePoolInstructionDataArgs,
  SellNftTradePoolInstructionData
> {
  return combineCodec(
    getSellNftTradePoolInstructionDataEncoder(),
    getSellNftTradePoolInstructionDataDecoder()
  );
}

export type SellNftTradePoolInput<
  TAccountRentPayer extends string = string,
  TAccountOwner extends string = string,
  TAccountSeller extends string = string,
  TAccountFeeVault extends string = string,
  TAccountPool extends string = string,
  TAccountWhitelist extends string = string,
  TAccountMintProof extends string = string,
  TAccountSellerTokenAccount extends string = string,
  TAccountPoolAta extends string = string,
  TAccountMint extends string = string,
  TAccountMetadata extends string = string,
  TAccountNftReceipt extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountEdition extends string = string,
  TAccountSellerTokenRecord extends string = string,
  TAccountPoolTokenRecord extends string = string,
  TAccountTokenMetadataProgram extends string = string,
  TAccountInstructions extends string = string,
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthRules extends string = string,
  TAccountSharedEscrow extends string = string,
  TAccountTakerBroker extends string = string,
  TAccountCosigner extends string = string,
> = {
  /** If no external rent payer, this should be seller. */
  rentPayer?: TransactionSigner<TAccountRentPayer>;
  /** The owner of the pool and the buyer/recipient of the NFT. */
  owner: Address<TAccountOwner>;
  /** The seller is the owner of the NFT who is selling the NFT into the pool. */
  seller: TransactionSigner<TAccountSeller>;
  feeVault: Address<TAccountFeeVault>;
  /**
   * The Pool state account that the NFT is being sold into. Stores pool state and config,
   * but is also the owner of any NFTs in the pool, and also escrows any SOL.
   * Any pool can be specified provided it is a Trade type and the NFT passes at least one
   * whitelist condition.
   */
  pool: Address<TAccountPool>;
  /** The whitelist account that the pool uses to verify the NFTs being sold into it. */
  whitelist: Address<TAccountWhitelist>;
  /**
   * Optional account which must be passed in if the NFT must be verified against a
   * merkle proof condition in the whitelist.
   */
  mintProof?: Address<TAccountMintProof>;
  /**
   * The token account of the NFT for the seller's wallet.
   * Typically, this should be an ATA for the mint and seller wallet.
   */
  sellerTokenAccount: Address<TAccountSellerTokenAccount>;
  poolAta: Address<TAccountPoolAta>;
  /** The mint account of the NFT being sold. */
  mint: Address<TAccountMint>;
  /** The Token Metadata metadata account of the NFT. */
  metadata: Address<TAccountMetadata>;
  nftReceipt: Address<TAccountNftReceipt>;
  tokenProgram?: Address<TAccountTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  rent?: Address<TAccountRent>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  edition: Address<TAccountEdition>;
  /** The Token Metadata seller/source token record account of the NFT. */
  sellerTokenRecord: Address<TAccountSellerTokenRecord>;
  /** The Token Metadata pool temporary token record account of the NFT. */
  poolTokenRecord: Address<TAccountPoolTokenRecord>;
  /** The Token Metadata program account. */
  tokenMetadataProgram?: Address<TAccountTokenMetadataProgram>;
  /** The sysvar instructions account. */
  instructions: Address<TAccountInstructions>;
  /** The Metaplex Token Authority Rules program account. */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  /** The Metaplex Token Authority Rules account that stores royalty enforcement rules. */
  authRules: Address<TAccountAuthRules>;
  /** The shared escrow account for pools that pool liquidity in a shared account. */
  sharedEscrow: Address<TAccountSharedEscrow>;
  /**
   * The taker broker account that receives the taker fees.
   * TODO: optional account? what checks?
   */
  takerBroker: Address<TAccountTakerBroker>;
  /**
   * The optional cosigner account that must be passed in if the pool has a cosigner.
   * Checks are performed in the handler.
   */
  cosigner?: TransactionSigner<TAccountCosigner>;
  minPrice: SellNftTradePoolInstructionDataArgs['minPrice'];
  rulesAccPresent: SellNftTradePoolInstructionDataArgs['rulesAccPresent'];
  authorizationData: SellNftTradePoolInstructionDataArgs['authorizationData'];
  optionalRoyaltyPct: SellNftTradePoolInstructionDataArgs['optionalRoyaltyPct'];
  creators?: Array<Address>;
};

export function getSellNftTradePoolInstruction<
  TAccountRentPayer extends string,
  TAccountOwner extends string,
  TAccountSeller extends string,
  TAccountFeeVault extends string,
  TAccountPool extends string,
  TAccountWhitelist extends string,
  TAccountMintProof extends string,
  TAccountSellerTokenAccount extends string,
  TAccountPoolAta extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountNftReceipt extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountEdition extends string,
  TAccountSellerTokenRecord extends string,
  TAccountPoolTokenRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthRules extends string,
  TAccountSharedEscrow extends string,
  TAccountTakerBroker extends string,
  TAccountCosigner extends string,
>(
  input: SellNftTradePoolInput<
    TAccountRentPayer,
    TAccountOwner,
    TAccountSeller,
    TAccountFeeVault,
    TAccountPool,
    TAccountWhitelist,
    TAccountMintProof,
    TAccountSellerTokenAccount,
    TAccountPoolAta,
    TAccountMint,
    TAccountMetadata,
    TAccountNftReceipt,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountAssociatedTokenProgram,
    TAccountEdition,
    TAccountSellerTokenRecord,
    TAccountPoolTokenRecord,
    TAccountTokenMetadataProgram,
    TAccountInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthRules,
    TAccountSharedEscrow,
    TAccountTakerBroker,
    TAccountCosigner
  >
): SellNftTradePoolInstruction<
  typeof AMM_PROGRAM_ADDRESS,
  TAccountRentPayer,
  TAccountOwner,
  TAccountSeller,
  TAccountFeeVault,
  TAccountPool,
  TAccountWhitelist,
  TAccountMintProof,
  TAccountSellerTokenAccount,
  TAccountPoolAta,
  TAccountMint,
  TAccountMetadata,
  TAccountNftReceipt,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent,
  TAccountAssociatedTokenProgram,
  TAccountEdition,
  TAccountSellerTokenRecord,
  TAccountPoolTokenRecord,
  TAccountTokenMetadataProgram,
  TAccountInstructions,
  TAccountAuthorizationRulesProgram,
  TAccountAuthRules,
  TAccountSharedEscrow,
  TAccountTakerBroker,
  TAccountCosigner
> {
  // Program address.
  const programAddress = AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    rentPayer: { value: input.rentPayer ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    seller: { value: input.seller ?? null, isWritable: false },
    feeVault: { value: input.feeVault ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    whitelist: { value: input.whitelist ?? null, isWritable: false },
    mintProof: { value: input.mintProof ?? null, isWritable: false },
    sellerTokenAccount: {
      value: input.sellerTokenAccount ?? null,
      isWritable: true,
    },
    poolAta: { value: input.poolAta ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: true },
    nftReceipt: { value: input.nftReceipt ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    edition: { value: input.edition ?? null, isWritable: false },
    sellerTokenRecord: {
      value: input.sellerTokenRecord ?? null,
      isWritable: true,
    },
    poolTokenRecord: { value: input.poolTokenRecord ?? null, isWritable: true },
    tokenMetadataProgram: {
      value: input.tokenMetadataProgram ?? null,
      isWritable: false,
    },
    instructions: { value: input.instructions ?? null, isWritable: false },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
    authRules: { value: input.authRules ?? null, isWritable: false },
    sharedEscrow: { value: input.sharedEscrow ?? null, isWritable: true },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
    cosigner: { value: input.cosigner ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.rentPayer.value) {
    accounts.rentPayer.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }
  if (!accounts.tokenMetadataProgram.value) {
    accounts.tokenMetadataProgram.value =
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  }
  if (!accounts.authorizationRulesProgram.value) {
    accounts.authorizationRulesProgram.value =
      'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Address<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'>;
  }

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = (args.creators ?? []).map(
    (address) => ({ address, role: AccountRole.WRITABLE })
  );

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.rentPayer),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.seller),
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.whitelist),
      getAccountMeta(accounts.mintProof),
      getAccountMeta(accounts.sellerTokenAccount),
      getAccountMeta(accounts.poolAta),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.nftReceipt),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.rent),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.edition),
      getAccountMeta(accounts.sellerTokenRecord),
      getAccountMeta(accounts.poolTokenRecord),
      getAccountMeta(accounts.tokenMetadataProgram),
      getAccountMeta(accounts.instructions),
      getAccountMeta(accounts.authorizationRulesProgram),
      getAccountMeta(accounts.authRules),
      getAccountMeta(accounts.sharedEscrow),
      getAccountMeta(accounts.takerBroker),
      getAccountMeta(accounts.cosigner),
      ...remainingAccounts,
    ],
    programAddress,
    data: getSellNftTradePoolInstructionDataEncoder().encode(
      args as SellNftTradePoolInstructionDataArgs
    ),
  } as SellNftTradePoolInstruction<
    typeof AMM_PROGRAM_ADDRESS,
    TAccountRentPayer,
    TAccountOwner,
    TAccountSeller,
    TAccountFeeVault,
    TAccountPool,
    TAccountWhitelist,
    TAccountMintProof,
    TAccountSellerTokenAccount,
    TAccountPoolAta,
    TAccountMint,
    TAccountMetadata,
    TAccountNftReceipt,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountAssociatedTokenProgram,
    TAccountEdition,
    TAccountSellerTokenRecord,
    TAccountPoolTokenRecord,
    TAccountTokenMetadataProgram,
    TAccountInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthRules,
    TAccountSharedEscrow,
    TAccountTakerBroker,
    TAccountCosigner
  >;

  return instruction;
}

export type ParsedSellNftTradePoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** If no external rent payer, this should be seller. */
    rentPayer: TAccountMetas[0];
    /** The owner of the pool and the buyer/recipient of the NFT. */
    owner: TAccountMetas[1];
    /** The seller is the owner of the NFT who is selling the NFT into the pool. */
    seller: TAccountMetas[2];
    feeVault: TAccountMetas[3];
    /**
     * The Pool state account that the NFT is being sold into. Stores pool state and config,
     * but is also the owner of any NFTs in the pool, and also escrows any SOL.
     * Any pool can be specified provided it is a Trade type and the NFT passes at least one
     * whitelist condition.
     */

    pool: TAccountMetas[4];
    /** The whitelist account that the pool uses to verify the NFTs being sold into it. */
    whitelist: TAccountMetas[5];
    /**
     * Optional account which must be passed in if the NFT must be verified against a
     * merkle proof condition in the whitelist.
     */

    mintProof?: TAccountMetas[6] | undefined;
    /**
     * The token account of the NFT for the seller's wallet.
     * Typically, this should be an ATA for the mint and seller wallet.
     */

    sellerTokenAccount: TAccountMetas[7];
    poolAta: TAccountMetas[8];
    /** The mint account of the NFT being sold. */
    mint: TAccountMetas[9];
    /** The Token Metadata metadata account of the NFT. */
    metadata: TAccountMetas[10];
    nftReceipt: TAccountMetas[11];
    tokenProgram: TAccountMetas[12];
    systemProgram: TAccountMetas[13];
    rent: TAccountMetas[14];
    associatedTokenProgram: TAccountMetas[15];
    edition: TAccountMetas[16];
    /** The Token Metadata seller/source token record account of the NFT. */
    sellerTokenRecord: TAccountMetas[17];
    /** The Token Metadata pool temporary token record account of the NFT. */
    poolTokenRecord: TAccountMetas[18];
    /** The Token Metadata program account. */
    tokenMetadataProgram: TAccountMetas[19];
    /** The sysvar instructions account. */
    instructions: TAccountMetas[20];
    /** The Metaplex Token Authority Rules program account. */
    authorizationRulesProgram: TAccountMetas[21];
    /** The Metaplex Token Authority Rules account that stores royalty enforcement rules. */
    authRules: TAccountMetas[22];
    /** The shared escrow account for pools that pool liquidity in a shared account. */
    sharedEscrow: TAccountMetas[23];
    /**
     * The taker broker account that receives the taker fees.
     * TODO: optional account? what checks?
     */

    takerBroker: TAccountMetas[24];
    /**
     * The optional cosigner account that must be passed in if the pool has a cosigner.
     * Checks are performed in the handler.
     */

    cosigner?: TAccountMetas[25] | undefined;
  };
  data: SellNftTradePoolInstructionData;
};

export function parseSellNftTradePoolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSellNftTradePoolInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 26) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === AMM_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      rentPayer: getNextAccount(),
      owner: getNextAccount(),
      seller: getNextAccount(),
      feeVault: getNextAccount(),
      pool: getNextAccount(),
      whitelist: getNextAccount(),
      mintProof: getNextOptionalAccount(),
      sellerTokenAccount: getNextAccount(),
      poolAta: getNextAccount(),
      mint: getNextAccount(),
      metadata: getNextAccount(),
      nftReceipt: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      edition: getNextAccount(),
      sellerTokenRecord: getNextAccount(),
      poolTokenRecord: getNextAccount(),
      tokenMetadataProgram: getNextAccount(),
      instructions: getNextAccount(),
      authorizationRulesProgram: getNextAccount(),
      authRules: getNextAccount(),
      sharedEscrow: getNextAccount(),
      takerBroker: getNextAccount(),
      cosigner: getNextOptionalAccount(),
    },
    data: getSellNftTradePoolInstructionDataDecoder().decode(instruction.data),
  };
}
