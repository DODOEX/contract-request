import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchPermissionManager_NEW_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchPermissionManager_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchPermissionManager_NEW_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchPermissionManager_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchPermissionManager_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchPermissionManager_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch _WHITELIST_MODE_ON_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchPermissionManager_WHITELIST_MODE_ON_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x63e9cad6', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchPermissionManager_WHITELIST_MODE_ON_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchPermissionManager_WHITELIST_MODE_ON_(chainId, __to);
    }
  }
}

/**
 * fetch isAllowed
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} account - address
 * @returns {boolean} __output0 - bool
 */
export function fetchPermissionManagerIsAllowed(chainId: number, __to: string, account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0xbabcc539', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchPermissionManagerIsAllowedQueryOptions(chainId: number | undefined, __to: string | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, account],
    enabled: [!!chainId, !!__to, !!account], 
    queryFn: () => {
        // @ts-ignore
        return fetchPermissionManagerIsAllowed(chainId, __to, account);
    }
  }
}

/**
 * encode addToBlacklist
 * @param {string} account - address
 * @returns {string} encode data
 */
export function encodePermissionManagerAddToBlacklist(account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  return hexlify(concat(['0x44337ea1', __encodeData]));
}

/**
 * encode addToWhitelist
 * @param {string} account - address
 * @returns {string} encode data
 */
export function encodePermissionManagerAddToWhitelist(account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  return hexlify(concat(['0xe43252d7', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodePermissionManagerClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodePermissionManagerInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode openBlacklistMode

 * @returns {string} encode data
 */
export function encodePermissionManagerOpenBlacklistMode() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xecbb003f', __encodeData]));
}

/**
 * encode openWhitelistMode

 * @returns {string} encode data
 */
export function encodePermissionManagerOpenWhitelistMode() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x71e52505', __encodeData]));
}

/**
 * encode removeFromBlacklist
 * @param {string} account - address
 * @returns {string} encode data
 */
export function encodePermissionManagerRemoveFromBlacklist(account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  return hexlify(concat(['0x537df3b6', __encodeData]));
}

/**
 * encode removeFromWhitelist
 * @param {string} account - address
 * @returns {string} encode data
 */
export function encodePermissionManagerRemoveFromWhitelist(account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  return hexlify(concat(['0x8ab1d681', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodePermissionManagerTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}