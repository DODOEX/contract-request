import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVDODOTokenContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xc4436fBAE6eBa5d95bf7d53Ae515F8A707Bd402A"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CAN_TRANSFER_
 * @param {number} chainId - number
 * @returns {boolean} __output0 - bool
 */
export function fetchVDODOToken_CAN_TRANSFER_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc39eabf5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}
export function getFetchVDODOToken_CAN_TRANSFER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_CAN_TRANSFER_(chainId);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVDODOToken_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOToken_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DODO_APPROVE_PROXY_(chainId);
    }
  }
}

/**
 * fetch _DODO_CIRCULATION_HELPER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVDODOToken_DODO_CIRCULATION_HELPER_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeec2cc50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOToken_DODO_CIRCULATION_HELPER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DODO_CIRCULATION_HELPER_(chainId);
    }
  }
}

/**
 * fetch _DODO_FEE_BURN_RATIO_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVDODOToken_DODO_FEE_BURN_RATIO_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xce71b65c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOToken_DODO_FEE_BURN_RATIO_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DODO_FEE_BURN_RATIO_(chainId);
    }
  }
}

/**
 * fetch _DODO_PER_BLOCK_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVDODOToken_DODO_PER_BLOCK_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x74083bbf', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOToken_DODO_PER_BLOCK_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DODO_PER_BLOCK_(chainId);
    }
  }
}

/**
 * fetch _DODO_RATIO_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVDODOToken_DODO_RATIO_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb6617a1a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOToken_DODO_RATIO_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DODO_RATIO_(chainId);
    }
  }
}

/**
 * fetch _DODO_TEAM_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVDODOToken_DODO_TEAM_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb88c4f33', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOToken_DODO_TEAM_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DODO_TEAM_(chainId);
    }
  }
}

/**
 * fetch _DODO_TOKEN_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVDODOToken_DODO_TOKEN_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x34cf1332', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOToken_DODO_TOKEN_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DODO_TOKEN_(chainId);
    }
  }
}

/**
 * fetch _DOOD_GOV_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVDODOToken_DOOD_GOV_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5de65173', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOToken_DOOD_GOV_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_DOOD_GOV_(chainId);
    }
  }
}

/**
 * fetch _LAST_REWARD_BLOCK_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint32
 */
export function fetchVDODOToken_LAST_REWARD_BLOCK_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7cf834e1', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint32"])
}
export function getFetchVDODOToken_LAST_REWARD_BLOCK_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_LAST_REWARD_BLOCK_(chainId);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVDODOToken_NEW_OWNER_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOToken_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_NEW_OWNER_(chainId);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVDODOToken_OWNER_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOToken_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_OWNER_(chainId);
    }
  }
}

/**
 * fetch _SUPERIOR_RATIO_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVDODOToken_SUPERIOR_RATIO_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd2b5c5dd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOToken_SUPERIOR_RATIO_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_SUPERIOR_RATIO_(chainId);
    }
  }
}

/**
 * fetch _TOTAL_BLOCK_DISTRIBUTION_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint112
 */
export function fetchVDODOToken_TOTAL_BLOCK_DISTRIBUTION_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54087b21', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint112"])
}
export function getFetchVDODOToken_TOTAL_BLOCK_DISTRIBUTION_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_TOTAL_BLOCK_DISTRIBUTION_(chainId);
    }
  }
}

/**
 * fetch _TOTAL_BLOCK_REWARD_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVDODOToken_TOTAL_BLOCK_REWARD_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54015ea8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOToken_TOTAL_BLOCK_REWARD_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_TOTAL_BLOCK_REWARD_(chainId);
    }
  }
}

/**
 * fetch _TOTAL_STAKING_POWER_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVDODOToken_TOTAL_STAKING_POWER_(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6d401f71', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOToken_TOTAL_STAKING_POWER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOToken_TOTAL_STAKING_POWER_(chainId);
    }
  }
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVDODOTokenAllowance(chainId: number, owner: string, spender: string) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOTokenAllowanceQueryOptions(chainId: number | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, owner, spender],
    enabled: [!!chainId, !!owner, !!spender], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenAllowance(chainId, owner, spender);
    }
  }
}

/**
 * fetch alpha
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint112
 */
export function fetchVDODOTokenAlpha(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdb1d0fd5', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint112"])
}
export function getFetchVDODOTokenAlphaQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenAlpha(chainId);
    }
  }
}

/**
 * fetch availableBalanceOf
 * @param {number} chainId - number
 * @param {string} account - address
 * @returns {bigint} vDODOAmount - uint256
 */
export function fetchVDODOTokenAvailableBalanceOf(chainId: number, account: string) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x25d998bb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOTokenAvailableBalanceOfQueryOptions(chainId: number | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, account],
    enabled: [!!chainId, !!account], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenAvailableBalanceOf(chainId, account);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} account - address
 * @returns {bigint} vDODOAmount - uint256
 */
export function fetchVDODOTokenBalanceOf(chainId: number, account: string) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOTokenBalanceOfQueryOptions(chainId: number | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, account],
    enabled: [!!chainId, !!account], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenBalanceOf(chainId, account);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint8
 */
export function fetchVDODOTokenDecimals(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint8"])
}
export function getFetchVDODOTokenDecimalsQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenDecimals(chainId);
    }
  }
}

/**
 * fetch dodoBalanceOf
 * @param {number} chainId - number
 * @param {string} account - address
 * @returns {bigint} dodoAmount - uint256
 */
export function fetchVDODOTokenDodoBalanceOf(chainId: number, account: string) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x96153967', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOTokenDodoBalanceOfQueryOptions(chainId: number | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, account],
    enabled: [!!chainId, !!account], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenDodoBalanceOf(chainId, account);
    }
  }
}

/**
 * fetch getDODOWithdrawFeeRatio
 * @param {number} chainId - number
 * @returns {bigint} feeRatio - uint256
 */
export function fetchVDODOTokenGetDODOWithdrawFeeRatio(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdb90c318', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOTokenGetDODOWithdrawFeeRatioQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenGetDODOWithdrawFeeRatio(chainId);
    }
  }
}

/**
 * fetch getLatestAlpha
 * @param {number} chainId - number
 * @returns {bigint} newAlpha - uint256
 * @returns {bigint} curDistribution - uint256
 */
export function fetchVDODOTokenGetLatestAlpha(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf9eaa5df', __encodeData]));
  return contractRequests.batchCall<{
    newAlpha: bigint;
    curDistribution: bigint;
  }>(chainId, __to, __data, ["uint256","uint256"])
}
export function getFetchVDODOTokenGetLatestAlphaQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenGetLatestAlpha(chainId);
    }
  }
}

/**
 * fetch getSuperior
 * @param {number} chainId - number
 * @param {string} account - address
 * @returns {string} superior - address
 */
export function fetchVDODOTokenGetSuperior(chainId: number, account: string) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x443355e5', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchVDODOTokenGetSuperiorQueryOptions(chainId: number | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, account],
    enabled: [!!chainId, !!account], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenGetSuperior(chainId, account);
    }
  }
}

/**
 * fetch getWithdrawResult
 * @param {number} chainId - number
 * @param {number} dodoAmount - uint256
 * @returns {bigint} dodoReceive - uint256
 * @returns {bigint} burnDodoAmount - uint256
 * @returns {bigint} withdrawFeeDodoAmount - uint256
 */
export function fetchVDODOTokenGetWithdrawResult(chainId: number, dodoAmount: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [dodoAmount]);
  const __data = hexlify(concat(['0xbcb86052', __encodeData]));
  return contractRequests.batchCall<{
    dodoReceive: bigint;
    burnDodoAmount: bigint;
    withdrawFeeDodoAmount: bigint;
  }>(chainId, __to, __data, ["uint256","uint256","uint256"])
}
export function getFetchVDODOTokenGetWithdrawResultQueryOptions(chainId: number | undefined, dodoAmount: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, dodoAmount],
    enabled: [!!chainId, !!dodoAmount], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenGetWithdrawResult(chainId, dodoAmount);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVDODOTokenName(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}
export function getFetchVDODOTokenNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenName(chainId);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVDODOTokenSymbol(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}
export function getFetchVDODOTokenSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenSymbol(chainId);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} vDODOSupply - uint256
 */
export function fetchVDODOTokenTotalSupply(chainId: number) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchVDODOTokenTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenTotalSupply(chainId);
    }
  }
}

/**
 * fetch userInfo
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} stakingPower - uint128
 * @returns {bigint} superiorSP - uint128
 * @returns {string} superior - address
 * @returns {bigint} credit - uint256
 */
export function fetchVDODOTokenUserInfo(chainId: number, __input1: string) {
  const __to = getVDODOTokenContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1959a002', __encodeData]));
  return contractRequests.batchCall<{
    stakingPower: bigint;
    superiorSP: bigint;
    superior: string;
    credit: bigint;
  }>(chainId, __to, __data, ["uint128","uint128","address","uint256"])
}
export function getFetchVDODOTokenUserInfoQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __input1],
    enabled: [!!chainId, !!__input1], 
    queryFn: () => {
        // @ts-ignore
        return fetchVDODOTokenUserInfo(chainId, __input1);
    }
  }
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {number} vDODOAmount - uint256
 * @returns {string} encode data
 */
export function encodeVDODOTokenApprove(spender: string, vDODOAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,vDODOAmount]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode changePerReward
 * @param {number} dodoPerBlock - uint256
 * @returns {string} encode data
 */
export function encodeVDODOTokenChangePerReward(dodoPerBlock: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [dodoPerBlock]);
  return hexlify(concat(['0x300773cd', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeVDODOTokenClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode donate
 * @param {number} dodoAmount - uint256
 * @returns {string} encode data
 */
export function encodeVDODOTokenDonate(dodoAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [dodoAmount]);
  return hexlify(concat(['0xf14faf6f', __encodeData]));
}

/**
 * encode emergencyWithdraw

 * @returns {string} encode data
 */
export function encodeVDODOTokenEmergencyWithdraw() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xdb2e21bc', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeVDODOTokenInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode mint
 * @param {number} dodoAmount - uint256
 * @param {string} superiorAddress - address
 * @returns {string} encode data
 */
export function encodeVDODOTokenMint(dodoAmount: number, superiorAddress: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [dodoAmount,superiorAddress]);
  return hexlify(concat(['0x94bf804d', __encodeData]));
}

/**
 * encode preDepositedBlockReward
 * @param {number} dodoAmount - uint256
 * @returns {string} encode data
 */
export function encodeVDODOTokenPreDepositedBlockReward(dodoAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [dodoAmount]);
  return hexlify(concat(['0x5400e36f', __encodeData]));
}

/**
 * encode redeem
 * @param {number} vdodoAmount - uint256
 * @param {boolean} all - bool
 * @returns {string} encode data
 */
export function encodeVDODOTokenRedeem(vdodoAmount: number, all: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bool"], [vdodoAmount,all]);
  return hexlify(concat(['0xd65a06b0', __encodeData]));
}

/**
 * encode setCantransfer
 * @param {boolean} allowed - bool
 * @returns {string} encode data
 */
export function encodeVDODOTokenSetCantransfer(allowed: boolean) {
  const __encodeData = defaultAbiCoder.encode(["bool"], [allowed]);
  return hexlify(concat(['0xf3a37cd2', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {number} vDODOAmount - uint256
 * @returns {string} encode data
 */
export function encodeVDODOTokenTransfer(to: string, vDODOAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,vDODOAmount]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} vDODOAmount - uint256
 * @returns {string} encode data
 */
export function encodeVDODOTokenTransferFrom(from: string, to: string, vDODOAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,vDODOAmount]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeVDODOTokenTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateDODOCirculationHelper
 * @param {string} helper - address
 * @returns {string} encode data
 */
export function encodeVDODOTokenUpdateDODOCirculationHelper(helper: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [helper]);
  return hexlify(concat(['0xe401b5ba', __encodeData]));
}

/**
 * encode updateDODOFeeBurnRatio
 * @param {number} dodoFeeBurnRatio - uint256
 * @returns {string} encode data
 */
export function encodeVDODOTokenUpdateDODOFeeBurnRatio(dodoFeeBurnRatio: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [dodoFeeBurnRatio]);
  return hexlify(concat(['0xb420901a', __encodeData]));
}

/**
 * encode updateGovernance
 * @param {string} governance - address
 * @returns {string} encode data
 */
export function encodeVDODOTokenUpdateGovernance(governance: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [governance]);
  return hexlify(concat(['0xb2561263', __encodeData]));
}