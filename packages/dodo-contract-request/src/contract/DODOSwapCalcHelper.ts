import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOSwapCalcHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"177":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","1689":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","2390":"0x39eA8d4dA68f6da17E5b50946ebcEAd6d01ED2D2","2818":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","10143":"0xCA22c3165082c3223Bc350DE4e8880C01Cd80510","43111":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","47763":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","80084":"0x39eA8d4dA68f6da17E5b50946ebcEAd6d01ED2D2","80094":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","98864":"0x0376076C9D1c7DCb899DC5Db96Cec0492Bd375b7","98866":"0xD0CF7dfbF09CAfaB8AEf00e0Ce19a4638004a364","167000":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","421614":"0xC74EF40153443EF65fB9bA31382BDD6594817b8F","543210":"0xcC92342470177C534Fbd0883213cbC39E1F75398","11155931":"0xCA22c3165082c3223Bc350DE4e8880C01Cd80510"};
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