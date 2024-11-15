import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTRouteHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x90294216e8C79e812d3F1965f5c8362F0EFB7603"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _NFT_REGISTER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODONFTRouteHelper_NFT_REGISTER_(chainId: number) {
  const __to = getDODONFTRouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8336f005', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getPairDetail
 * @param {number} chainId - number
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @param {string} userAddr - address
 * @returns {[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]} res - tuple[]
 */
export function fetchDODONFTRouteHelperGetPairDetail(chainId: number, token0: string, token1: string, userAddr: string) {
  const __to = getDODONFTRouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token0,token1,userAddr]);
  const __data = hexlify(concat(['0x9d15e3ae', __encodeData]));
  return contractRequests.batchCall<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]>(chainId, __to, __data, ["tuple[]"])
}