import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getUniswapV3FactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"10143":"0x39C9DD6549700588fBF3d565F39AFDAd953029F7","167000":"0x78172691DD3B8ADa7aEbd9bFfB487FB11D735DB2","421614":"0x80465a300299e90132DFa2c7c3Fc3a12424599bB","11155111":"0x3d2A7Bac4E8439ABe86B58324695e921a5FC0987","11155931":"0x21AD45b37C130a77Acc06DFA752dDb224Aed9943"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch feeAmountTickSpacing
 * @param {number} chainId - number
 * @param {number} __input1 - uint24
 * @returns {bigint} __output0 - int24
 */
export function fetchUniswapV3FactoryFeeAmountTickSpacing(chainId: number, __input1: number): Promise<bigint> {
  const __to = getUniswapV3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint24"], [__input1]);
  const __data = hexlify(concat(['0x22afcccb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int24","name":"","type":"int24"}])
}
export function getFetchUniswapV3FactoryFeeAmountTickSpacingQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV3FactoryFeeAmountTickSpacing', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchUniswapV3FactoryFeeAmountTickSpacing(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch getPool
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @param {number} __input3 - uint24
 * @returns {string} __output0 - address
 */
export function fetchUniswapV3FactoryGetPool(chainId: number, __input1: string, __input2: string, __input3: number): Promise<string> {
  const __to = getUniswapV3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint24"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0x1698ee82', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV3FactoryGetPoolQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined, __input3: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV3FactoryGetPool', chainId, __input1, __input2, __input3],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null && __input3 !== undefined && __input3 !== null, 
    queryFn: () => {
        return fetchUniswapV3FactoryGetPool(chainId as number,__input1 as string,__input2 as string,__input3 as number);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV3FactoryOwner(chainId: number): Promise<string> {
  const __to = getUniswapV3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV3FactoryOwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV3FactoryOwner', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV3FactoryOwner(chainId as number);
    }
  }
}

/**
 * fetch parameters
 * @param {number} chainId - number
 * @returns {string} factory - address
 * @returns {string} token0 - address
 * @returns {string} token1 - address
 * @returns {bigint} fee - uint24
 * @returns {bigint} tickSpacing - int24
 */
export function fetchUniswapV3FactoryParameters(chainId: number): Promise<{
    factory: string;
    token0: string;
    token1: string;
    fee: bigint;
    tickSpacing: bigint;
  }> {
  const __to = getUniswapV3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x89035730', __encodeData]));
  return contractRequests.batchCall<{
    factory: string;
    token0: string;
    token1: string;
    fee: bigint;
    tickSpacing: bigint;
  }>(chainId, __to, __data, [{"internalType":"address","name":"factory","type":"address"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"int24","name":"tickSpacing","type":"int24"}])
}
export function getFetchUniswapV3FactoryParametersQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV3FactoryParameters', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV3FactoryParameters(chainId as number);
    }
  }
}

/**
 * encode createPool
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string | number} fee - uint24
 * @returns {string} encode data
 */
export function encodeUniswapV3FactoryCreatePool(tokenA: string, tokenB: string, fee: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint24"], [tokenA,tokenB,fee]);
  return hexlify(concat(['0xa1671295', __encodeData]));
}

/**
 * encode enableFeeAmount
 * @param {string | number} fee - uint24
 * @param {string | number} tickSpacing - int24
 * @returns {string} encode data
 */
export function encodeUniswapV3FactoryEnableFeeAmount(fee: string | number, tickSpacing: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint24","int24"], [fee,tickSpacing]);
  return hexlify(concat(['0x8a7c195f', __encodeData]));
}

/**
 * encode setOwner
 * @param {string} _owner - address
 * @returns {string} encode data
 */
export function encodeUniswapV3FactorySetOwner(_owner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_owner]);
  return hexlify(concat(['0x13af4035', __encodeData]));
}