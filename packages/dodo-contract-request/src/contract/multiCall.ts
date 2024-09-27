import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

function getContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x0Cd61B78fF75701eA23fCaec5a22D464F7E1Dc1e","42161":"0x3b49d23C0322ecD24D01c7b35f26a57Ec7cF7901"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch getCurrentBlockTimestamp
 * @param {number} chainId - number
 * @returns {bigint} timestamp - uint256
 */
export function fetchMultiCallGetCurrentBlockTimestamp(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0f28c97d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getLastBlockHash
 * @param {number} chainId - number
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
 * @param {number} chainId - number
 * @param {string} addr - address
 * @returns {bigint} balance - uint256
 */
export function fetchMultiCallGetEthBalance(chainId: number, addr: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [addr]);
  const __data = hexlify(concat(['0x4d2301cc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockDifficulty
 * @param {number} chainId - number
 * @returns {bigint} difficulty - uint256
 */
export function fetchMultiCallGetCurrentBlockDifficulty(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x72425d9d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockGasLimit
 * @param {number} chainId - number
 * @returns {bigint} gaslimit - uint256
 */
export function fetchMultiCallGetCurrentBlockGasLimit(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x86d516e8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCurrentBlockCoinbase
 * @param {number} chainId - number
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
 * @param {number} chainId - number
 * @param {bigint} blockNumber - uint256
 * @returns {string} blockHash - bytes32
 */
export function fetchMultiCallGetBlockHash(chainId: number, blockNumber: bigint) {
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