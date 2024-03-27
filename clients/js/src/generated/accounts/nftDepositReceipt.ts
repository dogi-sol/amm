/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  EncodedAccount,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  assertAccountExists,
  assertAccountsExist,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
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
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';

export type NftDepositReceipt<TAddress extends string = string> = Account<
  NftDepositReceiptAccountData,
  TAddress
>;

export type MaybeNftDepositReceipt<TAddress extends string = string> =
  MaybeAccount<NftDepositReceiptAccountData, TAddress>;

export type NftDepositReceiptAccountData = {
  discriminator: Array<number>;
  bump: number;
  nftMint: Address;
  nftEscrow: Address;
};

export type NftDepositReceiptAccountDataArgs = {
  bump: number;
  nftMint: Address;
  nftEscrow: Address;
};

export function getNftDepositReceiptAccountDataEncoder(): Encoder<NftDepositReceiptAccountDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['bump', getU8Encoder()],
      ['nftMint', getAddressEncoder()],
      ['nftEscrow', getAddressEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [206, 255, 132, 254, 67, 78, 62, 96],
    })
  );
}

export function getNftDepositReceiptAccountDataDecoder(): Decoder<NftDepositReceiptAccountData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['bump', getU8Decoder()],
    ['nftMint', getAddressDecoder()],
    ['nftEscrow', getAddressDecoder()],
  ]);
}

export function getNftDepositReceiptAccountDataCodec(): Codec<
  NftDepositReceiptAccountDataArgs,
  NftDepositReceiptAccountData
> {
  return combineCodec(
    getNftDepositReceiptAccountDataEncoder(),
    getNftDepositReceiptAccountDataDecoder()
  );
}

export function decodeNftDepositReceipt<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): NftDepositReceipt<TAddress>;
export function decodeNftDepositReceipt<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeNftDepositReceipt<TAddress>;
export function decodeNftDepositReceipt<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): NftDepositReceipt<TAddress> | MaybeNftDepositReceipt<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getNftDepositReceiptAccountDataDecoder()
  );
}

export async function fetchNftDepositReceipt<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<NftDepositReceipt<TAddress>> {
  const maybeAccount = await fetchMaybeNftDepositReceipt(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeNftDepositReceipt<
  TAddress extends string = string,
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeNftDepositReceipt<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeNftDepositReceipt(maybeAccount);
}

export async function fetchAllNftDepositReceipt(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<NftDepositReceipt[]> {
  const maybeAccounts = await fetchAllMaybeNftDepositReceipt(
    rpc,
    addresses,
    config
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeNftDepositReceipt(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeNftDepositReceipt[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeNftDepositReceipt(maybeAccount)
  );
}

export function getNftDepositReceiptSize(): number {
  return 73;
}
