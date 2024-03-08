/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { Program, ProgramWithErrors } from '@solana/programs';
import {
  AmmProgramError,
  AmmProgramErrorCode,
  getAmmProgramErrorFromCode,
} from '../errors';
import {
  ParsedClosePoolInstruction,
  ParsedCreatePoolInstruction,
  ParsedEditPoolInstruction,
  ParsedReallocPoolInstruction,
} from '../instructions';
import { memcmp } from '../shared';

export const AMM_PROGRAM_ADDRESS =
  'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA' as Address<'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'>;

export type AmmProgram =
  Program<'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'> &
    ProgramWithErrors<AmmProgramErrorCode, AmmProgramError>;

export function getAmmProgram(): AmmProgram {
  return {
    name: 'amm',
    address: AMM_PROGRAM_ADDRESS,
    getErrorFromCode(code: AmmProgramErrorCode, cause?: Error) {
      return getAmmProgramErrorFromCode(code, cause);
    },
  };
}

export enum AmmAccount {
  Pool,
  SolEscrow,
}

export function identifyAmmAccount(
  account: { data: Uint8Array } | Uint8Array
): AmmAccount {
  const data = account instanceof Uint8Array ? account : account.data;
  if (memcmp(data, new Uint8Array([241, 154, 109, 4, 17, 177, 109, 188]), 0)) {
    return AmmAccount.Pool;
  }
  if (memcmp(data, new Uint8Array([75, 199, 250, 63, 244, 209, 235, 120]), 0)) {
    return AmmAccount.SolEscrow;
  }
  throw new Error(
    'The provided account could not be identified as a amm account.'
  );
}

export enum AmmInstruction {
  ReallocPool,
  CreatePool,
  EditPool,
  ClosePool,
}

export function identifyAmmInstruction(
  instruction: { data: Uint8Array } | Uint8Array
): AmmInstruction {
  const data =
    instruction instanceof Uint8Array ? instruction : instruction.data;
  if (memcmp(data, new Uint8Array([114, 128, 37, 167, 71, 227, 40, 178]), 0)) {
    return AmmInstruction.ReallocPool;
  }
  if (
    memcmp(data, new Uint8Array([233, 146, 209, 142, 207, 104, 64, 188]), 0)
  ) {
    return AmmInstruction.CreatePool;
  }
  if (memcmp(data, new Uint8Array([50, 174, 34, 36, 3, 166, 29, 204]), 0)) {
    return AmmInstruction.EditPool;
  }
  if (memcmp(data, new Uint8Array([140, 189, 209, 23, 239, 62, 239, 11]), 0)) {
    return AmmInstruction.ClosePool;
  }
  throw new Error(
    'The provided instruction could not be identified as a amm instruction.'
  );
}

export type ParsedAmmInstruction<
  TProgram extends string = 'TAMMqgJYcquwwj2tCdNUerh4C2bJjmghijVziSEf5tA'
> =
  | ({
      instructionType: AmmInstruction.ReallocPool;
    } & ParsedReallocPoolInstruction<TProgram>)
  | ({
      instructionType: AmmInstruction.CreatePool;
    } & ParsedCreatePoolInstruction<TProgram>)
  | ({
      instructionType: AmmInstruction.EditPool;
    } & ParsedEditPoolInstruction<TProgram>)
  | ({
      instructionType: AmmInstruction.ClosePool;
    } & ParsedClosePoolInstruction<TProgram>);
