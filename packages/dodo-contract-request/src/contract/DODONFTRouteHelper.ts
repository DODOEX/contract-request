import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTRouteHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x90294216e8C79e812d3F1965f5c8362F0EFB7603","56":"0x2d8349E957A69E4cC7B4ef225A4B6a85Be57FBF3","137":"0x19309bB932df8C07DbCa8dF93ad4FCc419271e16","42161":"0xFcbd98cc89b2cf60362d3533463C1309f39c539D"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _NFT_REGISTER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTRouteHelper_NFT_REGISTER_(chainId: number) {
  const __to = getDODONFTRouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8336f005', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTRouteHelper_NFT_REGISTER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [chainId !== undefined && chainId !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODONFTRouteHelper_NFT_REGISTER_(chainId);
    }
  }
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
  return contractRequests.batchCall<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]>(chainId, __to, __data, [{"components":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"K","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"},{"internalType":"uint256","name":"Q","type":"uint256"},{"internalType":"uint256","name":"B0","type":"uint256"},{"internalType":"uint256","name":"Q0","type":"uint256"},{"internalType":"uint256","name":"R","type":"uint256"},{"internalType":"uint256","name":"lpFeeRate","type":"uint256"},{"internalType":"uint256","name":"mtFeeRate","type":"uint256"},{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"curPair","type":"address"},{"internalType":"uint256","name":"pairVersion","type":"uint256"}],"internalType":"struct DODONFTRouteHelper.PairDetail[]","name":"res","type":"tuple[]"}])
}
export function getFetchDODONFTRouteHelperGetPairDetailQueryOptions(chainId: number | undefined, token0: string | undefined, token1: string | undefined, userAddr: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, token0, token1, userAddr],
    enabled: [chainId !== undefined && chainId !== null, token0 !== undefined && token0 !== null, token1 !== undefined && token1 !== null, userAddr !== undefined && userAddr !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODONFTRouteHelperGetPairDetail(chainId, token0, token1, userAddr);
    }
  }
}