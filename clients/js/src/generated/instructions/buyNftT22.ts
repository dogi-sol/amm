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
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  resolveBuyerAta,
  resolveNftReceipt,
  resolvePoolAta,
} from '@tensor-foundation/resolvers';
import { resolveFeeVaultPdaFromPool } from '../../hooked';
import { TENSOR_AMM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, expectSome, getAccountMetaFactory } from '../shared';
import {
  PoolConfig,
  PoolConfigArgs,
  getPoolConfigDecoder,
  getPoolConfigEncoder,
} from '../types';

export type BuyNftT22Instruction<
  TProgram extends string = typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountBuyer extends string | IAccountMeta<string> = string,
  TAccountRentPayer extends string | IAccountMeta<string> = string,
  TAccountFeeVault extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountWhitelist extends string | IAccountMeta<string> = string,
  TAccountBuyerAta extends string | IAccountMeta<string> = string,
  TAccountPoolAta extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountNftReceipt extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAssociatedTokenProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSharedEscrow extends string | IAccountMeta<string> = string,
  TAccountMakerBroker extends string | IAccountMeta<string> = string,
  TAccountTakerBroker extends string | IAccountMeta<string> = string,
  TAccountAmmProgram extends
    | string
    | IAccountMeta<string> = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOwner extends string
        ? WritableAccount<TAccountOwner>
        : TAccountOwner,
      TAccountBuyer extends string
        ? WritableSignerAccount<TAccountBuyer> &
            IAccountSignerMeta<TAccountBuyer>
        : TAccountBuyer,
      TAccountRentPayer extends string
        ? WritableAccount<TAccountRentPayer>
        : TAccountRentPayer,
      TAccountFeeVault extends string
        ? WritableAccount<TAccountFeeVault>
        : TAccountFeeVault,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountWhitelist extends string
        ? ReadonlyAccount<TAccountWhitelist>
        : TAccountWhitelist,
      TAccountBuyerAta extends string
        ? WritableAccount<TAccountBuyerAta>
        : TAccountBuyerAta,
      TAccountPoolAta extends string
        ? ReadonlyAccount<TAccountPoolAta>
        : TAccountPoolAta,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountNftReceipt extends string
        ? WritableAccount<TAccountNftReceipt>
        : TAccountNftReceipt,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSharedEscrow extends string
        ? WritableAccount<TAccountSharedEscrow>
        : TAccountSharedEscrow,
      TAccountMakerBroker extends string
        ? WritableAccount<TAccountMakerBroker>
        : TAccountMakerBroker,
      TAccountTakerBroker extends string
        ? WritableAccount<TAccountTakerBroker>
        : TAccountTakerBroker,
      TAccountAmmProgram extends string
        ? ReadonlyAccount<TAccountAmmProgram>
        : TAccountAmmProgram,
      ...TRemainingAccounts,
    ]
  >;

export type BuyNftT22InstructionData = {
  discriminator: Array<number>;
  config: PoolConfig;
  maxPrice: bigint;
};

export type BuyNftT22InstructionDataArgs = {
  config: PoolConfigArgs;
  maxPrice: number | bigint;
};

export function getBuyNftT22InstructionDataEncoder(): Encoder<BuyNftT22InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['config', getPoolConfigEncoder()],
      ['maxPrice', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [155, 219, 126, 245, 170, 199, 51, 79],
    })
  );
}

export function getBuyNftT22InstructionDataDecoder(): Decoder<BuyNftT22InstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['config', getPoolConfigDecoder()],
    ['maxPrice', getU64Decoder()],
  ]);
}

export function getBuyNftT22InstructionDataCodec(): Codec<
  BuyNftT22InstructionDataArgs,
  BuyNftT22InstructionData
> {
  return combineCodec(
    getBuyNftT22InstructionDataEncoder(),
    getBuyNftT22InstructionDataDecoder()
  );
}

export type BuyNftT22AsyncInput<
  TAccountOwner extends string = string,
  TAccountBuyer extends string = string,
  TAccountRentPayer extends string = string,
  TAccountFeeVault extends string = string,
  TAccountPool extends string = string,
  TAccountWhitelist extends string = string,
  TAccountBuyerAta extends string = string,
  TAccountPoolAta extends string = string,
  TAccountMint extends string = string,
  TAccountNftReceipt extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountSharedEscrow extends string = string,
  TAccountMakerBroker extends string = string,
  TAccountTakerBroker extends string = string,
  TAccountAmmProgram extends string = string,
> = {
  owner: Address<TAccountOwner>;
  buyer: TransactionSigner<TAccountBuyer>;
  rentPayer?: Address<TAccountRentPayer>;
  feeVault?: Address<TAccountFeeVault>;
  pool: Address<TAccountPool>;
  /** Needed for pool seeds derivation, has_one = whitelist on pool */
  whitelist: Address<TAccountWhitelist>;
  /** The ATA of the buyer, where the NFT will be transferred. */
  buyerAta?: Address<TAccountBuyerAta>;
  /** The ATA of the pool, where the NFT will be escrowed. */
  poolAta?: Address<TAccountPoolAta>;
  mint: Address<TAccountMint>;
  nftReceipt?: Address<TAccountNftReceipt>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  sharedEscrow?: Address<TAccountSharedEscrow>;
  /** The account that receives the maker broker fee. */
  makerBroker?: Address<TAccountMakerBroker>;
  /** The account that receives the taker broker fee. */
  takerBroker?: Address<TAccountTakerBroker>;
  ammProgram?: Address<TAccountAmmProgram>;
  config: BuyNftT22InstructionDataArgs['config'];
  maxPrice: BuyNftT22InstructionDataArgs['maxPrice'];
};

export async function getBuyNftT22InstructionAsync<
  TAccountOwner extends string,
  TAccountBuyer extends string,
  TAccountRentPayer extends string,
  TAccountFeeVault extends string,
  TAccountPool extends string,
  TAccountWhitelist extends string,
  TAccountBuyerAta extends string,
  TAccountPoolAta extends string,
  TAccountMint extends string,
  TAccountNftReceipt extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSharedEscrow extends string,
  TAccountMakerBroker extends string,
  TAccountTakerBroker extends string,
  TAccountAmmProgram extends string,
>(
  input: BuyNftT22AsyncInput<
    TAccountOwner,
    TAccountBuyer,
    TAccountRentPayer,
    TAccountFeeVault,
    TAccountPool,
    TAccountWhitelist,
    TAccountBuyerAta,
    TAccountPoolAta,
    TAccountMint,
    TAccountNftReceipt,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountSharedEscrow,
    TAccountMakerBroker,
    TAccountTakerBroker,
    TAccountAmmProgram
  >
): Promise<
  BuyNftT22Instruction<
    typeof TENSOR_AMM_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountBuyer,
    TAccountRentPayer,
    TAccountFeeVault,
    TAccountPool,
    TAccountWhitelist,
    TAccountBuyerAta,
    TAccountPoolAta,
    TAccountMint,
    TAccountNftReceipt,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountSharedEscrow,
    TAccountMakerBroker,
    TAccountTakerBroker,
    TAccountAmmProgram
  >
> {
  // Program address.
  const programAddress = TENSOR_AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    owner: { value: input.owner ?? null, isWritable: true },
    buyer: { value: input.buyer ?? null, isWritable: true },
    rentPayer: { value: input.rentPayer ?? null, isWritable: true },
    feeVault: { value: input.feeVault ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    whitelist: { value: input.whitelist ?? null, isWritable: false },
    buyerAta: { value: input.buyerAta ?? null, isWritable: true },
    poolAta: { value: input.poolAta ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    nftReceipt: { value: input.nftReceipt ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sharedEscrow: { value: input.sharedEscrow ?? null, isWritable: true },
    makerBroker: { value: input.makerBroker ?? null, isWritable: true },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
    ammProgram: { value: input.ammProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolver scope.
  const resolverScope = { programAddress, accounts, args };

  // Resolve default values.
  if (!accounts.rentPayer.value) {
    accounts.rentPayer.value = expectSome(accounts.owner.value);
  }
  if (!accounts.feeVault.value) {
    accounts.feeVault = {
      ...accounts.feeVault,
      ...(await resolveFeeVaultPdaFromPool(resolverScope)),
    };
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.buyerAta.value) {
    accounts.buyerAta = {
      ...accounts.buyerAta,
      ...(await resolveBuyerAta(resolverScope)),
    };
  }
  if (!accounts.poolAta.value) {
    accounts.poolAta = {
      ...accounts.poolAta,
      ...(await resolvePoolAta(resolverScope)),
    };
  }
  if (!accounts.nftReceipt.value) {
    accounts.nftReceipt = {
      ...accounts.nftReceipt,
      ...(await resolveNftReceipt(resolverScope)),
    };
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.ammProgram.value) {
    accounts.ammProgram.value =
      'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA' as Address<'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.buyer),
      getAccountMeta(accounts.rentPayer),
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.whitelist),
      getAccountMeta(accounts.buyerAta),
      getAccountMeta(accounts.poolAta),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.nftReceipt),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.sharedEscrow),
      getAccountMeta(accounts.makerBroker),
      getAccountMeta(accounts.takerBroker),
      getAccountMeta(accounts.ammProgram),
    ],
    programAddress,
    data: getBuyNftT22InstructionDataEncoder().encode(
      args as BuyNftT22InstructionDataArgs
    ),
  } as BuyNftT22Instruction<
    typeof TENSOR_AMM_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountBuyer,
    TAccountRentPayer,
    TAccountFeeVault,
    TAccountPool,
    TAccountWhitelist,
    TAccountBuyerAta,
    TAccountPoolAta,
    TAccountMint,
    TAccountNftReceipt,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountSharedEscrow,
    TAccountMakerBroker,
    TAccountTakerBroker,
    TAccountAmmProgram
  >;

  return instruction;
}

export type BuyNftT22Input<
  TAccountOwner extends string = string,
  TAccountBuyer extends string = string,
  TAccountRentPayer extends string = string,
  TAccountFeeVault extends string = string,
  TAccountPool extends string = string,
  TAccountWhitelist extends string = string,
  TAccountBuyerAta extends string = string,
  TAccountPoolAta extends string = string,
  TAccountMint extends string = string,
  TAccountNftReceipt extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountSharedEscrow extends string = string,
  TAccountMakerBroker extends string = string,
  TAccountTakerBroker extends string = string,
  TAccountAmmProgram extends string = string,
> = {
  owner: Address<TAccountOwner>;
  buyer: TransactionSigner<TAccountBuyer>;
  rentPayer?: Address<TAccountRentPayer>;
  feeVault: Address<TAccountFeeVault>;
  pool: Address<TAccountPool>;
  /** Needed for pool seeds derivation, has_one = whitelist on pool */
  whitelist: Address<TAccountWhitelist>;
  /** The ATA of the buyer, where the NFT will be transferred. */
  buyerAta: Address<TAccountBuyerAta>;
  /** The ATA of the pool, where the NFT will be escrowed. */
  poolAta: Address<TAccountPoolAta>;
  mint: Address<TAccountMint>;
  nftReceipt: Address<TAccountNftReceipt>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  sharedEscrow?: Address<TAccountSharedEscrow>;
  /** The account that receives the maker broker fee. */
  makerBroker?: Address<TAccountMakerBroker>;
  /** The account that receives the taker broker fee. */
  takerBroker?: Address<TAccountTakerBroker>;
  ammProgram?: Address<TAccountAmmProgram>;
  config: BuyNftT22InstructionDataArgs['config'];
  maxPrice: BuyNftT22InstructionDataArgs['maxPrice'];
};

export function getBuyNftT22Instruction<
  TAccountOwner extends string,
  TAccountBuyer extends string,
  TAccountRentPayer extends string,
  TAccountFeeVault extends string,
  TAccountPool extends string,
  TAccountWhitelist extends string,
  TAccountBuyerAta extends string,
  TAccountPoolAta extends string,
  TAccountMint extends string,
  TAccountNftReceipt extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSharedEscrow extends string,
  TAccountMakerBroker extends string,
  TAccountTakerBroker extends string,
  TAccountAmmProgram extends string,
>(
  input: BuyNftT22Input<
    TAccountOwner,
    TAccountBuyer,
    TAccountRentPayer,
    TAccountFeeVault,
    TAccountPool,
    TAccountWhitelist,
    TAccountBuyerAta,
    TAccountPoolAta,
    TAccountMint,
    TAccountNftReceipt,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountSharedEscrow,
    TAccountMakerBroker,
    TAccountTakerBroker,
    TAccountAmmProgram
  >
): BuyNftT22Instruction<
  typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountOwner,
  TAccountBuyer,
  TAccountRentPayer,
  TAccountFeeVault,
  TAccountPool,
  TAccountWhitelist,
  TAccountBuyerAta,
  TAccountPoolAta,
  TAccountMint,
  TAccountNftReceipt,
  TAccountTokenProgram,
  TAccountAssociatedTokenProgram,
  TAccountSystemProgram,
  TAccountSharedEscrow,
  TAccountMakerBroker,
  TAccountTakerBroker,
  TAccountAmmProgram
> {
  // Program address.
  const programAddress = TENSOR_AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    owner: { value: input.owner ?? null, isWritable: true },
    buyer: { value: input.buyer ?? null, isWritable: true },
    rentPayer: { value: input.rentPayer ?? null, isWritable: true },
    feeVault: { value: input.feeVault ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    whitelist: { value: input.whitelist ?? null, isWritable: false },
    buyerAta: { value: input.buyerAta ?? null, isWritable: true },
    poolAta: { value: input.poolAta ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    nftReceipt: { value: input.nftReceipt ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sharedEscrow: { value: input.sharedEscrow ?? null, isWritable: true },
    makerBroker: { value: input.makerBroker ?? null, isWritable: true },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
    ammProgram: { value: input.ammProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.rentPayer.value) {
    accounts.rentPayer.value = expectSome(accounts.owner.value);
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.ammProgram.value) {
    accounts.ammProgram.value =
      'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA' as Address<'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.buyer),
      getAccountMeta(accounts.rentPayer),
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.whitelist),
      getAccountMeta(accounts.buyerAta),
      getAccountMeta(accounts.poolAta),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.nftReceipt),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.sharedEscrow),
      getAccountMeta(accounts.makerBroker),
      getAccountMeta(accounts.takerBroker),
      getAccountMeta(accounts.ammProgram),
    ],
    programAddress,
    data: getBuyNftT22InstructionDataEncoder().encode(
      args as BuyNftT22InstructionDataArgs
    ),
  } as BuyNftT22Instruction<
    typeof TENSOR_AMM_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountBuyer,
    TAccountRentPayer,
    TAccountFeeVault,
    TAccountPool,
    TAccountWhitelist,
    TAccountBuyerAta,
    TAccountPoolAta,
    TAccountMint,
    TAccountNftReceipt,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountSharedEscrow,
    TAccountMakerBroker,
    TAccountTakerBroker,
    TAccountAmmProgram
  >;

  return instruction;
}

export type ParsedBuyNftT22Instruction<
  TProgram extends string = typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    owner: TAccountMetas[0];
    buyer: TAccountMetas[1];
    rentPayer: TAccountMetas[2];
    feeVault: TAccountMetas[3];
    pool: TAccountMetas[4];
    /** Needed for pool seeds derivation, has_one = whitelist on pool */
    whitelist: TAccountMetas[5];
    /** The ATA of the buyer, where the NFT will be transferred. */
    buyerAta: TAccountMetas[6];
    /** The ATA of the pool, where the NFT will be escrowed. */
    poolAta: TAccountMetas[7];
    mint: TAccountMetas[8];
    nftReceipt: TAccountMetas[9];
    tokenProgram: TAccountMetas[10];
    associatedTokenProgram: TAccountMetas[11];
    systemProgram: TAccountMetas[12];
    sharedEscrow?: TAccountMetas[13] | undefined;
    /** The account that receives the maker broker fee. */
    makerBroker?: TAccountMetas[14] | undefined;
    /** The account that receives the taker broker fee. */
    takerBroker?: TAccountMetas[15] | undefined;
    ammProgram: TAccountMetas[16];
  };
  data: BuyNftT22InstructionData;
};

export function parseBuyNftT22Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedBuyNftT22Instruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 17) {
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
    return accountMeta.address === TENSOR_AMM_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      owner: getNextAccount(),
      buyer: getNextAccount(),
      rentPayer: getNextAccount(),
      feeVault: getNextAccount(),
      pool: getNextAccount(),
      whitelist: getNextAccount(),
      buyerAta: getNextAccount(),
      poolAta: getNextAccount(),
      mint: getNextAccount(),
      nftReceipt: getNextAccount(),
      tokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      sharedEscrow: getNextOptionalAccount(),
      makerBroker: getNextOptionalAccount(),
      takerBroker: getNextOptionalAccount(),
      ammProgram: getNextAccount(),
    },
    data: getBuyNftT22InstructionDataDecoder().decode(instruction.data),
  };
}
