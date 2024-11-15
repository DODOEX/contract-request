import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOCalleeHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x45a7E2E9D780613E047f7e78a9d3902ff854B522","2818":"0x94B66F3156353a12A6004d098A16F2fCfF9E8348","80084":"0x842b59E74Ca9851fF0C35741C5f0923c63825BA8","167000":"0x94B66F3156353a12A6004d098A16F2fCfF9E8348","543210":"0x094867f0713ac77786E0b9c2d74216bE934470F4"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOCalleeHelper_WETH_(chainId: number) {
  const __to = getDODOCalleeHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode CPCancelCall
 * @param {string} assetTo - address
 * @param {number} amount - uint256
 * @param {string}  - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperCPCancelCall(assetTo: string, amount: number, : string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes"], [assetTo,amount,__input1]);
  return hexlify(concat(['0x6430f110', __encodeData]));
}

/**
 * encode CPClaimBidCall
 * @param {string} assetTo - address
 * @param {number} baseAmount - uint256
 * @param {number} quoteAmount - uint256
 * @param {string}  - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperCPClaimBidCall(assetTo: string, baseAmount: number, quoteAmount: number, : string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","bytes"], [assetTo,baseAmount,quoteAmount,__input1]);
  return hexlify(concat(['0x7ceef916', __encodeData]));
}

/**
 * encode DVMSellShareCall
 * @param {string} assetTo - address
 * @param {number}  - uint256
 * @param {number} baseAmount - uint256
 * @param {number} quoteAmount - uint256
 * @param {string}  - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperDVMSellShareCall(assetTo: string, : number, baseAmount: number, quoteAmount: number, : string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","bytes"], [assetTo,__input1,baseAmount,quoteAmount,__input2]);
  return hexlify(concat(['0x2411d338', __encodeData]));
}

/**
 * encode NFTRedeemCall
 * @param {string} assetTo - address
 * @param {number} quoteAmount - uint256
 * @param {string}  - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperNFTRedeemCall(assetTo: string, quoteAmount: number, : string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes"], [assetTo,quoteAmount,__input1]);
  return hexlify(concat(['0x53c06360', __encodeData]));
}