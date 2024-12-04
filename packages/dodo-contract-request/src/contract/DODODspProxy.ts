import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODODspProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x5245f5E66792cfbaCB64eFAef3121e7c5ccD879b","56":"0x69716E51E3F8Bec9c3D4E1bB46396384AE11C594","5000":"0x2e50e3e18c19C7d80B81888a961A13aEE49b962E","42161":"0xF0f8FB90039875e2682678E6C23828BdD16fAC9d","80084":"0x6bbfD968509752518c1e9fBb0918A8AF8615879e","167000":"0x928e9762B5223d5A2ac1F5b13E8A61907aCaa9Bd","543210":"0xd963daFC5ca21a4321a08f3845a839Cfa6A8c9b2","11155111":"0x64C15d15711586C34B9Ff86cFedB7ce09ff38C6E"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODspProxy_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODODspProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODspProxy_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODspProxy_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DSP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODspProxy_DSP_FACTORY_(chainId: number) {
  const __to = getDODODspProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfc382437', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODspProxy_DSP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODspProxy_DSP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _GSP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODspProxy_GSP_FACTORY_(chainId: number) {
  const __to = getDODODspProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c35d94e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODspProxy_GSP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODspProxy_GSP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODspProxy_WETH_(chainId: number) {
  const __to = getDODODspProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODspProxy_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODspProxy_WETH_(chainId as number);
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
export function encodeDODODspProxyAddDSPLiquidity(dspAddress: string, baseInAmount: string | number, quoteInAmount: string | number, baseMinAmount: string | number, quoteMinAmount: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint8","uint256"], [dspAddress,baseInAmount,quoteInAmount,baseMinAmount,quoteMinAmount,flag,deadLine]);
  return hexlify(concat(['0xe24db1ac', __encodeData]));
}

/**
 * encode createDODOGasSavingPair
 * @param {string} admin - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {string | number} quoteInAmount - uint256
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} mtFeeRate - uint256
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {string | number} priceLimit - uint256
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODODspProxyCreateDODOGasSavingPair(admin: string, baseToken: string, quoteToken: string, baseInAmount: string | number, quoteInAmount: string | number, lpFeeRate: string | number, mtFeeRate: string | number, i: string | number, k: string | number, priceLimit: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256"], [admin,baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,mtFeeRate,i,k,priceLimit,deadLine]);
  return hexlify(concat(['0x19bca19e', __encodeData]));
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
export function encodeDODODspProxyCreateDODOStablePair(baseToken: string, quoteToken: string, baseInAmount: string | number, quoteInAmount: string | number, lpFeeRate: string | number, i: string | number, k: string | number, isOpenTWAP: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTWAP,deadLine]);
  return hexlify(concat(['0x3d59492a', __encodeData]));
}