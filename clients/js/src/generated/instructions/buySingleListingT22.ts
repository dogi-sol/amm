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
import { AMM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type BuySingleListingT22Instruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountFeeVault extends string | IAccountMeta<string> = string,
  TAccountSingleListing extends string | IAccountMeta<string> = string,
  TAccountNftBuyerAcc extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftEscrowOwner extends string | IAccountMeta<string> = string,
  TAccountNftEscrowToken extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountBuyer extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountTakerBroker extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountFeeVault extends string
        ? WritableAccount<TAccountFeeVault>
        : TAccountFeeVault,
      TAccountSingleListing extends string
        ? WritableAccount<TAccountSingleListing>
        : TAccountSingleListing,
      TAccountNftBuyerAcc extends string
        ? WritableAccount<TAccountNftBuyerAcc>
        : TAccountNftBuyerAcc,
      TAccountNftMint extends string
        ? ReadonlyAccount<TAccountNftMint>
        : TAccountNftMint,
      TAccountNftEscrowOwner extends string
        ? WritableAccount<TAccountNftEscrowOwner>
        : TAccountNftEscrowOwner,
      TAccountNftEscrowToken extends string
        ? WritableAccount<TAccountNftEscrowToken>
        : TAccountNftEscrowToken,
      TAccountOwner extends string
        ? WritableAccount<TAccountOwner>
        : TAccountOwner,
      TAccountBuyer extends string
        ? WritableSignerAccount<TAccountBuyer> &
            IAccountSignerMeta<TAccountBuyer>
        : TAccountBuyer,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountTakerBroker extends string
        ? WritableAccount<TAccountTakerBroker>
        : TAccountTakerBroker,
      ...TRemainingAccounts,
    ]
  >;

export type BuySingleListingT22InstructionData = {
  discriminator: Array<number>;
  maxPrice: bigint;
};

export type BuySingleListingT22InstructionDataArgs = {
  maxPrice: number | bigint;
};

export function getBuySingleListingT22InstructionDataEncoder(): Encoder<BuySingleListingT22InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['maxPrice', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: [102, 89, 66, 0, 5, 68, 84, 216] })
  );
}

export function getBuySingleListingT22InstructionDataDecoder(): Decoder<BuySingleListingT22InstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['maxPrice', getU64Decoder()],
  ]);
}

export function getBuySingleListingT22InstructionDataCodec(): Codec<
  BuySingleListingT22InstructionDataArgs,
  BuySingleListingT22InstructionData
> {
  return combineCodec(
    getBuySingleListingT22InstructionDataEncoder(),
    getBuySingleListingT22InstructionDataDecoder()
  );
}

export type BuySingleListingT22Input<
  TAccountFeeVault extends string = string,
  TAccountSingleListing extends string = string,
  TAccountNftBuyerAcc extends string = string,
  TAccountNftMint extends string = string,
  TAccountNftEscrowOwner extends string = string,
  TAccountNftEscrowToken extends string = string,
  TAccountOwner extends string = string,
  TAccountBuyer extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountTakerBroker extends string = string,
> = {
  feeVault: Address<TAccountFeeVault>;
  singleListing: Address<TAccountSingleListing>;
  nftBuyerAcc: Address<TAccountNftBuyerAcc>;
  nftMint: Address<TAccountNftMint>;
  nftEscrowOwner: Address<TAccountNftEscrowOwner>;
  /**
   * Implicitly checked via transfer. Will fail if wrong account.
   * This is closed below (dest = owner)
   */
  nftEscrowToken: Address<TAccountNftEscrowToken>;
  owner: Address<TAccountOwner>;
  buyer: TransactionSigner<TAccountBuyer>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  takerBroker: Address<TAccountTakerBroker>;
  maxPrice: BuySingleListingT22InstructionDataArgs['maxPrice'];
};

export function getBuySingleListingT22Instruction<
  TAccountFeeVault extends string,
  TAccountSingleListing extends string,
  TAccountNftBuyerAcc extends string,
  TAccountNftMint extends string,
  TAccountNftEscrowOwner extends string,
  TAccountNftEscrowToken extends string,
  TAccountOwner extends string,
  TAccountBuyer extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountTakerBroker extends string,
>(
  input: BuySingleListingT22Input<
    TAccountFeeVault,
    TAccountSingleListing,
    TAccountNftBuyerAcc,
    TAccountNftMint,
    TAccountNftEscrowOwner,
    TAccountNftEscrowToken,
    TAccountOwner,
    TAccountBuyer,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountTakerBroker
  >
): BuySingleListingT22Instruction<
  typeof AMM_PROGRAM_ADDRESS,
  TAccountFeeVault,
  TAccountSingleListing,
  TAccountNftBuyerAcc,
  TAccountNftMint,
  TAccountNftEscrowOwner,
  TAccountNftEscrowToken,
  TAccountOwner,
  TAccountBuyer,
  TAccountTokenProgram,
  TAccountAssociatedTokenProgram,
  TAccountSystemProgram,
  TAccountTakerBroker
> {
  // Program address.
  const programAddress = AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    feeVault: { value: input.feeVault ?? null, isWritable: true },
    singleListing: { value: input.singleListing ?? null, isWritable: true },
    nftBuyerAcc: { value: input.nftBuyerAcc ?? null, isWritable: true },
    nftMint: { value: input.nftMint ?? null, isWritable: false },
    nftEscrowOwner: { value: input.nftEscrowOwner ?? null, isWritable: true },
    nftEscrowToken: { value: input.nftEscrowToken ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    buyer: { value: input.buyer ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.singleListing),
      getAccountMeta(accounts.nftBuyerAcc),
      getAccountMeta(accounts.nftMint),
      getAccountMeta(accounts.nftEscrowOwner),
      getAccountMeta(accounts.nftEscrowToken),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.buyer),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.takerBroker),
    ],
    programAddress,
    data: getBuySingleListingT22InstructionDataEncoder().encode(
      args as BuySingleListingT22InstructionDataArgs
    ),
  } as BuySingleListingT22Instruction<
    typeof AMM_PROGRAM_ADDRESS,
    TAccountFeeVault,
    TAccountSingleListing,
    TAccountNftBuyerAcc,
    TAccountNftMint,
    TAccountNftEscrowOwner,
    TAccountNftEscrowToken,
    TAccountOwner,
    TAccountBuyer,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountTakerBroker
  >;

  return instruction;
}

export type ParsedBuySingleListingT22Instruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    feeVault: TAccountMetas[0];
    singleListing: TAccountMetas[1];
    nftBuyerAcc: TAccountMetas[2];
    nftMint: TAccountMetas[3];
    nftEscrowOwner: TAccountMetas[4];
    /**
     * Implicitly checked via transfer. Will fail if wrong account.
     * This is closed below (dest = owner)
     */

    nftEscrowToken: TAccountMetas[5];
    owner: TAccountMetas[6];
    buyer: TAccountMetas[7];
    tokenProgram: TAccountMetas[8];
    associatedTokenProgram: TAccountMetas[9];
    systemProgram: TAccountMetas[10];
    takerBroker: TAccountMetas[11];
  };
  data: BuySingleListingT22InstructionData;
};

export function parseBuySingleListingT22Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedBuySingleListingT22Instruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 12) {
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
      feeVault: getNextAccount(),
      singleListing: getNextAccount(),
      nftBuyerAcc: getNextAccount(),
      nftMint: getNextAccount(),
      nftEscrowOwner: getNextAccount(),
      nftEscrowToken: getNextAccount(),
      owner: getNextAccount(),
      buyer: getNextAccount(),
      tokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      takerBroker: getNextAccount(),
    },
    data: getBuySingleListingT22InstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
