import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getMulticallWithValidContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x0Cd61B78fF75701eA23fCaec5a22D464F7E1Dc1e","10":"0x9b5f2020a3121684bed861e7b5C64D2AF3f33841","56":"0xdcd53616CFf1Aec6342d8C813Ee393c1eC7D7807","137":"0xBd2456637cb7621984e1B7E60189a9856aA60813","196":"0xdf45fe87c36616a5ffdfe05d54a63f29afe91d9f","1030":"0x44023441f2bad375b6b5c6354b03c3e9ad01e269","2818":"0x388371233439cF57bB8C9f2e4835954841cfCb15","5000":"0x65934e2f228Fde069A6255F46E6A15Bc9DE38545","8453":"0xee7210fc88E1FFdB6aFb305E8F68b4f1d20FEdAd","10169":"0x6D3bd005A8a75d6522C9cFE7d309BB1Cf9650e03","42161":"0x3b49d23C0322ecD24D01c7b35f26a57Ec7cF7901","43114":"0xbcd2FDC3B884Cf0dfD932f55Ec2Fe1fB7e8c62Da","48900":"0xDF45Fe87c36616a5fFDFe05D54A63f29AfE91d9f","59144":"0x1172035A744Ea18161497e94f0bbCe244d51de9F","80084":"0x701855ae3a8b2A989DC8ACCf02Dd2b96f8B21671","167000":"0x388371233439cF57bB8C9f2e4835954841cfCb15","200901":"0xd5cf3f9dfcfc1c3f8b476d881f2f7e79142e319b","534352":"0x6433407a29706Bbdd43b36cd402a53A174f066a1","543210":"0x12Bea73C7117feC468Ae1Dd97923d0b3E41d6928","11155111":"0x1fC8EC204549C865a17b4059A57decA66A4Bd4cC","1313161554":"0x5a0C840a7089aa222c4458b3BE0947fe5a5006DE"};
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
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"blockHash","type":"bytes32"}])
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
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"coinbase","type":"address"}])
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
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"difficulty","type":"uint256"}])
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
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"gaslimit","type":"uint256"}])
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
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"timestamp","type":"uint256"}])
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
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"balance","type":"uint256"}])
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
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"blockHash","type":"bytes32"}])
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