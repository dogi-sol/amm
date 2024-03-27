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

export type ClosePoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountSolEscrow extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
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
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type ClosePoolInstructionData = { discriminator: Array<number> };

export type ClosePoolInstructionDataArgs = {};

export function getClosePoolInstructionDataEncoder(): Encoder<ClosePoolInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
    ]),
    (value) => ({
      ...value,
      discriminator: [140, 189, 209, 23, 239, 62, 239, 11],
    })
  );
}

export function getClosePoolInstructionDataDecoder(): Decoder<ClosePoolInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
  ]);
}

export function getClosePoolInstructionDataCodec(): Codec<
  ClosePoolInstructionDataArgs,
  ClosePoolInstructionData
> {
  return combineCodec(
    getClosePoolInstructionDataEncoder(),
    getClosePoolInstructionDataDecoder()
  );
}

export type ClosePoolInput<
  TAccountOwner extends string = string,
  TAccountPool extends string = string,
  TAccountSolEscrow extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  owner: TransactionSigner<TAccountOwner>;
  pool: Address<TAccountPool>;
  /** (!) if the order is marginated this won't return any funds to the user, since margin isn't auto-closed */
  solEscrow: Address<TAccountSolEscrow>;
  systemProgram?: Address<TAccountSystemProgram>;
};

export function getClosePoolInstruction<
  TAccountOwner extends string,
  TAccountPool extends string,
  TAccountSolEscrow extends string,
  TAccountSystemProgram extends string,
>(
  input: ClosePoolInput<
    TAccountOwner,
    TAccountPool,
    TAccountSolEscrow,
    TAccountSystemProgram
  >
): ClosePoolInstruction<
  typeof AMM_PROGRAM_ADDRESS,
  TAccountOwner,
  TAccountPool,
  TAccountSolEscrow,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    owner: { value: input.owner ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    solEscrow: { value: input.solEscrow ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

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
      getAccountMeta(accounts.solEscrow),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getClosePoolInstructionDataEncoder().encode({}),
  } as ClosePoolInstruction<
    typeof AMM_PROGRAM_ADDRESS,
    TAccountOwner,
    TAccountPool,
    TAccountSolEscrow,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedClosePoolInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    owner: TAccountMetas[0];
    pool: TAccountMetas[1];
    /** (!) if the order is marginated this won't return any funds to the user, since margin isn't auto-closed */
    solEscrow: TAccountMetas[2];
    systemProgram: TAccountMetas[3];
  };
  data: ClosePoolInstructionData;
};

export function parseClosePoolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedClosePoolInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
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
      systemProgram: getNextAccount(),
    },
    data: getClosePoolInstructionDataDecoder().decode(instruction.data),
  };
}
