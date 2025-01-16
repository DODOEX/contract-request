import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchInitializableERC20Allowance(chainId: number, __to: string, owner: string, spender: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchInitializableERC20AllowanceQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchInitializableERC20Allowance', chainId, __to, owner, spender],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && owner !== undefined && owner !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchInitializableERC20Allowance(chainId as number,__to as string,owner as string,spender as string);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @returns {bigint} balance - uint256
 */
export function fetchInitializableERC20BalanceOf(chainId: number, __to: string, owner: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"balance","type":"uint256"}])
}
export function getFetchInitializableERC20BalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchInitializableERC20BalanceOf', chainId, __to, owner],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchInitializableERC20BalanceOf(chainId as number,__to as string,owner as string);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchInitializableERC20Decimals(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint8","name":"","type":"uint8"}])
}
export function getFetchInitializableERC20DecimalsQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchInitializableERC20Decimals', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchInitializableERC20Decimals(chainId as number,__to as string);
    }
  }
}

/**
 * fetch initialized
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchInitializableERC20Initialized(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x158ef93e', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchInitializableERC20InitializedQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchInitializableERC20Initialized', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchInitializableERC20Initialized(chainId as number,__to as string);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchInitializableERC20Name(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchInitializableERC20NameQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchInitializableERC20Name', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchInitializableERC20Name(chainId as number,__to as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchInitializableERC20Symbol(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchInitializableERC20SymbolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchInitializableERC20Symbol', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchInitializableERC20Symbol(chainId as number,__to as string);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchInitializableERC20TotalSupply(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchInitializableERC20TotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchInitializableERC20TotalSupply', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchInitializableERC20TotalSupply(chainId as number,__to as string);
    }
  }
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeInitializableERC20Approve(spender: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,amount]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode init
 * @param {string} _creator - address
 * @param {string | number} _totalSupply - uint256
 * @param {string} _name - string
 * @param {string} _symbol - string
 * @param {string | number} _decimals - uint8
 * @returns {string} encode data
 */
export function encodeInitializableERC20Init(_creator: string, _totalSupply: string | number, _name: string, _symbol: string, _decimals: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","string","string","uint8"], [_creator,_totalSupply,_name,_symbol,_decimals]);
  return hexlify(concat(['0xfc90ef18', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeInitializableERC20Transfer(to: string, amount: string | number) {
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
export function encodeInitializableERC20TransferFrom(from: string, to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,amount]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}