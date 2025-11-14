import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOFeeRouteProxy1ContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"143":"0x306ae919b99c187Fe5eCBdE980E24228ae888182","177":"0x79A273d00bBF7B73B92d6938b973f0197b734Acc","1689":"0xcBF3378D432CB181aae32a6A80AA94CF8e00f534","2201":"0x9ef37fD4791eb28e46c3D50Ed83F2a10B3082784","2390":"0x819829e5CF6e19F9fED92F6b4CC1edF45a2cC4A2","2818":"0xcBF3378D432CB181aae32a6A80AA94CF8e00f534","10143":"0x1bB9856229f784673A19B84CE65057883318bb2B","43111":"0xcBF3378D432CB181aae32a6A80AA94CF8e00f534","47763":"0xb653B5334DdDEB0536ad382709F4Fb5b23799e0F","80084":"0x8c6DbF95448AcbcBb1c3D6E9b3b9ceF7E6fbAb00","80094":"0xcBF3378D432CB181aae32a6A80AA94CF8e00f534","98864":"0x80465a300299e90132DFa2c7c3Fc3a12424599bB","98866":"0xDA89314035264Ade23313f971AaE5393068Ea6F7","167000":"0xcBF3378D432CB181aae32a6A80AA94CF8e00f534","421614":"0x7Bb76aDd60518CdcCC2888d3A37aC97BAf195F4E","543210":"0x2aea827424f99a187A2bF056F0782E927AB2066a","688688":"0x9C246037Ac05A0D94376Fd52994Cc6a951655Add","688689":"0x80465a300299e90132DFa2c7c3Fc3a12424599bB","11155931":"0x2e50e3e18c19C7d80B81888a961A13aEE49b962E"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy1_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy1_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy1_WETH_(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy1_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1_WETH_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1_WETH_(chainId as number);
    }
  }
}

/**
 * fetch isApproveWhiteListedContract
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOFeeRouteProxy1IsApproveWhiteListedContract(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xe22367a4', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOFeeRouteProxy1IsApproveWhiteListedContractQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1IsApproveWhiteListedContract', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1IsApproveWhiteListedContract(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch isWhiteListedContract
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOFeeRouteProxy1IsWhiteListedContract(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xbc74f9ff', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOFeeRouteProxy1IsWhiteListedContractQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1IsWhiteListedContract', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1IsWhiteListedContract(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy1Owner(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy1OwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1Owner', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1Owner(chainId as number);
    }
  }
}

/**
 * fetch routeFeeRate
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOFeeRouteProxy1RouteFeeRate(chainId: number): Promise<bigint> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb887bdac', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOFeeRouteProxy1RouteFeeRateQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1RouteFeeRate', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1RouteFeeRate(chainId as number);
    }
  }
}

/**
 * fetch routeFeeReceiver
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOFeeRouteProxy1RouteFeeReceiver(chainId: number): Promise<string> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4f3d2fd7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOFeeRouteProxy1RouteFeeReceiverQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1RouteFeeReceiver', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1RouteFeeReceiver(chainId as number);
    }
  }
}

/**
 * fetch totalWeight
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOFeeRouteProxy1TotalWeight(chainId: number): Promise<bigint> {
  const __to = getDODOFeeRouteProxy1ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x96c82e57', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOFeeRouteProxy1TotalWeightQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOFeeRouteProxy1TotalWeight', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOFeeRouteProxy1TotalWeight(chainId as number);
    }
  }
}

/**
 * encode addApproveWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1AddApproveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x2a7bc4a8', __encodeData]));
}

/**
 * encode addWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1AddWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xe7cd4a04', __encodeData]));
}

/**
 * encode changeRouteFeeRate
 * @param {string | number} newFeeRate - uint256
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1ChangeRouteFeeRate(newFeeRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newFeeRate]);
  return hexlify(concat(['0x0c831085', __encodeData]));
}

/**
 * encode changeRouteFeeReceiver
 * @param {string} newFeeReceiver - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1ChangeRouteFeeReceiver(newFeeReceiver: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newFeeReceiver]);
  return hexlify(concat(['0x5af35118', __encodeData]));
}

/**
 * encode changeTotalWeight
 * @param {string | number} newTotalWeight - uint256
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1ChangeTotalWeight(newTotalWeight: string | number) {
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
export function encodeDODOFeeRouteProxy1DodoMutliSwap(fromTokenAmount: string | number, expReturnAmount: string | number, minReturnAmount: string | number, splitNumber: Array<string | number>, midToken: Array<string>, assetFrom: Array<string>, sequence: Array<string>, feeData: string, deadLine: string | number) {
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
export function encodeDODOFeeRouteProxy1ExternalSwap(fromToken: string, toToken: string, approveTarget: string, swapTarget: string, fromTokenAmount: string | number, expReturnAmount: string | number, minReturnAmount: string | number, feeData: string, callDataConcat: string, deadLine: string | number) {
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
export function encodeDODOFeeRouteProxy1MixSwap(fromToken: string, toToken: string, fromTokenAmount: string | number, expReturnAmount: string | number, minReturnAmount: string | number, mixAdapters: Array<string>, mixPairs: Array<string>, assetTo: Array<string>, directions: string | number, moreInfos: Array<string>, feeData: string, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","address[]","address[]","address[]","uint256","bytes[]","bytes","uint256"], [fromToken,toToken,fromTokenAmount,expReturnAmount,minReturnAmount,mixAdapters,mixPairs,assetTo,directions,moreInfos,feeData,deadLine]);
  return hexlify(concat(['0xff84aafa', __encodeData]));
}

/**
 * encode removeApproveWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1RemoveApproveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x4ab75563', __encodeData]));
}

/**
 * encode removeWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1RemoveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x2042e5c2', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1RenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode superWithdraw
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1SuperWithdraw(token: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  return hexlify(concat(['0xb1dc7df9', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOFeeRouteProxy1TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}