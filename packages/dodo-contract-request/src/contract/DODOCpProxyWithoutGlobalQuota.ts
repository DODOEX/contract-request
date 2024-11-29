import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOCpProxyWithoutGlobalQuotaContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x283e02d0D906F1395777799f0a153c20A83d0ef2","10":"0x072b3e5391B8bc868934562E510e6B2454163093","137":"0x6bD3747577d164159dc34b85C3c960aDDC8138fa","42161":"0x467b6A4352924A4475e3deF0fb2910839D8D0F1a","43114":"0x973CAB76C35BB1da47e044A63546c69A8Ac1143c","1313161554":"0x471e1A083D76C4FC9e088FD259F64Eff0A37DAbD"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxyWithoutGlobalQuota_CP_FACTORY_(chainId: number) {
  const __to = getDODOCpProxyWithoutGlobalQuotaContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfaa980e4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCpProxyWithoutGlobalQuota_CP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCpProxyWithoutGlobalQuota_CP_FACTORY_(chainId);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxyWithoutGlobalQuota_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODOCpProxyWithoutGlobalQuotaContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCpProxyWithoutGlobalQuota_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCpProxyWithoutGlobalQuota_DODO_APPROVE_PROXY_(chainId);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxyWithoutGlobalQuota_WETH_(chainId: number) {
  const __to = getDODOCpProxyWithoutGlobalQuotaContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCpProxyWithoutGlobalQuota_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCpProxyWithoutGlobalQuota_WETH_(chainId);
    }
  }
}

/**
 * encode bid
 * @param {string} cpAddress - address
 * @param {string | number} quoteAmount - uint256
 * @param {string | number} flag - uint8
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOCpProxyWithoutGlobalQuotaBid(cpAddress: string, quoteAmount: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint8","uint256"], [cpAddress,quoteAmount,flag,deadLine]);
  return hexlify(concat(['0xdb70b5c7', __encodeData]));
}

/**
 * encode createCrowdPooling
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {Array<string | number>} timeLine - uint256[]
 * @param {Array<string | number>} valueList - uint256[]
 * @param {Array<boolean>} switches - bool[]
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOCpProxyWithoutGlobalQuotaCreateCrowdPooling(baseToken: string, quoteToken: string, baseInAmount: string | number, timeLine: Array<string | number>, valueList: Array<string | number>, switches: Array<boolean>, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256[]","uint256[]","bool[]","uint256"], [baseToken,quoteToken,baseInAmount,timeLine,valueList,switches,deadLine]);
  return hexlify(concat(['0x9b58c78c', __encodeData]));
}