import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDSPFactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x6fdDB76c93299D985f4d3FC7ac468F9A168577A4","10":"0x1f83858cD6d0ae7a08aB1FD977C06DABEcE6d711","56":"0x0fb9815938Ad069Bf90E14FE6C596c514BEDe767","137":"0x43C49f8DD240e1545F147211Ec9f917376Ac1e87","177":"0x297A4885a7da4AaeF340FABEd119e7a6E3f2BCe8","196":"0xda4a4c0033806a8D6a02a65FAaD43828C42b8c6C","1030":"0x9244EAa27266128610bad748625f512275A41a96","1689":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","2390":"0x6db1ed60c9d6090C87a280a0592365EE83Ca87Ed","2818":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","5000":"0x7dB214f2D46d94846936a0f8Bd9044c5C5Bd2b93","8453":"0x200D866Edf41070DE251Ef92715a6Ea825A5Eb80","10143":"0x4c639e4d0bfeC3D0766AAA0500Ae7e91418505Bf","10169":"0x29C7718e8B606cEF1c44Fe6e43e07aF9D0875DE1","42161":"0xC8fE2440744dcd733246a4dB14093664DEFD5A53","43111":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","43114":"0x2b0d94Eb7A63B8a2909dE1CB3951ecF7Ae76D2fE","47763":"0x79A273d00bBF7B73B92d6938b973f0197b734Acc","48900":"0xA312D73C1b537168f1C8588bDcaB9278df98Cd32","59144":"0x2933c0374089D7D98BA0C71c5E02E1A0e09deBEE","80084":"0x4c639e4d0bfeC3D0766AAA0500Ae7e91418505Bf","80094":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","98864":"0x0f9053E174c123098C17e60A2B1FAb3b303f9e29","98866":"0xB88f7eb2dA59E1E8E00E0158b195D5ca48403921","167000":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","200901":"0x668D4eD054aa62d12F95a64aa1C7e2791f176D0e","421614":"0x809fe4a7051304b08d6C8651d2d7f50668ab65DE","534352":"0x7E9c460d0A10bd0605B15F0d0388e307d34a62E6","543210":"0x3D4c730FD4663f226E60dE899Ffed72a3762AfA7","688688":"0x23839fAa9BF97C1D2E895A712A752E560436350C","11155111":"0xe7979E2F3e77196Bb2AB206eaa67Ea278A3E33A2","11155931":"0x4c639e4d0bfeC3D0766AAA0500Ae7e91418505Bf","1313161554":"0xbe9a66e49503e84ae59a4d0545365AABedf33b40"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDSPFactory_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_CLONE_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDSPFactory_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDSPFactory_DEFAULT_MAINTAINER_(chainId: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_DEFAULT_MAINTAINER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_DEFAULT_MAINTAINER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDSPFactory_DEFAULT_MAINTAINER_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDSPFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c5ccb9b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_DEFAULT_MT_FEE_RATE_MODEL_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_DEFAULT_MT_FEE_RATE_MODEL_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDSPFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId as number);
    }
  }
}

/**
 * fetch _DSP_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDSPFactory_DSP_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x59358068', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_DSP_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_DSP_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDSPFactory_DSP_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDSPFactory_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDSPFactory_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDSPFactory_OWNER_(chainId: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDSPFactory_OWNER_(chainId as number);
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
export function fetchDSPFactory_REGISTRY_(chainId: number, __input1: string, __input2: string, __input3: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0xbdeb0a91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined, __input3: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_REGISTRY_', chainId, __input1, __input2, __input3],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null && __input3 !== undefined && __input3 !== null, 
    queryFn: () => {
        return fetchDSPFactory_REGISTRY_(chainId as number,__input1 as string,__input2 as string,__input3 as number);
    }
  }
}

/**
 * fetch _USER_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchDSPFactory_USER_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa58888db', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSPFactory_USER_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactory_USER_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDSPFactory_USER_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch getDODOPool
 * @param {number} chainId - number
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @returns {Array<string>} machines - address[]
 */
export function fetchDSPFactoryGetDODOPool(chainId: number, baseToken: string, quoteToken: string): Promise<Array<string>> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [baseToken,quoteToken]);
  const __data = hexlify(concat(['0x57a281dc', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"machines","type":"address[]"}])
}
export function getFetchDSPFactoryGetDODOPoolQueryOptions(chainId: number | undefined, baseToken: string | undefined, quoteToken: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactoryGetDODOPool', chainId, baseToken, quoteToken],
    enabled: chainId !== undefined && chainId !== null && baseToken !== undefined && baseToken !== null && quoteToken !== undefined && quoteToken !== null, 
    queryFn: () => {
        return fetchDSPFactoryGetDODOPool(chainId as number,baseToken as string,quoteToken as string);
    }
  }
}

/**
 * fetch getDODOPoolBidirection
 * @param {number} chainId - number
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @returns {Array<string>} baseToken0Machines - address[]
 * @returns {Array<string>} baseToken1Machines - address[]
 */
export function fetchDSPFactoryGetDODOPoolBidirection(chainId: number, token0: string, token1: string): Promise<{
    baseToken0Machines: Array<string>;
    baseToken1Machines: Array<string>;
  }> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [token0,token1]);
  const __data = hexlify(concat(['0x794e5538', __encodeData]));
  return contractRequests.batchCall<{
    baseToken0Machines: Array<string>;
    baseToken1Machines: Array<string>;
  }>(chainId, __to, __data, [{"internalType":"address[]","name":"baseToken0Machines","type":"address[]"},{"internalType":"address[]","name":"baseToken1Machines","type":"address[]"}])
}
export function getFetchDSPFactoryGetDODOPoolBidirectionQueryOptions(chainId: number | undefined, token0: string | undefined, token1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactoryGetDODOPoolBidirection', chainId, token0, token1],
    enabled: chainId !== undefined && chainId !== null && token0 !== undefined && token0 !== null && token1 !== undefined && token1 !== null, 
    queryFn: () => {
        return fetchDSPFactoryGetDODOPoolBidirection(chainId as number,token0 as string,token1 as string);
    }
  }
}

/**
 * fetch getDODOPoolByUser
 * @param {number} chainId - number
 * @param {string} user - address
 * @returns {Array<string>} machines - address[]
 */
export function fetchDSPFactoryGetDODOPoolByUser(chainId: number, user: string): Promise<Array<string>> {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xe65f7029', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"machines","type":"address[]"}])
}
export function getFetchDSPFactoryGetDODOPoolByUserQueryOptions(chainId: number | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDSPFactoryGetDODOPoolByUser', chainId, user],
    enabled: chainId !== undefined && chainId !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchDSPFactoryGetDODOPoolByUser(chainId as number,user as string);
    }
  }
}

/**
 * encode addPoolByAdmin
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryAddPoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x39d00ef9', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDSPFactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOStablePool
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeDSPFactoryCreateDODOStablePool(baseToken: string, quoteToken: string, lpFeeRate: string | number, i: string | number, k: string | number, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bool"], [baseToken,quoteToken,lpFeeRate,i,k,isOpenTWAP]);
  return hexlify(concat(['0xcf5c2f10', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removePoolByAdmin
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryRemovePoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x43274b82', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateDSPTemplate
 * @param {string} _newDSPTemplate - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryUpdateDSPTemplate(_newDSPTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newDSPTemplate]);
  return hexlify(concat(['0x1cdd5094', __encodeData]));
}