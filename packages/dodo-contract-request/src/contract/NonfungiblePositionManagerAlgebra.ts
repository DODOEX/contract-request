import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"80084":"0x29a738deAFdd2c6806e2f66891D812A311799828"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchNonfungiblePositionManagerAlgebraDOMAIN_SEPARATOR(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchNonfungiblePositionManagerAlgebraDOMAIN_SEPARATORQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraDOMAIN_SEPARATOR', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraDOMAIN_SEPARATOR(chainId as number);
    }
  }
}

/**
 * fetch NONFUNGIBLE_POSITION_MANAGER_ADMINISTRATOR_ROLE
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchNonfungiblePositionManagerAlgebraNONFUNGIBLE_POSITION_MANAGER_ADMINISTRATOR_ROLE(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb227aa79', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchNonfungiblePositionManagerAlgebraNONFUNGIBLE_POSITION_MANAGER_ADMINISTRATOR_ROLEQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraNONFUNGIBLE_POSITION_MANAGER_ADMINISTRATOR_ROLE', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraNONFUNGIBLE_POSITION_MANAGER_ADMINISTRATOR_ROLE(chainId as number);
    }
  }
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchNonfungiblePositionManagerAlgebraPERMIT_TYPEHASH(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchNonfungiblePositionManagerAlgebraPERMIT_TYPEHASHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraPERMIT_TYPEHASH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraPERMIT_TYPEHASH(chainId as number);
    }
  }
}

/**
 * fetch WNativeToken
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerAlgebraWNativeToken(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8af3ac85', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraWNativeTokenQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraWNativeToken', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraWNativeToken(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchNonfungiblePositionManagerAlgebraBalanceOf(chainId: number, owner: string): Promise<bigint> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerAlgebraBalanceOfQueryOptions(chainId: number | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraBalanceOf', chainId, owner],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraBalanceOf(chainId as number,owner as string);
    }
  }
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerAlgebraFactory(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraFactoryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraFactory', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraFactory(chainId as number);
    }
  }
}

/**
 * fetch farmingApprovals
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} farmingCenterAddress - address
 */
export function fetchNonfungiblePositionManagerAlgebraFarmingApprovals(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x2d0b22de', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"farmingCenterAddress","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraFarmingApprovalsQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraFarmingApprovals', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraFarmingApprovals(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch farmingCenter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerAlgebraFarmingCenter(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdd56e5d8', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraFarmingCenterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraFarmingCenter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraFarmingCenter(chainId as number);
    }
  }
}

/**
 * fetch getApproved
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerAlgebraGetApproved(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x081812fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraGetApprovedQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraGetApproved', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraGetApproved(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch isApprovedForAll
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {string} operator - address
 * @returns {boolean} __output0 - bool
 */
export function fetchNonfungiblePositionManagerAlgebraIsApprovedForAll(chainId: number, owner: string, operator: string): Promise<boolean> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,operator]);
  const __data = hexlify(concat(['0xe985e9c5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchNonfungiblePositionManagerAlgebraIsApprovedForAllQueryOptions(chainId: number | undefined, owner: string | undefined, operator: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraIsApprovedForAll', chainId, owner, operator],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && operator !== undefined && operator !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraIsApprovedForAll(chainId as number,owner as string,operator as string);
    }
  }
}

/**
 * fetch isApprovedOrOwner
 * @param {number} chainId - number
 * @param {string} spender - address
 * @param {number} tokenId - uint256
 * @returns {boolean} __output0 - bool
 */
export function fetchNonfungiblePositionManagerAlgebraIsApprovedOrOwner(chainId: number, spender: string, tokenId: number): Promise<boolean> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,tokenId]);
  const __data = hexlify(concat(['0x430c2081', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchNonfungiblePositionManagerAlgebraIsApprovedOrOwnerQueryOptions(chainId: number | undefined, spender: string | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraIsApprovedOrOwner', chainId, spender, tokenId],
    enabled: chainId !== undefined && chainId !== null && spender !== undefined && spender !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraIsApprovedOrOwner(chainId as number,spender as string,tokenId as number);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchNonfungiblePositionManagerAlgebraName(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchNonfungiblePositionManagerAlgebraNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraName', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraName(chainId as number);
    }
  }
}

/**
 * fetch ownerOf
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerAlgebraOwnerOf(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x6352211e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraOwnerOfQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraOwnerOf', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraOwnerOf(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch poolDeployer
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerAlgebraPoolDeployer(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3119049a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraPoolDeployerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraPoolDeployer', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraPoolDeployer(chainId as number);
    }
  }
}

/**
 * fetch positions
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {bigint} nonce - uint88
 * @returns {string} operator - address
 * @returns {string} token0 - address
 * @returns {string} token1 - address
 * @returns {string} deployer - address
 * @returns {bigint} tickLower - int24
 * @returns {bigint} tickUpper - int24
 * @returns {bigint} liquidity - uint128
 * @returns {bigint} feeGrowthInside0LastX128 - uint256
 * @returns {bigint} feeGrowthInside1LastX128 - uint256
 * @returns {bigint} tokensOwed0 - uint128
 * @returns {bigint} tokensOwed1 - uint128
 */
export function fetchNonfungiblePositionManagerAlgebraPositions(chainId: number, tokenId: number): Promise<{
    nonce: bigint;
    operator: string;
    token0: string;
    token1: string;
    deployer: string;
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x99fbab88', __encodeData]));
  return contractRequests.batchCall<{
    nonce: bigint;
    operator: string;
    token0: string;
    token1: string;
    deployer: string;
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint88","name":"nonce","type":"uint88"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"address","name":"deployer","type":"address"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}])
}
export function getFetchNonfungiblePositionManagerAlgebraPositionsQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraPositions', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraPositions(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} interfaceId - bytes4
 * @returns {boolean} __output0 - bool
 */
export function fetchNonfungiblePositionManagerAlgebraSupportsInterface(chainId: number, interfaceId: string): Promise<boolean> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [interfaceId]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchNonfungiblePositionManagerAlgebraSupportsInterfaceQueryOptions(chainId: number | undefined, interfaceId: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraSupportsInterface', chainId, interfaceId],
    enabled: chainId !== undefined && chainId !== null && interfaceId !== undefined && interfaceId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraSupportsInterface(chainId as number,interfaceId as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchNonfungiblePositionManagerAlgebraSymbol(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchNonfungiblePositionManagerAlgebraSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraSymbol', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraSymbol(chainId as number);
    }
  }
}

/**
 * fetch tokenByIndex
 * @param {number} chainId - number
 * @param {number} index - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchNonfungiblePositionManagerAlgebraTokenByIndex(chainId: number, index: number): Promise<bigint> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [index]);
  const __data = hexlify(concat(['0x4f6ccce7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerAlgebraTokenByIndexQueryOptions(chainId: number | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraTokenByIndex', chainId, index],
    enabled: chainId !== undefined && chainId !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraTokenByIndex(chainId as number,index as number);
    }
  }
}

/**
 * fetch tokenFarmedIn
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} farmingCenterAddress - address
 */
export function fetchNonfungiblePositionManagerAlgebraTokenFarmedIn(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0xe7ce18a3', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"farmingCenterAddress","type":"address"}])
}
export function getFetchNonfungiblePositionManagerAlgebraTokenFarmedInQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraTokenFarmedIn', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraTokenFarmedIn(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch tokenOfOwnerByIndex
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {number} index - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchNonfungiblePositionManagerAlgebraTokenOfOwnerByIndex(chainId: number, owner: string, index: number): Promise<bigint> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [owner,index]);
  const __data = hexlify(concat(['0x2f745c59', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerAlgebraTokenOfOwnerByIndexQueryOptions(chainId: number | undefined, owner: string | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraTokenOfOwnerByIndex', chainId, owner, index],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraTokenOfOwnerByIndex(chainId as number,owner as string,index as number);
    }
  }
}

/**
 * fetch tokenURI
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - string
 */
export function fetchNonfungiblePositionManagerAlgebraTokenURI(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0xc87b56dd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchNonfungiblePositionManagerAlgebraTokenURIQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraTokenURI', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraTokenURI(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchNonfungiblePositionManagerAlgebraTotalSupply(chainId: number): Promise<bigint> {
  const __to = getNonfungiblePositionManagerAlgebraContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerAlgebraTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerAlgebraTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerAlgebraTotalSupply(chainId as number);
    }
  }
}

/**
 * encode algebraMintCallback
 * @param {string | number} amount0Owed - uint256
 * @param {string | number} amount1Owed - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraAlgebraMintCallback(amount0Owed: string | number, amount1Owed: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","bytes"], [amount0Owed,amount1Owed,data]);
  return hexlify(concat(['0x3dd657c5', __encodeData]));
}

/**
 * encode approve
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraApprove(to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,tokenId]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode approveForFarming
 * @param {string | number} tokenId - uint256
 * @param {boolean} approve - bool
 * @param {string} farmingAddress - address
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraApproveForFarming(tokenId: string | number, approve: boolean, farmingAddress: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bool","address"], [tokenId,approve,farmingAddress]);
  return hexlify(concat(['0x832f630a', __encodeData]));
}

/**
 * encode burn
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraBurn(tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  return hexlify(concat(['0x42966c68', __encodeData]));
}

/**
 * encode collect
 * @param {{tokenId: string | number; recipient: string; amount0Max: string | number; amount1Max: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraCollect(params: {tokenId: string | number; recipient: string; amount0Max: string | number; amount1Max: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, address, uint128, uint128)"], [Object.values(params)]);
  return hexlify(concat(['0x302e5bb1', __encodeData]));
}

/**
 * encode createAndInitializePoolIfNecessary
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @param {string} deployer - address
 * @param {string | number} sqrtPriceX96 - uint160
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraCreateAndInitializePoolIfNecessary(token0: string, token1: string, deployer: string, sqrtPriceX96: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint160","bytes"], [token0,token1,deployer,sqrtPriceX96,data]);
  return hexlify(concat(['0x72426eb1', __encodeData]));
}

/**
 * encode decreaseLiquidity
 * @param {{tokenId: string | number; liquidity: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraDecreaseLiquidity(params: {tokenId: string | number; liquidity: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, uint128, uint256, uint256, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0xc6887a9d', __encodeData]));
}

/**
 * encode increaseLiquidity
 * @param {{tokenId: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraIncreaseLiquidity(params: {tokenId: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, uint256, uint256, uint256, uint256, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0xf13884c1', __encodeData]));
}

/**
 * encode mint
 * @param {{token0: string; token1: string; deployer: string; tickLower: string | number; tickUpper: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; recipient: string; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraMint(params: {token0: string; token1: string; deployer: string; tickLower: string | number; tickUpper: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; recipient: string; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, address, int24, int24, uint256, uint256, uint256, uint256, address, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0x4405fca9', __encodeData]));
}

/**
 * encode multicall
 * @param {Array<string>} data - bytes[]
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraMulticall(data: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["bytes[]"], [data]);
  return hexlify(concat(['0xac9650d8', __encodeData]));
}

/**
 * encode permit
 * @param {string} spender - address
 * @param {string | number} tokenId - uint256
 * @param {string | number} deadline - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraPermit(spender: string, tokenId: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [spender,tokenId,deadline,v,r,s]);
  return hexlify(concat(['0x7ac2ff7b', __encodeData]));
}

/**
 * encode refundNativeToken

 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraRefundNativeToken() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x41865270', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSafeTransferFrom(from: string, to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,tokenId]);
  return hexlify(concat(['0x42842e0e', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSafeTransferFrom2(from: string, to: string, tokenId: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","bytes"], [from,to,tokenId,data]);
  return hexlify(concat(['0xb88d4fde', __encodeData]));
}

/**
 * encode selfPermit
 * @param {string} token - address
 * @param {string | number} value - uint256
 * @param {string | number} deadline - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSelfPermit(token: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [token,value,deadline,v,r,s]);
  return hexlify(concat(['0xf3995c67', __encodeData]));
}

/**
 * encode selfPermitAllowed
 * @param {string} token - address
 * @param {string | number} nonce - uint256
 * @param {string | number} expiry - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSelfPermitAllowed(token: string, nonce: string | number, expiry: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [token,nonce,expiry,v,r,s]);
  return hexlify(concat(['0x4659a494', __encodeData]));
}

/**
 * encode selfPermitAllowedIfNecessary
 * @param {string} token - address
 * @param {string | number} nonce - uint256
 * @param {string | number} expiry - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSelfPermitAllowedIfNecessary(token: string, nonce: string | number, expiry: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [token,nonce,expiry,v,r,s]);
  return hexlify(concat(['0xa4a78f0c', __encodeData]));
}

/**
 * encode selfPermitIfNecessary
 * @param {string} token - address
 * @param {string | number} value - uint256
 * @param {string | number} deadline - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSelfPermitIfNecessary(token: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [token,value,deadline,v,r,s]);
  return hexlify(concat(['0xc2e3140a', __encodeData]));
}

/**
 * encode setApprovalForAll
 * @param {string} operator - address
 * @param {boolean} approved - bool
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSetApprovalForAll(operator: string, approved: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [operator,approved]);
  return hexlify(concat(['0xa22cb465', __encodeData]));
}

/**
 * encode setFarmingCenter
 * @param {string} newFarmingCenter - address
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSetFarmingCenter(newFarmingCenter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newFarmingCenter]);
  return hexlify(concat(['0x4d10862d', __encodeData]));
}

/**
 * encode sweepToken
 * @param {string} token - address
 * @param {string | number} amountMinimum - uint256
 * @param {string} recipient - address
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSweepToken(token: string, amountMinimum: string | number, recipient: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","address"], [token,amountMinimum,recipient]);
  return hexlify(concat(['0xdf2ab5bb', __encodeData]));
}

/**
 * encode switchFarmingStatus
 * @param {string | number} tokenId - uint256
 * @param {boolean} toActive - bool
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraSwitchFarmingStatus(tokenId: string | number, toActive: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bool"], [tokenId,toActive]);
  return hexlify(concat(['0x70227515', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraTransferFrom(from: string, to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,tokenId]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode unwrapWNativeToken
 * @param {string | number} amountMinimum - uint256
 * @param {string} recipient - address
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerAlgebraUnwrapWNativeToken(amountMinimum: string | number, recipient: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [amountMinimum,recipient]);
  return hexlify(concat(['0x69bc35b2', __encodeData]));
}