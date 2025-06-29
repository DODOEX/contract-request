import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getUniswapV2FactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x7386F6F2375a38FBD1F4dA1d3eb39cd8dD8d1b40","56":"0x562723560131C47417dfcD6BB1A089E4D7C7943C","137":"0x562723560131C47417dfcD6BB1A089E4D7C7943C","1689":"0x2F95b87AF3970A686fC20572e44978b621C6FFF7","8453":"0x1909B6842964030aF3897bdf8ba760bD91439463","10143":"0x4F71216b036925E9BDb4511D22517E9FdED33390","42161":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","47763":"0x3a64Ec3606FF7310E8fAd6FcC008e39705fB496d","167000":"0x351a86A2C8dc47D396305AAcd7F126E096b2eee4","421614":"0x0976e26eE276DC0703d046DB46d0ca8A1EeC3bAe","688688":"0x7b29694E8d44c154E3a2c20A6A2D665D65264e6e","11155111":"0xf553a3EA6ecc758ed6f05F62C831b1D71bA7e09c","11155931":"0x4f8C8E05e946de09d768d062c5e969D1C8920C72"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch allPairs
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryAllPairs(chainId: number, __input1: number): Promise<string> {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x1e3dd18b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryAllPairsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryAllPairs', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryAllPairs(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch allPairsLength
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2FactoryAllPairsLength(chainId: number): Promise<bigint> {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x574f2ba3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchUniswapV2FactoryAllPairsLengthQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryAllPairsLength', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryAllPairsLength(chainId as number);
    }
  }
}

/**
 * fetch feeTo
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFeeTo(chainId: number): Promise<string> {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x017e7e58', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryFeeToQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryFeeTo', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryFeeTo(chainId as number);
    }
  }
}

/**
 * fetch feeToSetter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFeeToSetter(chainId: number): Promise<string> {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x094b7415', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryFeeToSetterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryFeeToSetter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryFeeToSetter(chainId as number);
    }
  }
}

/**
 * fetch getPair
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @param {number} __input3 - uint256
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryGetPair(chainId: number, __input1: string, __input2: string, __input3: number): Promise<string> {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0x5eced480', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryGetPairQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined, __input3: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryGetPair', chainId, __input1, __input2, __input3],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null && __input3 !== undefined && __input3 !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryGetPair(chainId as number,__input1 as string,__input2 as string,__input3 as number);
    }
  }
}

/**
 * encode createPair
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string | number} feeRate - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2FactoryCreatePair(tokenA: string, tokenB: string, feeRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [tokenA,tokenB,feeRate]);
  return hexlify(concat(['0x6b600d1c', __encodeData]));
}

/**
 * encode setFeeTo
 * @param {string} _feeTo - address
 * @returns {string} encode data
 */
export function encodeUniswapV2FactorySetFeeTo(_feeTo: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeTo]);
  return hexlify(concat(['0xf46901ed', __encodeData]));
}

/**
 * encode setFeeToSetter
 * @param {string} _feeToSetter - address
 * @returns {string} encode data
 */
export function encodeUniswapV2FactorySetFeeToSetter(_feeToSetter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeToSetter]);
  return hexlify(concat(['0xa2e74af6', __encodeData]));
}

/**
 * encode setLpMtRatio
 * @param {string} pool - address
 * @param {string | number} ratio - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2FactorySetLpMtRatio(pool: string, ratio: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [pool,ratio]);
  return hexlify(concat(['0x4a4f2ace', __encodeData]));
}