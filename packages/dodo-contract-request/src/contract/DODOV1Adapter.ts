import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV1AdapterContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x91E1c84BA8786B1FaE2570202F0126C0b88F6Ec7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_SELL_HELPER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV1Adapter_DODO_SELL_HELPER_(chainId: number) {
  const __to = getDODOV1AdapterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaf1280b0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode sellBase
 * @param {string} to - address
 * @param {string} pool - address
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOV1AdapterSellBase(to: string, pool: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bytes"], [to,pool,__input1]);
  return hexlify(concat(['0x30e6ae31', __encodeData]));
}

/**
 * encode sellQuote
 * @param {string} to - address
 * @param {string} pool - address
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOV1AdapterSellQuote(to: string, pool: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bytes"], [to,pool,__input1]);
  return hexlify(concat(['0x6f7929f2', __encodeData]));
}