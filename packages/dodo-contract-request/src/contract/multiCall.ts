import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

function getContractAddressByChainId(chainId: number) {
  const contractAddressObject = {"1":"0xeefba1e63905ef1d7acba5a8513c70307c1ce441","42161":"0xF718F2bd590E5621e53f7b89398e52f7Acced8ca"};
  const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
  if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
  return result
}

/**
 * fetch getCurrentBlockTimestamp
 * @param {number} chainId - int
 * @returns {number} timestamp - uint256
 */
export function fetchMultiCallGetCurrentBlockTimestamp(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0f28c97d', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getLastBlockHash
 * @param {number} chainId - int
 * @returns {string} blockHash - bytes32
 */
export function fetchMultiCallGetLastBlockHash(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x27e86d6e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch getEthBalance
 * @param {number} chainId - int
 * @param {string} addr - address
 * @returns {number} balance - uint256
 */
export function fetchMultiCallGetEthBalance(chainId: number, addr: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [addr]);
  const __data = hexlify(concat(['0x4d2301cc', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockDifficulty
 * @param {number} chainId - int
 * @returns {number} difficulty - uint256
 */
export function fetchMultiCallGetCurrentBlockDifficulty(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x72425d9d', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockGasLimit
 * @param {number} chainId - int
 * @returns {number} gaslimit - uint256
 */
export function fetchMultiCallGetCurrentBlockGasLimit(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x86d516e8', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockCoinbase
 * @param {number} chainId - int
 * @returns {string} coinbase - address
 */
export function fetchMultiCallGetCurrentBlockCoinbase(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa8b0574e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getBlockHash
 * @param {number} chainId - int
 * @param {number} blockNumber - uint256
 * @returns {string} blockHash - bytes32
 */
export function fetchMultiCallGetBlockHash(chainId: number, blockNumber: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [blockNumber]);
  const __data = hexlify(concat(['0xee82ac5e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * encode aggregate
 * @param {[string, string]} calls - tuple[]
 * @returns {string} encode data
 */
export function encodeMultiCallAggregate(calls: [string, string]) {
  return defaultAbiCoder.encode(["tuple[]"], [calls]);
}