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
  AuthorizationDataLocal,
  AuthorizationDataLocalArgs,
  getAuthorizationDataLocalDecoder,
  getAuthorizationDataLocalEncoder,
} from '../types';

export type DelistInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountSingleListing extends string | IAccountMeta<string> = string,
  TAccountNftDest extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftEscrowOwner extends string | IAccountMeta<string> = string,
  TAccountNftEscrowToken extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountNftMetadata extends string | IAccountMeta<string> = string,
  TAccountNftEdition extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenRecord extends string | IAccountMeta<string> = string,
  TAccountDestTokenRecord extends string | IAccountMeta<string> = string,
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TAccountPnftShared extends string | IAccountMeta<string> = string,
  TAccountAuthRules extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSingleListing extends string
        ? WritableAccount<TAccountSingleListing>
        : TAccountSingleListing,
      TAccountNftDest extends string
        ? WritableAccount<TAccountNftDest>
        : TAccountNftDest,
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
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      TAccountNftMetadata extends string
        ? WritableAccount<TAccountNftMetadata>
        : TAccountNftMetadata,
      TAccountNftEdition extends string
        ? ReadonlyAccount<TAccountNftEdition>
        : TAccountNftEdition,
      TAccountOwnerTokenRecord extends string
        ? WritableAccount<TAccountOwnerTokenRecord>
        : TAccountOwnerTokenRecord,
      TAccountDestTokenRecord extends string
        ? WritableAccount<TAccountDestTokenRecord>
        : TAccountDestTokenRecord,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountPnftShared extends string
        ? ReadonlyAccount<TAccountPnftShared>
        : TAccountPnftShared,
      TAccountAuthRules extends string
        ? ReadonlyAccount<TAccountAuthRules>
        : TAccountAuthRules,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      ...TRemainingAccounts,
    ]
  >;

export type DelistInstructionData = {
  discriminator: Array<number>;
  authorizationData: Option<AuthorizationDataLocal>;
  rulesAccPresent: boolean;
};

export type DelistInstructionDataArgs = {
  authorizationData: OptionOrNullable<AuthorizationDataLocalArgs>;
  rulesAccPresent: boolean;
};

export function getDelistInstructionDataEncoder(): Encoder<DelistInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      [
        'authorizationData',
        getOptionEncoder(getAuthorizationDataLocalEncoder()),
      ],
      ['rulesAccPresent', getBooleanEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [55, 136, 205, 107, 107, 173, 4, 31],
    })
  );
}

export function getDelistInstructionDataDecoder(): Decoder<DelistInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['authorizationData', getOptionDecoder(getAuthorizationDataLocalDecoder())],
    ['rulesAccPresent', getBooleanDecoder()],
  ]);
}

export function getDelistInstructionDataCodec(): Codec<
  DelistInstructionDataArgs,
  DelistInstructionData
> {
  return combineCodec(
    getDelistInstructionDataEncoder(),
    getDelistInstructionDataDecoder()
  );
}

export type DelistInput<
  TAccountSingleListing extends string = string,
  TAccountNftDest extends string = string,
  TAccountNftMint extends string = string,
  TAccountNftEscrowOwner extends string = string,
  TAccountNftEscrowToken extends string = string,
  TAccountOwner extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
  TAccountNftMetadata extends string = string,
  TAccountNftEdition extends string = string,
  TAccountOwnerTokenRecord extends string = string,
  TAccountDestTokenRecord extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountPnftShared extends string = string,
  TAccountAuthRules extends string = string,
  TAccountPayer extends string = string,
> = {
  singleListing: Address<TAccountSingleListing>;
  nftDest: Address<TAccountNftDest>;
  nftMint: Address<TAccountNftMint>;
  nftEscrowOwner: Address<TAccountNftEscrowOwner>;
  /**
   * Implicitly checked via transfer. Will fail if wrong account
   * This is closed below (dest = owner)
   */
  nftEscrowToken: Address<TAccountNftEscrowToken>;
  owner: TransactionSigner<TAccountOwner>;
  tokenProgram?: Address<TAccountTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  rent?: Address<TAccountRent>;
  nftMetadata: Address<TAccountNftMetadata>;
  nftEdition: Address<TAccountNftEdition>;
  ownerTokenRecord: Address<TAccountOwnerTokenRecord>;
  destTokenRecord: Address<TAccountDestTokenRecord>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  pnftShared: Address<TAccountPnftShared>;
  authRules: Address<TAccountAuthRules>;
  payer: TransactionSigner<TAccountPayer>;
  authorizationData: DelistInstructionDataArgs['authorizationData'];
  rulesAccPresent: DelistInstructionDataArgs['rulesAccPresent'];
};

export function getDelistInstruction<
  TAccountSingleListing extends string,
  TAccountNftDest extends string,
  TAccountNftMint extends string,
  TAccountNftEscrowOwner extends string,
  TAccountNftEscrowToken extends string,
  TAccountOwner extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountNftMetadata extends string,
  TAccountNftEdition extends string,
  TAccountOwnerTokenRecord extends string,
  TAccountDestTokenRecord extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountPnftShared extends string,
  TAccountAuthRules extends string,
  TAccountPayer extends string,
>(
  input: DelistInput<
    TAccountSingleListing,
    TAccountNftDest,
    TAccountNftMint,
    TAccountNftEscrowOwner,
    TAccountNftEscrowToken,
    TAccountOwner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountNftMetadata,
    TAccountNftEdition,
    TAccountOwnerTokenRecord,
    TAccountDestTokenRecord,
    TAccountAssociatedTokenProgram,
    TAccountPnftShared,
    TAccountAuthRules,
    TAccountPayer
  >
): DelistInstruction<
  typeof AMM_PROGRAM_ADDRESS,
  TAccountSingleListing,
  TAccountNftDest,
  TAccountNftMint,
  TAccountNftEscrowOwner,
  TAccountNftEscrowToken,
  TAccountOwner,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent,
  TAccountNftMetadata,
  TAccountNftEdition,
  TAccountOwnerTokenRecord,
  TAccountDestTokenRecord,
  TAccountAssociatedTokenProgram,
  TAccountPnftShared,
  TAccountAuthRules,
  TAccountPayer
> {
  // Program address.
  const programAddress = AMM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    singleListing: { value: input.singleListing ?? null, isWritable: true },
    nftDest: { value: input.nftDest ?? null, isWritable: true },
    nftMint: { value: input.nftMint ?? null, isWritable: false },
    nftEscrowOwner: { value: input.nftEscrowOwner ?? null, isWritable: true },
    nftEscrowToken: { value: input.nftEscrowToken ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
    nftMetadata: { value: input.nftMetadata ?? null, isWritable: true },
    nftEdition: { value: input.nftEdition ?? null, isWritable: false },
    ownerTokenRecord: {
      value: input.ownerTokenRecord ?? null,
      isWritable: true,
    },
    destTokenRecord: { value: input.destTokenRecord ?? null, isWritable: true },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    pnftShared: { value: input.pnftShared ?? null, isWritable: false },
    authRules: { value: input.authRules ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
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
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.singleListing),
      getAccountMeta(accounts.nftDest),
      getAccountMeta(accounts.nftMint),
      getAccountMeta(accounts.nftEscrowOwner),
      getAccountMeta(accounts.nftEscrowToken),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.rent),
      getAccountMeta(accounts.nftMetadata),
      getAccountMeta(accounts.nftEdition),
      getAccountMeta(accounts.ownerTokenRecord),
      getAccountMeta(accounts.destTokenRecord),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.pnftShared),
      getAccountMeta(accounts.authRules),
      getAccountMeta(accounts.payer),
    ],
    programAddress,
    data: getDelistInstructionDataEncoder().encode(
      args as DelistInstructionDataArgs
    ),
  } as DelistInstruction<
    typeof AMM_PROGRAM_ADDRESS,
    TAccountSingleListing,
    TAccountNftDest,
    TAccountNftMint,
    TAccountNftEscrowOwner,
    TAccountNftEscrowToken,
    TAccountOwner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountNftMetadata,
    TAccountNftEdition,
    TAccountOwnerTokenRecord,
    TAccountDestTokenRecord,
    TAccountAssociatedTokenProgram,
    TAccountPnftShared,
    TAccountAuthRules,
    TAccountPayer
  >;

  return instruction;
}

export type ParsedDelistInstruction<
  TProgram extends string = typeof AMM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    singleListing: TAccountMetas[0];
    nftDest: TAccountMetas[1];
    nftMint: TAccountMetas[2];
    nftEscrowOwner: TAccountMetas[3];
    /**
     * Implicitly checked via transfer. Will fail if wrong account
     * This is closed below (dest = owner)
     */

    nftEscrowToken: TAccountMetas[4];
    owner: TAccountMetas[5];
    tokenProgram: TAccountMetas[6];
    systemProgram: TAccountMetas[7];
    rent: TAccountMetas[8];
    nftMetadata: TAccountMetas[9];
    nftEdition: TAccountMetas[10];
    ownerTokenRecord: TAccountMetas[11];
    destTokenRecord: TAccountMetas[12];
    associatedTokenProgram: TAccountMetas[13];
    pnftShared: TAccountMetas[14];
    authRules: TAccountMetas[15];
    payer: TAccountMetas[16];
  };
  data: DelistInstructionData;
};

export function parseDelistInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDelistInstruction<TProgram, TAccountMetas> {
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
  return {
    programAddress: instruction.programAddress,
    accounts: {
      singleListing: getNextAccount(),
      nftDest: getNextAccount(),
      nftMint: getNextAccount(),
      nftEscrowOwner: getNextAccount(),
      nftEscrowToken: getNextAccount(),
      owner: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextAccount(),
      nftMetadata: getNextAccount(),
      nftEdition: getNextAccount(),
      ownerTokenRecord: getNextAccount(),
      destTokenRecord: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      pnftShared: getNextAccount(),
      authRules: getNextAccount(),
      payer: getNextAccount(),
    },
    data: getDelistInstructionDataDecoder().decode(instruction.data),
  };
}
