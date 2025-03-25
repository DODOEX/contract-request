import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOFeeRouteProxy2ContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2818":"0xE59d098c36916397Cc14AB42Bb0F00093BDA9f04","47763":"0x2F95b87AF3970A686fC20572e44978b621C6FFF7","80084":"0x95B1D67F91d245acC55e8E76D3596c0f9f6AA22d","98865":"0x79A273d00bBF7B73B92d6938b973f0197b734Acc","167000":"0xE59d098c36916397Cc14AB42Bb0F00093BDA9f04","421614":"0x420A2fA0f4c4A1E209574454f399A4aB9b4ee5a0","543210":"0x0e038eaEf8383dfcE2B80b6E4E3F25Fd963527C4"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy2_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy2_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy2_WETH_(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy2_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2_WETH_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2_WETH_(chainId as number);
    }
  }
}

/**
 * fetch isApproveWhiteListedContract
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOFeeRouteProxy2IsApproveWhiteListedContract(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xe22367a4', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOFeeRouteProxy2IsApproveWhiteListedContractQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2IsApproveWhiteListedContract', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2IsApproveWhiteListedContract(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch isWhiteListedContract
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOFeeRouteProxy2IsWhiteListedContract(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xbc74f9ff', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOFeeRouteProxy2IsWhiteListedContractQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2IsWhiteListedContract', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2IsWhiteListedContract(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy2Owner(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy2OwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2Owner', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2Owner(chainId as number);
    }
  }
}

/**
 * fetch routeFeeRate
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOFeeRouteProxy2RouteFeeRate(chainId: number): Promise<bigint> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb887bdac', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOFeeRouteProxy2RouteFeeRateQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2RouteFeeRate', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2RouteFeeRate(chainId as number);
    }
  }
}

/**
 * fetch routeFeeReceiver
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy2RouteFeeReceiver(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4f3d2fd7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy2RouteFeeReceiverQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2RouteFeeReceiver', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2RouteFeeReceiver(chainId as number);
    }
  }
}

/**
 * fetch totalWeight
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOFeeRouteProxy2TotalWeight(chainId: number): Promise<bigint> {
  const __to = getDODOFeeRouteProxy2ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x96c82e57', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOFeeRouteProxy2TotalWeightQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy2TotalWeight', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy2TotalWeight(chainId as number);
    }
  }
}

/**
 * encode addApproveWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2AddApproveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x2a7bc4a8', __encodeData]));
}

/**
 * encode addWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2AddWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xe7cd4a04', __encodeData]));
}

/**
 * encode changeRouteFeeRate
 * @param {string | number} newFeeRate - uint256
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2ChangeRouteFeeRate(newFeeRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newFeeRate]);
  return hexlify(concat(['0x0c831085', __encodeData]));
}

/**
 * encode changeRouteFeeReceiver
 * @param {string} newFeeReceiver - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2ChangeRouteFeeReceiver(newFeeReceiver: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newFeeReceiver]);
  return hexlify(concat(['0x5af35118', __encodeData]));
}

/**
 * encode changeTotalWeight
 * @param {string | number} newTotalWeight - uint256
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2ChangeTotalWeight(newTotalWeight: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newTotalWeight]);
  return hexlify(concat(['0x3b16827f', __encodeData]));
}

/**
 * encode dodoMutliSwap
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} expReturnAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {Array<string | number>} splitNumber - uint256[]
 * @param {Array<string>} midToken - address[]
 * @param {Array<string>} assetFrom - address[]
 * @param {Array<string>} sequence - bytes[]
 * @param {string} feeData - bytes
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2DodoMutliSwap(fromTokenAmount: string | number, expReturnAmount: string | number, minReturnAmount: string | number, splitNumber: Array<string | number>, midToken: Array<string>, assetFrom: Array<string>, sequence: Array<string>, feeData: string, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256[]","address[]","address[]","bytes[]","bytes","uint256"], [fromTokenAmount,expReturnAmount,minReturnAmount,splitNumber,midToken,assetFrom,sequence,feeData,deadLine]);
  return hexlify(concat(['0x79b6f086', __encodeData]));
}

/**
 * encode externalSwap
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string} approveTarget - address
 * @param {string} swapTarget - address
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} expReturnAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {string} feeData - bytes
 * @param {string} callDataConcat - bytes
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2ExternalSwap(fromToken: string, toToken: string, approveTarget: string, swapTarget: string, fromTokenAmount: string | number, expReturnAmount: string | number, minReturnAmount: string | number, feeData: string, callDataConcat: string, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","uint256","uint256","uint256","bytes","bytes","uint256"], [fromToken,toToken,approveTarget,swapTarget,fromTokenAmount,expReturnAmount,minReturnAmount,feeData,callDataConcat,deadLine]);
  return hexlify(concat(['0x2fa11647', __encodeData]));
}

/**
 * encode mixSwap
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} expReturnAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {Array<string>} mixAdapters - address[]
 * @param {Array<string>} mixPairs - address[]
 * @param {Array<string>} assetTo - address[]
 * @param {string | number} directions - uint256
 * @param {Array<string>} moreInfos - bytes[]
 * @param {string} feeData - bytes
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2MixSwap(fromToken: string, toToken: string, fromTokenAmount: string | number, expReturnAmount: string | number, minReturnAmount: string | number, mixAdapters: Array<string>, mixPairs: Array<string>, assetTo: Array<string>, directions: string | number, moreInfos: Array<string>, feeData: string, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","address[]","address[]","address[]","uint256","bytes[]","bytes","uint256"], [fromToken,toToken,fromTokenAmount,expReturnAmount,minReturnAmount,mixAdapters,mixPairs,assetTo,directions,moreInfos,feeData,deadLine]);
  return hexlify(concat(['0xff84aafa', __encodeData]));
}

/**
 * encode removeApproveWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2RemoveApproveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x4ab75563', __encodeData]));
}

/**
 * encode removeWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2RemoveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x2042e5c2', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2RenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode superWithdraw
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2SuperWithdraw(token: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  return hexlify(concat(['0xb1dc7df9', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy2TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}