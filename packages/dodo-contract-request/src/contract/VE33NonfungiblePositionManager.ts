import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVE33NonfungiblePositionManagerContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2810":"0x2b36c1be2a16ACb71E6F6CccfCd7D20cdfE01867"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchVE33NonfungiblePositionManagerDOMAIN_SEPARATOR(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchVE33NonfungiblePositionManagerDOMAIN_SEPARATORQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerDOMAIN_SEPARATOR', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerDOMAIN_SEPARATOR(chainId as number);
    }
  }
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchVE33NonfungiblePositionManagerPERMIT_TYPEHASH(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchVE33NonfungiblePositionManagerPERMIT_TYPEHASHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerPERMIT_TYPEHASH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerPERMIT_TYPEHASH(chainId as number);
    }
  }
}

/**
 * fetch WETH9
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33NonfungiblePositionManagerWETH9(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4aa4a4fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33NonfungiblePositionManagerWETH9QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerWETH9', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerWETH9(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33NonfungiblePositionManagerBalanceOf(chainId: number, owner: string): Promise<bigint> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33NonfungiblePositionManagerBalanceOfQueryOptions(chainId: number | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerBalanceOf', chainId, owner],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerBalanceOf(chainId as number,owner as string);
    }
  }
}

/**
 * fetch baseURI
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVE33NonfungiblePositionManagerBaseURI(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c0360eb', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33NonfungiblePositionManagerBaseURIQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerBaseURI', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerBaseURI(chainId as number);
    }
  }
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33NonfungiblePositionManagerFactory(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33NonfungiblePositionManagerFactoryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerFactory', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerFactory(chainId as number);
    }
  }
}

/**
 * fetch getApproved
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33NonfungiblePositionManagerGetApproved(chainId: number, tokenId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x081812fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33NonfungiblePositionManagerGetApprovedQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerGetApproved', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerGetApproved(chainId as number,tokenId as number);
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
export function fetchVE33NonfungiblePositionManagerIsApprovedForAll(chainId: number, owner: string, operator: string): Promise<boolean> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,operator]);
  const __data = hexlify(concat(['0xe985e9c5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33NonfungiblePositionManagerIsApprovedForAllQueryOptions(chainId: number | undefined, owner: string | undefined, operator: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerIsApprovedForAll', chainId, owner, operator],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && operator !== undefined && operator !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerIsApprovedForAll(chainId as number,owner as string,operator as string);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVE33NonfungiblePositionManagerName(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33NonfungiblePositionManagerNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerName', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerName(chainId as number);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33NonfungiblePositionManagerOwner(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33NonfungiblePositionManagerOwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerOwner', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerOwner(chainId as number);
    }
  }
}

/**
 * fetch ownerOf
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33NonfungiblePositionManagerOwnerOf(chainId: number, tokenId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x6352211e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33NonfungiblePositionManagerOwnerOfQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerOwnerOf', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerOwnerOf(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch positions
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {bigint} nonce - uint96
 * @returns {string} operator - address
 * @returns {string} token0 - address
 * @returns {string} token1 - address
 * @returns {bigint} tickSpacing - int24
 * @returns {bigint} tickLower - int24
 * @returns {bigint} tickUpper - int24
 * @returns {bigint} liquidity - uint128
 * @returns {bigint} feeGrowthInside0LastX128 - uint256
 * @returns {bigint} feeGrowthInside1LastX128 - uint256
 * @returns {bigint} tokensOwed0 - uint128
 * @returns {bigint} tokensOwed1 - uint128
 */
export function fetchVE33NonfungiblePositionManagerPositions(chainId: number, tokenId: number): Promise<{
    nonce: bigint;
    operator: string;
    token0: string;
    token1: string;
    tickSpacing: bigint;
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x99fbab88', __encodeData]));
  return contractRequests.batchCall<{
    nonce: bigint;
    operator: string;
    token0: string;
    token1: string;
    tickSpacing: bigint;
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint96","name":"nonce","type":"uint96"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"int24","name":"tickSpacing","type":"int24"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}])
}
export function getFetchVE33NonfungiblePositionManagerPositionsQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerPositions', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerPositions(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} interfaceId - bytes4
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33NonfungiblePositionManagerSupportsInterface(chainId: number, interfaceId: string): Promise<boolean> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [interfaceId]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33NonfungiblePositionManagerSupportsInterfaceQueryOptions(chainId: number | undefined, interfaceId: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerSupportsInterface', chainId, interfaceId],
    enabled: chainId !== undefined && chainId !== null && interfaceId !== undefined && interfaceId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerSupportsInterface(chainId as number,interfaceId as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchVE33NonfungiblePositionManagerSymbol(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33NonfungiblePositionManagerSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerSymbol', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerSymbol(chainId as number);
    }
  }
}

/**
 * fetch tokenByIndex
 * @param {number} chainId - number
 * @param {number} index - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33NonfungiblePositionManagerTokenByIndex(chainId: number, index: number): Promise<bigint> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [index]);
  const __data = hexlify(concat(['0x4f6ccce7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33NonfungiblePositionManagerTokenByIndexQueryOptions(chainId: number | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerTokenByIndex', chainId, index],
    enabled: chainId !== undefined && chainId !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerTokenByIndex(chainId as number,index as number);
    }
  }
}

/**
 * fetch tokenDescriptor
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33NonfungiblePositionManagerTokenDescriptor(chainId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5a9d7a68', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33NonfungiblePositionManagerTokenDescriptorQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerTokenDescriptor', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerTokenDescriptor(chainId as number);
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
export function fetchVE33NonfungiblePositionManagerTokenOfOwnerByIndex(chainId: number, owner: string, index: number): Promise<bigint> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [owner,index]);
  const __data = hexlify(concat(['0x2f745c59', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33NonfungiblePositionManagerTokenOfOwnerByIndexQueryOptions(chainId: number | undefined, owner: string | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerTokenOfOwnerByIndex', chainId, owner, index],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerTokenOfOwnerByIndex(chainId as number,owner as string,index as number);
    }
  }
}

/**
 * fetch tokenURI
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - string
 */
export function fetchVE33NonfungiblePositionManagerTokenURI(chainId: number, tokenId: number): Promise<string> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0xc87b56dd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchVE33NonfungiblePositionManagerTokenURIQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerTokenURI', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerTokenURI(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33NonfungiblePositionManagerTotalSupply(chainId: number): Promise<bigint> {
  const __to = getVE33NonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33NonfungiblePositionManagerTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33NonfungiblePositionManagerTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33NonfungiblePositionManagerTotalSupply(chainId as number);
    }
  }
}

/**
 * encode approve
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerApprove(to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,tokenId]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burn
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerBurn(tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  return hexlify(concat(['0x42966c68', __encodeData]));
}

/**
 * encode collect
 * @param {{tokenId: string | number; recipient: string; amount0Max: string | number; amount1Max: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerCollect(params: {tokenId: string | number; recipient: string; amount0Max: string | number; amount1Max: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, address, uint128, uint128)"], [Object.values(params)]);
  return hexlify(concat(['0xfc6f7865', __encodeData]));
}

/**
 * encode decreaseLiquidity
 * @param {{tokenId: string | number; liquidity: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerDecreaseLiquidity(params: {tokenId: string | number; liquidity: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, uint128, uint256, uint256, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0x0c49ccbe', __encodeData]));
}

/**
 * encode increaseLiquidity
 * @param {{tokenId: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerIncreaseLiquidity(params: {tokenId: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, uint256, uint256, uint256, uint256, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0x219f5d17', __encodeData]));
}

/**
 * encode mint
 * @param {{token0: string; token1: string; tickSpacing: string | number; tickLower: string | number; tickUpper: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; recipient: string; deadline: string | number; sqrtPriceX96: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerMint(params: {token0: string; token1: string; tickSpacing: string | number; tickLower: string | number; tickUpper: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; recipient: string; deadline: string | number; sqrtPriceX96: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, int24, int24, int24, uint256, uint256, uint256, uint256, address, uint256, uint160)"], [Object.values(params)]);
  return hexlify(concat(['0xb5007d1f', __encodeData]));
}

/**
 * encode multicall
 * @param {Array<string>} data - bytes[]
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerMulticall(data: Array<string>) {
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
export function encodeVE33NonfungiblePositionManagerPermit(spender: string, tokenId: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [spender,tokenId,deadline,v,r,s]);
  return hexlify(concat(['0x7ac2ff7b', __encodeData]));
}

/**
 * encode refundETH

 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerRefundETH() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x12210e8a', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerSafeTransferFrom(from: string, to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,tokenId]);
  return hexlify(concat(['0x42842e0e', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @param {string} _data - bytes
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerSafeTransferFrom2(from: string, to: string, tokenId: string | number, _data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","bytes"], [from,to,tokenId,_data]);
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
export function encodeVE33NonfungiblePositionManagerSelfPermit(token: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
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
export function encodeVE33NonfungiblePositionManagerSelfPermitAllowed(token: string, nonce: string | number, expiry: string | number, v: string | number, r: string, s: string) {
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
export function encodeVE33NonfungiblePositionManagerSelfPermitAllowedIfNecessary(token: string, nonce: string | number, expiry: string | number, v: string | number, r: string, s: string) {
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
export function encodeVE33NonfungiblePositionManagerSelfPermitIfNecessary(token: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [token,value,deadline,v,r,s]);
  return hexlify(concat(['0xc2e3140a', __encodeData]));
}

/**
 * encode setApprovalForAll
 * @param {string} operator - address
 * @param {boolean} approved - bool
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerSetApprovalForAll(operator: string, approved: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [operator,approved]);
  return hexlify(concat(['0xa22cb465', __encodeData]));
}

/**
 * encode setOwner
 * @param {string} _owner - address
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerSetOwner(_owner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_owner]);
  return hexlify(concat(['0x13af4035', __encodeData]));
}

/**
 * encode setTokenDescriptor
 * @param {string} _tokenDescriptor - address
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerSetTokenDescriptor(_tokenDescriptor: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_tokenDescriptor]);
  return hexlify(concat(['0xb6dc7ea3', __encodeData]));
}

/**
 * encode sweepToken
 * @param {string} token - address
 * @param {string | number} amountMinimum - uint256
 * @param {string} recipient - address
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerSweepToken(token: string, amountMinimum: string | number, recipient: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","address"], [token,amountMinimum,recipient]);
  return hexlify(concat(['0xdf2ab5bb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerTransferFrom(from: string, to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,tokenId]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode uniswapV3MintCallback
 * @param {string | number} amount0Owed - uint256
 * @param {string | number} amount1Owed - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerUniswapV3MintCallback(amount0Owed: string | number, amount1Owed: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","bytes"], [amount0Owed,amount1Owed,data]);
  return hexlify(concat(['0xd3487997', __encodeData]));
}

/**
 * encode unwrapWETH9
 * @param {string | number} amountMinimum - uint256
 * @param {string} recipient - address
 * @returns {string} encode data
 */
export function encodeVE33NonfungiblePositionManagerUnwrapWETH9(amountMinimum: string | number, recipient: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [amountMinimum,recipient]);
  return hexlify(concat(['0x49404b7c', __encodeData]));
}