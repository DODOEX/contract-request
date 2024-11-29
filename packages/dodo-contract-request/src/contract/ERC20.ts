import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchERC20Name(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}
export function getFetchERC20NameQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchERC20Name(chainId, __to);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20TotalSupply(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchERC20TotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchERC20TotalSupply(chainId, __to);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchERC20Decimals(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint8"])
}
export function getFetchERC20DecimalsQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchERC20Decimals(chainId, __to);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20BalanceOf(chainId: number, __to: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchERC20BalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: [!!chainId, !!__to, !!__input1], 
    queryFn: () => {
        // @ts-ignore
        return fetchERC20BalanceOf(chainId, __to, __input1);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchERC20Symbol(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}
export function getFetchERC20SymbolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchERC20Symbol(chainId, __to);
    }
  }
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20Allowance(chainId: number, __to: string, __input1: string, __input2: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchERC20AllowanceQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1, __input2],
    enabled: [!!chainId, !!__to, !!__input1, !!__input2], 
    queryFn: () => {
        // @ts-ignore
        return fetchERC20Allowance(chainId, __to, __input1, __input2);
    }
  }
}

/**
 * encode approve
 * @param {string} guy - address
 * @param {number} wad - uint256
 * @returns {string} encode data
 */
export function encodeERC20Approve(guy: string, wad: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [guy,wad]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} src - address
 * @param {string} dst - address
 * @param {number} wad - uint256
 * @returns {string} encode data
 */
export function encodeERC20TransferFrom(src: string, dst: string, wad: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [src,dst,wad]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode withdraw
 * @param {number} wad - uint256
 * @returns {string} encode data
 */
export function encodeERC20Withdraw(wad: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [wad]);
  return hexlify(concat(['0x2e1a7d4d', __encodeData]));
}

/**
 * encode transfer
 * @param {string} dst - address
 * @param {number} wad - uint256
 * @returns {string} encode data
 */
export function encodeERC20Transfer(dst: string, wad: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [dst,wad]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode deposit

 * @returns {string} encode data
 */
export function encodeERC20Deposit() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xd0e30db0', __encodeData]));
}