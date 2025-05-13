import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - bytes32
 */
export function fetchVE33V2PairDOMAIN_SEPARATOR(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchVE33V2PairDOMAIN_SEPARATORQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairDOMAIN_SEPARATOR', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairDOMAIN_SEPARATOR(chainId as number,__to as string);
    }
  }
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairAllowance(chainId: number, __to: string, owner: string, spender: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairAllowanceQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairAllowance', chainId, __to, owner, spender],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && owner !== undefined && owner !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchVE33V2PairAllowance(chainId as number,__to as string,owner as string,spender as string);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} account - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairBalanceOf(chainId: number, __to: string, account: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairBalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairBalanceOf', chainId, __to, account],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && account !== undefined && account !== null, 
    queryFn: () => {
        return fetchVE33V2PairBalanceOf(chainId as number,__to as string,account as string);
    }
  }
}

/**
 * fetch blockTimestampLast
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairBlockTimestampLast(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc5700a02', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairBlockTimestampLastQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairBlockTimestampLast', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairBlockTimestampLast(chainId as number,__to as string);
    }
  }
}

/**
 * fetch claimable0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairClaimable0(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x4d5a9f8a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairClaimable0QueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairClaimable0', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2PairClaimable0(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch claimable1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairClaimable1(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xa1ac4d13', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairClaimable1QueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairClaimable1', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2PairClaimable1(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch currentCumulativePrices
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} reserve0Cumulative - uint256
 * @returns {bigint} reserve1Cumulative - uint256
 * @returns {bigint} blockTimestamp - uint256
 */
export function fetchVE33V2PairCurrentCumulativePrices(chainId: number, __to: string): Promise<{
    reserve0Cumulative: bigint;
    reserve1Cumulative: bigint;
    blockTimestamp: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1df8c717', __encodeData]));
  return contractRequests.batchCall<{
    reserve0Cumulative: bigint;
    reserve1Cumulative: bigint;
    blockTimestamp: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"reserve0Cumulative","type":"uint256"},{"internalType":"uint256","name":"reserve1Cumulative","type":"uint256"},{"internalType":"uint256","name":"blockTimestamp","type":"uint256"}])
}
export function getFetchVE33V2PairCurrentCumulativePricesQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairCurrentCumulativePrices', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairCurrentCumulativePrices(chainId as number,__to as string);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchVE33V2PairDecimals(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint8","name":"","type":"uint8"}])
}
export function getFetchVE33V2PairDecimalsQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairDecimals', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairDecimals(chainId as number,__to as string);
    }
  }
}

/**
 * fetch eip712Domain
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} fields - bytes1
 * @returns {string} name - string
 * @returns {string} version - string
 * @returns {bigint} chainId - uint256
 * @returns {string} verifyingContract - address
 * @returns {string} salt - bytes32
 * @returns {Array<bigint>} extensions - uint256[]
 */
export function fetchVE33V2PairEip712Domain(chainId: number, __to: string): Promise<{
    fields: string;
    name: string;
    version: string;
    chainId: bigint;
    verifyingContract: string;
    salt: string;
    extensions: Array<bigint>;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x84b0196e', __encodeData]));
  return contractRequests.batchCall<{
    fields: string;
    name: string;
    version: string;
    chainId: bigint;
    verifyingContract: string;
    salt: string;
    extensions: Array<bigint>;
  }>(chainId, __to, __data, [{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}])
}
export function getFetchVE33V2PairEip712DomainQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairEip712Domain', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairEip712Domain(chainId as number,__to as string);
    }
  }
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2PairFactory(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2PairFactoryQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairFactory', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairFactory(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getAmountOut
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} amountIn - uint256
 * @param {string} tokenIn - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairGetAmountOut(chainId: number, __to: string, amountIn: number, tokenIn: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [amountIn,tokenIn]);
  const __data = hexlify(concat(['0xf140a35a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairGetAmountOutQueryOptions(chainId: number | undefined, __to: string | undefined, amountIn: number | undefined, tokenIn: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairGetAmountOut', chainId, __to, amountIn, tokenIn],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && amountIn !== undefined && amountIn !== null && tokenIn !== undefined && tokenIn !== null, 
    queryFn: () => {
        return fetchVE33V2PairGetAmountOut(chainId as number,__to as string,amountIn as number,tokenIn as string);
    }
  }
}

/**
 * fetch getReserves
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} _reserve0 - uint256
 * @returns {bigint} _reserve1 - uint256
 * @returns {bigint} _blockTimestampLast - uint256
 */
export function fetchVE33V2PairGetReserves(chainId: number, __to: string): Promise<{
    _reserve0: bigint;
    _reserve1: bigint;
    _blockTimestampLast: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0902f1ac', __encodeData]));
  return contractRequests.batchCall<{
    _reserve0: bigint;
    _reserve1: bigint;
    _blockTimestampLast: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"_reserve0","type":"uint256"},{"internalType":"uint256","name":"_reserve1","type":"uint256"},{"internalType":"uint256","name":"_blockTimestampLast","type":"uint256"}])
}
export function getFetchVE33V2PairGetReservesQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairGetReserves', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairGetReserves(chainId as number,__to as string);
    }
  }
}

/**
 * fetch index0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairIndex0(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x32c0defd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairIndex0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairIndex0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairIndex0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch index1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairIndex1(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbda39cad', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairIndex1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairIndex1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairIndex1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch lastObservation
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {{timestamp: bigint; reserve0Cumulative: bigint; reserve1Cumulative: bigint}} __output0 - tuple
 */
export function fetchVE33V2PairLastObservation(chainId: number, __to: string): Promise<{timestamp: bigint; reserve0Cumulative: bigint; reserve1Cumulative: bigint}> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8a7b8cf2', __encodeData]));
  return contractRequests.batchCall<{timestamp: bigint; reserve0Cumulative: bigint; reserve1Cumulative: bigint}>(chainId, __to, __data, [{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"reserve0Cumulative","type":"uint256"},{"internalType":"uint256","name":"reserve1Cumulative","type":"uint256"}],"internalType":"struct IPool.Observation","name":"","type":"tuple"}])
}
export function getFetchVE33V2PairLastObservationQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairLastObservation', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairLastObservation(chainId as number,__to as string);
    }
  }
}

/**
 * fetch metadata
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} dec0 - uint256
 * @returns {bigint} dec1 - uint256
 * @returns {bigint} r0 - uint256
 * @returns {bigint} r1 - uint256
 * @returns {boolean} st - bool
 * @returns {string} t0 - address
 * @returns {string} t1 - address
 */
export function fetchVE33V2PairMetadata(chainId: number, __to: string): Promise<{
    dec0: bigint;
    dec1: bigint;
    r0: bigint;
    r1: bigint;
    st: boolean;
    t0: string;
    t1: string;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x392f37e9', __encodeData]));
  return contractRequests.batchCall<{
    dec0: bigint;
    dec1: bigint;
    r0: bigint;
    r1: bigint;
    st: boolean;
    t0: string;
    t1: string;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"dec0","type":"uint256"},{"internalType":"uint256","name":"dec1","type":"uint256"},{"internalType":"uint256","name":"r0","type":"uint256"},{"internalType":"uint256","name":"r1","type":"uint256"},{"internalType":"bool","name":"st","type":"bool"},{"internalType":"address","name":"t0","type":"address"},{"internalType":"address","name":"t1","type":"address"}])
}
export function getFetchVE33V2PairMetadataQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairMetadata', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairMetadata(chainId as number,__to as string);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchVE33V2PairName(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33V2PairNameQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairName', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairName(chainId as number,__to as string);
    }
  }
}

/**
 * fetch nonces
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairNonces(chainId: number, __to: string, owner: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x7ecebe00', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairNoncesQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairNonces', chainId, __to, owner],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchVE33V2PairNonces(chainId as number,__to as string,owner as string);
    }
  }
}

/**
 * fetch observationLength
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairObservationLength(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xebeb31db', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairObservationLengthQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairObservationLength', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairObservationLength(chainId as number,__to as string);
    }
  }
}

/**
 * fetch observations
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {bigint} timestamp - uint256
 * @returns {bigint} reserve0Cumulative - uint256
 * @returns {bigint} reserve1Cumulative - uint256
 */
export function fetchVE33V2PairObservations(chainId: number, __to: string, __input1: number): Promise<{
    timestamp: bigint;
    reserve0Cumulative: bigint;
    reserve1Cumulative: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x252c09d7', __encodeData]));
  return contractRequests.batchCall<{
    timestamp: bigint;
    reserve0Cumulative: bigint;
    reserve1Cumulative: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"reserve0Cumulative","type":"uint256"},{"internalType":"uint256","name":"reserve1Cumulative","type":"uint256"}])
}
export function getFetchVE33V2PairObservationsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairObservations', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2PairObservations(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch periodSize
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairPeriodSize(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe4463eb2', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairPeriodSizeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairPeriodSize', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairPeriodSize(chainId as number,__to as string);
    }
  }
}

/**
 * fetch poolFees
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2PairPoolFees(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x33580959', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2PairPoolFeesQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairPoolFees', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairPoolFees(chainId as number,__to as string);
    }
  }
}

/**
 * fetch prices
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} tokenIn - address
 * @param {number} amountIn - uint256
 * @param {number} points - uint256
 * @returns {Array<bigint>} __output0 - uint256[]
 */
export function fetchVE33V2PairPrices(chainId: number, __to: string, tokenIn: string, amountIn: number, points: number): Promise<Array<bigint>> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256"], [tokenIn,amountIn,points]);
  const __data = hexlify(concat(['0x5881c475', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"","type":"uint256[]"}])
}
export function getFetchVE33V2PairPricesQueryOptions(chainId: number | undefined, __to: string | undefined, tokenIn: string | undefined, amountIn: number | undefined, points: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairPrices', chainId, __to, tokenIn, amountIn, points],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && tokenIn !== undefined && tokenIn !== null && amountIn !== undefined && amountIn !== null && points !== undefined && points !== null, 
    queryFn: () => {
        return fetchVE33V2PairPrices(chainId as number,__to as string,tokenIn as string,amountIn as number,points as number);
    }
  }
}

/**
 * fetch quote
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} tokenIn - address
 * @param {number} amountIn - uint256
 * @param {number} granularity - uint256
 * @returns {bigint} amountOut - uint256
 */
export function fetchVE33V2PairQuote(chainId: number, __to: string, tokenIn: string, amountIn: number, granularity: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256"], [tokenIn,amountIn,granularity]);
  const __data = hexlify(concat(['0x9e8cc04b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"amountOut","type":"uint256"}])
}
export function getFetchVE33V2PairQuoteQueryOptions(chainId: number | undefined, __to: string | undefined, tokenIn: string | undefined, amountIn: number | undefined, granularity: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairQuote', chainId, __to, tokenIn, amountIn, granularity],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && tokenIn !== undefined && tokenIn !== null && amountIn !== undefined && amountIn !== null && granularity !== undefined && granularity !== null, 
    queryFn: () => {
        return fetchVE33V2PairQuote(chainId as number,__to as string,tokenIn as string,amountIn as number,granularity as number);
    }
  }
}

/**
 * fetch reserve0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairReserve0(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x443cb4bc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairReserve0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairReserve0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairReserve0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch reserve0CumulativeLast
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairReserve0CumulativeLast(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbf944dbc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairReserve0CumulativeLastQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairReserve0CumulativeLast', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairReserve0CumulativeLast(chainId as number,__to as string);
    }
  }
}

/**
 * fetch reserve1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairReserve1(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5a76f25e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairReserve1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairReserve1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairReserve1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch reserve1CumulativeLast
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairReserve1CumulativeLast(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc245febc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairReserve1CumulativeLastQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairReserve1CumulativeLast', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairReserve1CumulativeLast(chainId as number,__to as string);
    }
  }
}

/**
 * fetch sample
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} tokenIn - address
 * @param {number} amountIn - uint256
 * @param {number} points - uint256
 * @param {number} window - uint256
 * @returns {Array<bigint>} __output0 - uint256[]
 */
export function fetchVE33V2PairSample(chainId: number, __to: string, tokenIn: string, amountIn: number, points: number, window: number): Promise<Array<bigint>> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256"], [tokenIn,amountIn,points,window]);
  const __data = hexlify(concat(['0x13345fe1', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"","type":"uint256[]"}])
}
export function getFetchVE33V2PairSampleQueryOptions(chainId: number | undefined, __to: string | undefined, tokenIn: string | undefined, amountIn: number | undefined, points: number | undefined, window: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairSample', chainId, __to, tokenIn, amountIn, points, window],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && tokenIn !== undefined && tokenIn !== null && amountIn !== undefined && amountIn !== null && points !== undefined && points !== null && window !== undefined && window !== null, 
    queryFn: () => {
        return fetchVE33V2PairSample(chainId as number,__to as string,tokenIn as string,amountIn as number,points as number,window as number);
    }
  }
}

/**
 * fetch stable
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V2PairStable(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x22be3de1', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V2PairStableQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairStable', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairStable(chainId as number,__to as string);
    }
  }
}

/**
 * fetch supplyIndex0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairSupplyIndex0(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x9f767c88', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairSupplyIndex0QueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairSupplyIndex0', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2PairSupplyIndex0(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch supplyIndex1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairSupplyIndex1(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x205aabf1', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairSupplyIndex1QueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairSupplyIndex1', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2PairSupplyIndex1(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchVE33V2PairSymbol(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33V2PairSymbolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairSymbol', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairSymbol(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2PairToken0(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0dfe1681', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2PairToken0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairToken0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairToken0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2PairToken1(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd21220a7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2PairToken1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairToken1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairToken1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch tokens
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 * @returns {string} __output1 - address
 */
export function fetchVE33V2PairTokens(chainId: number, __to: string): Promise<{
    __output0: string;
    __output1: string;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9d63848a', __encodeData]));
  return contractRequests.batchCall<{
    __output0: string;
    __output1: string;
  }>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2PairTokensQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairTokens', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairTokens(chainId as number,__to as string);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2PairTotalSupply(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2PairTotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2PairTotalSupply', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2PairTotalSupply(chainId as number,__to as string);
    }
  }
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2PairApprove(spender: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,amount]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burn
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeVE33V2PairBurn(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x89afcb44', __encodeData]));
}

/**
 * encode claimFees

 * @returns {string} encode data
 */
export function encodeVE33V2PairClaimFees() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xd294f093', __encodeData]));
}

/**
 * encode decreaseAllowance
 * @param {string} spender - address
 * @param {string | number} subtractedValue - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2PairDecreaseAllowance(spender: string, subtractedValue: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,subtractedValue]);
  return hexlify(concat(['0xa457c2d7', __encodeData]));
}

/**
 * encode getK

 * @returns {string} encode data
 */
export function encodeVE33V2PairGetK() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xee39e7a0', __encodeData]));
}

/**
 * encode increaseAllowance
 * @param {string} spender - address
 * @param {string | number} addedValue - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2PairIncreaseAllowance(spender: string, addedValue: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,addedValue]);
  return hexlify(concat(['0x39509351', __encodeData]));
}

/**
 * encode initialize
 * @param {string} _token0 - address
 * @param {string} _token1 - address
 * @param {boolean} _stable - bool
 * @returns {string} encode data
 */
export function encodeVE33V2PairInitialize(_token0: string, _token1: string, _stable: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bool"], [_token0,_token1,_stable]);
  return hexlify(concat(['0xe4bbb5a8', __encodeData]));
}

/**
 * encode mint
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeVE33V2PairMint(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x6a627842', __encodeData]));
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {string | number} value - uint256
 * @param {string | number} deadline - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeVE33V2PairPermit(owner: string, spender: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint8","bytes32","bytes32"], [owner,spender,value,deadline,v,r,s]);
  return hexlify(concat(['0xd505accf', __encodeData]));
}

/**
 * encode setName
 * @param {string} __name - string
 * @returns {string} encode data
 */
export function encodeVE33V2PairSetName(__name: string) {
  const __encodeData = defaultAbiCoder.encode(["string"], [__name]);
  return hexlify(concat(['0xc47f0027', __encodeData]));
}

/**
 * encode setSymbol
 * @param {string} __symbol - string
 * @returns {string} encode data
 */
export function encodeVE33V2PairSetSymbol(__symbol: string) {
  const __encodeData = defaultAbiCoder.encode(["string"], [__symbol]);
  return hexlify(concat(['0xb84c8246', __encodeData]));
}

/**
 * encode skim
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeVE33V2PairSkim(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0xbc25cf77', __encodeData]));
}

/**
 * encode swap
 * @param {string | number} amount0Out - uint256
 * @param {string | number} amount1Out - uint256
 * @param {string} to - address
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeVE33V2PairSwap(amount0Out: string | number, amount1Out: string | number, to: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address","bytes"], [amount0Out,amount1Out,to,data]);
  return hexlify(concat(['0x022c0d9f', __encodeData]));
}

/**
 * encode sync

 * @returns {string} encode data
 */
export function encodeVE33V2PairSync() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xfff6cae9', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2PairTransfer(to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2PairTransferFrom(from: string, to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,amount]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}