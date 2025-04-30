import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV2RouteHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x9337cA090c390667984869193e10c3D4f9a17da8","10":"0x9337cA090c390667984869193e10c3D4f9a17da8","56":"0x35b8F92AcFE368afb90d37555f6d075Fc569a6BA","137":"0x1870854754d1E76C58B0a56a153E12Ff868eE3C6","177":"0x928e9762B5223d5A2ac1F5b13E8A61907aCaa9Bd","196":"0x03cd2F7D623b1B9c461bf93eBB3CEc47c2124985","1030":"0x7E9c460d0A10bd0605B15F0d0388e307d34a62E6","2390":"0x680829027709E2ef95D079aC97DDF5feAb82D248","2818":"0xC7EaBEc77Be175432DC20c0056Cce4c2C78B84F3","5000":"0xCDA4a6cc5997002B87f28D46852F9F0aA0f3c897","8453":"0xa5fc92Ca57a21C87AA0477b1c8fE8B9Bbf69d6C2","10143":"0x286c2D4c9BDC464027021Bdab32B2750a02a355B","10169":"0x4CAD0052524648A7Fa2cfE279997b00239295F33","42161":"0x0C420970b2e5efcBB6e833601772D6E707155eA6","43111":"0xC7EaBEc77Be175432DC20c0056Cce4c2C78B84F3","43114":"0x686984f0aa37585504f51DEbA0Eb45B0f0CB7e4a","47763":"0x7A323b7C016d88cbb874694909fC5FC36224674c","48900":"0x668D4eD054aa62d12F95a64aa1C7e2791f176D0e","59144":"0x65DF60853EED3a07044ad779cD7c5b1848f8C2d6","80084":"0x119115D4119a504AD0CccD566904ea055C377dE5","80094":"0xC7EaBEc77Be175432DC20c0056Cce4c2C78B84F3","98864":"0x0B40A5f4f52B8B8980da7D7335197e3Ce531E232","98866":"0xF5378974cfD5042A58c458E06cB6D2A2D1c2FAF8","167000":"0xC7EaBEc77Be175432DC20c0056Cce4c2C78B84F3","200901":"0x12b2265fD734e3001286C5D9736be73F5Ce47d72","421614":"0x0D6B5DA01027454bb9c99bC37E1A165160648018","534352":"0xf5048d8F9163AF17Db522Abe9FaF37735C911320","543210":"0xd04fd58c50eAde267Fe5648f21d3738FCaE797e3","11155111":"0x03e89fC55A5ad0531576E5a502c4CA52c8bf391B","11155931":"0x286c2D4c9BDC464027021Bdab32B2750a02a355B","1313161554":"0x49eAB58AAE044F31d3b136212058a00b282b2845"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DPP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2RouteHelper_DPP_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb730d150', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2RouteHelper_DPP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2RouteHelper_DPP_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2RouteHelper_DPP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DSP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2RouteHelper_DSP_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfc382437', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2RouteHelper_DSP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2RouteHelper_DSP_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2RouteHelper_DSP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DVM_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV2RouteHelper_DVM_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x69e4e417', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV2RouteHelper_DVM_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2RouteHelper_DVM_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV2RouteHelper_DVM_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch getPairDetail
 * @param {number} chainId - number
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @param {string} userAddr - address
 * @returns {[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]} res - tuple[]
 */
export function fetchDODOV2RouteHelperGetPairDetail(chainId: number, token0: string, token1: string, userAddr: string): Promise<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]> {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token0,token1,userAddr]);
  const __data = hexlify(concat(['0x9d15e3ae', __encodeData]));
  return contractRequests.batchCall<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]>(chainId, __to, __data, [{"components":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"K","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"},{"internalType":"uint256","name":"Q","type":"uint256"},{"internalType":"uint256","name":"B0","type":"uint256"},{"internalType":"uint256","name":"Q0","type":"uint256"},{"internalType":"uint256","name":"R","type":"uint256"},{"internalType":"uint256","name":"lpFeeRate","type":"uint256"},{"internalType":"uint256","name":"mtFeeRate","type":"uint256"},{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"curPair","type":"address"},{"internalType":"uint256","name":"pairVersion","type":"uint256"}],"internalType":"struct DODOV2RouteHelper.PairDetail[]","name":"res","type":"tuple[]"}])
}
export function getFetchDODOV2RouteHelperGetPairDetailQueryOptions(chainId: number | undefined, token0: string | undefined, token1: string | undefined, userAddr: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV2RouteHelperGetPairDetail', chainId, token0, token1, userAddr],
    enabled: chainId !== undefined && chainId !== null && token0 !== undefined && token0 !== null && token1 !== undefined && token1 !== null && userAddr !== undefined && userAddr !== null, 
    queryFn: () => {
        return fetchDODOV2RouteHelperGetPairDetail(chainId as number,token0 as string,token1 as string,userAddr as string);
    }
  }
}