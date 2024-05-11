/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs';

/** Stats for a pool include the number of buys and sells, and the accumulated MM profit. */
export type PoolStats = {
  takerSellCount: number;
  takerBuyCount: number;
  accumulatedMmProfit: bigint;
};

export type PoolStatsArgs = {
  takerSellCount: number;
  takerBuyCount: number;
  accumulatedMmProfit: number | bigint;
};

export function getPoolStatsEncoder(): Encoder<PoolStatsArgs> {
  return getStructEncoder([
    ['takerSellCount', getU32Encoder()],
    ['takerBuyCount', getU32Encoder()],
    ['accumulatedMmProfit', getU64Encoder()],
  ]);
}

export function getPoolStatsDecoder(): Decoder<PoolStats> {
  return getStructDecoder([
    ['takerSellCount', getU32Decoder()],
    ['takerBuyCount', getU32Decoder()],
    ['accumulatedMmProfit', getU64Decoder()],
  ]);
}

export function getPoolStatsCodec(): Codec<PoolStatsArgs, PoolStats> {
  return combineCodec(getPoolStatsEncoder(), getPoolStatsDecoder());
}
