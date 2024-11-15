import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getERC20V3FactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x7466C6FE28180c33e2a35989FD6833C8dD5A7E16","2818":"0x8Ebbfe204E7EdA4be46b9d09c5dfa8b3e1500462","80084":"0x0B40A5f4f52B8B8980da7D7335197e3Ce531E232","167000":"0x8Ebbfe204E7EdA4be46b9d09c5dfa8b3e1500462","543210":"0xB182B6d922Ea00C194411a268D30C8c74A5ED3FE"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_CLONE_FACTORY_(chainId: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _CREATE_FEE_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20V3Factory_CREATE_FEE_(chainId: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x21235d4a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _CUSTOM_ERC20_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_CUSTOM_ERC20_TEMPLATE_(chainId: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaae79d0c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _CUSTOM_MINTABLE_ERC20_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_CUSTOM_MINTABLE_ERC20_TEMPLATE_(chainId: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe1f70b6b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _ERC20_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_ERC20_TEMPLATE_(chainId: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x97381760', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_NEW_OWNER_(chainId: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_OWNER_(chainId: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _USER_CUSTOM_MINTABLE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_USER_CUSTOM_MINTABLE_REGISTRY_(chainId: number, __input1: string, __input2: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xca7caaad', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _USER_CUSTOM_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_USER_CUSTOM_REGISTRY_(chainId: number, __input1: string, __input2: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x051396ff', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _USER_STD_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20V3Factory_USER_STD_REGISTRY_(chainId: number, __input1: string, __input2: number) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x35c70da0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getTokenByUser
 * @param {number} chainId - number
 * @param {string} user - address
 * @returns {Array<string>} stds - address[]
 * @returns {Array<string>} customs - address[]
 * @returns {Array<string>} mintables - address[]
 */
export function fetchERC20V3FactoryGetTokenByUser(chainId: number, user: string) {
  const __to = getERC20V3FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xd029d521', __encodeData]));
  return contractRequests.batchCall<{
    stds: Array<string>;
    customs: Array<string>;
    mintables: Array<string>;
  }>(chainId, __to, __data, ["address[]","address[]","address[]"])
}

/**
 * encode changeCreateFee
 * @param {number} newFee - uint256
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryChangeCreateFee(newFee: number) {
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
 * @param {number} totalSupply - uint256
 * @param {string} name - string
 * @param {string} symbol - string
 * @param {number} decimals - uint8
 * @param {number} tradeBurnRatio - uint256
 * @param {number} tradeFeeRatio - uint256
 * @param {string} teamAccount - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryCreateCustomERC20(totalSupply: number, name: string, symbol: string, decimals: number, tradeBurnRatio: number, tradeFeeRatio: number, teamAccount: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","string","string","uint8","uint256","uint256","address"], [totalSupply,name,symbol,decimals,tradeBurnRatio,tradeFeeRatio,teamAccount]);
  return hexlify(concat(['0xaef08a54', __encodeData]));
}

/**
 * encode createCustomMintableERC20
 * @param {number} initSupply - uint256
 * @param {string} name - string
 * @param {string} symbol - string
 * @param {number} decimals - uint8
 * @param {number} tradeBurnRatio - uint256
 * @param {number} tradeFeeRatio - uint256
 * @param {string} teamAccount - address
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryCreateCustomMintableERC20(initSupply: number, name: string, symbol: string, decimals: number, tradeBurnRatio: number, tradeFeeRatio: number, teamAccount: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","string","string","uint8","uint256","uint256","address"], [initSupply,name,symbol,decimals,tradeBurnRatio,tradeFeeRatio,teamAccount]);
  return hexlify(concat(['0x425a70ef', __encodeData]));
}

/**
 * encode createStdERC20
 * @param {number} totalSupply - uint256
 * @param {string} name - string
 * @param {string} symbol - string
 * @param {number} decimals - uint8
 * @returns {string} encode data
 */
export function encodeERC20V3FactoryCreateStdERC20(totalSupply: number, name: string, symbol: string, decimals: number) {
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