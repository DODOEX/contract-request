import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOStarterProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xeB28dAc5ffD6e46d344D488189B501469F4Af561"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOStarterProxy_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODOStarterProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOStarterProxy_WETH_(chainId: number) {
  const __to = getDODOStarterProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode bid
 * @param {string} pool - address
 * @param {number} fundAmount - uint256
 * @param {number} flag - uint8
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOStarterProxyBid(pool: string, fundAmount: number, flag: number, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint8","uint256"], [pool,fundAmount,flag,deadLine]);
  return hexlify(concat(['0xdb70b5c7', __encodeData]));
}