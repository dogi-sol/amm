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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { AMM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type WithdrawSharedEscrowCpiInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountSharedEscrow extends string | IAccountMeta<string> = string,
  TAccountBidState extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSharedEscrow extends string
        ? WritableAccount<TAccountSharedEscrow>
        : TAccountSharedEscrow,
      TAccountBidState extends string
        ? ReadonlySignerAccount<TAccountBidState> &
            IAccountSignerMeta<TAccountBidState>
        : TAccountBidState,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountNftMint extends string
        ? ReadonlyAccount<TAccountNftMint>
        : TAccountNftMint,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type WithdrawSharedEscrowCpiInstructionData = {
  discriminator: Array<number>;
  bump: number;
  lamports: bigint;
};

export type WithdrawSharedEscrowCpiInstructionDataArgs = {
  bump: number;
  lamports: number | bigint;
};

export function getWithdrawSharedEscrowCpiInstructionDataEncoder(): Encoder<WithdrawSharedEscrowCpiInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['bump', getU8Encoder()],
      ['lamports', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [37, 206, 177, 145, 161, 243, 21, 162],
    })
  );
}

export function getWithdrawSharedEscrowCpiInstructionDataDecoder(): Decoder<WithdrawSharedEscrowCpiInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['bump', getU8Decoder()],
    ['lamports', getU64Decoder()],
  ]);
}

export function getWithdrawSharedEscrowCpiInstructionDataCodec(): Codec<
  WithdrawSharedEscrowCpiInstructionDataArgs,
  WithdrawSharedEscrowCpiInstructionData
> {
  return combineCodec(
    getWithdrawSharedEscrowCpiInstructionDataEncoder(),
    getWithdrawSharedEscrowCpiInstructionDataDecoder()
  );
}

export type WithdrawSharedEscrowCpiInput<
  TAccountSharedEscrow extends string = string,
  TAccountBidState extends string = string,
  TAccountOwner extends string = string,
  TAccountNftMint extends string = string,
  TAccountDestination extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  sharedEscrow: Address<TAccountSharedEscrow>;
  bidState: TransactionSigner<TAccountBidState>;
  owner: Address<TAccountOwner>;
  nftMint: Address<TAccountNftMint>;
  destination: Address<TAccountDestination>;
  systemProgram?: Address<TAccountSystemProgram>;
  bump: WithdrawSharedEscrowCpiInstructionDataArgs['bump'];
  lamports: WithdrawSharedEscrowCpiInstructionDataArgs['lamports'];
};

export function getWithdrawSharedEscrowCpiInstruction<
  TAccountSharedEscrow extends string,
  TAccountBidState extends string,
  TAccountOwner extends string,
  TAccountNftMint extends string,
  TAccountDestination extends string,
  TAccountSystemProgram extends string,
>(
  input: WithdrawSharedEscrowCpiInput<
    TAccountSharedEscrow,
    TAccountBidState,
    TAccountOwner,
    TAccountNftMint,
    TAccountDestination,
    TAccountSystemProgram
  >
): WithdrawSharedEscrowCpiInstruction<
  typeof AMM_PROGRAM_ADDRESS,
  TAccountSharedEscrow,
  TAccountBidState,
  TAccountOwner,
  TAccountNftMint,
  TAccountDestination,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    sharedEscrow: { value: input.sharedEscrow ?? null, isWritable: true },
    bidState: { value: input.bidState ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: false },
    nftMint: { value: input.nftMint ?? null, isWritable: false },
    destination: { value: input.destination ?? null, isWritable: true },
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
      getAccountMeta(accounts.sharedEscrow),
      getAccountMeta(accounts.bidState),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.nftMint),
      getAccountMeta(accounts.destination),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getWithdrawSharedEscrowCpiInstructionDataEncoder().encode(
      args as WithdrawSharedEscrowCpiInstructionDataArgs
    ),
  } as WithdrawSharedEscrowCpiInstruction<
    typeof AMM_PROGRAM_ADDRESS,
    TAccountSharedEscrow,
    TAccountBidState,
    TAccountOwner,
    TAccountNftMint,
    TAccountDestination,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedWithdrawSharedEscrowCpiInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    sharedEscrow: TAccountMetas[0];
    bidState: TAccountMetas[1];
    owner: TAccountMetas[2];
    nftMint: TAccountMetas[3];
    destination: TAccountMetas[4];
    systemProgram: TAccountMetas[5];
  };
  data: WithdrawSharedEscrowCpiInstructionData;
};

export function parseWithdrawSharedEscrowCpiInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedWithdrawSharedEscrowCpiInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
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
      sharedEscrow: getNextAccount(),
      bidState: getNextAccount(),
      owner: getNextAccount(),
      nftMint: getNextAccount(),
      destination: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getWithdrawSharedEscrowCpiInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
