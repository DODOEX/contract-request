import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV2Proxy02ContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xa356867fDCEa8e71AEaF87805808803806231FdC","10":"0xfD9D2827AD469B72B69329dAA325ba7AfbDb3C98","56":"0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486","137":"0xa222e6a71D1A1Dd5F279805fbe38d5329C1d0e70","196":"0x7Ad992fcebd899ddbEF7f031dCF96f382b81ECea","1030":"0xbce44767af0a53A108b3B7ba4F740E03D228Ec0A","2818":"0xfcd8EF54A4dA96dE6B2DDF67C6265C7405a3A9c6","5000":"0xe7979E2F3e77196Bb2AB206eaa67Ea278A3E33A2","8453":"0x4CAD0052524648A7Fa2cfE279997b00239295F33","10143":"0x119115D4119a504AD0CccD566904ea055C377dE5","10169":"0x2F86652dAEF5f1728c54191C955F065Ec3C188c7","42161":"0x88CBf433471A0CD8240D2a12354362988b4593E5","43114":"0x2cD18557E14aF72DAA8090BcAA95b231ffC9ea26","47763":"0x90e3C36f1c668d5c8fED3Bc7797e0c2e767EfBd2","48900":"0x5e132c0ABB9e4E5f1471eF6d1C9740c276Fe520e","59144":"0x4CAD0052524648A7Fa2cfE279997b00239295F33","80084":"0x0976e26eE276DC0703d046DB46d0ca8A1EeC3bAe","80094":"0xfcd8EF54A4dA96dE6B2DDF67C6265C7405a3A9c6","98866":"0xFc66a1283a43Ce2f4d4FA0623d4654754577a09d","167000":"0xfcd8EF54A4dA96dE6B2DDF67C6265C7405a3A9c6","200901":"0x33c5C92ECc5e64c8b1634E0E06193EF8A9308751","421614":"0x9c2006A5179ee13A90fE4894e75464a3D91Beb70","534352":"0xe49781e6186214d88aACFd9eBc8cE40E3CDc066D","543210":"0x016B4cD52EC7A49Ad33140252Ba55C5B24079Ad6","11155111":"0x6292e8f7647b3b9dDf5795b1Fb77D0187e30E0F9","11155931":"0x119115D4119a504AD0CccD566904ea055C377dE5","1313161554":"0xd9deC7c3C06e62a4c1BeEB07CadF568f496b14c2"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CHI_TOKEN_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_CHI_TOKEN_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x056fc2ee', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_CHI_TOKEN_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_CHI_TOKEN_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_CHI_TOKEN_(chainId as number);
    }
  }
}

/**
 * fetch _CP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_CP_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfaa980e4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_CP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_CP_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_CP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_INCENTIVE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_DODO_INCENTIVE_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x41cf7160', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_DODO_INCENTIVE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_DODO_INCENTIVE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_DODO_INCENTIVE_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_SELL_HELPER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_DODO_SELL_HELPER_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaf1280b0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_DODO_SELL_HELPER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_DODO_SELL_HELPER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_DODO_SELL_HELPER_(chainId as number);
    }
  }
}

/**
 * fetch _DPP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_DPP_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb730d150', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_DPP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_DPP_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_DPP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DVM_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_DVM_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x69e4e417', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_DVM_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_DVM_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_DVM_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _GAS_DODO_MAX_RETURN_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV2Proxy02_GAS_DODO_MAX_RETURN_(chainId: number): Promise<bigint> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9f687322', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV2Proxy02_GAS_DODO_MAX_RETURN_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_GAS_DODO_MAX_RETURN_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_GAS_DODO_MAX_RETURN_(chainId as number);
    }
  }
}

/**
 * fetch _GAS_EXTERNAL_RETURN_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV2Proxy02_GAS_EXTERNAL_RETURN_(chainId: number): Promise<bigint> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x69dba8ee', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV2Proxy02_GAS_EXTERNAL_RETURN_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_GAS_EXTERNAL_RETURN_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_GAS_EXTERNAL_RETURN_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2Proxy02_WETH_(chainId: number): Promise<string> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2Proxy02_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02_WETH_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02_WETH_(chainId as number);
    }
  }
}

/**
 * fetch isWhiteListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOV2Proxy02IsWhiteListed(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x6f9170f6', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOV2Proxy02IsWhiteListedQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2Proxy02IsWhiteListed', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOV2Proxy02IsWhiteListed(chainId as number,__input1 as string);
    }
  }
}

/**
 * encode addDVMLiquidity
 * @param {string} dvmAddress - address
 * @param {string | number} baseInAmount - uint256
 * @param {string | number} quoteInAmount - uint256
 * @param {string | number} baseMinAmount - uint256
 * @param {string | number} quoteMinAmount - uint256
 * @param {string | number} flag - uint8
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02AddDVMLiquidity(dvmAddress: string, baseInAmount: string | number, quoteInAmount: string | number, baseMinAmount: string | number, quoteMinAmount: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint8","uint256"], [dvmAddress,baseInAmount,quoteInAmount,baseMinAmount,quoteMinAmount,flag,deadLine]);
  return hexlify(concat(['0x674d9422', __encodeData]));
}

/**
 * encode addLiquidityToV1
 * @param {string} pair - address
 * @param {string | number} baseAmount - uint256
 * @param {string | number} quoteAmount - uint256
 * @param {string | number} baseMinShares - uint256
 * @param {string | number} quoteMinShares - uint256
 * @param {string | number} flag - uint8
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02AddLiquidityToV1(pair: string, baseAmount: string | number, quoteAmount: string | number, baseMinShares: string | number, quoteMinShares: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint8","uint256"], [pair,baseAmount,quoteAmount,baseMinShares,quoteMinShares,flag,deadLine]);
  return hexlify(concat(['0x99882c8f', __encodeData]));
}

/**
 * encode addWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02AddWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xe7cd4a04', __encodeData]));
}

/**
 * encode bid
 * @param {string} cpAddress - address
 * @param {string | number} quoteAmount - uint256
 * @param {string | number} flag - uint8
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02Bid(cpAddress: string, quoteAmount: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint8","uint256"], [cpAddress,quoteAmount,flag,deadLine]);
  return hexlify(concat(['0xdb70b5c7', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02ClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createCrowdPooling
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {Array<string | number>} timeLine - uint256[]
 * @param {Array<string | number>} valueList - uint256[]
 * @param {boolean} isOpenTWAP - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02CreateCrowdPooling(baseToken: string, quoteToken: string, baseInAmount: string | number, timeLine: Array<string | number>, valueList: Array<string | number>, isOpenTWAP: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256[]","uint256[]","bool","uint256"], [baseToken,quoteToken,baseInAmount,timeLine,valueList,isOpenTWAP,deadLine]);
  return hexlify(concat(['0x018c9fda', __encodeData]));
}

/**
 * encode createDODOPrivatePool
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {string | number} quoteInAmount - uint256
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {boolean} isOpenTwap - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02CreateDODOPrivatePool(baseToken: string, quoteToken: string, baseInAmount: string | number, quoteInAmount: string | number, lpFeeRate: string | number, i: string | number, k: string | number, isOpenTwap: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTwap,deadLine]);
  return hexlify(concat(['0x0d9be500', __encodeData]));
}

/**
 * encode createDODOVendingMachine
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {string | number} quoteInAmount - uint256
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02CreateDODOVendingMachine(baseToken: string, quoteToken: string, baseInAmount: string | number, quoteInAmount: string | number, lpFeeRate: string | number, i: string | number, k: string | number, isOpenTWAP: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTWAP,deadLine]);
  return hexlify(concat(['0x8b3bb089', __encodeData]));
}

/**
 * encode dodoSwapV1
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {string | number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV1(fromToken: string, toToken: string, fromTokenAmount: string | number, minReturnAmount: string | number, dodoPairs: Array<string>, directions: string | number, isIncentive: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","address[]","uint256","bool","uint256"], [fromToken,toToken,fromTokenAmount,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x0dd4ebd9', __encodeData]));
}

/**
 * encode dodoSwapV2ETHToToken
 * @param {string} toToken - address
 * @param {string | number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {string | number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV2ETHToToken(toToken: string, minReturnAmount: string | number, dodoPairs: Array<string>, directions: string | number, isIncentive: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","address[]","uint256","bool","uint256"], [toToken,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x5028bb95', __encodeData]));
}

/**
 * encode dodoSwapV2TokenToETH
 * @param {string} fromToken - address
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {string | number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV2TokenToETH(fromToken: string, fromTokenAmount: string | number, minReturnAmount: string | number, dodoPairs: Array<string>, directions: string | number, isIncentive: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","address[]","uint256","bool","uint256"], [fromToken,fromTokenAmount,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x1e6d24c2', __encodeData]));
}

/**
 * encode dodoSwapV2TokenToToken
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {string | number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV2TokenToToken(fromToken: string, toToken: string, fromTokenAmount: string | number, minReturnAmount: string | number, dodoPairs: Array<string>, directions: string | number, isIncentive: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","address[]","uint256","bool","uint256"], [fromToken,toToken,fromTokenAmount,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0xf87dc1b7', __encodeData]));
}

/**
 * encode externalSwap
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string} approveTarget - address
 * @param {string} swapTarget - address
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {string} callDataConcat - bytes
 * @param {boolean} isIncentive - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02ExternalSwap(fromToken: string, toToken: string, approveTarget: string, swapTarget: string, fromTokenAmount: string | number, minReturnAmount: string | number, callDataConcat: string, isIncentive: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","uint256","uint256","bytes","bool","uint256"], [fromToken,toToken,approveTarget,swapTarget,fromTokenAmount,minReturnAmount,callDataConcat,isIncentive,deadLine]);
  return hexlify(concat(['0x54bacd13', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02InitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode mixSwap
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string | number} fromTokenAmount - uint256
 * @param {string | number} minReturnAmount - uint256
 * @param {Array<string>} mixAdapters - address[]
 * @param {Array<string>} mixPairs - address[]
 * @param {Array<string>} assetTo - address[]
 * @param {string | number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02MixSwap(fromToken: string, toToken: string, fromTokenAmount: string | number, minReturnAmount: string | number, mixAdapters: Array<string>, mixPairs: Array<string>, assetTo: Array<string>, directions: string | number, isIncentive: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","address[]","address[]","address[]","uint256","bool","uint256"], [fromToken,toToken,fromTokenAmount,minReturnAmount,mixAdapters,mixPairs,assetTo,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x23c38fa3', __encodeData]));
}

/**
 * encode removeWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02RemoveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x2042e5c2', __encodeData]));
}

/**
 * encode resetDODOPrivatePool
 * @param {string} dppAddress - address
 * @param {Array<string | number>} paramList - uint256[]
 * @param {Array<string | number>} amountList - uint256[]
 * @param {string | number} flag - uint8
 * @param {string | number} minBaseReserve - uint256
 * @param {string | number} minQuoteReserve - uint256
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02ResetDODOPrivatePool(dppAddress: string, paramList: Array<string | number>, amountList: Array<string | number>, flag: string | number, minBaseReserve: string | number, minQuoteReserve: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256[]","uint256[]","uint8","uint256","uint256","uint256"], [dppAddress,paramList,amountList,flag,minBaseReserve,minQuoteReserve,deadLine]);
  return hexlify(concat(['0x12ff148d', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateGasReturn
 * @param {string | number} newDodoGasReturn - uint256
 * @param {string | number} newExternalGasReturn - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02UpdateGasReturn(newDodoGasReturn: string | number, newExternalGasReturn: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [newDodoGasReturn,newExternalGasReturn]);
  return hexlify(concat(['0xd6354c3e', __encodeData]));
}