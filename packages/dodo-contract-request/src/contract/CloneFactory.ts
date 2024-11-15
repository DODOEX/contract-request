import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * encode clone
 * @param {string} prototype - address
 * @returns {string} encode data
 */
export function encodeCloneFactoryClone(prototype: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [prototype]);
  return hexlify(concat(['0x8124b78e', __encodeData]));
}