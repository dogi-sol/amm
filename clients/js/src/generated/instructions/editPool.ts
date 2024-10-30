/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getAddressDecoder,
  getAddressEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
  none,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type Option,
  type OptionOrNullable,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { TENSOR_AMM_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  getEditPoolConfigDecoder,
  getEditPoolConfigEncoder,
  type EditPoolConfig,
  type EditPoolConfigArgs,
} from '../types';

export type EditPoolInstruction<
  TProgram extends string = typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOwner extends string
        ? ReadonlySignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type EditPoolInstructionData = {
  discriminator: ReadonlyUint8Array;
  newConfig: Option<EditPoolConfig>;
  cosigner: Option<Address>;
  makerBroker: Option<Address>;
  expireInSec: Option<bigint>;
  maxTakerSellCount: Option<number>;
  resetPriceOffset: boolean;
};

export type EditPoolInstructionDataArgs = {
  newConfig: OptionOrNullable<EditPoolConfigArgs>;
  cosigner?: OptionOrNullable<Address>;
  makerBroker?: OptionOrNullable<Address>;
  expireInSec?: OptionOrNullable<number | bigint>;
  maxTakerSellCount?: OptionOrNullable<number>;
  resetPriceOffset: boolean;
};

export function getEditPoolInstructionDataEncoder(): Encoder<EditPoolInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['newConfig', getOptionEncoder(getEditPoolConfigEncoder())],
      ['cosigner', getOptionEncoder(getAddressEncoder())],
      ['makerBroker', getOptionEncoder(getAddressEncoder())],
      ['expireInSec', getOptionEncoder(getU64Encoder())],
      ['maxTakerSellCount', getOptionEncoder(getU32Encoder())],
      ['resetPriceOffset', getBooleanEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([50, 174, 34, 36, 3, 166, 29, 204]),
      cosigner: value.cosigner ?? none(),
      makerBroker: value.makerBroker ?? none(),
      expireInSec: value.expireInSec ?? none(),
      maxTakerSellCount: value.maxTakerSellCount ?? none(),
    })
  );
}

export function getEditPoolInstructionDataDecoder(): Decoder<EditPoolInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['newConfig', getOptionDecoder(getEditPoolConfigDecoder())],
    ['cosigner', getOptionDecoder(getAddressDecoder())],
    ['makerBroker', getOptionDecoder(getAddressDecoder())],
    ['expireInSec', getOptionDecoder(getU64Decoder())],
    ['maxTakerSellCount', getOptionDecoder(getU32Decoder())],
    ['resetPriceOffset', getBooleanDecoder()],
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
  TAccountOwner extends string = string,
  TAccountPool extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  /** The owner of the pool--must sign to edit the pool. */
  owner: TransactionSigner<TAccountOwner>;
  /** The pool to edit. */
  pool: Address<TAccountPool>;
  /** The Solana system program. */
  systemProgram?: Address<TAccountSystemProgram>;
  newConfig: EditPoolInstructionDataArgs['newConfig'];
  cosigner?: EditPoolInstructionDataArgs['cosigner'];
  makerBroker?: EditPoolInstructionDataArgs['makerBroker'];
  expireInSec?: EditPoolInstructionDataArgs['expireInSec'];
  maxTakerSellCount?: EditPoolInstructionDataArgs['maxTakerSellCount'];
  resetPriceOffset: EditPoolInstructionDataArgs['resetPriceOffset'];
};

export function getEditPoolInstruction<
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSystemProgram extends string,
>(
  input: EditPoolInput<TAccountOwner, TAccountPool, TAccountSystemProgram>
): EditPoolInstruction<
  typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountOwner,
  TAccountPool,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = TENSOR_AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    owner: { value: input.owner ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
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
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getEditPoolInstructionDataEncoder().encode(
      args as EditPoolInstructionDataArgs
    ),
  } as EditPoolInstruction<
    typeof TENSOR_AMM_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountPool,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedEditPoolInstruction<
  TProgram extends string = typeof TENSOR_AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The owner of the pool--must sign to edit the pool. */
    owner: TAccountMetas[0];
    /** The pool to edit. */
    pool: TAccountMetas[1];
    /** The Solana system program. */
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
      owner: getNextAccount(),
      pool: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getEditPoolInstructionDataDecoder().decode(instruction.data),
  };
}
