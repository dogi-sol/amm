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
  getScalarEnumDecoder,
  getScalarEnumEncoder,
} from '@solana/codecs';

/**
 * Enum representing the different types of curves that can be used in a pool.
 *
 * Linear curves have price offsets that increase or decrease linearly.
 *
 * Exponential curves have a price offset that increases or decreases exponentially.
 */

export enum CurveType {
  Linear,
  Exponential,
}

export type CurveTypeArgs = CurveType;

export function getCurveTypeEncoder(): Encoder<CurveTypeArgs> {
  return getScalarEnumEncoder(CurveType);
}

export function getCurveTypeDecoder(): Decoder<CurveType> {
  return getScalarEnumDecoder(CurveType);
}

export function getCurveTypeCodec(): Codec<CurveTypeArgs, CurveType> {
  return combineCodec(getCurveTypeEncoder(), getCurveTypeDecoder());
}
