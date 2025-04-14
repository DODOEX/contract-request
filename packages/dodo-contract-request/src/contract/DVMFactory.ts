import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDVMFactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x72d220cE168C4f361dD4deE5D826a01AD8598f6C","10":"0x2B800DC6270726F7E2266cE8cD5A3F8436fe0B40","56":"0x790B4A80Fb1094589A3c0eFC8740aA9b0C1733fB","137":"0x79887f65f83bdf15Bcc8736b5e5BcDB48fb8fE13","196":"0xcAcb29f0631612552eF50D4Fa02920910513b2B0","1030":"0xC77392396Be1FB5143f1f66A3Ae67dD03fbaBA27","2390":"0x0f9053E174c123098C17e60A2B1FAb3b303f9e29","2818":"0x6694eebf40924e04c952EA8F1626d19E7a656Bb7","5000":"0x29C7718e8B606cEF1c44Fe6e43e07aF9D0875DE1","8453":"0x0226fCE8c969604C3A0AD19c37d1FAFac73e13c2","10143":"0x6db1ed60c9d6090C87a280a0592365EE83Ca87Ed","10169":"0x97bBF5BB1dcfC93A8c67e97E50Bea19DB3416A83","42161":"0xDa4c4411c55B0785e501332354A036c04833B72b","43114":"0xfF133A6D335b50bDAa6612D19E1352B049A8aE6a","47763":"0xE59d098c36916397Cc14AB42Bb0F00093BDA9f04","48900":"0xA909314363840f7c28b8EC314028e21722dd8Cb6","59144":"0xc0F9553Df63De5a97Fe64422c8578D0657C360f7","80084":"0x6db1ed60c9d6090C87a280a0592365EE83Ca87Ed","80094":"0x6694eebf40924e04c952EA8F1626d19E7a656Bb7","98864":"0x8bCcE4CCEEf7e841A2A8A48F3250B9FB3b25B0C3","98866":"0x701Ac6fAD7850956f966a85655348ac1B7c93368","167000":"0x6694eebf40924e04c952EA8F1626d19E7a656Bb7","200901":"0x7Ad992fcebd899ddbEF7f031dCF96f382b81ECea","421614":"0xDF44F395F85D298C7fAD8Bfc71De5dFF9a129d36","534352":"0x5a0C840a7089aa222c4458b3BE0947fe5a5006DE","543210":"0x781dd6009E6aca6758D05F5907C72231E1117294","11155111":"0x2F86652dAEF5f1728c54191C955F065Ec3C188c7","11155931":"0x6db1ed60c9d6090C87a280a0592365EE83Ca87Ed","1313161554":"0x5515363c0412AdD5c72d3E302fE1bD7dCBCF93Fe","NaN":"0x6694eebf40924e04c952EA8F1626d19E7a656Bb7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDVMFactory_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_CLONE_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDVMFactory_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDVMFactory_DEFAULT_MAINTAINER_(chainId: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_DEFAULT_MAINTAINER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_DEFAULT_MAINTAINER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDVMFactory_DEFAULT_MAINTAINER_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDVMFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c5ccb9b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_DEFAULT_MT_FEE_RATE_MODEL_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_DEFAULT_MT_FEE_RATE_MODEL_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDVMFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId as number);
    }
  }
}

/**
 * fetch _DVM_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDVMFactory_DVM_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xccf0c059', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_DVM_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_DVM_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDVMFactory_DVM_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDVMFactory_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDVMFactory_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDVMFactory_OWNER_(chainId: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDVMFactory_OWNER_(chainId as number);
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
export function fetchDVMFactory_REGISTRY_(chainId: number, __input1: string, __input2: string, __input3: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0xbdeb0a91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined, __input3: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_REGISTRY_', chainId, __input1, __input2, __input3],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null && __input3 !== undefined && __input3 !== null, 
    queryFn: () => {
        return fetchDVMFactory_REGISTRY_(chainId as number,__input1 as string,__input2 as string,__input3 as number);
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
export function fetchDVMFactory_USER_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa58888db', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDVMFactory_USER_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactory_USER_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDVMFactory_USER_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
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
export function fetchDVMFactoryGetDODOPool(chainId: number, baseToken: string, quoteToken: string): Promise<Array<string>> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [baseToken,quoteToken]);
  const __data = hexlify(concat(['0x57a281dc', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"machines","type":"address[]"}])
}
export function getFetchDVMFactoryGetDODOPoolQueryOptions(chainId: number | undefined, baseToken: string | undefined, quoteToken: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactoryGetDODOPool', chainId, baseToken, quoteToken],
    enabled: chainId !== undefined && chainId !== null && baseToken !== undefined && baseToken !== null && quoteToken !== undefined && quoteToken !== null, 
    queryFn: () => {
        return fetchDVMFactoryGetDODOPool(chainId as number,baseToken as string,quoteToken as string);
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
export function fetchDVMFactoryGetDODOPoolBidirection(chainId: number, token0: string, token1: string): Promise<{
    baseToken0Machines: Array<string>;
    baseToken1Machines: Array<string>;
  }> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [token0,token1]);
  const __data = hexlify(concat(['0x794e5538', __encodeData]));
  return contractRequests.batchCall<{
    baseToken0Machines: Array<string>;
    baseToken1Machines: Array<string>;
  }>(chainId, __to, __data, [{"internalType":"address[]","name":"baseToken0Machines","type":"address[]"},{"internalType":"address[]","name":"baseToken1Machines","type":"address[]"}])
}
export function getFetchDVMFactoryGetDODOPoolBidirectionQueryOptions(chainId: number | undefined, token0: string | undefined, token1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactoryGetDODOPoolBidirection', chainId, token0, token1],
    enabled: chainId !== undefined && chainId !== null && token0 !== undefined && token0 !== null && token1 !== undefined && token1 !== null, 
    queryFn: () => {
        return fetchDVMFactoryGetDODOPoolBidirection(chainId as number,token0 as string,token1 as string);
    }
  }
}

/**
 * fetch getDODOPoolByUser
 * @param {number} chainId - number
 * @param {string} user - address
 * @returns {Array<string>} machines - address[]
 */
export function fetchDVMFactoryGetDODOPoolByUser(chainId: number, user: string): Promise<Array<string>> {
  const __to = getDVMFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xe65f7029', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"machines","type":"address[]"}])
}
export function getFetchDVMFactoryGetDODOPoolByUserQueryOptions(chainId: number | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDVMFactoryGetDODOPoolByUser', chainId, user],
    enabled: chainId !== undefined && chainId !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchDVMFactoryGetDODOPoolByUser(chainId as number,user as string);
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
export function encodeDVMFactoryAddPoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x39d00ef9', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDVMFactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOVendingMachine
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeDVMFactoryCreateDODOVendingMachine(baseToken: string, quoteToken: string, lpFeeRate: string | number, i: string | number, k: string | number, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bool"], [baseToken,quoteToken,lpFeeRate,i,k,isOpenTWAP]);
  return hexlify(concat(['0xe18c40c7', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDVMFactoryInitOwner(newOwner: string) {
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
export function encodeDVMFactoryRemovePoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x43274b82', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDVMFactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateDvmTemplate
 * @param {string} _newDVMTemplate - address
 * @returns {string} encode data
 */
export function encodeDVMFactoryUpdateDvmTemplate(_newDVMTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newDVMTemplate]);
  return hexlify(concat(['0xd99b8ad4', __encodeData]));
}