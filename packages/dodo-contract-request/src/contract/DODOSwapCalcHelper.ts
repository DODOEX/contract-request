import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOSwapCalcHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2818":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","47763":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","80084":"0x39eA8d4dA68f6da17E5b50946ebcEAd6d01ED2D2","98865":"0x0c76F95a2952DC171B26b152f2b30cA8968e79D5","167000":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","543210":"0xcC92342470177C534Fbd0883213cbC39E1F75398","11155931":"0xCA22c3165082c3223Bc350DE4e8880C01Cd80510"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DODO_SELL_HELPER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOSwapCalcHelper_DODO_SELL_HELPER_(chainId: number): Promise<string> {
  const __to = getDODOSwapCalcHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaf1280b0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOSwapCalcHelper_DODO_SELL_HELPER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOSwapCalcHelper_DODO_SELL_HELPER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOSwapCalcHelper_DODO_SELL_HELPER_(chainId as number);
    }
  }
}

/**
 * fetch calcReturnAmountV1
 * @param {number} chainId - number
 * @param {number} fromTokenAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {Array<number>} directions - uint8[]
 * @returns {bigint} returnAmount - uint256
 * @returns {Array<bigint>} midPrices - uint256[]
 * @returns {Array<bigint>} feeRates - uint256[]
 */
export function fetchDODOSwapCalcHelperCalcReturnAmountV1(chainId: number, fromTokenAmount: number, dodoPairs: Array<string>, directions: Array<number>): Promise<{
    returnAmount: bigint;
    midPrices: Array<bigint>;
    feeRates: Array<bigint>;
  }> {
  const __to = getDODOSwapCalcHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint8[]"], [fromTokenAmount,dodoPairs,directions]);
  const __data = hexlify(concat(['0x0683ecd9', __encodeData]));
  return contractRequests.batchCall<{
    returnAmount: bigint;
    midPrices: Array<bigint>;
    feeRates: Array<bigint>;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"returnAmount","type":"uint256"},{"internalType":"uint256[]","name":"midPrices","type":"uint256[]"},{"internalType":"uint256[]","name":"feeRates","type":"uint256[]"}])
}
export function getFetchDODOSwapCalcHelperCalcReturnAmountV1QueryOptions(chainId: number | undefined, fromTokenAmount: number | undefined, dodoPairs: Array<string> | undefined, directions: Array<number> | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOSwapCalcHelperCalcReturnAmountV1', chainId, fromTokenAmount, dodoPairs, directions],
    enabled: chainId !== undefined && chainId !== null && fromTokenAmount !== undefined && fromTokenAmount !== null && dodoPairs !== undefined && dodoPairs !== null && directions !== undefined && directions !== null, 
    queryFn: () => {
        return fetchDODOSwapCalcHelperCalcReturnAmountV1(chainId as number,fromTokenAmount as number,dodoPairs as Array<string>,directions as Array<number>);
    }
  }
}