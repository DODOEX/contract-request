import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODODppProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xfF7C8F518e6f1435957ed3d3E0692C94676dAE7a","2818":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","80084":"0x819829e5CF6e19F9fED92F6b4CC1edF45a2cC4A2","167000":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","543210":"0x6CcfA1b097Be85bB985fa7b49D0fc5B741896Ee8"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODppProxy_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODODppProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DPP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODppProxy_DPP_FACTORY_(chainId: number) {
  const __to = getDODODppProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb730d150', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODppProxy_WETH_(chainId: number) {
  const __to = getDODODppProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode createDODOPrivatePool
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {number} baseInAmount - uint256
 * @param {number} quoteInAmount - uint256
 * @param {number} lpFeeRate - uint256
 * @param {number} i - uint256
 * @param {number} k - uint256
 * @param {boolean} isOpenTwap - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODODppProxyCreateDODOPrivatePool(baseToken: string, quoteToken: string, baseInAmount: number, quoteInAmount: number, lpFeeRate: number, i: number, k: number, isOpenTwap: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTwap,deadLine]);
  return hexlify(concat(['0x0d9be500', __encodeData]));
}

/**
 * encode resetDODOPrivatePool
 * @param {string} dppAddress - address
 * @param {Array<number>} paramList - uint256[]
 * @param {Array<number>} amountList - uint256[]
 * @param {number} flag - uint8
 * @param {number} minBaseReserve - uint256
 * @param {number} minQuoteReserve - uint256
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODODppProxyResetDODOPrivatePool(dppAddress: string, paramList: Array<number>, amountList: Array<number>, flag: number, minBaseReserve: number, minQuoteReserve: number, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256[]","uint256[]","uint8","uint256","uint256","uint256"], [dppAddress,paramList,amountList,flag,minBaseReserve,minQuoteReserve,deadLine]);
  return hexlify(concat(['0x12ff148d', __encodeData]));
}