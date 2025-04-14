import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getRWATokenContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"11155111":"0xc3cc903e9E8D7fAe14192fc445E14D03fd5fDC09"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchRWATokenAllowance(chainId: number, owner: string, spender: string): Promise<bigint> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchRWATokenAllowanceQueryOptions(chainId: number | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenAllowance', chainId, owner, spender],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchRWATokenAllowance(chainId as number,owner as string,spender as string);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} account - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchRWATokenBalanceOf(chainId: number, account: string): Promise<bigint> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchRWATokenBalanceOfQueryOptions(chainId: number | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenBalanceOf', chainId, account],
    enabled: chainId !== undefined && chainId !== null && account !== undefined && account !== null, 
    queryFn: () => {
        return fetchRWATokenBalanceOf(chainId as number,account as string);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint8
 */
export function fetchRWATokenDecimals(chainId: number): Promise<bigint> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint8","name":"","type":"uint8"}])
}
export function getFetchRWATokenDecimalsQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenDecimals', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWATokenDecimals(chainId as number);
    }
  }
}

/**
 * fetch manager
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchRWATokenManager(chainId: number): Promise<string> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x481c6a75', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchRWATokenManagerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenManager', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWATokenManager(chainId as number);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchRWATokenName(chainId: number): Promise<string> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchRWATokenNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenName', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWATokenName(chainId as number);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchRWATokenOwner(chainId: number): Promise<string> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchRWATokenOwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenOwner', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWATokenOwner(chainId as number);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchRWATokenSymbol(chainId: number): Promise<string> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchRWATokenSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenSymbol', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWATokenSymbol(chainId as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchRWATokenTotalSupply(chainId: number): Promise<bigint> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchRWATokenTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWATokenTotalSupply(chainId as number);
    }
  }
}

/**
 * fetch whaleListAddresses
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchRWATokenWhaleListAddresses(chainId: number, __input1: string): Promise<boolean> {
  const __to = getRWATokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xd95fc4cc', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchRWATokenWhaleListAddressesQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWATokenWhaleListAddresses', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchRWATokenWhaleListAddresses(chainId as number,__input1 as string);
    }
  }
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {string | number} value - uint256
 * @returns {string} encode data
 */
export function encodeRWATokenApprove(spender: string, value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,value]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burnByManager
 * @param {string} account - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeRWATokenBurnByManager(account: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [account,amount]);
  return hexlify(concat(['0x451e302e', __encodeData]));
}

/**
 * encode burnForWhale
 * @param {string} account - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeRWATokenBurnForWhale(account: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [account,amount]);
  return hexlify(concat(['0xc825b0be', __encodeData]));
}

/**
 * encode mintByManager
 * @param {string} account - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeRWATokenMintByManager(account: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [account,amount]);
  return hexlify(concat(['0xac086ea7', __encodeData]));
}

/**
 * encode mintForWhale
 * @param {string} account - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeRWATokenMintForWhale(account: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [account,amount]);
  return hexlify(concat(['0xfeacdaef', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeRWATokenRenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode setManager
 * @param {string} _manager - address
 * @returns {string} encode data
 */
export function encodeRWATokenSetManager(_manager: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_manager]);
  return hexlify(concat(['0xd0ebdbe7', __encodeData]));
}

/**
 * encode setWhaleList
 * @param {string} account - address
 * @param {boolean} flag - bool
 * @returns {string} encode data
 */
export function encodeRWATokenSetWhaleList(account: string, flag: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [account,flag]);
  return hexlify(concat(['0x50391a54', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {string | number} value - uint256
 * @returns {string} encode data
 */
export function encodeRWATokenTransfer(to: string, value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,value]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} value - uint256
 * @returns {string} encode data
 */
export function encodeRWATokenTransferFrom(from: string, to: string, value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,value]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeRWATokenTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}