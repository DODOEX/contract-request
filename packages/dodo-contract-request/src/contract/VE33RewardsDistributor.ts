import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVE33RewardsDistributorContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2810":"0xBb5a0bF38C0BeA6829fDFef931B7988c8fF00a78"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch WEEK
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33RewardsDistributorWEEK(chainId: number): Promise<bigint> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf4359ce5', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33RewardsDistributorWEEKQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorWEEK', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorWEEK(chainId as number);
    }
  }
}

/**
 * fetch claimable
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @returns {bigint} claimable_ - uint256
 */
export function fetchVE33RewardsDistributorClaimable(chainId: number, _tokenId: number): Promise<bigint> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  const __data = hexlify(concat(['0xd1d58b25', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"claimable_","type":"uint256"}])
}
export function getFetchVE33RewardsDistributorClaimableQueryOptions(chainId: number | undefined, _tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorClaimable', chainId, _tokenId],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorClaimable(chainId as number,_tokenId as number);
    }
  }
}

/**
 * fetch lastTokenTime
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33RewardsDistributorLastTokenTime(chainId: number): Promise<bigint> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x939ea66b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33RewardsDistributorLastTokenTimeQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorLastTokenTime', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorLastTokenTime(chainId as number);
    }
  }
}

/**
 * fetch minter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33RewardsDistributorMinter(chainId: number): Promise<string> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x07546172', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33RewardsDistributorMinterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorMinter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorMinter(chainId as number);
    }
  }
}

/**
 * fetch startTime
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33RewardsDistributorStartTime(chainId: number): Promise<bigint> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x78e97925', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33RewardsDistributorStartTimeQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorStartTime', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorStartTime(chainId as number);
    }
  }
}

/**
 * fetch timeCursorOf
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33RewardsDistributorTimeCursorOf(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x4607bf60', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33RewardsDistributorTimeCursorOfQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorTimeCursorOf', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorTimeCursorOf(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch token
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33RewardsDistributorToken(chainId: number): Promise<string> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfc0c546a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33RewardsDistributorTokenQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorToken', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorToken(chainId as number);
    }
  }
}

/**
 * fetch tokenLastBalance
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33RewardsDistributorTokenLastBalance(chainId: number): Promise<bigint> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8ec8468a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33RewardsDistributorTokenLastBalanceQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorTokenLastBalance', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorTokenLastBalance(chainId as number);
    }
  }
}

/**
 * fetch tokensPerWeek
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33RewardsDistributorTokensPerWeek(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x899519be', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33RewardsDistributorTokensPerWeekQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorTokensPerWeek', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorTokensPerWeek(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch ve
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33RewardsDistributorVe(chainId: number): Promise<string> {
  const __to = getVE33RewardsDistributorContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1f850716', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract IVotingEscrow","name":"","type":"address"}])
}
export function getFetchVE33RewardsDistributorVeQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33RewardsDistributorVe', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33RewardsDistributorVe(chainId as number);
    }
  }
}

/**
 * encode checkpointToken

 * @returns {string} encode data
 */
export function encodeVE33RewardsDistributorCheckpointToken() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xbee5dc32', __encodeData]));
}

/**
 * encode claim
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33RewardsDistributorClaim(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0x379607f5', __encodeData]));
}

/**
 * encode claimMany
 * @param {Array<string | number>} _tokenIds - uint256[]
 * @returns {string} encode data
 */
export function encodeVE33RewardsDistributorClaimMany(_tokenIds: Array<string | number>) {
  const __encodeData = defaultAbiCoder.encode(["uint256[]"], [_tokenIds]);
  return hexlify(concat(['0x925489a8', __encodeData]));
}

/**
 * encode setMinter
 * @param {string} _minter - address
 * @returns {string} encode data
 */
export function encodeVE33RewardsDistributorSetMinter(_minter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_minter]);
  return hexlify(concat(['0xfca3b5aa', __encodeData]));
}