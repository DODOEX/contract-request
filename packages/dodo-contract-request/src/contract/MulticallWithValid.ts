import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getMulticallWithValidContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x0Cd61B78fF75701eA23fCaec5a22D464F7E1Dc1e","2818":"0x388371233439cF57bB8C9f2e4835954841cfCb15","80084":"0x701855ae3a8b2A989DC8ACCf02Dd2b96f8B21671","167000":"0x388371233439cF57bB8C9f2e4835954841cfCb15","543210":"0x12Bea73C7117feC468Ae1Dd97923d0b3E41d6928"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch getBlockHash
 * @param {number} chainId - number
 * @param {number} blockNumber - uint256
 * @returns {string} blockHash - bytes32
 */
export function fetchMulticallWithValidGetBlockHash(chainId: number, blockNumber: number) {
  const __to = getMulticallWithValidContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [blockNumber]);
  const __data = hexlify(concat(['0xee82ac5e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch getCurrentBlockCoinbase
 * @param {number} chainId - number
 * @returns {string} coinbase - address
 */
export function fetchMulticallWithValidGetCurrentBlockCoinbase(chainId: number) {
  const __to = getMulticallWithValidContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa8b0574e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getCurrentBlockDifficulty
 * @param {number} chainId - number
 * @returns {bigint} difficulty - uint256
 */
export function fetchMulticallWithValidGetCurrentBlockDifficulty(chainId: number) {
  const __to = getMulticallWithValidContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x72425d9d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockGasLimit
 * @param {number} chainId - number
 * @returns {bigint} gaslimit - uint256
 */
export function fetchMulticallWithValidGetCurrentBlockGasLimit(chainId: number) {
  const __to = getMulticallWithValidContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x86d516e8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockTimestamp
 * @param {number} chainId - number
 * @returns {bigint} timestamp - uint256
 */
export function fetchMulticallWithValidGetCurrentBlockTimestamp(chainId: number) {
  const __to = getMulticallWithValidContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0f28c97d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getEthBalance
 * @param {number} chainId - number
 * @param {string} addr - address
 * @returns {bigint} balance - uint256
 */
export function fetchMulticallWithValidGetEthBalance(chainId: number, addr: string) {
  const __to = getMulticallWithValidContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [addr]);
  const __data = hexlify(concat(['0x4d2301cc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getLastBlockHash
 * @param {number} chainId - number
 * @returns {string} blockHash - bytes32
 */
export function fetchMulticallWithValidGetLastBlockHash(chainId: number) {
  const __to = getMulticallWithValidContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x27e86d6e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * encode aggregate
 * @param {[string, string]} calls - tuple[]
 * @returns {string} encode data
 */
export function encodeMulticallWithValidAggregate(calls: [string, string]) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, bytes)[]"], [calls]);
  return hexlify(concat(['0xd0707b67', __encodeData]));
}