import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getNonfungiblePositionManagerContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"10143":"0xAB9Ce4952Ab90d10BE1FdED8DAd354F6a44930F8","167000":"0x2623281DdcC34A73a9e8898f2c57A32A860903f1","421614":"0x95B1D67F91d245acC55e8E76D3596c0f9f6AA22d","11155111":"0x483E5c0f309577f79b0a19cE65E332DD388aD7A8","11155931":"0x39C9DD6549700588fBF3d565F39AFDAd953029F7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchNonfungiblePositionManagerDOMAIN_SEPARATOR(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchNonfungiblePositionManagerDOMAIN_SEPARATORQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerDOMAIN_SEPARATOR', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerDOMAIN_SEPARATOR(chainId as number);
    }
  }
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchNonfungiblePositionManagerPERMIT_TYPEHASH(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchNonfungiblePositionManagerPERMIT_TYPEHASHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerPERMIT_TYPEHASH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerPERMIT_TYPEHASH(chainId as number);
    }
  }
}

/**
 * fetch WETH9
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerWETH9(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4aa4a4fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerWETH9QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerWETH9', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerWETH9(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchNonfungiblePositionManagerBalanceOf(chainId: number, owner: string): Promise<bigint> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerBalanceOfQueryOptions(chainId: number | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerBalanceOf', chainId, owner],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerBalanceOf(chainId as number,owner as string);
    }
  }
}

/**
 * fetch baseURI
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchNonfungiblePositionManagerBaseURI(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c0360eb', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchNonfungiblePositionManagerBaseURIQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerBaseURI', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerBaseURI(chainId as number);
    }
  }
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerFactory(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerFactoryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerFactory', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerFactory(chainId as number);
    }
  }
}

/**
 * fetch getApproved
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerGetApproved(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x081812fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerGetApprovedQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerGetApproved', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerGetApproved(chainId as number,tokenId as number);
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
export function fetchNonfungiblePositionManagerIsApprovedForAll(chainId: number, owner: string, operator: string): Promise<boolean> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,operator]);
  const __data = hexlify(concat(['0xe985e9c5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchNonfungiblePositionManagerIsApprovedForAllQueryOptions(chainId: number | undefined, owner: string | undefined, operator: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerIsApprovedForAll', chainId, owner, operator],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && operator !== undefined && operator !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerIsApprovedForAll(chainId as number,owner as string,operator as string);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchNonfungiblePositionManagerName(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchNonfungiblePositionManagerNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerName', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerName(chainId as number);
    }
  }
}

/**
 * fetch ownerOf
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchNonfungiblePositionManagerOwnerOf(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x6352211e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchNonfungiblePositionManagerOwnerOfQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerOwnerOf', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerOwnerOf(chainId as number,tokenId as number);
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
 * @returns {bigint} fee - uint24
 * @returns {bigint} tickLower - int24
 * @returns {bigint} tickUpper - int24
 * @returns {bigint} liquidity - uint128
 * @returns {bigint} feeGrowthInside0LastX128 - uint256
 * @returns {bigint} feeGrowthInside1LastX128 - uint256
 * @returns {bigint} tokensOwed0 - uint128
 * @returns {bigint} tokensOwed1 - uint128
 */
export function fetchNonfungiblePositionManagerPositions(chainId: number, tokenId: number): Promise<{
    nonce: bigint;
    operator: string;
    token0: string;
    token1: string;
    fee: bigint;
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x99fbab88', __encodeData]));
  return contractRequests.batchCall<{
    nonce: bigint;
    operator: string;
    token0: string;
    token1: string;
    fee: bigint;
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint96","name":"nonce","type":"uint96"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}])
}
export function getFetchNonfungiblePositionManagerPositionsQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerPositions', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerPositions(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} interfaceId - bytes4
 * @returns {boolean} __output0 - bool
 */
export function fetchNonfungiblePositionManagerSupportsInterface(chainId: number, interfaceId: string): Promise<boolean> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [interfaceId]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchNonfungiblePositionManagerSupportsInterfaceQueryOptions(chainId: number | undefined, interfaceId: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerSupportsInterface', chainId, interfaceId],
    enabled: chainId !== undefined && chainId !== null && interfaceId !== undefined && interfaceId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerSupportsInterface(chainId as number,interfaceId as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchNonfungiblePositionManagerSymbol(chainId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchNonfungiblePositionManagerSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerSymbol', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerSymbol(chainId as number);
    }
  }
}

/**
 * fetch tokenByIndex
 * @param {number} chainId - number
 * @param {number} index - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchNonfungiblePositionManagerTokenByIndex(chainId: number, index: number): Promise<bigint> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [index]);
  const __data = hexlify(concat(['0x4f6ccce7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerTokenByIndexQueryOptions(chainId: number | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerTokenByIndex', chainId, index],
    enabled: chainId !== undefined && chainId !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerTokenByIndex(chainId as number,index as number);
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
export function fetchNonfungiblePositionManagerTokenOfOwnerByIndex(chainId: number, owner: string, index: number): Promise<bigint> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [owner,index]);
  const __data = hexlify(concat(['0x2f745c59', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerTokenOfOwnerByIndexQueryOptions(chainId: number | undefined, owner: string | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerTokenOfOwnerByIndex', chainId, owner, index],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerTokenOfOwnerByIndex(chainId as number,owner as string,index as number);
    }
  }
}

/**
 * fetch tokenURI
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - string
 */
export function fetchNonfungiblePositionManagerTokenURI(chainId: number, tokenId: number): Promise<string> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0xc87b56dd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchNonfungiblePositionManagerTokenURIQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerTokenURI', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerTokenURI(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchNonfungiblePositionManagerTotalSupply(chainId: number): Promise<bigint> {
  const __to = getNonfungiblePositionManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchNonfungiblePositionManagerTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchNonfungiblePositionManagerTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchNonfungiblePositionManagerTotalSupply(chainId as number);
    }
  }
}

/**
 * encode approve
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerApprove(to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,tokenId]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burn
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerBurn(tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  return hexlify(concat(['0x42966c68', __encodeData]));
}

/**
 * encode collect
 * @param {{tokenId: string | number; recipient: string; amount0Max: string | number; amount1Max: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerCollect(params: {tokenId: string | number; recipient: string; amount0Max: string | number; amount1Max: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, address, uint128, uint128)"], [Object.values(params)]);
  return hexlify(concat(['0xfc6f7865', __encodeData]));
}

/**
 * encode createAndInitializePoolIfNecessary
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @param {string | number} fee - uint24
 * @param {string | number} sqrtPriceX96 - uint160
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerCreateAndInitializePoolIfNecessary(token0: string, token1: string, fee: string | number, sqrtPriceX96: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint24","uint160"], [token0,token1,fee,sqrtPriceX96]);
  return hexlify(concat(['0x13ead562', __encodeData]));
}

/**
 * encode decreaseLiquidity
 * @param {{tokenId: string | number; liquidity: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerDecreaseLiquidity(params: {tokenId: string | number; liquidity: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, uint128, uint256, uint256, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0x0c49ccbe', __encodeData]));
}

/**
 * encode increaseLiquidity
 * @param {{tokenId: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerIncreaseLiquidity(params: {tokenId: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(uint256, uint256, uint256, uint256, uint256, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0x219f5d17', __encodeData]));
}

/**
 * encode mint
 * @param {{token0: string; token1: string; fee: string | number; tickLower: string | number; tickUpper: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; recipient: string; deadline: string | number}} params - tuple
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerMint(params: {token0: string; token1: string; fee: string | number; tickLower: string | number; tickUpper: string | number; amount0Desired: string | number; amount1Desired: string | number; amount0Min: string | number; amount1Min: string | number; recipient: string; deadline: string | number}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, uint24, int24, int24, uint256, uint256, uint256, uint256, address, uint256)"], [Object.values(params)]);
  return hexlify(concat(['0x88316456', __encodeData]));
}

/**
 * encode multicall
 * @param {Array<string>} data - bytes[]
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerMulticall(data: Array<string>) {
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
export function encodeNonfungiblePositionManagerPermit(spender: string, tokenId: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [spender,tokenId,deadline,v,r,s]);
  return hexlify(concat(['0x7ac2ff7b', __encodeData]));
}

/**
 * encode refundETH

 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerRefundETH() {
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
export function encodeNonfungiblePositionManagerSafeTransferFrom(from: string, to: string, tokenId: string | number) {
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
export function encodeNonfungiblePositionManagerSafeTransferFrom2(from: string, to: string, tokenId: string | number, _data: string) {
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
export function encodeNonfungiblePositionManagerSelfPermit(token: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
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
export function encodeNonfungiblePositionManagerSelfPermitAllowed(token: string, nonce: string | number, expiry: string | number, v: string | number, r: string, s: string) {
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
export function encodeNonfungiblePositionManagerSelfPermitAllowedIfNecessary(token: string, nonce: string | number, expiry: string | number, v: string | number, r: string, s: string) {
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
export function encodeNonfungiblePositionManagerSelfPermitIfNecessary(token: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint8","bytes32","bytes32"], [token,value,deadline,v,r,s]);
  return hexlify(concat(['0xc2e3140a', __encodeData]));
}

/**
 * encode setApprovalForAll
 * @param {string} operator - address
 * @param {boolean} approved - bool
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerSetApprovalForAll(operator: string, approved: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [operator,approved]);
  return hexlify(concat(['0xa22cb465', __encodeData]));
}

/**
 * encode sweepToken
 * @param {string} token - address
 * @param {string | number} amountMinimum - uint256
 * @param {string} recipient - address
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerSweepToken(token: string, amountMinimum: string | number, recipient: string) {
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
export function encodeNonfungiblePositionManagerTransferFrom(from: string, to: string, tokenId: string | number) {
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
export function encodeNonfungiblePositionManagerUniswapV3MintCallback(amount0Owed: string | number, amount1Owed: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","bytes"], [amount0Owed,amount1Owed,data]);
  return hexlify(concat(['0xd3487997', __encodeData]));
}

/**
 * encode unwrapWETH9
 * @param {string | number} amountMinimum - uint256
 * @param {string} recipient - address
 * @returns {string} encode data
 */
export function encodeNonfungiblePositionManagerUnwrapWETH9(amountMinimum: string | number, recipient: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [amountMinimum,recipient]);
  return hexlify(concat(['0x49404b7c', __encodeData]));
}