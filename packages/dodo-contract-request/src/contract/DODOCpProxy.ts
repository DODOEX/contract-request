import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOCpProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x283e02d0D906F1395777799f0a153c20A83d0ef2","2818":"0x7386F6F2375a38FBD1F4dA1d3eb39cd8dD8d1b40","80084":"0x80465a300299e90132DFa2c7c3Fc3a12424599bB","167000":"0x7386F6F2375a38FBD1F4dA1d3eb39cd8dD8d1b40","543210":"0x4197fd29f757C24627dF590779EE3123B16dbf4D"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxy_CP_FACTORY_(chainId: number) {
  const __to = getDODOCpProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfaa980e4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxy_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODOCpProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxy_WETH_(chainId: number) {
  const __to = getDODOCpProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode bid
 * @param {string} cpAddress - address
 * @param {number} quoteAmount - uint256
 * @param {number} flag - uint8
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOCpProxyBid(cpAddress: string, quoteAmount: number, flag: number, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint8","uint256"], [cpAddress,quoteAmount,flag,deadLine]);
  return hexlify(concat(['0xdb70b5c7', __encodeData]));
}

/**
 * encode createCrowdPooling
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {number} baseInAmount - uint256
 * @param {Array<number>} timeLine - uint256[]
 * @param {Array<number>} valueList - uint256[]
 * @param {Array<boolean>} switches - bool[]
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOCpProxyCreateCrowdPooling(baseToken: string, quoteToken: string, baseInAmount: number, timeLine: Array<number>, valueList: Array<number>, switches: Array<boolean>, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256[]","uint256[]","bool[]","uint256"], [baseToken,quoteToken,baseInAmount,timeLine,valueList,switches,deadLine]);
  return hexlify(concat(['0x9b58c78c', __encodeData]));
}