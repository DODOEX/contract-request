import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOMineV3RegistryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xf8ab09b3D2d5EfA603f4646E5a8A12588E852195","10":"0x9eD110c929A1F9E4AE4Fa8a88f7Be5c2292d2a7F","56":"0x2A5aa99095E3724b8955BF7b5E47dbe2730dabD8","137":"0x27566bf9504466F6f3a1571E1863Da42fff4D25E","196":"0xec627fef2AbC5632C01BA9435caAa78871E2e305","1030":"0x4632e6EBd4a01eBF54739A9D71a62CEdb29E9183","2818":"0x3Cdf6B62D042179FAa21745b074a688BB4979FB7","5000":"0x0B1467f71c082D8d410aF4376C685D9A6893cF36","8453":"0x8dD0Fea5FA2f7df535F87f312641Cc15d8B151BA","10169":"0x66c45FF040e86DC613F239123A5E21FFdC3A3fEC","42161":"0x2B40bC6c9C12c18787436aa1E2B761f684F42999","43114":"0x0fe261aeE0d1C4DFdDee4102E82Dd425999065F4","47763":"0xF34E6a993A0Def26B3e5BFA1E44BEbB4CB42cEC6","48900":"0x7Ad992fcebd899ddbEF7f031dCF96f382b81ECea","59144":"0x8dD0Fea5FA2f7df535F87f312641Cc15d8B151BA","80084":"0x286c2D4c9BDC464027021Bdab32B2750a02a355B","98866":"0xC975769aB5Ef947CB82535ca6607B0683a355195","167000":"0x3Cdf6B62D042179FAa21745b074a688BB4979FB7","200901":"0x62e2EC354E15ddA6A1E43586c86e745A59b4B81e","534352":"0xD63c8Bf9ACaFfE6da2a4043F1C94CC3a55F28117","543210":"0x228E504E37EC209Fe330d93738b56917e149D5C0","11155111":"0xa5fc92Ca57a21C87AA0477b1c8fE8B9Bbf69d6C2","11155931":"0x680829027709E2ef95D079aC97DDF5feAb82D248","1313161554":"0xfDDCA6ffCE24dF5bE3e8AaD32081822f86178048"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _LP_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_LP_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x06e6a8da', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Registry_LP_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Registry_LP_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDODOMineV3Registry_LP_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch _MINE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_MINE_REGISTRY_(chainId: number, __input1: string): Promise<string> {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x468c8d23', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Registry_MINE_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Registry_MINE_REGISTRY_', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOMineV3Registry_MINE_REGISTRY_(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Registry_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Registry_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Registry_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Registry_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Registry_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Registry_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _SINGLE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_SINGLE_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa3116529', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Registry_SINGLE_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Registry_SINGLE_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDODOMineV3Registry_SINGLE_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOMineV3RegistryIsAdminListed(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOMineV3RegistryIsAdminListedQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3RegistryIsAdminListed', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOMineV3RegistryIsAdminListed(chainId as number,__input1 as string);
    }
  }
}

/**
 * encode addAdminList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3RegistryAddAdminList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xae52aae7', __encodeData]));
}

/**
 * encode addMineV3
 * @param {string} mine - address
 * @param {boolean} isLpToken - bool
 * @param {string} stakeToken - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3RegistryAddMineV3(mine: string, isLpToken: boolean, stakeToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","address"], [mine,isLpToken,stakeToken]);
  return hexlify(concat(['0x146204d2', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOMineV3RegistryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3RegistryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeAdminList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3RegistryRemoveAdminList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xfd8bd849', __encodeData]));
}

/**
 * encode removeMineV3
 * @param {string} mine - address
 * @param {boolean} isLpToken - bool
 * @param {string} stakeToken - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3RegistryRemoveMineV3(mine: string, isLpToken: boolean, stakeToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","address"], [mine,isLpToken,stakeToken]);
  return hexlify(concat(['0x2805172f', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3RegistryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}