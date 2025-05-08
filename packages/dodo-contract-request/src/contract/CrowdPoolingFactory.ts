import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getCrowdPoolingFactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xE8C9A78725D0451FA19878D5f8A3dC0D55FECF25","10":"0x424976B3997514aFa7c5122D053b8973f225D9db","56":"0x778DF5B12170e8af8dF94356BfC864E57CE185DC","137":"0x42ddEc68db70F5992eB7AB22dfaD8A57109841C9","177":"0x5e8807fd1C80F7A43362CeBEFcB2Becedfc731Dc","196":"0xA312D73C1b537168f1C8588bDcaB9278df98Cd32","1030":"0xe05dd51e4eB5636f4f0E8e7Fbe82eA31a2ecef16","1689":"0xc6F5e5Ff8AbBe6A94A879A1E378c101E2A6bb9e6","2390":"0xa914E15C8295ED2e971f319445a9B27Fc6eE0D85","2818":"0xc6F5e5Ff8AbBe6A94A879A1E378c101E2A6bb9e6","5000":"0xE2004eE21f88a7D8e1A5EDc3c9617a0460CC7b99","7001":"0x385ADF58514D93F55bcFBC2ABC4154fBc0b08fDd","8453":"0x97bBF5BB1dcfC93A8c67e97E50Bea19DB3416A83","10143":"0x385ADF58514D93F55bcFBC2ABC4154fBc0b08fDd","10169":"0xFD2b7994f91c08aAa5e013E899334A2DBb500DF1","42161":"0x6E5f239f729c83E976a7A280F81Dd1685dd89218","43111":"0xc6F5e5Ff8AbBe6A94A879A1E378c101E2A6bb9e6","43114":"0x25B2f945Fec30F34b05d416C7c0b5c6c51A3ADdC","47763":"0x9fEA2Ada0688B11138cEceA294CDF7d7564347Aa","48900":"0x40b4030129FCFE660B4ecF35354e027260343049","53456":"0x297B5D923b9C18081ddE398B5b5aC6E09336B27c","59144":"0x6B9577b87666af89bd0e144b9b64e8Ed166E303d","80084":"0x3eE78C6214D924a54944f8719Df14cAD0C0107B7","80094":"0xc6F5e5Ff8AbBe6A94A879A1E378c101E2A6bb9e6","98864":"0x9Ac82EAD1945dF394867df6A053f7375634710fb","98866":"0xDC249Ea92D2e532ed63B45dc7C05B21926B97c6F","167000":"0xc6F5e5Ff8AbBe6A94A879A1E378c101E2A6bb9e6","200901":"0xB3d4823e02A9AB9A9A0Cc1636E776c360B67bED1","421614":"0x82d5730AB72a5e0ec6E85107418ECe79f4455dBa","534352":"0x4632e6EBd4a01eBF54739A9D71a62CEdb29E9183","543210":"0xeAa57581ea6003E3F128d1425859FD03901dD310","688688":"0x9Ac82EAD1945dF394867df6A053f7375634710fb","11155111":"0xCDA4a6cc5997002B87f28D46852F9F0aA0f3c897","11155931":"0x385ADF58514D93F55bcFBC2ABC4154fBc0b08fDd","1313161554":"0xc6962a577A3Be5311f9f9Ab9B8b6A69a25bBc817"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CALM_DURATION_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchCrowdPoolingFactory_CALM_DURATION_(chainId: number): Promise<bigint> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc2c2757b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchCrowdPoolingFactory_CALM_DURATION_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_CALM_DURATION_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_CALM_DURATION_(chainId as number);
    }
  }
}

/**
 * fetch _CAP_RATIO_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchCrowdPoolingFactory_CAP_RATIO_(chainId: number): Promise<bigint> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x792d793b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchCrowdPoolingFactory_CAP_RATIO_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_CAP_RATIO_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_CAP_RATIO_(chainId as number);
    }
  }
}

/**
 * fetch _CLIFF_RATE_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchCrowdPoolingFactory_CLIFF_RATE_(chainId: number): Promise<bigint> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x294dafc0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchCrowdPoolingFactory_CLIFF_RATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_CLIFF_RATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_CLIFF_RATE_(chainId as number);
    }
  }
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_CLONE_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _CP_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_CP_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa6569b3f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_CP_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_CP_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_CP_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_DEFAULT_MAINTAINER_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_DEFAULT_MAINTAINER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_DEFAULT_MAINTAINER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_DEFAULT_MAINTAINER_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c5ccb9b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_DEFAULT_MT_FEE_RATE_MODEL_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_DEFAULT_MT_FEE_RATE_MODEL_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_PERMISSION_MANAGER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_DEFAULT_PERMISSION_MANAGER_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe0f5d89e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_DEFAULT_PERMISSION_MANAGER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_DEFAULT_PERMISSION_MANAGER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_DEFAULT_PERMISSION_MANAGER_(chainId as number);
    }
  }
}

/**
 * fetch _DVM_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_DVM_FACTORY_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x69e4e417', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_DVM_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_DVM_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_DVM_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _FREEZE_DURATION_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchCrowdPoolingFactory_FREEZE_DURATION_(chainId: number): Promise<bigint> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xce90ea74', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchCrowdPoolingFactory_FREEZE_DURATION_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_FREEZE_DURATION_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_FREEZE_DURATION_(chainId as number);
    }
  }
}

/**
 * fetch _K_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchCrowdPoolingFactory_K_(chainId: number): Promise<bigint> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xec2fd46d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchCrowdPoolingFactory_K_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_K_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_K_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchCrowdPoolingFactory_OWNER_(chainId: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_OWNER_(chainId as number);
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
export function fetchCrowdPoolingFactory_REGISTRY_(chainId: number, __input1: string, __input2: string, __input3: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0xbdeb0a91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined, __input3: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_REGISTRY_', chainId, __input1, __input2, __input3],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null && __input3 !== undefined && __input3 !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_REGISTRY_(chainId as number,__input1 as string,__input2 as string,__input3 as number);
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
export function fetchCrowdPoolingFactory_USER_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa58888db', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchCrowdPoolingFactory_USER_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_USER_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_USER_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch _VEST_DURATION_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchCrowdPoolingFactory_VEST_DURATION_(chainId: number): Promise<bigint> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3ff9b61e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchCrowdPoolingFactory_VEST_DURATION_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactory_VEST_DURATION_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactory_VEST_DURATION_(chainId as number);
    }
  }
}

/**
 * fetch getCrowdPooling
 * @param {number} chainId - number
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @returns {Array<string>} pools - address[]
 */
export function fetchCrowdPoolingFactoryGetCrowdPooling(chainId: number, baseToken: string, quoteToken: string): Promise<Array<string>> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [baseToken,quoteToken]);
  const __data = hexlify(concat(['0x6556c7e5', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"pools","type":"address[]"}])
}
export function getFetchCrowdPoolingFactoryGetCrowdPoolingQueryOptions(chainId: number | undefined, baseToken: string | undefined, quoteToken: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactoryGetCrowdPooling', chainId, baseToken, quoteToken],
    enabled: chainId !== undefined && chainId !== null && baseToken !== undefined && baseToken !== null && quoteToken !== undefined && quoteToken !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactoryGetCrowdPooling(chainId as number,baseToken as string,quoteToken as string);
    }
  }
}

/**
 * fetch getCrowdPoolingBidirection
 * @param {number} chainId - number
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @returns {Array<string>} baseToken0Pools - address[]
 * @returns {Array<string>} baseToken1Pools - address[]
 */
export function fetchCrowdPoolingFactoryGetCrowdPoolingBidirection(chainId: number, token0: string, token1: string): Promise<{
    baseToken0Pools: Array<string>;
    baseToken1Pools: Array<string>;
  }> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [token0,token1]);
  const __data = hexlify(concat(['0x41a1759c', __encodeData]));
  return contractRequests.batchCall<{
    baseToken0Pools: Array<string>;
    baseToken1Pools: Array<string>;
  }>(chainId, __to, __data, [{"internalType":"address[]","name":"baseToken0Pools","type":"address[]"},{"internalType":"address[]","name":"baseToken1Pools","type":"address[]"}])
}
export function getFetchCrowdPoolingFactoryGetCrowdPoolingBidirectionQueryOptions(chainId: number | undefined, token0: string | undefined, token1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactoryGetCrowdPoolingBidirection', chainId, token0, token1],
    enabled: chainId !== undefined && chainId !== null && token0 !== undefined && token0 !== null && token1 !== undefined && token1 !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactoryGetCrowdPoolingBidirection(chainId as number,token0 as string,token1 as string);
    }
  }
}

/**
 * fetch getCrowdPoolingByUser
 * @param {number} chainId - number
 * @param {string} user - address
 * @returns {Array<string>} pools - address[]
 */
export function fetchCrowdPoolingFactoryGetCrowdPoolingByUser(chainId: number, user: string): Promise<Array<string>> {
  const __to = getCrowdPoolingFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xa820636b', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, [{"internalType":"address[]","name":"pools","type":"address[]"}])
}
export function getFetchCrowdPoolingFactoryGetCrowdPoolingByUserQueryOptions(chainId: number | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchCrowdPoolingFactoryGetCrowdPoolingByUser', chainId, user],
    enabled: chainId !== undefined && chainId !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchCrowdPoolingFactoryGetCrowdPoolingByUser(chainId as number,user as string);
    }
  }
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createCrowdPooling

 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactoryCreateCrowdPooling() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x89edcf14', __encodeData]));
}

/**
 * encode initCrowdPooling
 * @param {string} cpAddress - address
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {Array<string | number>} timeLine - uint256[]
 * @param {Array<string | number>} valueList - uint256[]
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactoryInitCrowdPooling(cpAddress: string, creator: string, baseToken: string, quoteToken: string, timeLine: Array<string | number>, valueList: Array<string | number>, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","uint256[]","uint256[]","bool"], [cpAddress,creator,baseToken,quoteToken,timeLine,valueList,isOpenTWAP]);
  return hexlify(concat(['0xecfc2db0', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactoryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode setCalmDuration
 * @param {string | number} _newCalmDuration - uint256
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactorySetCalmDuration(_newCalmDuration: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_newCalmDuration]);
  return hexlify(concat(['0x07b8a636', __encodeData]));
}

/**
 * encode setCapRatio
 * @param {string | number} _newCapRatio - uint256
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactorySetCapRatio(_newCapRatio: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_newCapRatio]);
  return hexlify(concat(['0xc06fe4ab', __encodeData]));
}

/**
 * encode setCliffRate
 * @param {string | number} _newCliffRate - uint256
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactorySetCliffRate(_newCliffRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_newCliffRate]);
  return hexlify(concat(['0x4c59de66', __encodeData]));
}

/**
 * encode setFreezeDuration
 * @param {string | number} _newFreeDuration - uint256
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactorySetFreezeDuration(_newFreeDuration: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_newFreeDuration]);
  return hexlify(concat(['0x6ca2aa95', __encodeData]));
}

/**
 * encode setK
 * @param {string | number} _newK - uint256
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactorySetK(_newK: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_newK]);
  return hexlify(concat(['0x67de8be9', __encodeData]));
}

/**
 * encode setVestDuration
 * @param {string | number} _newVestDuration - uint256
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactorySetVestDuration(_newVestDuration: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_newVestDuration]);
  return hexlify(concat(['0x5568587a', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateCPTemplate
 * @param {string} _newCPTemplate - address
 * @returns {string} encode data
 */
export function encodeCrowdPoolingFactoryUpdateCPTemplate(_newCPTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newCPTemplate]);
  return hexlify(concat(['0x64ddb013', __encodeData]));
}