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
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
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
import { AMM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  PoolConfig,
  PoolConfigArgs,
  getPoolConfigDecoder,
  getPoolConfigEncoder,
} from '../types';

export type EditPoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type EditPoolInstructionData = {
  discriminator: Array<number>;
  newConfig: Option<PoolConfig>;
  cosigner: Option<Address>;
  expireInSec: Option<bigint>;
  maxTakerSellCount: Option<number>;
};

export type EditPoolInstructionDataArgs = {
  newConfig: OptionOrNullable<PoolConfigArgs>;
  cosigner: OptionOrNullable<Address>;
  expireInSec: OptionOrNullable<number | bigint>;
  maxTakerSellCount: OptionOrNullable<number>;
};

export function getEditPoolInstructionDataEncoder(): Encoder<EditPoolInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['newConfig', getOptionEncoder(getPoolConfigEncoder())],
      ['cosigner', getOptionEncoder(getAddressEncoder())],
      ['expireInSec', getOptionEncoder(getU64Encoder())],
      ['maxTakerSellCount', getOptionEncoder(getU32Encoder())],
    ]),
    (value) => ({ ...value, discriminator: [50, 174, 34, 36, 3, 166, 29, 204] })
  );
}

export function getEditPoolInstructionDataDecoder(): Decoder<EditPoolInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['newConfig', getOptionDecoder(getPoolConfigDecoder())],
    ['cosigner', getOptionDecoder(getAddressDecoder())],
    ['expireInSec', getOptionDecoder(getU64Decoder())],
    ['maxTakerSellCount', getOptionDecoder(getU32Decoder())],
  ]);
}

export function getEditPoolInstructionDataCodec(): Codec<
  EditPoolInstructionDataArgs,
  EditPoolInstructionData
> {
  return combineCodec(
    getEditPoolInstructionDataEncoder(),
    getEditPoolInstructionDataDecoder()
  );
}

export type EditPoolInput<
  TAccountPool extends string = string,
  TAccountOwner extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  pool: Address<TAccountPool>;
  owner: TransactionSigner<TAccountOwner>;
  systemProgram?: Address<TAccountSystemProgram>;
  newConfig: EditPoolInstructionDataArgs['newConfig'];
  cosigner: EditPoolInstructionDataArgs['cosigner'];
  expireInSec: EditPoolInstructionDataArgs['expireInSec'];
  maxTakerSellCount: EditPoolInstructionDataArgs['maxTakerSellCount'];
};

export function getEditPoolInstruction<
  TAccountPool extends string,
  TAccountOwner extends string,
  TAccountSystemProgram extends string,
>(
  input: EditPoolInput<TAccountPool, TAccountOwner, TAccountSystemProgram>
): EditPoolInstruction<
  typeof AMM_PROGRAM_ADDRESS,
  TAccountPool,
  TAccountOwner,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    pool: { value: input.pool ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getEditPoolInstructionDataEncoder().encode(
      args as EditPoolInstructionDataArgs
    ),
  } as EditPoolInstruction<
    typeof AMM_PROGRAM_ADDRESS,
    TAccountPool,
    TAccountOwner,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedEditPoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    pool: TAccountMetas[0];
    owner: TAccountMetas[1];
    systemProgram: TAccountMetas[2];
  };
  data: EditPoolInstructionData;
};

export function parseEditPoolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedEditPoolInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
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
      pool: getNextAccount(),
      owner: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getEditPoolInstructionDataDecoder().decode(instruction.data),
  };
}
