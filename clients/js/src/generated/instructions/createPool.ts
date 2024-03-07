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
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU32Decoder,
  getU32Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  PoolConfig,
  PoolConfigArgs,
  getPoolConfigDecoder,
  getPoolConfigEncoder,
} from '../types';

export type CreatePoolInstruction<
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA',
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountSolEscrow extends string | IAccountMeta<string> = string,
  TAccountWhitelist extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountSolEscrow extends string
        ? WritableAccount<TAccountSolEscrow>
        : TAccountSolEscrow,
      TAccountWhitelist extends string
        ? ReadonlyAccount<TAccountWhitelist>
        : TAccountWhitelist,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreatePoolInstructionWithSigners<
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA',
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountSolEscrow extends string | IAccountMeta<string> = string,
  TAccountWhitelist extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountSolEscrow extends string
        ? WritableAccount<TAccountSolEscrow>
        : TAccountSolEscrow,
      TAccountWhitelist extends string
        ? ReadonlyAccount<TAccountWhitelist>
        : TAccountWhitelist,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreatePoolInstructionData = {
  discriminator: Array<number>;
  identifier: Uint8Array;
  config: PoolConfig;
  cosigner: Option<Address>;
  orderType: number;
  maxTakerSellCount: Option<number>;
};

export type CreatePoolInstructionDataArgs = {
  identifier: Uint8Array;
  config: PoolConfigArgs;
  cosigner: OptionOrNullable<Address>;
  orderType: number;
  maxTakerSellCount: OptionOrNullable<number>;
};

export function getCreatePoolInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: Array<number>;
      identifier: Uint8Array;
      config: PoolConfigArgs;
      cosigner: OptionOrNullable<Address>;
      orderType: number;
      maxTakerSellCount: OptionOrNullable<number>;
    }>([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['identifier', getBytesEncoder({ size: 32 })],
      ['config', getPoolConfigEncoder()],
      ['cosigner', getOptionEncoder(getAddressEncoder())],
      ['orderType', getU8Encoder()],
      ['maxTakerSellCount', getOptionEncoder(getU32Encoder())],
    ]),
    (value) => ({
      ...value,
      discriminator: [233, 146, 209, 142, 207, 104, 64, 188],
    })
  ) satisfies Encoder<CreatePoolInstructionDataArgs>;
}

export function getCreatePoolInstructionDataDecoder() {
  return getStructDecoder<CreatePoolInstructionData>([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['identifier', getBytesDecoder({ size: 32 })],
    ['config', getPoolConfigDecoder()],
    ['cosigner', getOptionDecoder(getAddressDecoder())],
    ['orderType', getU8Decoder()],
    ['maxTakerSellCount', getOptionDecoder(getU32Decoder())],
  ]) satisfies Decoder<CreatePoolInstructionData>;
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
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSolEscrow extends string,
  TAccountWhitelist extends string,
  TAccountSystemProgram extends string
> = {
  owner: Address<TAccountOwner>;
  pool: Address<TAccountPool>;
  solEscrow: Address<TAccountSolEscrow>;
  /** Needed for pool seeds derivation / will be stored inside pool */
  whitelist: Address<TAccountWhitelist>;
  systemProgram?: Address<TAccountSystemProgram>;
  identifier: CreatePoolInstructionDataArgs['identifier'];
  config: CreatePoolInstructionDataArgs['config'];
  cosigner: CreatePoolInstructionDataArgs['cosigner'];
  orderType: CreatePoolInstructionDataArgs['orderType'];
  maxTakerSellCount: CreatePoolInstructionDataArgs['maxTakerSellCount'];
};

export type CreatePoolInputWithSigners<
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSolEscrow extends string,
  TAccountWhitelist extends string,
  TAccountSystemProgram extends string
> = {
  owner: TransactionSigner<TAccountOwner>;
  pool: Address<TAccountPool>;
  solEscrow: Address<TAccountSolEscrow>;
  /** Needed for pool seeds derivation / will be stored inside pool */
  whitelist: Address<TAccountWhitelist>;
  systemProgram?: Address<TAccountSystemProgram>;
  identifier: CreatePoolInstructionDataArgs['identifier'];
  config: CreatePoolInstructionDataArgs['config'];
  cosigner: CreatePoolInstructionDataArgs['cosigner'];
  orderType: CreatePoolInstructionDataArgs['orderType'];
  maxTakerSellCount: CreatePoolInstructionDataArgs['maxTakerSellCount'];
};

export function getCreatePoolInstruction<
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSolEscrow extends string,
  TAccountWhitelist extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'
>(
  input: CreatePoolInputWithSigners<
    TAccountOwner,
    TAccountPool,
    TAccountSolEscrow,
    TAccountWhitelist,
    TAccountSystemProgram
  >
): CreatePoolInstructionWithSigners<
  TProgram,
  TAccountOwner,
  TAccountPool,
  TAccountSolEscrow,
  TAccountWhitelist,
  TAccountSystemProgram
>;
export function getCreatePoolInstruction<
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSolEscrow extends string,
  TAccountWhitelist extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'
>(
  input: CreatePoolInput<
    TAccountOwner,
    TAccountPool,
    TAccountSolEscrow,
    TAccountWhitelist,
    TAccountSystemProgram
  >
): CreatePoolInstruction<
  TProgram,
  TAccountOwner,
  TAccountPool,
  TAccountSolEscrow,
  TAccountWhitelist,
  TAccountSystemProgram
>;
export function getCreatePoolInstruction<
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSolEscrow extends string,
  TAccountWhitelist extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'
>(
  input: CreatePoolInput<
    TAccountOwner,
    TAccountPool,
    TAccountSolEscrow,
    TAccountWhitelist,
    TAccountSystemProgram
  >
): IInstruction {
  // Program address.
  const programAddress =
    'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA' as Address<'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreatePoolInstructionRaw<
      TProgram,
      TAccountOwner,
      TAccountPool,
      TAccountSolEscrow,
      TAccountWhitelist,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    owner: { value: input.owner ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    solEscrow: { value: input.solEscrow ?? null, isWritable: true },
    whitelist: { value: input.whitelist ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreatePoolInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreatePoolInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getCreatePoolInstructionRaw<
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA',
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountSolEscrow extends string | IAccountMeta<string> = string,
  TAccountWhitelist extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    pool: TAccountPool extends string ? Address<TAccountPool> : TAccountPool;
    solEscrow: TAccountSolEscrow extends string
      ? Address<TAccountSolEscrow>
      : TAccountSolEscrow;
    whitelist: TAccountWhitelist extends string
      ? Address<TAccountWhitelist>
      : TAccountWhitelist;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreatePoolInstructionDataArgs,
  programAddress: Address<TProgram> = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.owner, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.pool, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.solEscrow, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.whitelist, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ??
          ('11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreatePoolInstructionDataEncoder().encode(args),
    programAddress,
  } as CreatePoolInstruction<
    TProgram,
    TAccountOwner,
    TAccountPool,
    TAccountSolEscrow,
    TAccountWhitelist,
    TAccountSystemProgram,
    TRemainingAccounts
  >;
}

export type ParsedCreatePoolInstruction<
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    owner: TAccountMetas[0];
    pool: TAccountMetas[1];
    solEscrow: TAccountMetas[2];
    /** Needed for pool seeds derivation / will be stored inside pool */
    whitelist: TAccountMetas[3];
    systemProgram: TAccountMetas[4];
  };
  data: CreatePoolInstructionData;
};

export function parseCreatePoolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
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
      owner: getNextAccount(),
      pool: getNextAccount(),
      solEscrow: getNextAccount(),
      whitelist: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreatePoolInstructionDataDecoder().decode(instruction.data),
  };
}
