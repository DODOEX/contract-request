import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVE33VoterContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2810":"0x74CAd58eD9712e3236D61dea8696B6Dced3da2b6"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch claimable
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterClaimable(chainId: number, __input1: string): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x402914f5', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterClaimableQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterClaimable', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterClaimable(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch emergencyCouncil
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterEmergencyCouncil(chainId: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7778960e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterEmergencyCouncilQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterEmergencyCouncil', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterEmergencyCouncil(chainId as number);
    }
  }
}

/**
 * fetch epochGovernor
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterEpochGovernor(chainId: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3aae971f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterEpochGovernorQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterEpochGovernor', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterEpochGovernor(chainId as number);
    }
  }
}

/**
 * fetch epochNext
 * @param {number} chainId - number
 * @param {number} _timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterEpochNext(chainId: number, _timestamp: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_timestamp]);
  const __data = hexlify(concat(['0x880e36fc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterEpochNextQueryOptions(chainId: number | undefined, _timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterEpochNext', chainId, _timestamp],
    enabled: chainId !== undefined && chainId !== null && _timestamp !== undefined && _timestamp !== null, 
    queryFn: () => {
        return fetchVE33VoterEpochNext(chainId as number,_timestamp as number);
    }
  }
}

/**
 * fetch epochStart
 * @param {number} chainId - number
 * @param {number} _timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterEpochStart(chainId: number, _timestamp: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_timestamp]);
  const __data = hexlify(concat(['0xaa9354a3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterEpochStartQueryOptions(chainId: number | undefined, _timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterEpochStart', chainId, _timestamp],
    enabled: chainId !== undefined && chainId !== null && _timestamp !== undefined && _timestamp !== null, 
    queryFn: () => {
        return fetchVE33VoterEpochStart(chainId as number,_timestamp as number);
    }
  }
}

/**
 * fetch epochVoteEnd
 * @param {number} chainId - number
 * @param {number} _timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterEpochVoteEnd(chainId: number, _timestamp: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_timestamp]);
  const __data = hexlify(concat(['0xd58b15d4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterEpochVoteEndQueryOptions(chainId: number | undefined, _timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterEpochVoteEnd', chainId, _timestamp],
    enabled: chainId !== undefined && chainId !== null && _timestamp !== undefined && _timestamp !== null, 
    queryFn: () => {
        return fetchVE33VoterEpochVoteEnd(chainId as number,_timestamp as number);
    }
  }
}

/**
 * fetch epochVoteStart
 * @param {number} chainId - number
 * @param {number} _timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterEpochVoteStart(chainId: number, _timestamp: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [_timestamp]);
  const __data = hexlify(concat(['0x39e9f3b6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterEpochVoteStartQueryOptions(chainId: number | undefined, _timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterEpochVoteStart', chainId, _timestamp],
    enabled: chainId !== undefined && chainId !== null && _timestamp !== undefined && _timestamp !== null, 
    queryFn: () => {
        return fetchVE33VoterEpochVoteStart(chainId as number,_timestamp as number);
    }
  }
}

/**
 * fetch factoryRegistry
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterFactoryRegistry(chainId: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3bf0c9fb', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterFactoryRegistryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterFactoryRegistry', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterFactoryRegistry(chainId as number);
    }
  }
}

/**
 * fetch forwarder
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterForwarder(chainId: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf645d4f9', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterForwarderQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterForwarder', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterForwarder(chainId as number);
    }
  }
}

/**
 * fetch gaugeToBribe
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterGaugeToBribe(chainId: number, __input1: string): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x929c8dcd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterGaugeToBribeQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterGaugeToBribe', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterGaugeToBribe(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch gaugeToFees
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterGaugeToFees(chainId: number, __input1: string): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xc4f08165', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterGaugeToFeesQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterGaugeToFees', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterGaugeToFees(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch gauges
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterGauges(chainId: number, __input1: string): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xb9a09fd5', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterGaugesQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterGauges', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterGauges(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch governor
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterGovernor(chainId: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0c340a24', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterGovernorQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterGovernor', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterGovernor(chainId as number);
    }
  }
}

/**
 * fetch isAlive
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VoterIsAlive(chainId: number, __input1: string): Promise<boolean> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1703e5f9', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VoterIsAliveQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterIsAlive', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterIsAlive(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch isGauge
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VoterIsGauge(chainId: number, __input1: string): Promise<boolean> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xaa79979b', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VoterIsGaugeQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterIsGauge', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterIsGauge(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch isTrustedForwarder
 * @param {number} chainId - number
 * @param {string} forwarder - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VoterIsTrustedForwarder(chainId: number, forwarder: string): Promise<boolean> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [forwarder]);
  const __data = hexlify(concat(['0x572b6c05', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VoterIsTrustedForwarderQueryOptions(chainId: number | undefined, forwarder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterIsTrustedForwarder', chainId, forwarder],
    enabled: chainId !== undefined && chainId !== null && forwarder !== undefined && forwarder !== null, 
    queryFn: () => {
        return fetchVE33VoterIsTrustedForwarder(chainId as number,forwarder as string);
    }
  }
}

/**
 * fetch isWhitelistedNFT
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VoterIsWhitelistedNFT(chainId: number, __input1: number): Promise<boolean> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xd4e2616f', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VoterIsWhitelistedNFTQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterIsWhitelistedNFT', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterIsWhitelistedNFT(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch isWhitelistedToken
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33VoterIsWhitelistedToken(chainId: number, __input1: string): Promise<boolean> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xab37f486', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33VoterIsWhitelistedTokenQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterIsWhitelistedToken', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterIsWhitelistedToken(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch lastVoted
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterLastVoted(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xf3594be0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterLastVotedQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterLastVoted', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterLastVoted(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch length
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterLength(chainId: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1f7b6d32', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterLengthQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterLength', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterLength(chainId as number);
    }
  }
}

/**
 * fetch maxVotingNum
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterMaxVotingNum(chainId: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe8b3fd57', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterMaxVotingNumQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterMaxVotingNum', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterMaxVotingNum(chainId as number);
    }
  }
}

/**
 * fetch minter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterMinter(chainId: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x07546172', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterMinterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterMinter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterMinter(chainId as number);
    }
  }
}

/**
 * fetch poolForGauge
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterPoolForGauge(chainId: number, __input1: string): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x06d6a1b2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterPoolForGaugeQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterPoolForGauge', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterPoolForGauge(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch poolVote
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterPoolVote(chainId: number, __input1: number, __input2: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa86a366d', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterPoolVoteQueryOptions(chainId: number | undefined, __input1: number | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterPoolVote', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33VoterPoolVote(chainId as number,__input1 as number,__input2 as number);
    }
  }
}

/**
 * fetch pools
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterPools(chainId: number, __input1: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xac4afa38', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterPoolsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterPools', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterPools(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch totalWeight
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterTotalWeight(chainId: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x96c82e57', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterTotalWeightQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterTotalWeight', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterTotalWeight(chainId as number);
    }
  }
}

/**
 * fetch usedWeights
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterUsedWeights(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x79e93824', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterUsedWeightsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterUsedWeights', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterUsedWeights(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch ve
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33VoterVe(chainId: number): Promise<string> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1f850716', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33VoterVeQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterVe', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33VoterVe(chainId as number);
    }
  }
}

/**
 * fetch votes
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @param {string} __input2 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterVotes(chainId: number, __input1: number, __input2: string): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0xd23254b4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterVotesQueryOptions(chainId: number | undefined, __input1: number | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterVotes', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33VoterVotes(chainId as number,__input1 as number,__input2 as string);
    }
  }
}

/**
 * fetch weights
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33VoterWeights(chainId: number, __input1: string): Promise<bigint> {
  const __to = getVE33VoterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xa7cac846', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33VoterWeightsQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33VoterWeights', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33VoterWeights(chainId as number,__input1 as string);
    }
  }
}

/**
 * encode claimBribes
 * @param {Array<string>} _bribes - address[]
 * @param {Array<Array<string>>} _tokens - address[][]
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterClaimBribes(_bribes: Array<string>, _tokens: Array<Array<string>>, _tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address[]","address[][]","uint256"], [_bribes,_tokens,_tokenId]);
  return hexlify(concat(['0x7715ee75', __encodeData]));
}

/**
 * encode claimFees
 * @param {Array<string>} _fees - address[]
 * @param {Array<Array<string>>} _tokens - address[][]
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterClaimFees(_fees: Array<string>, _tokens: Array<Array<string>>, _tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address[]","address[][]","uint256"], [_fees,_tokens,_tokenId]);
  return hexlify(concat(['0x666256aa', __encodeData]));
}

/**
 * encode claimRewards
 * @param {Array<string>} _gauges - address[]
 * @returns {string} encode data
 */
export function encodeVE33VoterClaimRewards(_gauges: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address[]"], [_gauges]);
  return hexlify(concat(['0xf9f031df', __encodeData]));
}

/**
 * encode createGauge
 * @param {string} _poolFactory - address
 * @param {string} _pool - address
 * @returns {string} encode data
 */
export function encodeVE33VoterCreateGauge(_poolFactory: string, _pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [_poolFactory,_pool]);
  return hexlify(concat(['0x794cea3c', __encodeData]));
}

/**
 * encode depositManaged
 * @param {string | number} _tokenId - uint256
 * @param {string | number} _mTokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterDepositManaged(_tokenId: string | number, _mTokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_tokenId,_mTokenId]);
  return hexlify(concat(['0xe0c11f9a', __encodeData]));
}

/**
 * encode distribute
 * @param {Array<string>} _gauges - address[]
 * @returns {string} encode data
 */
export function encodeVE33VoterDistribute(_gauges: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address[]"], [_gauges]);
  return hexlify(concat(['0x6138889b', __encodeData]));
}

/**
 * encode distribute
 * @param {string | number} _start - uint256
 * @param {string | number} _finish - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterDistribute2(_start: string | number, _finish: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_start,_finish]);
  return hexlify(concat(['0x7625391a', __encodeData]));
}

/**
 * encode initialize
 * @param {Array<string>} _tokens - address[]
 * @param {string} _minter - address
 * @returns {string} encode data
 */
export function encodeVE33VoterInitialize(_tokens: Array<string>, _minter: string) {
  const __encodeData = defaultAbiCoder.encode(["address[]","address"], [_tokens,_minter]);
  return hexlify(concat(['0x462d0b2e', __encodeData]));
}

/**
 * encode killGauge
 * @param {string} _gauge - address
 * @returns {string} encode data
 */
export function encodeVE33VoterKillGauge(_gauge: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_gauge]);
  return hexlify(concat(['0x992a7933', __encodeData]));
}

/**
 * encode notifyRewardAmount
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterNotifyRewardAmount(_amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0x3c6b16ab', __encodeData]));
}

/**
 * encode poke
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterPoke(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0x32145f90', __encodeData]));
}

/**
 * encode reset
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterReset(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0x310bd74b', __encodeData]));
}

/**
 * encode reviveGauge
 * @param {string} _gauge - address
 * @returns {string} encode data
 */
export function encodeVE33VoterReviveGauge(_gauge: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_gauge]);
  return hexlify(concat(['0x9f06247b', __encodeData]));
}

/**
 * encode setEmergencyCouncil
 * @param {string} _council - address
 * @returns {string} encode data
 */
export function encodeVE33VoterSetEmergencyCouncil(_council: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_council]);
  return hexlify(concat(['0xe586875f', __encodeData]));
}

/**
 * encode setEpochGovernor
 * @param {string} _epochGovernor - address
 * @returns {string} encode data
 */
export function encodeVE33VoterSetEpochGovernor(_epochGovernor: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_epochGovernor]);
  return hexlify(concat(['0x598d521b', __encodeData]));
}

/**
 * encode setGovernor
 * @param {string} _governor - address
 * @returns {string} encode data
 */
export function encodeVE33VoterSetGovernor(_governor: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_governor]);
  return hexlify(concat(['0xc42cf535', __encodeData]));
}

/**
 * encode setMaxVotingNum
 * @param {string | number} _maxVotingNum - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterSetMaxVotingNum(_maxVotingNum: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_maxVotingNum]);
  return hexlify(concat(['0x30331b2f', __encodeData]));
}

/**
 * encode updateFor
 * @param {string} _gauge - address
 * @returns {string} encode data
 */
export function encodeVE33VoterUpdateFor(_gauge: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_gauge]);
  return hexlify(concat(['0x0e0a5968', __encodeData]));
}

/**
 * encode updateFor
 * @param {string | number} start - uint256
 * @param {string | number} end - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterUpdateFor2(start: string | number, end: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [start,end]);
  return hexlify(concat(['0xc9ff6f4d', __encodeData]));
}

/**
 * encode updateFor
 * @param {Array<string>} _gauges - address[]
 * @returns {string} encode data
 */
export function encodeVE33VoterUpdateFor3(_gauges: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address[]"], [_gauges]);
  return hexlify(concat(['0xd560b0d7', __encodeData]));
}

/**
 * encode vote
 * @param {string | number} _tokenId - uint256
 * @param {Array<string>} _poolVote - address[]
 * @param {Array<string | number>} _weights - uint256[]
 * @returns {string} encode data
 */
export function encodeVE33VoterVote(_tokenId: string | number, _poolVote: Array<string>, _weights: Array<string | number>) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]"], [_tokenId,_poolVote,_weights]);
  return hexlify(concat(['0x7ac09bf7', __encodeData]));
}

/**
 * encode whitelistNFT
 * @param {string | number} _tokenId - uint256
 * @param {boolean} _bool - bool
 * @returns {string} encode data
 */
export function encodeVE33VoterWhitelistNFT(_tokenId: string | number, _bool: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bool"], [_tokenId,_bool]);
  return hexlify(concat(['0xe2819d5c', __encodeData]));
}

/**
 * encode whitelistToken
 * @param {string} _token - address
 * @param {boolean} _bool - bool
 * @returns {string} encode data
 */
export function encodeVE33VoterWhitelistToken(_token: string, _bool: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [_token,_bool]);
  return hexlify(concat(['0x0ffb1d8b', __encodeData]));
}

/**
 * encode withdrawManaged
 * @param {string | number} _tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33VoterWithdrawManaged(_tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_tokenId]);
  return hexlify(concat(['0x370fb5fa', __encodeData]));
}