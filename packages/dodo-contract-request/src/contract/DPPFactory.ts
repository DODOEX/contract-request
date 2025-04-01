import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDPPFactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x5336edE8F971339F6c0e304c66ba16F1296A2Fbe","10":"0xDb9C53F2cED34875685B607c97A61a65DA2F30a8","56":"0xd9CAc3D964327e47399aebd8e1e6dCC4c251DaAE","137":"0xd24153244066F0afA9415563bFC7Ba248bfB7a51","196":"0xA909314363840f7c28b8EC314028e21722dd8Cb6","1030":"0xaC9a7053bC23D22ecC50F82cc9143d16bbC0E621","2818":"0x297A4885a7da4AaeF340FABEd119e7a6E3f2BCe8","5000":"0x46AF6b152F2cb02a3cFcc74014C2617BC4F6cD5C","8453":"0xc0F9553Df63De5a97Fe64422c8578D0657C360f7","10169":"0xa71415675F68f29259ddD63215E5518d2735bf0a","42161":"0xa6Cf3d163358aF376ec5e8B7Cc5e102a05FdE63D","43114":"0xb7865a5ceE051d35B09A48b624D7057d3362655a","47763":"0x4d89ceaf1EACf83909e1CA0d508B132d7e204A5d","48900":"0xb770C37F3A9eC6f25b791D9c791aDE09B0fb1AB8","59144":"0x97bBF5BB1dcfC93A8c67e97E50Bea19DB3416A83","80084":"0x385ADF58514D93F55bcFBC2ABC4154fBc0b08fDd","98865":"0xc6F5e5Ff8AbBe6A94A879A1E378c101E2A6bb9e6","167000":"0x297A4885a7da4AaeF340FABEd119e7a6E3f2BCe8","200901":"0x4c3c61cba411C9B60DC371b031262c730D3Da6a3","534352":"0x31AC053c31a77055b2ae2d3899091C0A9c19cE3a","543210":"0x1D7E9589c8c7438b64d2a585B4D1F5D946E4Bd64","11155111":"0x0B1467f71c082D8d410aF4376C685D9A6893cF36","11155931":"0xa914E15C8295ED2e971f319445a9B27Fc6eE0D85","1313161554":"0x40672211D4310ad71daDc8cDE7Aa3Fb90d420855"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_CLONE_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_DEFAULT_MAINTAINER_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_DEFAULT_MAINTAINER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_DEFAULT_MAINTAINER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_DEFAULT_MAINTAINER_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c5ccb9b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_DEFAULT_MT_FEE_RATE_MODEL_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_DEFAULT_MT_FEE_RATE_MODEL_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DPP_ADMIN_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_DPP_ADMIN_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x633644d6', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_DPP_ADMIN_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_DPP_ADMIN_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_DPP_ADMIN_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _DPP_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_DPP_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xace378ca', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_DPP_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_DPP_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_DPP_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDPPFactory_OWNER_(chainId: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDPPFactory_OWNER_(chainId as number);
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
export function fetchDPPFactory_REGISTRY_(chainId: number, __input1: string, __input2: string, __input3: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0xbdeb0a91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined, __input3: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_REGISTRY_', chainId, __input1, __input2, __input3],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null && __input3 !== undefined && __input3 !== null, 
    queryFn: () => {
        return fetchDPPFactory_REGISTRY_(chainId as number,__input1 as string,__input2 as string,__input3 as number);
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
export function fetchDPPFactory_USER_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa58888db', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPFactory_USER_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactory_USER_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDPPFactory_USER_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
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
export function fetchDPPFactoryGetDODOPool(chainId: number, baseToken: string, quoteToken: string): Promise<Array<string>> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [baseToken,quoteToken]);
  const __data = hexlify(concat(['0x57a281dc', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"pools","type":"address[]"}])
}
export function getFetchDPPFactoryGetDODOPoolQueryOptions(chainId: number | undefined, baseToken: string | undefined, quoteToken: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactoryGetDODOPool', chainId, baseToken, quoteToken],
    enabled: chainId !== undefined && chainId !== null && baseToken !== undefined && baseToken !== null && quoteToken !== undefined && quoteToken !== null, 
    queryFn: () => {
        return fetchDPPFactoryGetDODOPool(chainId as number,baseToken as string,quoteToken as string);
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
export function fetchDPPFactoryGetDODOPoolBidirection(chainId: number, token0: string, token1: string): Promise<{
    baseToken0Pool: Array<string>;
    baseToken1Pool: Array<string>;
  }> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [token0,token1]);
  const __data = hexlify(concat(['0x794e5538', __encodeData]));
  return contractRequests.batchCall<{
    baseToken0Pool: Array<string>;
    baseToken1Pool: Array<string>;
  }>(chainId, __to, __data, [{"internalType":"address[]","name":"baseToken0Pool","type":"address[]"},{"internalType":"address[]","name":"baseToken1Pool","type":"address[]"}])
}
export function getFetchDPPFactoryGetDODOPoolBidirectionQueryOptions(chainId: number | undefined, token0: string | undefined, token1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactoryGetDODOPoolBidirection', chainId, token0, token1],
    enabled: chainId !== undefined && chainId !== null && token0 !== undefined && token0 !== null && token1 !== undefined && token1 !== null, 
    queryFn: () => {
        return fetchDPPFactoryGetDODOPoolBidirection(chainId as number,token0 as string,token1 as string);
    }
  }
}

/**
 * fetch getDODOPoolByUser
 * @param {number} chainId - number
 * @param {string} user - address
 * @returns {Array<string>} pools - address[]
 */
export function fetchDPPFactoryGetDODOPoolByUser(chainId: number, user: string): Promise<Array<string>> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xe65f7029', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"pools","type":"address[]"}])
}
export function getFetchDPPFactoryGetDODOPoolByUserQueryOptions(chainId: number | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactoryGetDODOPoolByUser', chainId, user],
    enabled: chainId !== undefined && chainId !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchDPPFactoryGetDODOPoolByUser(chainId as number,user as string);
    }
  }
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDPPFactoryIsAdminListed(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDPPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDPPFactoryIsAdminListedQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDPPFactoryIsAdminListed', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDPPFactoryIsAdminListed(chainId as number,__input1 as string);
    }
  }
}

/**
 * encode addAdminList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryAddAdminList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xae52aae7', __encodeData]));
}

/**
 * encode addPoolByAdmin
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryAddPoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x39d00ef9', __encodeData]));
}

/**
 * encode batchAddPoolByAdmin
 * @param {Array<string>} creators - address[]
 * @param {Array<string>} baseTokens - address[]
 * @param {Array<string>} quoteTokens - address[]
 * @param {Array<string>} pools - address[]
 * @returns {string} encode data
 */
export function encodeDPPFactoryBatchAddPoolByAdmin(creators: Array<string>, baseTokens: Array<string>, quoteTokens: Array<string>, pools: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address[]","address[]","address[]","address[]"], [creators,baseTokens,quoteTokens,pools]);
  return hexlify(concat(['0x182e8dbb', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDPPFactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOPrivatePool

 * @returns {string} encode data
 */
export function encodeDPPFactoryCreateDODOPrivatePool() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x09b8adb8', __encodeData]));
}

/**
 * encode initDODOPrivatePool
 * @param {string} dppAddress - address
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} k - uint256
 * @param {string | number} i - uint256
 * @param {boolean} isOpenTwap - bool
 * @returns {string} encode data
 */
export function encodeDPPFactoryInitDODOPrivatePool(dppAddress: string, creator: string, baseToken: string, quoteToken: string, lpFeeRate: string | number, k: string | number, i: string | number, isOpenTwap: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","uint256","uint256","uint256","bool"], [dppAddress,creator,baseToken,quoteToken,lpFeeRate,k,i,isOpenTwap]);
  return hexlify(concat(['0x195eefe0', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeAdminList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryRemoveAdminList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xfd8bd849', __encodeData]));
}

/**
 * encode removePoolByAdmin
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryRemovePoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x43274b82', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateAdminTemplate
 * @param {string} _newDPPAdminTemplate - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryUpdateAdminTemplate(_newDPPAdminTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newDPPAdminTemplate]);
  return hexlify(concat(['0x7d2c82d7', __encodeData]));
}

/**
 * encode updateDefaultMaintainer
 * @param {string} _newMaintainer - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryUpdateDefaultMaintainer(_newMaintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMaintainer]);
  return hexlify(concat(['0x9e988ee3', __encodeData]));
}

/**
 * encode updateDppTemplate
 * @param {string} _newDPPTemplate - address
 * @returns {string} encode data
 */
export function encodeDPPFactoryUpdateDppTemplate(_newDPPTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newDPPTemplate]);
  return hexlify(concat(['0x44b7f78e', __encodeData]));
}