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
  getArrayDecoder,
  getArrayEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs';

/** Local version of `ProofInfo` for IDL export. */
export type ProofInfoLocal = {
  /** The merkle proof. */
  proof: Array<Uint8Array>;
};

export type ProofInfoLocalArgs = ProofInfoLocal;

export function getProofInfoLocalEncoder(): Encoder<ProofInfoLocalArgs> {
  return getStructEncoder([
    ['proof', getArrayEncoder(getBytesEncoder({ size: 32 }))],
  ]);
}

export function getProofInfoLocalDecoder(): Decoder<ProofInfoLocal> {
  return getStructDecoder([
    ['proof', getArrayDecoder(getBytesDecoder({ size: 32 }))],
  ]);
}

export function getProofInfoLocalCodec(): Codec<
  ProofInfoLocalArgs,
  ProofInfoLocal
> {
  return combineCodec(getProofInfoLocalEncoder(), getProofInfoLocalDecoder());
}
