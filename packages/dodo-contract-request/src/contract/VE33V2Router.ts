import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVE33V2RouterContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2810":"0x468e60B84b11B3B1532D7C41FcBb79DA352aa12d"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch ETHER
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V2RouterETHER(chainId: number): Promise<string> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x42cb1fbc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2RouterETHERQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterETHER', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V2RouterETHER(chainId as number);
    }
  }
}

/**
 * fetch defaultFactory
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V2RouterDefaultFactory(chainId: number): Promise<string> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd4b6846d', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2RouterDefaultFactoryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterDefaultFactory', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V2RouterDefaultFactory(chainId as number);
    }
  }
}

/**
 * fetch factoryRegistry
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V2RouterFactoryRegistry(chainId: number): Promise<string> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3bf0c9fb', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2RouterFactoryRegistryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterFactoryRegistry', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V2RouterFactoryRegistry(chainId as number);
    }
  }
}

/**
 * fetch generateZapInParams
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string} _factory - address
 * @param {number} amountInA - uint256
 * @param {number} amountInB - uint256
 * @param {[string, string, boolean, string]} routesA - tuple[]
 * @param {[string, string, boolean, string]} routesB - tuple[]
 * @returns {bigint} amountOutMinA - uint256
 * @returns {bigint} amountOutMinB - uint256
 * @returns {bigint} amountAMin - uint256
 * @returns {bigint} amountBMin - uint256
 */
export function fetchVE33V2RouterGenerateZapInParams(chainId: number, tokenA: string, tokenB: string, stable: boolean, _factory: string, amountInA: number, amountInB: number, routesA: [string, string, boolean, string], routesB: [string, string, boolean, string]): Promise<{
    amountOutMinA: bigint;
    amountOutMinB: bigint;
    amountAMin: bigint;
    amountBMin: bigint;
  }> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","bool","address","uint256","uint256","tuple(address, address, bool, address)[]","tuple(address, address, bool, address)[]"], [tokenA,tokenB,stable,_factory,amountInA,amountInB,routesA,routesB]);
  const __data = hexlify(concat(['0x07db50fa', __encodeData]));
  return contractRequests.batchCall<{
    amountOutMinA: bigint;
    amountOutMinB: bigint;
    amountAMin: bigint;
    amountBMin: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"amountOutMinA","type":"uint256"},{"internalType":"uint256","name":"amountOutMinB","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"}])
}
export function getFetchVE33V2RouterGenerateZapInParamsQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined, stable: boolean | undefined, _factory: string | undefined, amountInA: number | undefined, amountInB: number | undefined, routesA: [string, string, boolean, string] | undefined, routesB: [string, string, boolean, string] | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterGenerateZapInParams', chainId, tokenA, tokenB, stable, _factory, amountInA, amountInB, routesA, routesB],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null && stable !== undefined && stable !== null && _factory !== undefined && _factory !== null && amountInA !== undefined && amountInA !== null && amountInB !== undefined && amountInB !== null && routesA !== undefined && routesA !== null && routesB !== undefined && routesB !== null, 
    queryFn: () => {
        return fetchVE33V2RouterGenerateZapInParams(chainId as number,tokenA as string,tokenB as string,stable as boolean,_factory as string,amountInA as number,amountInB as number,routesA as [string, string, boolean, string],routesB as [string, string, boolean, string]);
    }
  }
}

/**
 * fetch generateZapOutParams
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string} _factory - address
 * @param {number} liquidity - uint256
 * @param {[string, string, boolean, string]} routesA - tuple[]
 * @param {[string, string, boolean, string]} routesB - tuple[]
 * @returns {bigint} amountOutMinA - uint256
 * @returns {bigint} amountOutMinB - uint256
 * @returns {bigint} amountAMin - uint256
 * @returns {bigint} amountBMin - uint256
 */
export function fetchVE33V2RouterGenerateZapOutParams(chainId: number, tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: number, routesA: [string, string, boolean, string], routesB: [string, string, boolean, string]): Promise<{
    amountOutMinA: bigint;
    amountOutMinB: bigint;
    amountAMin: bigint;
    amountBMin: bigint;
  }> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","bool","address","uint256","tuple(address, address, bool, address)[]","tuple(address, address, bool, address)[]"], [tokenA,tokenB,stable,_factory,liquidity,routesA,routesB]);
  const __data = hexlify(concat(['0x7539d413', __encodeData]));
  return contractRequests.batchCall<{
    amountOutMinA: bigint;
    amountOutMinB: bigint;
    amountAMin: bigint;
    amountBMin: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"amountOutMinA","type":"uint256"},{"internalType":"uint256","name":"amountOutMinB","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"}])
}
export function getFetchVE33V2RouterGenerateZapOutParamsQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined, stable: boolean | undefined, _factory: string | undefined, liquidity: number | undefined, routesA: [string, string, boolean, string] | undefined, routesB: [string, string, boolean, string] | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterGenerateZapOutParams', chainId, tokenA, tokenB, stable, _factory, liquidity, routesA, routesB],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null && stable !== undefined && stable !== null && _factory !== undefined && _factory !== null && liquidity !== undefined && liquidity !== null && routesA !== undefined && routesA !== null && routesB !== undefined && routesB !== null, 
    queryFn: () => {
        return fetchVE33V2RouterGenerateZapOutParams(chainId as number,tokenA as string,tokenB as string,stable as boolean,_factory as string,liquidity as number,routesA as [string, string, boolean, string],routesB as [string, string, boolean, string]);
    }
  }
}

/**
 * fetch getAmountsOut
 * @param {number} chainId - number
 * @param {number} amountIn - uint256
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @returns {Array<bigint>} amounts - uint256[]
 */
export function fetchVE33V2RouterGetAmountsOut(chainId: number, amountIn: number, routes: [string, string, boolean, string]): Promise<Array<bigint>> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","tuple(address, address, bool, address)[]"], [amountIn,routes]);
  const __data = hexlify(concat(['0x5509a1ac', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}])
}
export function getFetchVE33V2RouterGetAmountsOutQueryOptions(chainId: number | undefined, amountIn: number | undefined, routes: [string, string, boolean, string] | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterGetAmountsOut', chainId, amountIn, routes],
    enabled: chainId !== undefined && chainId !== null && amountIn !== undefined && amountIn !== null && routes !== undefined && routes !== null, 
    queryFn: () => {
        return fetchVE33V2RouterGetAmountsOut(chainId as number,amountIn as number,routes as [string, string, boolean, string]);
    }
  }
}

/**
 * fetch getReserves
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string} _factory - address
 * @returns {bigint} reserveA - uint256
 * @returns {bigint} reserveB - uint256
 */
export function fetchVE33V2RouterGetReserves(chainId: number, tokenA: string, tokenB: string, stable: boolean, _factory: string): Promise<{
    reserveA: bigint;
    reserveB: bigint;
  }> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","bool","address"], [tokenA,tokenB,stable,_factory]);
  const __data = hexlify(concat(['0x8c0037dc', __encodeData]));
  return contractRequests.batchCall<{
    reserveA: bigint;
    reserveB: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}])
}
export function getFetchVE33V2RouterGetReservesQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined, stable: boolean | undefined, _factory: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterGetReserves', chainId, tokenA, tokenB, stable, _factory],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null && stable !== undefined && stable !== null && _factory !== undefined && _factory !== null, 
    queryFn: () => {
        return fetchVE33V2RouterGetReserves(chainId as number,tokenA as string,tokenB as string,stable as boolean,_factory as string);
    }
  }
}

/**
 * fetch isTrustedForwarder
 * @param {number} chainId - number
 * @param {string} forwarder - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V2RouterIsTrustedForwarder(chainId: number, forwarder: string): Promise<boolean> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [forwarder]);
  const __data = hexlify(concat(['0x572b6c05', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V2RouterIsTrustedForwarderQueryOptions(chainId: number | undefined, forwarder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterIsTrustedForwarder', chainId, forwarder],
    enabled: chainId !== undefined && chainId !== null && forwarder !== undefined && forwarder !== null, 
    queryFn: () => {
        return fetchVE33V2RouterIsTrustedForwarder(chainId as number,forwarder as string);
    }
  }
}

/**
 * fetch poolFor
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string} _factory - address
 * @returns {string} pool - address
 */
export function fetchVE33V2RouterPoolFor(chainId: number, tokenA: string, tokenB: string, stable: boolean, _factory: string): Promise<string> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","bool","address"], [tokenA,tokenB,stable,_factory]);
  const __data = hexlify(concat(['0x874029d9', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"pool","type":"address"}])
}
export function getFetchVE33V2RouterPoolForQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined, stable: boolean | undefined, _factory: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterPoolFor', chainId, tokenA, tokenB, stable, _factory],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null && stable !== undefined && stable !== null && _factory !== undefined && _factory !== null, 
    queryFn: () => {
        return fetchVE33V2RouterPoolFor(chainId as number,tokenA as string,tokenB as string,stable as boolean,_factory as string);
    }
  }
}

/**
 * fetch quoteAddLiquidity
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string} _factory - address
 * @param {number} amountADesired - uint256
 * @param {number} amountBDesired - uint256
 * @returns {bigint} amountA - uint256
 * @returns {bigint} amountB - uint256
 * @returns {bigint} liquidity - uint256
 */
export function fetchVE33V2RouterQuoteAddLiquidity(chainId: number, tokenA: string, tokenB: string, stable: boolean, _factory: string, amountADesired: number, amountBDesired: number): Promise<{
    amountA: bigint;
    amountB: bigint;
    liquidity: bigint;
  }> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","bool","address","uint256","uint256"], [tokenA,tokenB,stable,_factory,amountADesired,amountBDesired]);
  const __data = hexlify(concat(['0xce700c29', __encodeData]));
  return contractRequests.batchCall<{
    amountA: bigint;
    amountB: bigint;
    liquidity: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}])
}
export function getFetchVE33V2RouterQuoteAddLiquidityQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined, stable: boolean | undefined, _factory: string | undefined, amountADesired: number | undefined, amountBDesired: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterQuoteAddLiquidity', chainId, tokenA, tokenB, stable, _factory, amountADesired, amountBDesired],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null && stable !== undefined && stable !== null && _factory !== undefined && _factory !== null && amountADesired !== undefined && amountADesired !== null && amountBDesired !== undefined && amountBDesired !== null, 
    queryFn: () => {
        return fetchVE33V2RouterQuoteAddLiquidity(chainId as number,tokenA as string,tokenB as string,stable as boolean,_factory as string,amountADesired as number,amountBDesired as number);
    }
  }
}

/**
 * fetch quoteRemoveLiquidity
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string} _factory - address
 * @param {number} liquidity - uint256
 * @returns {bigint} amountA - uint256
 * @returns {bigint} amountB - uint256
 */
export function fetchVE33V2RouterQuoteRemoveLiquidity(chainId: number, tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: number): Promise<{
    amountA: bigint;
    amountB: bigint;
  }> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","bool","address","uint256"], [tokenA,tokenB,stable,_factory,liquidity]);
  const __data = hexlify(concat(['0xc92de3ec', __encodeData]));
  return contractRequests.batchCall<{
    amountA: bigint;
    amountB: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}])
}
export function getFetchVE33V2RouterQuoteRemoveLiquidityQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined, stable: boolean | undefined, _factory: string | undefined, liquidity: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterQuoteRemoveLiquidity', chainId, tokenA, tokenB, stable, _factory, liquidity],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null && stable !== undefined && stable !== null && _factory !== undefined && _factory !== null && liquidity !== undefined && liquidity !== null, 
    queryFn: () => {
        return fetchVE33V2RouterQuoteRemoveLiquidity(chainId as number,tokenA as string,tokenB as string,stable as boolean,_factory as string,liquidity as number);
    }
  }
}

/**
 * fetch quoteStableLiquidityRatio
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string} _factory - address
 * @returns {bigint} ratio - uint256
 */
export function fetchVE33V2RouterQuoteStableLiquidityRatio(chainId: number, tokenA: string, tokenB: string, _factory: string): Promise<bigint> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [tokenA,tokenB,_factory]);
  const __data = hexlify(concat(['0xf5ba53c7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"ratio","type":"uint256"}])
}
export function getFetchVE33V2RouterQuoteStableLiquidityRatioQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined, _factory: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterQuoteStableLiquidityRatio', chainId, tokenA, tokenB, _factory],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null && _factory !== undefined && _factory !== null, 
    queryFn: () => {
        return fetchVE33V2RouterQuoteStableLiquidityRatio(chainId as number,tokenA as string,tokenB as string,_factory as string);
    }
  }
}

/**
 * fetch sortTokens
 * @param {number} chainId - number
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @returns {string} token0 - address
 * @returns {string} token1 - address
 */
export function fetchVE33V2RouterSortTokens(chainId: number, tokenA: string, tokenB: string): Promise<{
    token0: string;
    token1: string;
  }> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [tokenA,tokenB]);
  const __data = hexlify(concat(['0x544caa56', __encodeData]));
  return contractRequests.batchCall<{
    token0: string;
    token1: string;
  }>(chainId, __to, __data, [{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"}])
}
export function getFetchVE33V2RouterSortTokensQueryOptions(chainId: number | undefined, tokenA: string | undefined, tokenB: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterSortTokens', chainId, tokenA, tokenB],
    enabled: chainId !== undefined && chainId !== null && tokenA !== undefined && tokenA !== null && tokenB !== undefined && tokenB !== null, 
    queryFn: () => {
        return fetchVE33V2RouterSortTokens(chainId as number,tokenA as string,tokenB as string);
    }
  }
}

/**
 * fetch voter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V2RouterVoter(chainId: number): Promise<string> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46c96aac', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2RouterVoterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterVoter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V2RouterVoter(chainId as number);
    }
  }
}

/**
 * fetch weth
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V2RouterWeth(chainId: number): Promise<string> {
  const __to = getVE33V2RouterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3fc8cef3', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract IWETH","name":"","type":"address"}])
}
export function getFetchVE33V2RouterWethQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2RouterWeth', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V2RouterWeth(chainId as number);
    }
  }
}

/**
 * encode UNSAFE_swapExactTokensForTokens
 * @param {Array<string | number>} amounts - uint256[]
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterUNSAFE_swapExactTokensForTokens(amounts: Array<string | number>, routes: [string, string, boolean, string], to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256[]","tuple(address, address, bool, address)[]","address","uint256"], [amounts,routes,to,deadline]);
  return hexlify(concat(['0x4111d597', __encodeData]));
}

/**
 * encode addLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string | number} amountADesired - uint256
 * @param {string | number} amountBDesired - uint256
 * @param {string | number} amountAMin - uint256
 * @param {string | number} amountBMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: string | number, amountBDesired: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bool","uint256","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,stable,amountADesired,amountBDesired,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0x5a47ddc3', __encodeData]));
}

/**
 * encode addLiquidityETH
 * @param {string} token - address
 * @param {boolean} stable - bool
 * @param {string | number} amountTokenDesired - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterAddLiquidityETH(token: string, stable: boolean, amountTokenDesired: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","uint256","uint256","uint256","address","uint256"], [token,stable,amountTokenDesired,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xb7e0d4c0', __encodeData]));
}

/**
 * encode removeLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {boolean} stable - bool
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountAMin - uint256
 * @param {string | number} amountBMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bool","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,stable,liquidity,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0x0dede6c4', __encodeData]));
}

/**
 * encode removeLiquidityETH
 * @param {string} token - address
 * @param {boolean} stable - bool
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterRemoveLiquidityETH(token: string, stable: boolean, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","uint256","uint256","uint256","address","uint256"], [token,stable,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xd7b0e0a5', __encodeData]));
}

/**
 * encode removeLiquidityETHSupportingFeeOnTransferTokens
 * @param {string} token - address
 * @param {boolean} stable - bool
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterRemoveLiquidityETHSupportingFeeOnTransferTokens(token: string, stable: boolean, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","uint256","uint256","uint256","address","uint256"], [token,stable,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xfe411f14', __encodeData]));
}

/**
 * encode swapExactETHForTokens
 * @param {string | number} amountOutMin - uint256
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterSwapExactETHForTokens(amountOutMin: string | number, routes: [string, string, boolean, string], to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","tuple(address, address, bool, address)[]","address","uint256"], [amountOutMin,routes,to,deadline]);
  return hexlify(concat(['0x903638a4', __encodeData]));
}

/**
 * encode swapExactETHForTokensSupportingFeeOnTransferTokens
 * @param {string | number} amountOutMin - uint256
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterSwapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: string | number, routes: [string, string, boolean, string], to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","tuple(address, address, bool, address)[]","address","uint256"], [amountOutMin,routes,to,deadline]);
  return hexlify(concat(['0x3da5acba', __encodeData]));
}

/**
 * encode swapExactTokensForETH
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterSwapExactTokensForETH(amountIn: string | number, amountOutMin: string | number, routes: [string, string, boolean, string], to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","tuple(address, address, bool, address)[]","address","uint256"], [amountIn,amountOutMin,routes,to,deadline]);
  return hexlify(concat(['0xc6b7f1b6', __encodeData]));
}

/**
 * encode swapExactTokensForETHSupportingFeeOnTransferTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterSwapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, routes: [string, string, boolean, string], to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","tuple(address, address, bool, address)[]","address","uint256"], [amountIn,amountOutMin,routes,to,deadline]);
  return hexlify(concat(['0x12bc3aca', __encodeData]));
}

/**
 * encode swapExactTokensForTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterSwapExactTokensForTokens(amountIn: string | number, amountOutMin: string | number, routes: [string, string, boolean, string], to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","tuple(address, address, bool, address)[]","address","uint256"], [amountIn,amountOutMin,routes,to,deadline]);
  return hexlify(concat(['0xcac88ea9', __encodeData]));
}

/**
 * encode swapExactTokensForTokensSupportingFeeOnTransferTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {[string, string, boolean, string]} routes - tuple[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2RouterSwapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, routes: [string, string, boolean, string], to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","tuple(address, address, bool, address)[]","address","uint256"], [amountIn,amountOutMin,routes,to,deadline]);
  return hexlify(concat(['0x88cd821e', __encodeData]));
}

/**
 * encode zapIn
 * @param {string} tokenIn - address
 * @param {string | number} amountInA - uint256
 * @param {string | number} amountInB - uint256
 * @param {{tokenA: string; tokenB: string; stable: boolean; factory: string; amountOutMinA: string | number; amountOutMinB: string | number; amountAMin: string | number; amountBMin: string | number}} zapInPool - tuple
 * @param {[string, string, boolean, string]} routesA - tuple[]
 * @param {[string, string, boolean, string]} routesB - tuple[]
 * @param {string} to - address
 * @param {boolean} stake - bool
 * @returns {string} encode data
 */
export function encodeVE33V2RouterZapIn(tokenIn: string, amountInA: string | number, amountInB: string | number, zapInPool: {tokenA: string; tokenB: string; stable: boolean; factory: string; amountOutMinA: string | number; amountOutMinB: string | number; amountAMin: string | number; amountBMin: string | number}, routesA: [string, string, boolean, string], routesB: [string, string, boolean, string], to: string, stake: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","tuple(address, address, bool, address, uint256, uint256, uint256, uint256)","tuple(address, address, bool, address)[]","tuple(address, address, bool, address)[]","address","bool"], [tokenIn,amountInA,amountInB,Object.values(zapInPool),routesA,routesB,to,stake]);
  return hexlify(concat(['0xfb49bafd', __encodeData]));
}

/**
 * encode zapOut
 * @param {string} tokenOut - address
 * @param {string | number} liquidity - uint256
 * @param {{tokenA: string; tokenB: string; stable: boolean; factory: string; amountOutMinA: string | number; amountOutMinB: string | number; amountAMin: string | number; amountBMin: string | number}} zapOutPool - tuple
 * @param {[string, string, boolean, string]} routesA - tuple[]
 * @param {[string, string, boolean, string]} routesB - tuple[]
 * @returns {string} encode data
 */
export function encodeVE33V2RouterZapOut(tokenOut: string, liquidity: string | number, zapOutPool: {tokenA: string; tokenB: string; stable: boolean; factory: string; amountOutMinA: string | number; amountOutMinB: string | number; amountAMin: string | number; amountBMin: string | number}, routesA: [string, string, boolean, string], routesB: [string, string, boolean, string]) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","tuple(address, address, bool, address, uint256, uint256, uint256, uint256)","tuple(address, address, bool, address)[]","tuple(address, address, bool, address)[]"], [tokenOut,liquidity,Object.values(zapOutPool),routesA,routesB]);
  return hexlify(concat(['0xa81b9159', __encodeData]));
}