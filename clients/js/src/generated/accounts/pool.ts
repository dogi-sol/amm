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
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getI64Decoder,
  getI64Encoder,
  getU32Decoder,
  getU32Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import { PoolSeeds, findPoolPda } from '../pdas';
import {
  PoolConfig,
  PoolConfigArgs,
  PoolStats,
  PoolStatsArgs,
  getPoolConfigDecoder,
  getPoolConfigEncoder,
  getPoolStatsDecoder,
  getPoolStatsEncoder,
} from '../types';

export type Pool<TAddress extends string = string> = Account<
  PoolAccountData,
  TAddress
>;

export type MaybePool<TAddress extends string = string> = MaybeAccount<
  PoolAccountData,
  TAddress
>;

export type PoolAccountData = {
  discriminator: Array<number>;
  /** Pool version, used to control upgrades. */
  version: number;
  /** Bump seed for the pool PDA. */
  bump: Array<number>;
  /** SOL Escrow PDA bump seed. */
  solEscrowBump: Array<number>;
  /** Owner-chosen identifier for the pool */
  identifier: Uint8Array;
  /** Unix timestamp of the pool creation, in seconds. */
  createdAt: bigint;
  /** Last time a buy or sell order has been executed */
  updatedAt: bigint;
  config: PoolConfig;
  owner: Address;
  whitelist: Address;
  solEscrow: Address;
  /** How many times a taker has SOLD into the pool */
  takerSellCount: number;
  /** How many times a taker has BOUGHT from the pool */
  takerBuyCount: number;
  nftsHeld: number;
  stats: PoolStats;
  /** If an escrow account present, means it's a shared-escrow pool (currently bids only) */
  sharedEscrow: Option<Address>;
  /** Offchain actor signs off to make sure an offchain condition is met (eg trait present) */
  cosigner: Option<Address>;
  /** Limit how many buys a pool can execute - useful for cross-margin, else keeps buying into infinity */
  maxTakerSellCount: number;
};

export type PoolAccountDataArgs = {
  /** Pool version, used to control upgrades. */
  version: number;
  /** Bump seed for the pool PDA. */
  bump: Array<number>;
  /** SOL Escrow PDA bump seed. */
  solEscrowBump: Array<number>;
  /** Owner-chosen identifier for the pool */
  identifier: Uint8Array;
  /** Unix timestamp of the pool creation, in seconds. */
  createdAt: number | bigint;
  /** Last time a buy or sell order has been executed */
  updatedAt: number | bigint;
  config: PoolConfigArgs;
  owner: Address;
  whitelist: Address;
  solEscrow: Address;
  /** How many times a taker has SOLD into the pool */
  takerSellCount: number;
  /** How many times a taker has BOUGHT from the pool */
  takerBuyCount: number;
  nftsHeld: number;
  stats: PoolStatsArgs;
  /** If an escrow account present, means it's a shared-escrow pool (currently bids only) */
  sharedEscrow: OptionOrNullable<Address>;
  /** Offchain actor signs off to make sure an offchain condition is met (eg trait present) */
  cosigner: OptionOrNullable<Address>;
  /** Limit how many buys a pool can execute - useful for cross-margin, else keeps buying into infinity */
  maxTakerSellCount: number;
};

export function getPoolAccountDataEncoder(): Encoder<PoolAccountDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['version', getU8Encoder()],
      ['bump', getArrayEncoder(getU8Encoder(), { size: 1 })],
      ['solEscrowBump', getArrayEncoder(getU8Encoder(), { size: 1 })],
      ['identifier', getBytesEncoder({ size: 32 })],
      ['createdAt', getI64Encoder()],
      ['updatedAt', getI64Encoder()],
      ['config', getPoolConfigEncoder()],
      ['owner', getAddressEncoder()],
      ['whitelist', getAddressEncoder()],
      ['solEscrow', getAddressEncoder()],
      ['takerSellCount', getU32Encoder()],
      ['takerBuyCount', getU32Encoder()],
      ['nftsHeld', getU32Encoder()],
      ['stats', getPoolStatsEncoder()],
      ['sharedEscrow', getOptionEncoder(getAddressEncoder())],
      ['cosigner', getOptionEncoder(getAddressEncoder())],
      ['maxTakerSellCount', getU32Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [241, 154, 109, 4, 17, 177, 109, 188],
    })
  );
}

export function getPoolAccountDataDecoder(): Decoder<PoolAccountData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['version', getU8Decoder()],
    ['bump', getArrayDecoder(getU8Decoder(), { size: 1 })],
    ['solEscrowBump', getArrayDecoder(getU8Decoder(), { size: 1 })],
    ['identifier', getBytesDecoder({ size: 32 })],
    ['createdAt', getI64Decoder()],
    ['updatedAt', getI64Decoder()],
    ['config', getPoolConfigDecoder()],
    ['owner', getAddressDecoder()],
    ['whitelist', getAddressDecoder()],
    ['solEscrow', getAddressDecoder()],
    ['takerSellCount', getU32Decoder()],
    ['takerBuyCount', getU32Decoder()],
    ['nftsHeld', getU32Decoder()],
    ['stats', getPoolStatsDecoder()],
    ['sharedEscrow', getOptionDecoder(getAddressDecoder())],
    ['cosigner', getOptionDecoder(getAddressDecoder())],
    ['maxTakerSellCount', getU32Decoder()],
  ]);
}

export function getPoolAccountDataCodec(): Codec<
  PoolAccountDataArgs,
  PoolAccountData
> {
  return combineCodec(getPoolAccountDataEncoder(), getPoolAccountDataDecoder());
}

export function decodePool<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Pool<TAddress>;
export function decodePool<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybePool<TAddress>;
export function decodePool<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Pool<TAddress> | MaybePool<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getPoolAccountDataDecoder()
  );
}

export async function fetchPool<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Pool<TAddress>> {
  const maybeAccount = await fetchMaybePool(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybePool<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybePool<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodePool(maybeAccount);
}

export async function fetchAllPool(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Pool[]> {
  const maybeAccounts = await fetchAllMaybePool(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybePool(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybePool[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodePool(maybeAccount));
}

export async function fetchPoolFromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: PoolSeeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<Pool> {
  const maybeAccount = await fetchMaybePoolFromSeeds(rpc, seeds, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybePoolFromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: PoolSeeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<MaybePool> {
  const { programAddress, ...fetchConfig } = config;
  const [address] = await findPoolPda(seeds, { programAddress });
  return fetchMaybePool(rpc, address, fetchConfig);
}
