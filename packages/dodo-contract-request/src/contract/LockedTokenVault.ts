import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _CLIFF_RATE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVault_CLIFF_RATE_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x294dafc0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVault_CLIFF_RATE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVault_CLIFF_RATE_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchLockedTokenVault_CLIFF_RATE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _DISTRIBUTE_FINISHED_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchLockedTokenVault_DISTRIBUTE_FINISHED_(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x710475f6', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchLockedTokenVault_DISTRIBUTE_FINISHED_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVault_DISTRIBUTE_FINISHED_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchLockedTokenVault_DISTRIBUTE_FINISHED_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchLockedTokenVault_NEW_OWNER_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchLockedTokenVault_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVault_NEW_OWNER_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchLockedTokenVault_NEW_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchLockedTokenVault_OWNER_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchLockedTokenVault_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVault_OWNER_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchLockedTokenVault_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _RELEASE_DURATION_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVault_RELEASE_DURATION_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xef903642', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVault_RELEASE_DURATION_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVault_RELEASE_DURATION_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchLockedTokenVault_RELEASE_DURATION_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _START_RELEASE_TIME_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVault_START_RELEASE_TIME_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2a8b0480', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVault_START_RELEASE_TIME_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVault_START_RELEASE_TIME_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchLockedTokenVault_START_RELEASE_TIME_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _UNDISTRIBUTED_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVault_UNDISTRIBUTED_AMOUNT_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x24b32741', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVault_UNDISTRIBUTED_AMOUNT_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVault_UNDISTRIBUTED_AMOUNT_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchLockedTokenVault_UNDISTRIBUTED_AMOUNT_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getClaimableBalance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} holder - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVaultGetClaimableBalance(chainId: number, __to: string, holder: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [holder]);
  const __data = hexlify(concat(['0x06def802', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVaultGetClaimableBalanceQueryOptions(chainId: number | undefined, __to: string | undefined, holder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVaultGetClaimableBalance', chainId, __to, holder],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && holder !== undefined && holder !== null, 
    queryFn: () => {
        return fetchLockedTokenVaultGetClaimableBalance(chainId as number,__to as string,holder as string);
    }
  }
}

/**
 * fetch getClaimedBalance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} holder - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVaultGetClaimedBalance(chainId: number, __to: string, holder: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [holder]);
  const __data = hexlify(concat(['0xcf0e80fe', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVaultGetClaimedBalanceQueryOptions(chainId: number | undefined, __to: string | undefined, holder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVaultGetClaimedBalance', chainId, __to, holder],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && holder !== undefined && holder !== null, 
    queryFn: () => {
        return fetchLockedTokenVaultGetClaimedBalance(chainId as number,__to as string,holder as string);
    }
  }
}

/**
 * fetch getHolderTransferRequest
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} holder - address
 * @returns {string} __output0 - address
 */
export function fetchLockedTokenVaultGetHolderTransferRequest(chainId: number, __to: string, holder: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["address"], [holder]);
  const __data = hexlify(concat(['0x34520c47', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchLockedTokenVaultGetHolderTransferRequestQueryOptions(chainId: number | undefined, __to: string | undefined, holder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVaultGetHolderTransferRequest', chainId, __to, holder],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && holder !== undefined && holder !== null, 
    queryFn: () => {
        return fetchLockedTokenVaultGetHolderTransferRequest(chainId as number,__to as string,holder as string);
    }
  }
}

/**
 * fetch getOriginBalance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} holder - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVaultGetOriginBalance(chainId: number, __to: string, holder: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [holder]);
  const __data = hexlify(concat(['0xd1828496', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVaultGetOriginBalanceQueryOptions(chainId: number | undefined, __to: string | undefined, holder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVaultGetOriginBalance', chainId, __to, holder],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && holder !== undefined && holder !== null, 
    queryFn: () => {
        return fetchLockedTokenVaultGetOriginBalance(chainId as number,__to as string,holder as string);
    }
  }
}

/**
 * fetch getRemainingBalance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} holder - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchLockedTokenVaultGetRemainingBalance(chainId: number, __to: string, holder: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [holder]);
  const __data = hexlify(concat(['0x001bf8f6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLockedTokenVaultGetRemainingBalanceQueryOptions(chainId: number | undefined, __to: string | undefined, holder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLockedTokenVaultGetRemainingBalance', chainId, __to, holder],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && holder !== undefined && holder !== null, 
    queryFn: () => {
        return fetchLockedTokenVaultGetRemainingBalance(chainId as number,__to as string,holder as string);
    }
  }
}

/**
 * encode claim

 * @returns {string} encode data
 */
export function encodeLockedTokenVaultClaim() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71d92d', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeLockedTokenVaultClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode deposit
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeLockedTokenVaultDeposit(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xb6b55f25', __encodeData]));
}

/**
 * encode finishDistribute

 * @returns {string} encode data
 */
export function encodeLockedTokenVaultFinishDistribute() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xe5612b3b', __encodeData]));
}

/**
 * encode grant
 * @param {Array<string>} holderList - address[]
 * @param {Array<string | number>} amountList - uint256[]
 * @returns {string} encode data
 */
export function encodeLockedTokenVaultGrant(holderList: Array<string>, amountList: Array<string | number>) {
  const __encodeData = defaultAbiCoder.encode(["address[]","uint256[]"], [holderList,amountList]);
  return hexlify(concat(['0xc2ae1680', __encodeData]));
}

/**
 * encode recall
 * @param {string} holder - address
 * @returns {string} encode data
 */
export function encodeLockedTokenVaultRecall(holder: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [holder]);
  return hexlify(concat(['0xca430519', __encodeData]));
}

/**
 * encode transferLockedToken
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeLockedTokenVaultTransferLockedToken(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x7db41eae', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeLockedTokenVaultTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode withdraw
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeLockedTokenVaultWithdraw(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0x2e1a7d4d', __encodeData]));
}