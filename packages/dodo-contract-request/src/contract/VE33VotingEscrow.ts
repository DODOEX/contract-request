import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVE33VotingEscrowContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2810":"0x00Fc0223442630e2AaDAB831d2Ee1FD27ee8A6B2"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch CLOCK_MODE
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVE33VotingEscrowCLOCK_MODE(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4bf5d7e9', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33VotingEscrowCLOCK_MODEQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowCLOCK_MODE', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowCLOCK_MODE(chainId as number);
    }
  }
}

/**
 * fetch DELEGATION_TYPEHASH
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchVE33VotingEscrowDELEGATION_TYPEHASH(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe7a324dc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchVE33VotingEscrowDELEGATION_TYPEHASHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowDELEGATION_TYPEHASH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowDELEGATION_TYPEHASH(chainId as number);
    }
  }
}

/**
 * fetch DOMAIN_TYPEHASH
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchVE33VotingEscrowDOMAIN_TYPEHASH(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x20606b70', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchVE33VotingEscrowDOMAIN_TYPEHASHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowDOMAIN_TYPEHASH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowDOMAIN_TYPEHASH(chainId as number);
    }
  }
}

/**
 * fetch allowedManager
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowAllowedManager(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2f7f9ba9', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowAllowedManagerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowAllowedManager', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowAllowedManager(chainId as number);
    }
  }
}

/**
 * fetch artProxy
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowArtProxy(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5594a045', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowArtProxyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowArtProxy', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowArtProxy(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} _owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowBalanceOf(chainId: number, _owner: string): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [_owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowBalanceOfQueryOptions(chainId: number | undefined, _owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowBalanceOf', chainId, _owner],
    enabled: chainId !== undefined && chainId !== null && _owner !== undefined && _owner !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowBalanceOf(chainId as number,_owner as string);
    }
  }
}

/**
 * fetch balanceOfNFT
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowBalanceOfNFT(chainId: number, _tokenId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  const __data = hexlify(concat(['0xe7e242d4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowBalanceOfNFTQueryOptions(chainId: number | undefined, _tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowBalanceOfNFT', chainId, _tokenId],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowBalanceOfNFT(chainId as number,_tokenId as number);
    }
  }
}

/**
 * fetch balanceOfNFTAt
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @param {number} _t - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowBalanceOfNFTAt(chainId: number, _tokenId: number, _t: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_tokenId,_t]);
  const __data = hexlify(concat(['0xe0514aba', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowBalanceOfNFTAtQueryOptions(chainId: number | undefined, _tokenId: number | undefined, _t: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowBalanceOfNFTAt', chainId, _tokenId, _t],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null && _t !== undefined && _t !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowBalanceOfNFTAt(chainId as number,_tokenId as number,_t as number);
    }
  }
}

/**
 * fetch canSplit
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VotingEscrowCanSplit(chainId: number, __input1: string): Promise<boolean> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x3d085a37', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VotingEscrowCanSplitQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowCanSplit', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowCanSplit(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch checkpoints
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @param {number} _index - uint48
 * @returns {{fromTimestamp: bigint; owner: string; delegatedBalance: bigint; delegatee: bigint}} __output0 - tuple
 */
export function fetchVE33VotingEscrowCheckpoints(chainId: number, _tokenId: number, _index: number): Promise<{fromTimestamp: bigint; owner: string; delegatedBalance: bigint; delegatee: bigint}> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint48"], [_tokenId,_index]);
  const __data = hexlify(concat(['0xf04cb3a8', __encodeData]));
  return contractRequests.batchCall<{fromTimestamp: bigint; owner: string; delegatedBalance: bigint; delegatee: bigint}>(chainId, __to, __data, [{"components":[{"internalType":"uint256","name":"fromTimestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"delegatedBalance","type":"uint256"},{"internalType":"uint256","name":"delegatee","type":"uint256"}],"internalType":"struct IVotingEscrow.Checkpoint","name":"","type":"tuple"}])
}
export function getFetchVE33VotingEscrowCheckpointsQueryOptions(chainId: number | undefined, _tokenId: number | undefined, _index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowCheckpoints', chainId, _tokenId, _index],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null && _index !== undefined && _index !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowCheckpoints(chainId as number,_tokenId as number,_index as number);
    }
  }
}

/**
 * fetch clock
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint48
 */
export function fetchVE33VotingEscrowClock(chainId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x91ddadf4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint48","name":"","type":"uint48"}])
}
export function getFetchVE33VotingEscrowClockQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowClock', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowClock(chainId as number);
    }
  }
}

/**
 * fetch deactivated
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VotingEscrowDeactivated(chainId: number, __input1: number): Promise<boolean> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xa899b36c', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VotingEscrowDeactivatedQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowDeactivated', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowDeactivated(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint8
 */
export function fetchVE33VotingEscrowDecimals(chainId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint8","name":"","type":"uint8"}])
}
export function getFetchVE33VotingEscrowDecimalsQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowDecimals', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowDecimals(chainId as number);
    }
  }
}

/**
 * fetch delegates
 * @param {number} chainId - number
 * @param {number} delegator - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowDelegates(chainId: number, delegator: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [delegator]);
  const __data = hexlify(concat(['0xb1548afc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowDelegatesQueryOptions(chainId: number | undefined, delegator: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowDelegates', chainId, delegator],
    enabled: chainId !== undefined && chainId !== null && delegator !== undefined && delegator !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowDelegates(chainId as number,delegator as number);
    }
  }
}

/**
 * fetch distributor
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowDistributor(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbfe10928', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowDistributorQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowDistributor', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowDistributor(chainId as number);
    }
  }
}

/**
 * fetch epoch
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowEpoch(chainId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x900cf0cf', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowEpochQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowEpoch', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowEpoch(chainId as number);
    }
  }
}

/**
 * fetch escrowType
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint8
 */
export function fetchVE33VotingEscrowEscrowType(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x7c728000', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"enum IVotingEscrow.EscrowType","name":"","type":"uint8"}])
}
export function getFetchVE33VotingEscrowEscrowTypeQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowEscrowType', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowEscrowType(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch factoryRegistry
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowFactoryRegistry(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3bf0c9fb', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowFactoryRegistryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowFactoryRegistry', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowFactoryRegistry(chainId as number);
    }
  }
}

/**
 * fetch forwarder
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowForwarder(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf645d4f9', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowForwarderQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowForwarder', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowForwarder(chainId as number);
    }
  }
}

/**
 * fetch getApproved
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowGetApproved(chainId: number, _tokenId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  const __data = hexlify(concat(['0x081812fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowGetApprovedQueryOptions(chainId: number | undefined, _tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowGetApproved', chainId, _tokenId],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowGetApproved(chainId as number,_tokenId as number);
    }
  }
}

/**
 * fetch getPastTotalSupply
 * @param {number} chainId - number
 * @param {number} _timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowGetPastTotalSupply(chainId: number, _timestamp: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_timestamp]);
  const __data = hexlify(concat(['0x8e539e8c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowGetPastTotalSupplyQueryOptions(chainId: number | undefined, _timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowGetPastTotalSupply', chainId, _timestamp],
    enabled: chainId !== undefined && chainId !== null && _timestamp !== undefined && _timestamp !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowGetPastTotalSupply(chainId as number,_timestamp as number);
    }
  }
}

/**
 * fetch getPastVotes
 * @param {number} chainId - number
 * @param {string} _account - address
 * @param {number} _tokenId - uint256
 * @param {number} _timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowGetPastVotes(chainId: number, _account: string, _tokenId: number, _timestamp: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256"], [_account,_tokenId,_timestamp]);
  const __data = hexlify(concat(['0x4d6fb775', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowGetPastVotesQueryOptions(chainId: number | undefined, _account: string | undefined, _tokenId: number | undefined, _timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowGetPastVotes', chainId, _account, _tokenId, _timestamp],
    enabled: chainId !== undefined && chainId !== null && _account !== undefined && _account !== null && _tokenId !== undefined && _tokenId !== null && _timestamp !== undefined && _timestamp !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowGetPastVotes(chainId as number,_account as string,_tokenId as number,_timestamp as number);
    }
  }
}

/**
 * fetch idToManaged
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowIdToManaged(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x19a0a9d5', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowIdToManagedQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowIdToManaged', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowIdToManaged(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch isApprovedForAll
 * @param {number} chainId - number
 * @param {string} _owner - address
 * @param {string} _operator - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VotingEscrowIsApprovedForAll(chainId: number, _owner: string, _operator: string): Promise<boolean> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [_owner,_operator]);
  const __data = hexlify(concat(['0xe985e9c5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VotingEscrowIsApprovedForAllQueryOptions(chainId: number | undefined, _owner: string | undefined, _operator: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowIsApprovedForAll', chainId, _owner, _operator],
    enabled: chainId !== undefined && chainId !== null && _owner !== undefined && _owner !== null && _operator !== undefined && _operator !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowIsApprovedForAll(chainId as number,_owner as string,_operator as string);
    }
  }
}

/**
 * fetch isApprovedOrOwner
 * @param {number} chainId - number
 * @param {string} _spender - address
 * @param {number} _tokenId - uint256
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VotingEscrowIsApprovedOrOwner(chainId: number, _spender: string, _tokenId: number): Promise<boolean> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [_spender,_tokenId]);
  const __data = hexlify(concat(['0x430c2081', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VotingEscrowIsApprovedOrOwnerQueryOptions(chainId: number | undefined, _spender: string | undefined, _tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowIsApprovedOrOwner', chainId, _spender, _tokenId],
    enabled: chainId !== undefined && chainId !== null && _spender !== undefined && _spender !== null && _tokenId !== undefined && _tokenId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowIsApprovedOrOwner(chainId as number,_spender as string,_tokenId as number);
    }
  }
}

/**
 * fetch isTrustedForwarder
 * @param {number} chainId - number
 * @param {string} forwarder - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VotingEscrowIsTrustedForwarder(chainId: number, forwarder: string): Promise<boolean> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [forwarder]);
  const __data = hexlify(concat(['0x572b6c05', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VotingEscrowIsTrustedForwarderQueryOptions(chainId: number | undefined, forwarder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowIsTrustedForwarder', chainId, forwarder],
    enabled: chainId !== undefined && chainId !== null && forwarder !== undefined && forwarder !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowIsTrustedForwarder(chainId as number,forwarder as string);
    }
  }
}

/**
 * fetch locked
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @returns {{amount: bigint; end: bigint; isPermanent: boolean}} __output0 - tuple
 */
export function fetchVE33VotingEscrowLocked(chainId: number, _tokenId: number): Promise<{amount: bigint; end: bigint; isPermanent: boolean}> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  const __data = hexlify(concat(['0xb45a3c0e', __encodeData]));
  return contractRequests.batchCall<{amount: bigint; end: bigint; isPermanent: boolean}>(chainId, __to, __data, [{"components":[{"internalType":"int128","name":"amount","type":"int128"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"bool","name":"isPermanent","type":"bool"}],"internalType":"struct IVotingEscrow.LockedBalance","name":"","type":"tuple"}])
}
export function getFetchVE33VotingEscrowLockedQueryOptions(chainId: number | undefined, _tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowLocked', chainId, _tokenId],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowLocked(chainId as number,_tokenId as number);
    }
  }
}

/**
 * fetch managedToFree
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowManagedToFree(chainId: number, __input1: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x27a6ee98', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowManagedToFreeQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowManagedToFree', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowManagedToFree(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch managedToLocked
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowManagedToLocked(chainId: number, __input1: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xa738da82', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowManagedToLockedQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowManagedToLocked', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowManagedToLocked(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVE33VotingEscrowName(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33VotingEscrowNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowName', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowName(chainId as number);
    }
  }
}

/**
 * fetch nonces
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowNonces(chainId: number, __input1: string): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x7ecebe00', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowNoncesQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowNonces', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowNonces(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch numCheckpoints
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint48
 */
export function fetchVE33VotingEscrowNumCheckpoints(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x50589793', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint48","name":"","type":"uint48"}])
}
export function getFetchVE33VotingEscrowNumCheckpointsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowNumCheckpoints', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowNumCheckpoints(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch ownerOf
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowOwnerOf(chainId: number, _tokenId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  const __data = hexlify(concat(['0x6352211e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowOwnerOfQueryOptions(chainId: number | undefined, _tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowOwnerOf', chainId, _tokenId],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowOwnerOf(chainId as number,_tokenId as number);
    }
  }
}

/**
 * fetch ownerToNFTokenIdList
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowOwnerToNFTokenIdList(chainId: number, __input1: string, __input2: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x8bf9d84c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowOwnerToNFTokenIdListQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowOwnerToNFTokenIdList', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowOwnerToNFTokenIdList(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch permanentLockBalance
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowPermanentLockBalance(chainId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4d01cb66', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowPermanentLockBalanceQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowPermanentLockBalance', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowPermanentLockBalance(chainId as number);
    }
  }
}

/**
 * fetch pointHistory
 * @param {number} chainId - number
 * @param {number} _loc - uint256
 * @returns {{bias: bigint; slope: bigint; ts: bigint; blk: bigint; permanentLockBalance: bigint}} __output0 - tuple
 */
export function fetchVE33VotingEscrowPointHistory(chainId: number, _loc: number): Promise<{bias: bigint; slope: bigint; ts: bigint; blk: bigint; permanentLockBalance: bigint}> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_loc]);
  const __data = hexlify(concat(['0x8ad4c447', __encodeData]));
  return contractRequests.batchCall<{bias: bigint; slope: bigint; ts: bigint; blk: bigint; permanentLockBalance: bigint}>(chainId, __to, __data, [{"components":[{"internalType":"int128","name":"bias","type":"int128"},{"internalType":"int128","name":"slope","type":"int128"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blk","type":"uint256"},{"internalType":"uint256","name":"permanentLockBalance","type":"uint256"}],"internalType":"struct IVotingEscrow.GlobalPoint","name":"","type":"tuple"}])
}
export function getFetchVE33VotingEscrowPointHistoryQueryOptions(chainId: number | undefined, _loc: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowPointHistory', chainId, _loc],
    enabled: chainId !== undefined && chainId !== null && _loc !== undefined && _loc !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowPointHistory(chainId as number,_loc as number);
    }
  }
}

/**
 * fetch slopeChanges
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - int128
 */
export function fetchVE33VotingEscrowSlopeChanges(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xf52a36f7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int128","name":"","type":"int128"}])
}
export function getFetchVE33VotingEscrowSlopeChangesQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowSlopeChanges', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowSlopeChanges(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch supply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowSupply(chainId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x047fc9aa', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowSupply(chainId as number);
    }
  }
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} _interfaceID - bytes4
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VotingEscrowSupportsInterface(chainId: number, _interfaceID: string): Promise<boolean> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [_interfaceID]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VotingEscrowSupportsInterfaceQueryOptions(chainId: number | undefined, _interfaceID: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowSupportsInterface', chainId, _interfaceID],
    enabled: chainId !== undefined && chainId !== null && _interfaceID !== undefined && _interfaceID !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowSupportsInterface(chainId as number,_interfaceID as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVE33VotingEscrowSymbol(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33VotingEscrowSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowSymbol', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowSymbol(chainId as number);
    }
  }
}

/**
 * fetch team
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowTeam(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x85f2aef2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowTeamQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowTeam', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowTeam(chainId as number);
    }
  }
}

/**
 * fetch token
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowToken(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfc0c546a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowTokenQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowToken', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowToken(chainId as number);
    }
  }
}

/**
 * fetch tokenId
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowTokenId(chainId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x17d70f7c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowTokenIdQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowTokenId', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowTokenId(chainId as number);
    }
  }
}

/**
 * fetch tokenURI
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @returns {string} __output0 - string
 */
export function fetchVE33VotingEscrowTokenURI(chainId: number, _tokenId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  const __data = hexlify(concat(['0xc87b56dd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33VotingEscrowTokenURIQueryOptions(chainId: number | undefined, _tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowTokenURI', chainId, _tokenId],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowTokenURI(chainId as number,_tokenId as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowTotalSupply(chainId: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowTotalSupply(chainId as number);
    }
  }
}

/**
 * fetch totalSupplyAt
 * @param {number} chainId - number
 * @param {number} _timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowTotalSupplyAt(chainId: number, _timestamp: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_timestamp]);
  const __data = hexlify(concat(['0x981b24d0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowTotalSupplyAtQueryOptions(chainId: number | undefined, _timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowTotalSupplyAt', chainId, _timestamp],
    enabled: chainId !== undefined && chainId !== null && _timestamp !== undefined && _timestamp !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowTotalSupplyAt(chainId as number,_timestamp as number);
    }
  }
}

/**
 * fetch userPointEpoch
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowUserPointEpoch(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xe58f5947', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowUserPointEpochQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowUserPointEpoch', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowUserPointEpoch(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch userPointHistory
 * @param {number} chainId - number
 * @param {number} _tokenId - uint256
 * @param {number} _loc - uint256
 * @returns {{bias: bigint; slope: bigint; ts: bigint; blk: bigint; permanent: bigint}} __output0 - tuple
 */
export function fetchVE33VotingEscrowUserPointHistory(chainId: number, _tokenId: number, _loc: number): Promise<{bias: bigint; slope: bigint; ts: bigint; blk: bigint; permanent: bigint}> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_tokenId,_loc]);
  const __data = hexlify(concat(['0x44acb42a', __encodeData]));
  return contractRequests.batchCall<{bias: bigint; slope: bigint; ts: bigint; blk: bigint; permanent: bigint}>(chainId, __to, __data, [{"components":[{"internalType":"int128","name":"bias","type":"int128"},{"internalType":"int128","name":"slope","type":"int128"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blk","type":"uint256"},{"internalType":"uint256","name":"permanent","type":"uint256"}],"internalType":"struct IVotingEscrow.UserPoint","name":"","type":"tuple"}])
}
export function getFetchVE33VotingEscrowUserPointHistoryQueryOptions(chainId: number | undefined, _tokenId: number | undefined, _loc: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowUserPointHistory', chainId, _tokenId, _loc],
    enabled: chainId !== undefined && chainId !== null && _tokenId !== undefined && _tokenId !== null && _loc !== undefined && _loc !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowUserPointHistory(chainId as number,_tokenId as number,_loc as number);
    }
  }
}

/**
 * fetch version
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVE33VotingEscrowVersion(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33VotingEscrowVersionQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowVersion', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowVersion(chainId as number);
    }
  }
}

/**
 * fetch voted
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VotingEscrowVoted(chainId: number, __input1: number): Promise<boolean> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x8fbb38ff', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VotingEscrowVotedQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowVoted', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowVoted(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch voter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VotingEscrowVoter(chainId: number): Promise<string> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46c96aac', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VotingEscrowVoterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowVoter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowVoter(chainId as number);
    }
  }
}

/**
 * fetch weights
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @param {number} __input2 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VotingEscrowWeights(chainId: number, __input1: number, __input2: number): Promise<bigint> {
  const __to = getVE33VotingEscrowContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x515857d4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VotingEscrowWeightsQueryOptions(chainId: number | undefined, __input1: number | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VotingEscrowWeights', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33VotingEscrowWeights(chainId as number,__input1 as number,__input2 as number);
    }
  }
}

/**
 * encode approve
 * @param {string} _approved - address
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowApprove(_approved: string, _tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [_approved,_tokenId]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode checkpoint

 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowCheckpoint() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xc2c4c5c1', __encodeData]));
}

/**
 * encode createLock
 * @param {string | number} _value - uint256
 * @param {string | number} _lockDuration - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowCreateLock(_value: string | number, _lockDuration: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_value,_lockDuration]);
  return hexlify(concat(['0xb52c05fe', __encodeData]));
}

/**
 * encode createLockFor
 * @param {string | number} _value - uint256
 * @param {string | number} _lockDuration - uint256
 * @param {string} _to - address
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowCreateLockFor(_value: string | number, _lockDuration: string | number, _to: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address"], [_value,_lockDuration,_to]);
  return hexlify(concat(['0xec32e6df', __encodeData]));
}

/**
 * encode createManagedLockFor
 * @param {string} _to - address
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowCreateManagedLockFor(_to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_to]);
  return hexlify(concat(['0x3a6396a5', __encodeData]));
}

/**
 * encode delegate
 * @param {string | number} delegator - uint256
 * @param {string | number} delegatee - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowDelegate(delegator: string | number, delegatee: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [delegator,delegatee]);
  return hexlify(concat(['0xd9a34952', __encodeData]));
}

/**
 * encode delegateBySig
 * @param {string | number} delegator - uint256
 * @param {string | number} delegatee - uint256
 * @param {string | number} nonce - uint256
 * @param {string | number} expiry - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowDelegateBySig(delegator: string | number, delegatee: string | number, nonce: string | number, expiry: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256","uint8","bytes32","bytes32"], [delegator,delegatee,nonce,expiry,v,r,s]);
  return hexlify(concat(['0x834b0b69', __encodeData]));
}

/**
 * encode depositFor
 * @param {string | number} _tokenId - uint256
 * @param {string | number} _value - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowDepositFor(_tokenId: string | number, _value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_tokenId,_value]);
  return hexlify(concat(['0x0ec84dda', __encodeData]));
}

/**
 * encode depositManaged
 * @param {string | number} _tokenId - uint256
 * @param {string | number} _mTokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowDepositManaged(_tokenId: string | number, _mTokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_tokenId,_mTokenId]);
  return hexlify(concat(['0xe0c11f9a', __encodeData]));
}

/**
 * encode increaseAmount
 * @param {string | number} _tokenId - uint256
 * @param {string | number} _value - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowIncreaseAmount(_tokenId: string | number, _value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_tokenId,_value]);
  return hexlify(concat(['0xb2383e55', __encodeData]));
}

/**
 * encode increaseUnlockTime
 * @param {string | number} _tokenId - uint256
 * @param {string | number} _lockDuration - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowIncreaseUnlockTime(_tokenId: string | number, _lockDuration: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_tokenId,_lockDuration]);
  return hexlify(concat(['0x9d507b8b', __encodeData]));
}

/**
 * encode lockPermanent
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowLockPermanent(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0xe75b1c2e', __encodeData]));
}

/**
 * encode merge
 * @param {string | number} _from - uint256
 * @param {string | number} _to - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowMerge(_from: string | number, _to: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_from,_to]);
  return hexlify(concat(['0xd1c2babb', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} _from - address
 * @param {string} _to - address
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSafeTransferFrom(_from: string, _to: string, _tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [_from,_to,_tokenId]);
  return hexlify(concat(['0x42842e0e', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} _from - address
 * @param {string} _to - address
 * @param {string | number} _tokenId - uint256
 * @param {string} _data - bytes
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSafeTransferFrom2(_from: string, _to: string, _tokenId: string | number, _data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","bytes"], [_from,_to,_tokenId,_data]);
  return hexlify(concat(['0xb88d4fde', __encodeData]));
}

/**
 * encode setAllowedManager
 * @param {string} _allowedManager - address
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSetAllowedManager(_allowedManager: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_allowedManager]);
  return hexlify(concat(['0x9954a989', __encodeData]));
}

/**
 * encode setApprovalForAll
 * @param {string} _operator - address
 * @param {boolean} _approved - bool
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSetApprovalForAll(_operator: string, _approved: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [_operator,_approved]);
  return hexlify(concat(['0xa22cb465', __encodeData]));
}

/**
 * encode setArtProxy
 * @param {string} _proxy - address
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSetArtProxy(_proxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_proxy]);
  return hexlify(concat(['0x2e720f7d', __encodeData]));
}

/**
 * encode setManagedState
 * @param {string | number} _mTokenId - uint256
 * @param {boolean} _state - bool
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSetManagedState(_mTokenId: string | number, _state: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bool"], [_mTokenId,_state]);
  return hexlify(concat(['0x37b1f500', __encodeData]));
}

/**
 * encode setTeam
 * @param {string} _team - address
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSetTeam(_team: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_team]);
  return hexlify(concat(['0x095cf5c6', __encodeData]));
}

/**
 * encode setVoterAndDistributor
 * @param {string} _voter - address
 * @param {string} _distributor - address
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSetVoterAndDistributor(_voter: string, _distributor: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [_voter,_distributor]);
  return hexlify(concat(['0x2d0485ec', __encodeData]));
}

/**
 * encode split
 * @param {string | number} _from - uint256
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowSplit(_from: string | number, _amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_from,_amount]);
  return hexlify(concat(['0x4b19becc', __encodeData]));
}

/**
 * encode toggleSplit
 * @param {string} _account - address
 * @param {boolean} _bool - bool
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowToggleSplit(_account: string, _bool: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [_account,_bool]);
  return hexlify(concat(['0x33230dc0', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} _from - address
 * @param {string} _to - address
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowTransferFrom(_from: string, _to: string, _tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [_from,_to,_tokenId]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode unlockPermanent
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowUnlockPermanent(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0x35b0f6bd', __encodeData]));
}

/**
 * encode voting
 * @param {string | number} _tokenId - uint256
 * @param {boolean} _voted - bool
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowVoting(_tokenId: string | number, _voted: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bool"], [_tokenId,_voted]);
  return hexlify(concat(['0x5a4f459a', __encodeData]));
}

/**
 * encode withdraw
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowWithdraw(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0x2e1a7d4d', __encodeData]));
}

/**
 * encode withdrawManaged
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VotingEscrowWithdrawManaged(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0x370fb5fa', __encodeData]));
}