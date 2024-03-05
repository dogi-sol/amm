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
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  MyData,
  MyDataArgs,
  getMyDataDecoder,
  getMyDataEncoder,
} from '../types';

export type MyAccount<TAddress extends string = string> = Account<
  MyAccountAccountData,
  TAddress
>;

export type MaybeMyAccount<TAddress extends string = string> = MaybeAccount<
  MyAccountAccountData,
  TAddress
>;

export type MyAccountAccountData = {
  discriminator: Array<number>;
  authority: Address;
  data: MyData;
};

export type MyAccountAccountDataArgs = { authority: Address; data: MyDataArgs };

export function getMyAccountAccountDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: Array<number>;
      authority: Address;
      data: MyDataArgs;
    }>([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['authority', getAddressEncoder()],
      ['data', getMyDataEncoder()],
    ]),
    (value) => ({ ...value, discriminator: [246, 28, 6, 87, 251, 45, 50, 42] })
  ) satisfies Encoder<MyAccountAccountDataArgs>;
}

export function getMyAccountAccountDataDecoder() {
  return getStructDecoder<MyAccountAccountData>([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['authority', getAddressDecoder()],
    ['data', getMyDataDecoder()],
  ]) satisfies Decoder<MyAccountAccountData>;
}

export function getMyAccountAccountDataCodec(): Codec<
  MyAccountAccountDataArgs,
  MyAccountAccountData
> {
  return combineCodec(
    getMyAccountAccountDataEncoder(),
    getMyAccountAccountDataDecoder()
  );
}

export function decodeMyAccount<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): MyAccount<TAddress>;
export function decodeMyAccount<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeMyAccount<TAddress>;
export function decodeMyAccount<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): MyAccount<TAddress> | MaybeMyAccount<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getMyAccountAccountDataDecoder()
  );
}

export async function fetchMyAccount<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MyAccount<TAddress>> {
  const maybeAccount = await fetchMaybeMyAccount(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeMyAccount<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeMyAccount<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeMyAccount(maybeAccount);
}

export async function fetchAllMyAccount(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MyAccount[]> {
  const maybeAccounts = await fetchAllMaybeMyAccount(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeMyAccount(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeMyAccount[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeMyAccount(maybeAccount));
}

export function getMyAccountSize(): number {
  return 46;
}
