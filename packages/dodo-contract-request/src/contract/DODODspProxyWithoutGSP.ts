import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODODspProxyWithoutGSPContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x4599ed18F34cFE06820E3684bF0aACB8D75c644d","10":"0x61721e89a498dADa7aD579482BDC2aE60a9C5D54","56":"0x2442A8B5cdf1E659F3F949A7E454Caa554D4E65a","137":"0xA3dfF6ae0F73f0970E31Da63B3736F7D3CEF683e","196":"0xB3d4823e02A9AB9A9A0Cc1636E776c360B67bED1","1030":"0x8d9ccc26cbf3d49bba76e9920c3e6ed29e06b5cc","2818":"0x928e9762B5223d5A2ac1F5b13E8A61907aCaa9Bd","5000":"0x2933c0374089D7D98BA0C71c5E02E1A0e09deBEE","8453":"0x49186E32fEd50fd6B5604A2618c7B0b03Cd41414","10169":"0x0B1467f71c082D8d410aF4376C685D9A6893cF36","42161":"0x36E5238B4479d1ba0bFE47550B0B8e4f4f500EAA","43114":"0xeCEaDe494FD5F913Fd937C5CAc4577236395Dc32","48900":"0xB3d4823e02A9AB9A9A0Cc1636E776c360B67bED1","59144":"0x6D3bd005A8a75d6522C9cFE7d309BB1Cf9650e03","98865":"0x7386F6F2375a38FBD1F4dA1d3eb39cd8dD8d1b40","200901":"0xdf23D0d6b64D1B43e81B0F43B4A0117fA0DD9a4f","534352":"0x7Dd8c909E1F48a68FfEF03492761AF17B1496EDc","11155111":"0x987bFBE33c9cF18cAA665B792Db66339a9c16D32","1313161554":"0x53233ABD9108761258a4B6B7822abFD6716B129B"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODspProxyWithoutGSP_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODODspProxyWithoutGSPContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODspProxyWithoutGSP_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODspProxyWithoutGSP_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DSP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODspProxyWithoutGSP_DSP_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODODspProxyWithoutGSPContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfc382437', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODspProxyWithoutGSP_DSP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODspProxyWithoutGSP_DSP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODspProxyWithoutGSP_WETH_(chainId: number): Promise<string> {
  const __to = getDODODspProxyWithoutGSPContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODspProxyWithoutGSP_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODspProxyWithoutGSP_WETH_(chainId as number);
    }
  }
}

/**
 * encode addDSPLiquidity
 * @param {string} dspAddress - address
 * @param {string | number} baseInAmount - uint256
 * @param {string | number} quoteInAmount - uint256
 * @param {string | number} baseMinAmount - uint256
 * @param {string | number} quoteMinAmount - uint256
 * @param {string | number} flag - uint8
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODODspProxyWithoutGSPAddDSPLiquidity(dspAddress: string, baseInAmount: string | number, quoteInAmount: string | number, baseMinAmount: string | number, quoteMinAmount: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint8","uint256"], [dspAddress,baseInAmount,quoteInAmount,baseMinAmount,quoteMinAmount,flag,deadLine]);
  return hexlify(concat(['0xe24db1ac', __encodeData]));
}

/**
 * encode createDODOStablePair
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {string | number} quoteInAmount - uint256
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODODspProxyWithoutGSPCreateDODOStablePair(baseToken: string, quoteToken: string, baseInAmount: string | number, quoteInAmount: string | number, lpFeeRate: string | number, i: string | number, k: string | number, isOpenTWAP: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTWAP,deadLine]);
  return hexlify(concat(['0x3d59492a', __encodeData]));
}