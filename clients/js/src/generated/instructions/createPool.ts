/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  Option,
  OptionOrNullable,
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getI64Decoder,
  getI64Encoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
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
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { AMM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  PoolConfig,
  PoolConfigArgs,
  getPoolConfigDecoder,
  getPoolConfigEncoder,
} from '../types';

export type CreatePoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountRentPayer extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountWhitelist extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
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
        ? ReadonlySignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountWhitelist extends string
        ? ReadonlyAccount<TAccountWhitelist>
        : TAccountWhitelist,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type CreatePoolInstructionData = {
  discriminator: Array<number>;
  poolId: Uint8Array;
  currencyMint: Address;
  config: PoolConfig;
  cosigner: Option<Address>;
  orderType: number;
  maxTakerSellCount: Option<number>;
  expirationTimestamp: Option<bigint>;
};

export type CreatePoolInstructionDataArgs = {
  poolId: Uint8Array;
  currencyMint: Address;
  config: PoolConfigArgs;
  cosigner: OptionOrNullable<Address>;
  orderType: number;
  maxTakerSellCount: OptionOrNullable<number>;
  expirationTimestamp: OptionOrNullable<number | bigint>;
};

export function getCreatePoolInstructionDataEncoder(): Encoder<CreatePoolInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['poolId', getBytesEncoder({ size: 32 })],
      ['currencyMint', getAddressEncoder()],
      ['config', getPoolConfigEncoder()],
      ['cosigner', getOptionEncoder(getAddressEncoder())],
      ['orderType', getU8Encoder()],
      ['maxTakerSellCount', getOptionEncoder(getU32Encoder())],
      ['expirationTimestamp', getOptionEncoder(getI64Encoder())],
    ]),
    (value) => ({
      ...value,
      discriminator: [233, 146, 209, 142, 207, 104, 64, 188],
    })
  );
}

export function getCreatePoolInstructionDataDecoder(): Decoder<CreatePoolInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['poolId', getBytesDecoder({ size: 32 })],
    ['currencyMint', getAddressDecoder()],
    ['config', getPoolConfigDecoder()],
    ['cosigner', getOptionDecoder(getAddressDecoder())],
    ['orderType', getU8Decoder()],
    ['maxTakerSellCount', getOptionDecoder(getU32Decoder())],
    ['expirationTimestamp', getOptionDecoder(getI64Decoder())],
  ]);
}

export function getCreatePoolInstructionDataCodec(): Codec<
  CreatePoolInstructionDataArgs,
  CreatePoolInstructionData
> {
  return combineCodec(
    getCreatePoolInstructionDataEncoder(),
    getCreatePoolInstructionDataDecoder()
  );
}

export type CreatePoolInput<
  TAccountRentPayer extends string = string,
  TAccountOwner extends string = string,
  TAccountPool extends string = string,
  TAccountWhitelist extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  /** If no external rent payer, set this to the owner. */
  rentPayer?: TransactionSigner<TAccountRentPayer>;
  owner: TransactionSigner<TAccountOwner>;
  pool: Address<TAccountPool>;
  /** Needed for pool seeds derivation / will be stored inside pool */
  whitelist: Address<TAccountWhitelist>;
  systemProgram?: Address<TAccountSystemProgram>;
  poolId: CreatePoolInstructionDataArgs['poolId'];
  currencyMint: CreatePoolInstructionDataArgs['currencyMint'];
  config: CreatePoolInstructionDataArgs['config'];
  cosigner: CreatePoolInstructionDataArgs['cosigner'];
  orderType: CreatePoolInstructionDataArgs['orderType'];
  maxTakerSellCount: CreatePoolInstructionDataArgs['maxTakerSellCount'];
  expirationTimestamp: CreatePoolInstructionDataArgs['expirationTimestamp'];
};

export function getCreatePoolInstruction<
  TAccountRentPayer extends string,
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountWhitelist extends string,
  TAccountSystemProgram extends string,
>(
  input: CreatePoolInput<
    TAccountRentPayer,
    TAccountOwner,
    TAccountPool,
    TAccountWhitelist,
    TAccountSystemProgram
  >
): CreatePoolInstruction<
  typeof AMM_PROGRAM_ADDRESS,
  TAccountRentPayer,
  TAccountOwner,
  TAccountPool,
  TAccountWhitelist,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    rentPayer: { value: input.rentPayer ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    whitelist: { value: input.whitelist ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
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
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.rentPayer),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.whitelist),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getCreatePoolInstructionDataEncoder().encode(
      args as CreatePoolInstructionDataArgs
    ),
  } as CreatePoolInstruction<
    typeof AMM_PROGRAM_ADDRESS,
    TAccountRentPayer,
    TAccountOwner,
    TAccountPool,
    TAccountWhitelist,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedCreatePoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** If no external rent payer, set this to the owner. */
    rentPayer: TAccountMetas[0];
    owner: TAccountMetas[1];
    pool: TAccountMetas[2];
    /** Needed for pool seeds derivation / will be stored inside pool */
    whitelist: TAccountMetas[3];
    systemProgram: TAccountMetas[4];
  };
  data: CreatePoolInstructionData;
};

export function parseCreatePoolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreatePoolInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 5) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      rentPayer: getNextAccount(),
      owner: getNextAccount(),
      pool: getNextAccount(),
      whitelist: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreatePoolInstructionDataDecoder().decode(instruction.data),
  };
}
