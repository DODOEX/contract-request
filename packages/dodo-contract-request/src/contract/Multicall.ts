import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getMulticallContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2818":"0xEf1F9B93c4F4E31260b316DC5740adcE54209479","47763":"0xEf1F9B93c4F4E31260b316DC5740adcE54209479","80084":"0x1bE661D780631d8CAB4DEafB71CFC3dD071ae3f2","98865":"0x388371233439cF57bB8C9f2e4835954841cfCb15","167000":"0xEf1F9B93c4F4E31260b316DC5740adcE54209479","543210":"0x77019E6f7b7E685C1A3f1d6F67Dabc9Ce7A6393A"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch getBlockHash
 * @param {number} chainId - number
 * @param {number} blockNumber - uint256
 * @returns {string} blockHash - bytes32
 */
export function fetchMulticallGetBlockHash(chainId: number, blockNumber: number): Promise<string> {
  const __to = getMulticallContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [blockNumber]);
  const __data = hexlify(concat(['0xee82ac5e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"blockHash","type":"bytes32"}])
}
export function getFetchMulticallGetBlockHashQueryOptions(chainId: number | undefined, blockNumber: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, blockNumber],
    enabled: chainId !== undefined && chainId !== null && blockNumber !== undefined && blockNumber !== null, 
    queryFn: () => {
        return fetchMulticallGetBlockHash(chainId as number,blockNumber as number);
    }
  }
}

/**
 * fetch getCurrentBlockCoinbase
 * @param {number} chainId - number
 * @returns {string} coinbase - address
 */
export function fetchMulticallGetCurrentBlockCoinbase(chainId: number): Promise<string> {
  const __to = getMulticallContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa8b0574e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"coinbase","type":"address"}])
}
export function getFetchMulticallGetCurrentBlockCoinbaseQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchMulticallGetCurrentBlockCoinbase(chainId as number);
    }
  }
}

/**
 * fetch getCurrentBlockDifficulty
 * @param {number} chainId - number
 * @returns {bigint} difficulty - uint256
 */
export function fetchMulticallGetCurrentBlockDifficulty(chainId: number): Promise<bigint> {
  const __to = getMulticallContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x72425d9d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"difficulty","type":"uint256"}])
}
export function getFetchMulticallGetCurrentBlockDifficultyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchMulticallGetCurrentBlockDifficulty(chainId as number);
    }
  }
}

/**
 * fetch getCurrentBlockGasLimit
 * @param {number} chainId - number
 * @returns {bigint} gaslimit - uint256
 */
export function fetchMulticallGetCurrentBlockGasLimit(chainId: number): Promise<bigint> {
  const __to = getMulticallContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x86d516e8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"gaslimit","type":"uint256"}])
}
export function getFetchMulticallGetCurrentBlockGasLimitQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchMulticallGetCurrentBlockGasLimit(chainId as number);
    }
  }
}

/**
 * fetch getCurrentBlockTimestamp
 * @param {number} chainId - number
 * @returns {bigint} timestamp - uint256
 */
export function fetchMulticallGetCurrentBlockTimestamp(chainId: number): Promise<bigint> {
  const __to = getMulticallContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0f28c97d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"timestamp","type":"uint256"}])
}
export function getFetchMulticallGetCurrentBlockTimestampQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchMulticallGetCurrentBlockTimestamp(chainId as number);
    }
  }
}

/**
 * fetch getEthBalance
 * @param {number} chainId - number
 * @param {string} addr - address
 * @returns {bigint} balance - uint256
 */
export function fetchMulticallGetEthBalance(chainId: number, addr: string): Promise<bigint> {
  const __to = getMulticallContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [addr]);
  const __data = hexlify(concat(['0x4d2301cc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"balance","type":"uint256"}])
}
export function getFetchMulticallGetEthBalanceQueryOptions(chainId: number | undefined, addr: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, addr],
    enabled: chainId !== undefined && chainId !== null && addr !== undefined && addr !== null, 
    queryFn: () => {
        return fetchMulticallGetEthBalance(chainId as number,addr as string);
    }
  }
}

/**
 * fetch getLastBlockHash
 * @param {number} chainId - number
 * @returns {string} blockHash - bytes32
 */
export function fetchMulticallGetLastBlockHash(chainId: number): Promise<string> {
  const __to = getMulticallContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x27e86d6e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"blockHash","type":"bytes32"}])
}
export function getFetchMulticallGetLastBlockHashQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchMulticallGetLastBlockHash(chainId as number);
    }
  }
}

/**
 * encode aggregate
 * @param {[string, string]} calls - tuple[]
 * @returns {string} encode data
 */
export function encodeMulticallAggregate(calls: [string, string]) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, bytes)[]"], [calls]);
  return hexlify(concat(['0xd0707b67', __encodeData]));
}