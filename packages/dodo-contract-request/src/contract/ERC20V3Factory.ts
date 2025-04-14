import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getERC20V3FactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x7466C6FE28180c33e2a35989FD6833C8dD5A7E16","10":"0x5a274F1DeADf90FC844C9Ff94f79F9c1fF0E0aCC","56":"0x5eD22a48Fee263207f5cAAE1A1f1a27011e7Dc92","137":"0x5258Db198f6E39889bfCA6016786AF562Ab8bE91","196":"0x40b4030129FCFE660B4ecF35354e027260343049","1030":"0x585adbb35d0ee28b0d2adc7213284d37bab7ea4b","1689":"0x8Ebbfe204E7EdA4be46b9d09c5dfa8b3e1500462","2390":"0x385ADF58514D93F55bcFBC2ABC4154fBc0b08fDd","2818":"0x8Ebbfe204E7EdA4be46b9d09c5dfa8b3e1500462","5000":"0xFD2b7994f91c08aAa5e013E899334A2DBb500DF1","8453":"0xCb3dC90E800C961d4a206BeAAFd92A6d2E06495e","10143":"0x3eE78C6214D924a54944f8719Df14cAD0C0107B7","10169":"0xc0F9553Df63De5a97Fe64422c8578D0657C360f7","42161":"0x5CA5e03228a3C16EF262d29E588Adb6c2445fDbC","43114":"0x00971e21955F1bb8021a5eF2546beC2Ff896EE42","47763":"0xc1DFd16d42e696F54ca0717F3b74e8984Fd6e91B","48900":"0xec627fef2AbC5632C01BA9435caAa78871E2e305","53456":"0xDC249Ea92D2e532ed63B45dc7C05B21926B97c6F","59144":"0x0226fCE8c969604C3A0AD19c37d1FAFac73e13c2","80084":"0x0B40A5f4f52B8B8980da7D7335197e3Ce531E232","80094":"0x8Ebbfe204E7EdA4be46b9d09c5dfa8b3e1500462","98864":"0xa914E15C8295ED2e971f319445a9B27Fc6eE0D85","98866":"0x9691bBce4680d0c0bb9E798a71984984Ab1440C1","167000":"0x8Ebbfe204E7EdA4be46b9d09c5dfa8b3e1500462","200901":"0xe8bD8C45e8D0638d1Bfd39bC3B06534631DB3F13","421614":"0xf51705E360f706f46b83029A6f42Cb7b491a24dd","534352":"0x1F076a800005c758a505E759720eb6737136e893","543210":"0xB182B6d922Ea00C194411a268D30C8c74A5ED3FE","11155111":"0x4CAD0052524648A7Fa2cfE279997b00239295F33","11155931":"0x3eE78C6214D924a54944f8719Df14cAD0C0107B7","1313161554":"0xD6Bd9f3d4ad1b4464e8DdfF2da2bcAC1ff55D868"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_CLONE_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _CREATE_FEE_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20V3Factory_CREATE_FEE_(chainId: number): Promise<bigint> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x21235d4a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchERC20V3Factory_CREATE_FEE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_CREATE_FEE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_CREATE_FEE_(chainId as number);
    }
  }
}

/**
 * fetch _CUSTOM_ERC20_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_CUSTOM_ERC20_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaae79d0c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_CUSTOM_ERC20_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_CUSTOM_ERC20_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_CUSTOM_ERC20_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _CUSTOM_MINTABLE_ERC20_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_CUSTOM_MINTABLE_ERC20_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe1f70b6b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_CUSTOM_MINTABLE_ERC20_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_CUSTOM_MINTABLE_ERC20_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_CUSTOM_MINTABLE_ERC20_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _ERC20_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_ERC20_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x97381760', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_ERC20_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_ERC20_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_ERC20_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_OWNER_(chainId: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _USER_CUSTOM_MINTABLE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_USER_CUSTOM_MINTABLE_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xca7caaad', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_USER_CUSTOM_MINTABLE_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_USER_CUSTOM_MINTABLE_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_USER_CUSTOM_MINTABLE_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch _USER_CUSTOM_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_USER_CUSTOM_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x051396ff', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_USER_CUSTOM_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_USER_CUSTOM_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_USER_CUSTOM_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch _USER_STD_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_USER_STD_REGISTRY_(chainId: number, __input1: string, __input2: number): Promise<string> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x35c70da0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20V3Factory_USER_STD_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3Factory_USER_STD_REGISTRY_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchERC20V3Factory_USER_STD_REGISTRY_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch getTokenByUser
 * @param {number} chainId - number
 * @param {string} user - address
 * @returns {Array<string>} stds - address[]
 * @returns {Array<string>} customs - address[]
 * @returns {Array<string>} mintables - address[]
 */
export function fetchERC20V3FactoryGetTokenByUser(chainId: number, user: string): Promise<{
    stds: Array<string>;
    customs: Array<string>;
    mintables: Array<string>;
  }> {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xd029d521', __encodeData]));
  return contractRequests.batchCall<{
    stds: Array<string>;
    customs: Array<string>;
    mintables: Array<string>;
  }>(chainId, __to, __data, [{"internalType":"address[]","name":"stds","type":"address[]"},{"internalType":"address[]","name":"customs","type":"address[]"},{"internalType":"address[]","name":"mintables","type":"address[]"}])
}
export function getFetchERC20V3FactoryGetTokenByUserQueryOptions(chainId: number | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20V3FactoryGetTokenByUser', chainId, user],
    enabled: chainId !== undefined && chainId !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchERC20V3FactoryGetTokenByUser(chainId as number,user as string);
    }
  }
}

/**
 * encode changeCreateFee
 * @param {string | number} newFee - uint256
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryChangeCreateFee(newFee: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newFee]);
  return hexlify(concat(['0xe6acc72d', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeERC20V3FactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createCustomERC20
 * @param {string | number} totalSupply - uint256
 * @param {string} name - string
 * @param {string} symbol - string
 * @param {string | number} decimals - uint8
 * @param {string | number} tradeBurnRatio - uint256
 * @param {string | number} tradeFeeRatio - uint256
 * @param {string} teamAccount - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryCreateCustomERC20(totalSupply: string | number, name: string, symbol: string, decimals: string | number, tradeBurnRatio: string | number, tradeFeeRatio: string | number, teamAccount: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","string","string","uint8","uint256","uint256","address"], [totalSupply,name,symbol,decimals,tradeBurnRatio,tradeFeeRatio,teamAccount]);
  return hexlify(concat(['0xaef08a54', __encodeData]));
}

/**
 * encode createCustomMintableERC20
 * @param {string | number} initSupply - uint256
 * @param {string} name - string
 * @param {string} symbol - string
 * @param {string | number} decimals - uint8
 * @param {string | number} tradeBurnRatio - uint256
 * @param {string | number} tradeFeeRatio - uint256
 * @param {string} teamAccount - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryCreateCustomMintableERC20(initSupply: string | number, name: string, symbol: string, decimals: string | number, tradeBurnRatio: string | number, tradeFeeRatio: string | number, teamAccount: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","string","string","uint8","uint256","uint256","address"], [initSupply,name,symbol,decimals,tradeBurnRatio,tradeFeeRatio,teamAccount]);
  return hexlify(concat(['0x425a70ef', __encodeData]));
}

/**
 * encode createStdERC20
 * @param {string | number} totalSupply - uint256
 * @param {string} name - string
 * @param {string} symbol - string
 * @param {string | number} decimals - uint8
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryCreateStdERC20(totalSupply: string | number, name: string, symbol: string, decimals: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","string","string","uint8"], [totalSupply,name,symbol,decimals]);
  return hexlify(concat(['0xc3223a18', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateCustomMintableTemplate
 * @param {string} newCustomMintableTemplate - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryUpdateCustomMintableTemplate(newCustomMintableTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newCustomMintableTemplate]);
  return hexlify(concat(['0x47b3f0e3', __encodeData]));
}

/**
 * encode updateCustomTemplate
 * @param {string} newCustomTemplate - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryUpdateCustomTemplate(newCustomTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newCustomTemplate]);
  return hexlify(concat(['0xafa16b40', __encodeData]));
}

/**
 * encode updateStdTemplate
 * @param {string} newStdTemplate - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryUpdateStdTemplate(newStdTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newStdTemplate]);
  return hexlify(concat(['0x28ab047f', __encodeData]));
}

/**
 * encode withdraw

 * @returns {string} encode data
 */
export function encodeERC20V3FactoryWithdraw() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x3ccfd60b', __encodeData]));
}