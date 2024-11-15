import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOMineV3RegistryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xf8ab09b3D2d5EfA603f4646E5a8A12588E852195","2818":"0x3Cdf6B62D042179FAa21745b074a688BB4979FB7","80084":"0x286c2D4c9BDC464027021Bdab32B2750a02a355B","167000":"0x3Cdf6B62D042179FAa21745b074a688BB4979FB7","543210":"0x228E504E37EC209Fe330d93738b56917e149D5C0"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _LP_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_LP_REGISTRY_(chainId: number, __input1: string, __input2: number) {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x06e6a8da', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _MINE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_MINE_REGISTRY_(chainId: number, __input1: string) {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x468c8d23', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_NEW_OWNER_(chainId: number) {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_OWNER_(chainId: number) {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _SINGLE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Registry_SINGLE_REGISTRY_(chainId: number, __input1: string, __input2: number) {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa3116529', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOMineV3RegistryIsAdminListed(chainId: number, __input1: string) {
  const __to = getDODOMineV3RegistryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
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