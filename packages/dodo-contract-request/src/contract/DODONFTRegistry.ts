import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTRegistryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xA7263eb38b9A61B72397c884b5f9bFb5C34A7840","56":"0x2c0Dd764A0bE8A7e747Cb0765E268d576edce31a","137":"0x840135913a2527C3481DB29e323E05F301D33210","42161":"0x8327b093caf1a32985887CE89BD6c8F80A6B7535"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTRegistry_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODONFTRegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTRegistry_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTRegistry_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTRegistry_OWNER_(chainId: number): Promise<string> {
  const __to = getDODONFTRegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTRegistry_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTRegistry_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @param {number} __input3 - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODONFTRegistry_REGISTRY_(chainId: number, __input1: string, __input2: string, __input3: number): Promise<string> {
  const __to = getDODONFTRegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0xbdeb0a91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTRegistry_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined, __input3: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __input1, __input2, __input3],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null && __input3 !== undefined && __input3 !== null, 
    queryFn: () => {
        return fetchDODONFTRegistry_REGISTRY_(chainId as number,__input1 as string,__input2 as string,__input3 as number);
    }
  }
}

/**
 * fetch _VAULT_FRAG_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchDODONFTRegistry_VAULT_FRAG_REGISTRY_(chainId: number, __input1: string): Promise<string> {
  const __to = getDODONFTRegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x52c362ca', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTRegistry_VAULT_FRAG_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODONFTRegistry_VAULT_FRAG_REGISTRY_(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch getDODOPool
 * @param {number} chainId - number
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @returns {Array<string>} pools - address[]
 */
export function fetchDODONFTRegistryGetDODOPool(chainId: number, baseToken: string, quoteToken: string): Promise<Array<string>> {
  const __to = getDODONFTRegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [baseToken,quoteToken]);
  const __data = hexlify(concat(['0x57a281dc', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"pools","type":"address[]"}])
}
export function getFetchDODONFTRegistryGetDODOPoolQueryOptions(chainId: number | undefined, baseToken: string | undefined, quoteToken: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, baseToken, quoteToken],
    enabled: chainId !== undefined && chainId !== null && baseToken !== undefined && baseToken !== null && quoteToken !== undefined && quoteToken !== null, 
    queryFn: () => {
        return fetchDODONFTRegistryGetDODOPool(chainId as number,baseToken as string,quoteToken as string);
    }
  }
}

/**
 * fetch getDODOPoolBidirection
 * @param {number} chainId - number
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @returns {Array<string>} baseToken0Pool - address[]
 * @returns {Array<string>} baseToken1Pool - address[]
 */
export function fetchDODONFTRegistryGetDODOPoolBidirection(chainId: number, token0: string, token1: string): Promise<{
    baseToken0Pool: Array<string>;
    baseToken1Pool: Array<string>;
  }> {
  const __to = getDODONFTRegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [token0,token1]);
  const __data = hexlify(concat(['0x794e5538', __encodeData]));
  return contractRequests.batchCall<{
    baseToken0Pool: Array<string>;
    baseToken1Pool: Array<string>;
  }>(chainId, __to, __data, [{"internalType":"address[]","name":"baseToken0Pool","type":"address[]"},{"internalType":"address[]","name":"baseToken1Pool","type":"address[]"}])
}
export function getFetchDODONFTRegistryGetDODOPoolBidirectionQueryOptions(chainId: number | undefined, token0: string | undefined, token1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, token0, token1],
    enabled: chainId !== undefined && chainId !== null && token0 !== undefined && token0 !== null && token1 !== undefined && token1 !== null, 
    queryFn: () => {
        return fetchDODONFTRegistryGetDODOPoolBidirection(chainId as number,token0 as string,token1 as string);
    }
  }
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFTRegistryIsAdminListed(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODONFTRegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODONFTRegistryIsAdminListedQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODONFTRegistryIsAdminListed(chainId as number,__input1 as string);
    }
  }
}

/**
 * encode addAdminList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODONFTRegistryAddAdminList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xae52aae7', __encodeData]));
}

/**
 * encode addRegistry
 * @param {string} vault - address
 * @param {string} fragment - address
 * @param {string} quoteToken - address
 * @param {string} dvm - address
 * @returns {string} encode data
 */
export function encodeDODONFTRegistryAddRegistry(vault: string, fragment: string, quoteToken: string, dvm: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [vault,fragment,quoteToken,dvm]);
  return hexlify(concat(['0x8e85f242', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODONFTRegistryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTRegistryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeAdminList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODONFTRegistryRemoveAdminList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xfd8bd849', __encodeData]));
}

/**
 * encode removeRegistry
 * @param {string} fragment - address
 * @returns {string} encode data
 */
export function encodeDODONFTRegistryRemoveRegistry(fragment: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [fragment]);
  return hexlify(concat(['0x74a0aff6', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTRegistryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}