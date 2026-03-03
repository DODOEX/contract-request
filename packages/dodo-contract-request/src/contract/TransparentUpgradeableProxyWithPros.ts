import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"688689":"0xc9a0b63d91c2a808dd631d031f037944feddaa12"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsAllowance(chainId: number, owner: string, spender: string): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsAllowanceQueryOptions(chainId: number | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsAllowance', chainId, owner, spender],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsAllowance(chainId as number,owner as string,spender as string);
    }
  }
}

/**
 * fetch asset
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchTransparentUpgradeableProxyWithProsAsset(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x38d52e0f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchTransparentUpgradeableProxyWithProsAssetQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsAsset', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsAsset(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} account - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsBalanceOf(chainId: number, account: string): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsBalanceOfQueryOptions(chainId: number | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsBalanceOf', chainId, account],
    enabled: chainId !== undefined && chainId !== null && account !== undefined && account !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsBalanceOf(chainId as number,account as string);
    }
  }
}

/**
 * fetch bifrostDest
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes
 */
export function fetchTransparentUpgradeableProxyWithProsBifrostDest(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18e82c91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes","name":"","type":"bytes"}])
}
export function getFetchTransparentUpgradeableProxyWithProsBifrostDestQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsBifrostDest', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsBifrostDest(chainId as number);
    }
  }
}

/**
 * fetch bridgeVault
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchTransparentUpgradeableProxyWithProsBridgeVault(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xac03e9f0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract BridgeVault","name":"","type":"address"}])
}
export function getFetchTransparentUpgradeableProxyWithProsBridgeVaultQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsBridgeVault', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsBridgeVault(chainId as number);
    }
  }
}

/**
 * fetch canWithdrawalAmount
 * @param {number} chainId - number
 * @param {string} target - address
 * @returns {bigint} __output0 - uint256
 * @returns {bigint} __output1 - uint256
 * @returns {bigint} __output2 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsCanWithdrawalAmount(chainId: number, target: string): Promise<{
    __output0: bigint;
    __output1: bigint;
    __output2: bigint;
  }> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [target]);
  const __data = hexlify(concat(['0x52a630b9', __encodeData]));
  return contractRequests.batchCall<{
    __output0: bigint;
    __output1: bigint;
    __output2: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsCanWithdrawalAmountQueryOptions(chainId: number | undefined, target: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsCanWithdrawalAmount', chainId, target],
    enabled: chainId !== undefined && chainId !== null && target !== undefined && target !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsCanWithdrawalAmount(chainId as number,target as string);
    }
  }
}

/**
 * fetch completedWithdrawal
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsCompletedWithdrawal(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x63ea1b92', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsCompletedWithdrawalQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsCompletedWithdrawal', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsCompletedWithdrawal(chainId as number);
    }
  }
}

/**
 * fetch convertToAssets
 * @param {number} chainId - number
 * @param {number} shares - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsConvertToAssets(chainId: number, shares: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [shares]);
  const __data = hexlify(concat(['0x07a2d13a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsConvertToAssetsQueryOptions(chainId: number | undefined, shares: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsConvertToAssets', chainId, shares],
    enabled: chainId !== undefined && chainId !== null && shares !== undefined && shares !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsConvertToAssets(chainId as number,shares as number);
    }
  }
}

/**
 * fetch convertToShares
 * @param {number} chainId - number
 * @param {number} assets - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsConvertToShares(chainId: number, assets: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [assets]);
  const __data = hexlify(concat(['0xc6e6f592', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsConvertToSharesQueryOptions(chainId: number | undefined, assets: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsConvertToShares', chainId, assets],
    enabled: chainId !== undefined && chainId !== null && assets !== undefined && assets !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsConvertToShares(chainId as number,assets as number);
    }
  }
}

/**
 * fetch currentCycleMintTokenAmount
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsCurrentCycleMintTokenAmount(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x09c5dacc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsCurrentCycleMintTokenAmountQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsCurrentCycleMintTokenAmount', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsCurrentCycleMintTokenAmount(chainId as number);
    }
  }
}

/**
 * fetch currentCycleMintVTokenAmount
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsCurrentCycleMintVTokenAmount(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x00897cb6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsCurrentCycleMintVTokenAmountQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsCurrentCycleMintVTokenAmount', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsCurrentCycleMintVTokenAmount(chainId as number);
    }
  }
}

/**
 * fetch currentCycleRedeemVTokenAmount
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsCurrentCycleRedeemVTokenAmount(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4f284dcb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsCurrentCycleRedeemVTokenAmountQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsCurrentCycleRedeemVTokenAmount', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsCurrentCycleRedeemVTokenAmount(chainId as number);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint8
 */
export function fetchTransparentUpgradeableProxyWithProsDecimals(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint8","name":"","type":"uint8"}])
}
export function getFetchTransparentUpgradeableProxyWithProsDecimalsQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsDecimals', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsDecimals(chainId as number);
    }
  }
}

/**
 * fetch getTotalBalance
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsGetTotalBalance(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x12b58349', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsGetTotalBalanceQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsGetTotalBalance', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsGetTotalBalance(chainId as number);
    }
  }
}

/**
 * fetch getWithdrawals
 * @param {number} chainId - number
 * @param {string} target - address
 * @returns {[bigint, bigint]} __output0 - tuple[]
 */
export function fetchTransparentUpgradeableProxyWithProsGetWithdrawals(chainId: number, target: string): Promise<[bigint, bigint]> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [target]);
  const __data = hexlify(concat(['0x3a2b643a', __encodeData]));
  return contractRequests.batchCall<[bigint, bigint]>(chainId, __to, __data, [{"components":[{"internalType":"uint256","name":"queued","type":"uint256"},{"internalType":"uint256","name":"pending","type":"uint256"}],"internalType":"struct VTokenBase.Withdrawal[]","name":"","type":"tuple[]"}])
}
export function getFetchTransparentUpgradeableProxyWithProsGetWithdrawalsQueryOptions(chainId: number | undefined, target: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsGetWithdrawals', chainId, target],
    enabled: chainId !== undefined && chainId !== null && target !== undefined && target !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsGetWithdrawals(chainId as number,target as string);
    }
  }
}

/**
 * fetch maxDeposit
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsMaxDeposit(chainId: number, __input1: string): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x402d267d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsMaxDepositQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsMaxDeposit', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsMaxDeposit(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch maxMint
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsMaxMint(chainId: number, __input1: string): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xc63d75b6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsMaxMintQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsMaxMint', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsMaxMint(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch maxRedeem
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsMaxRedeem(chainId: number, owner: string): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0xd905777e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsMaxRedeemQueryOptions(chainId: number | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsMaxRedeem', chainId, owner],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsMaxRedeem(chainId as number,owner as string);
    }
  }
}

/**
 * fetch maxWithdraw
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsMaxWithdraw(chainId: number, owner: string): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0xce96cb77', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsMaxWithdrawQueryOptions(chainId: number | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsMaxWithdraw', chainId, owner],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsMaxWithdraw(chainId as number,owner as string);
    }
  }
}

/**
 * fetch maxWithdrawCount
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsMaxWithdrawCount(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdc692cd7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsMaxWithdrawCountQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsMaxWithdrawCount', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsMaxWithdrawCount(chainId as number);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchTransparentUpgradeableProxyWithProsName(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchTransparentUpgradeableProxyWithProsNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsName', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsName(chainId as number);
    }
  }
}

/**
 * fetch oracle
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchTransparentUpgradeableProxyWithProsOracle(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7dc0d1d0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract Oracle","name":"","type":"address"}])
}
export function getFetchTransparentUpgradeableProxyWithProsOracleQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsOracle', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsOracle(chainId as number);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchTransparentUpgradeableProxyWithProsOwner(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchTransparentUpgradeableProxyWithProsOwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsOwner', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsOwner(chainId as number);
    }
  }
}

/**
 * fetch paused
 * @param {number} chainId - number
 * @returns {boolean} __output0 - bool
 */
export function fetchTransparentUpgradeableProxyWithProsPaused(chainId: number): Promise<boolean> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5c975abb', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchTransparentUpgradeableProxyWithProsPausedQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsPaused', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsPaused(chainId as number);
    }
  }
}

/**
 * fetch previewDeposit
 * @param {number} chainId - number
 * @param {number} assets - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsPreviewDeposit(chainId: number, assets: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [assets]);
  const __data = hexlify(concat(['0xef8b30f7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsPreviewDepositQueryOptions(chainId: number | undefined, assets: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsPreviewDeposit', chainId, assets],
    enabled: chainId !== undefined && chainId !== null && assets !== undefined && assets !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsPreviewDeposit(chainId as number,assets as number);
    }
  }
}

/**
 * fetch previewMint
 * @param {number} chainId - number
 * @param {number} shares - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsPreviewMint(chainId: number, shares: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [shares]);
  const __data = hexlify(concat(['0xb3d7f6b9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsPreviewMintQueryOptions(chainId: number | undefined, shares: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsPreviewMint', chainId, shares],
    enabled: chainId !== undefined && chainId !== null && shares !== undefined && shares !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsPreviewMint(chainId as number,shares as number);
    }
  }
}

/**
 * fetch previewRedeem
 * @param {number} chainId - number
 * @param {number} shares - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsPreviewRedeem(chainId: number, shares: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [shares]);
  const __data = hexlify(concat(['0x4cdad506', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsPreviewRedeemQueryOptions(chainId: number | undefined, shares: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsPreviewRedeem', chainId, shares],
    enabled: chainId !== undefined && chainId !== null && shares !== undefined && shares !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsPreviewRedeem(chainId as number,shares as number);
    }
  }
}

/**
 * fetch previewWithdraw
 * @param {number} chainId - number
 * @param {number} assets - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsPreviewWithdraw(chainId: number, assets: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [assets]);
  const __data = hexlify(concat(['0x0a28a477', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsPreviewWithdrawQueryOptions(chainId: number | undefined, assets: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsPreviewWithdraw', chainId, assets],
    enabled: chainId !== undefined && chainId !== null && assets !== undefined && assets !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsPreviewWithdraw(chainId as number,assets as number);
    }
  }
}

/**
 * fetch queuedWithdrawal
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsQueuedWithdrawal(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x996e5c06', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsQueuedWithdrawalQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsQueuedWithdrawal', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsQueuedWithdrawal(chainId as number);
    }
  }
}

/**
 * fetch rolesAdmin
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchTransparentUpgradeableProxyWithProsRolesAdmin(chainId: number, __input1: string): Promise<boolean> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x5ba6dbff', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchTransparentUpgradeableProxyWithProsRolesAdminQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsRolesAdmin', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsRolesAdmin(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} interfaceId - bytes4
 * @returns {boolean} __output0 - bool
 */
export function fetchTransparentUpgradeableProxyWithProsSupportsInterface(chainId: number, interfaceId: string): Promise<boolean> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [interfaceId]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchTransparentUpgradeableProxyWithProsSupportsInterfaceQueryOptions(chainId: number | undefined, interfaceId: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsSupportsInterface', chainId, interfaceId],
    enabled: chainId !== undefined && chainId !== null && interfaceId !== undefined && interfaceId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsSupportsInterface(chainId as number,interfaceId as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchTransparentUpgradeableProxyWithProsSymbol(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchTransparentUpgradeableProxyWithProsSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsSymbol', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsSymbol(chainId as number);
    }
  }
}

/**
 * fetch tokenGateway
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchTransparentUpgradeableProxyWithProsTokenGateway(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaa0d6e8e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract ITokenGateway","name":"","type":"address"}])
}
export function getFetchTransparentUpgradeableProxyWithProsTokenGatewayQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsTokenGateway', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsTokenGateway(chainId as number);
    }
  }
}

/**
 * fetch totalAssets
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsTotalAssets(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x01e1d114', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsTotalAssetsQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsTotalAssets', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsTotalAssets(chainId as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsTotalSupply(chainId: number): Promise<bigint> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsTotalSupply(chainId as number);
    }
  }
}

/**
 * fetch triggerAddress
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchTransparentUpgradeableProxyWithProsTriggerAddress(chainId: number): Promise<string> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0091be55', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchTransparentUpgradeableProxyWithProsTriggerAddressQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsTriggerAddress', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsTriggerAddress(chainId as number);
    }
  }
}

/**
 * fetch withdrawals
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {bigint} queued - uint256
 * @returns {bigint} pending - uint256
 */
export function fetchTransparentUpgradeableProxyWithProsWithdrawals(chainId: number, __input1: string, __input2: number): Promise<{
    queued: bigint;
    pending: bigint;
  }> {
  const __to = getTransparentUpgradeableProxyWithProsContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x422b1077', __encodeData]));
  return contractRequests.batchCall<{
    queued: bigint;
    pending: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"queued","type":"uint256"},{"internalType":"uint256","name":"pending","type":"uint256"}])
}
export function getFetchTransparentUpgradeableProxyWithProsWithdrawalsQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchTransparentUpgradeableProxyWithProsWithdrawals', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchTransparentUpgradeableProxyWithProsWithdrawals(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {string | number} value - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsApprove(spender: string, value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,value]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode approveTokenGateway
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsApproveTokenGateway(token: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  return hexlify(concat(['0xf8e88266', __encodeData]));
}

/**
 * encode asyncMint
 * @param {string | number} relayerFee - uint256
 * @param {string | number} timeout - uint64
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsAsyncMint(relayerFee: string | number, timeout: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint64"], [relayerFee,timeout]);
  return hexlify(concat(['0x87ce75ba', __encodeData]));
}

/**
 * encode asyncMintWithETH
 * @param {string} assetId - bytes32
 * @param {boolean} isRedeem - bool
 * @param {string | number} relayerFee - uint256
 * @param {string | number} timeout - uint64
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsAsyncMintWithETH(assetId: string, isRedeem: boolean, relayerFee: string | number, timeout: string | number) {
  const __encodeData = defaultAbiCoder.encode(["bytes32","bool","uint256","uint64"], [assetId,isRedeem,relayerFee,timeout]);
  return hexlify(concat(['0x56afffac', __encodeData]));
}

/**
 * encode asyncMintWithNativeCost
 * @param {string} assetId - bytes32
 * @param {boolean} isRedeem - bool
 * @param {string | number} relayerFee - uint256
 * @param {string | number} timeout - uint64
 * @param {string | number} nativeCost - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsAsyncMintWithNativeCost(assetId: string, isRedeem: boolean, relayerFee: string | number, timeout: string | number, nativeCost: string | number) {
  const __encodeData = defaultAbiCoder.encode(["bytes32","bool","uint256","uint64","uint256"], [assetId,isRedeem,relayerFee,timeout,nativeCost]);
  return hexlify(concat(['0xccb4d85d', __encodeData]));
}

/**
 * encode asyncRedeem
 * @param {string | number} relayerFee - uint256
 * @param {string | number} timeout - uint64
 * @param {string} to - bytes32
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsAsyncRedeem(relayerFee: string | number, timeout: string | number, to: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint64","bytes32","bytes"], [relayerFee,timeout,to,data]);
  return hexlify(concat(['0x9b8b8712', __encodeData]));
}

/**
 * encode asyncRedeemWithNativeCost
 * @param {string} assetId - bytes32
 * @param {boolean} isRedeem - bool
 * @param {string | number} relayerFee - uint256
 * @param {string | number} timeout - uint64
 * @param {string} to - bytes32
 * @param {string} data - bytes
 * @param {string | number} nativeCost - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsAsyncRedeemWithNativeCost(assetId: string, isRedeem: boolean, relayerFee: string | number, timeout: string | number, to: string, data: string, nativeCost: string | number) {
  const __encodeData = defaultAbiCoder.encode(["bytes32","bool","uint256","uint64","bytes32","bytes","uint256"], [assetId,isRedeem,relayerFee,timeout,to,data,nativeCost]);
  return hexlify(concat(['0x6a94a020', __encodeData]));
}

/**
 * encode burn
 * @param {string} _from - address
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsBurn(_from: string, _amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [_from,_amount]);
  return hexlify(concat(['0x9dc29fac', __encodeData]));
}

/**
 * encode changeRoleAdmin
 * @param {string} _account - address
 * @param {boolean} _isAdmin - bool
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsChangeRoleAdmin(_account: string, _isAdmin: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [_account,_isAdmin]);
  return hexlify(concat(['0x6a7e2e50', __encodeData]));
}

/**
 * encode deposit
 * @param {string | number} assets - uint256
 * @param {string} receiver - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsDeposit(assets: string | number, receiver: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [assets,receiver]);
  return hexlify(concat(['0x6e553f65', __encodeData]));
}

/**
 * encode depositWithPROS

 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsDepositWithPROS() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xb4430b99', __encodeData]));
}

/**
 * encode increaseCurrentCycleAmount
 * @param {string | number} _currentCycleTokenAmount - uint256
 * @param {string | number} _currentCycleVTokenAmount - uint256
 * @param {string | number} _currentCycleRedeemVTokenAmount - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsIncreaseCurrentCycleAmount(_currentCycleTokenAmount: string | number, _currentCycleVTokenAmount: string | number, _currentCycleRedeemVTokenAmount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [_currentCycleTokenAmount,_currentCycleVTokenAmount,_currentCycleRedeemVTokenAmount]);
  return hexlify(concat(['0x9578ed3d', __encodeData]));
}

/**
 * encode initialize
 * @param {string} asset - address
 * @param {string} owner - address
 * @param {string} name - string
 * @param {string} symbol - string
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsInitialize(asset: string, owner: string, name: string, symbol: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","string","string"], [asset,owner,name,symbol]);
  return hexlify(concat(['0x2016a0d2', __encodeData]));
}

/**
 * encode mint
 * @param {string} _to - address
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsMint(_to: string, _amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [_to,_amount]);
  return hexlify(concat(['0x40c10f19', __encodeData]));
}

/**
 * encode mint
 * @param {string | number} shares - uint256
 * @param {string} receiver - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsMint2(shares: string | number, receiver: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [shares,receiver]);
  return hexlify(concat(['0x94bf804d', __encodeData]));
}

/**
 * encode pause

 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsPause() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x8456cb59', __encodeData]));
}

/**
 * encode redeem
 * @param {string | number} shares - uint256
 * @param {string} receiver - address
 * @param {string} owner - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsRedeem(shares: string | number, receiver: string, owner: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address","address"], [shares,receiver,owner]);
  return hexlify(concat(['0xba087652', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsRenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode setBifrostDest
 * @param {string} _bifrostDest - bytes
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsSetBifrostDest(_bifrostDest: string) {
  const __encodeData = defaultAbiCoder.encode(["bytes"], [_bifrostDest]);
  return hexlify(concat(['0x8e088159', __encodeData]));
}

/**
 * encode setBridgeVault
 * @param {string} _bridgeVault - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsSetBridgeVault(_bridgeVault: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_bridgeVault]);
  return hexlify(concat(['0xebcb0b7a', __encodeData]));
}

/**
 * encode setMaxWithdrawCount
 * @param {string | number} _maxWithdrawCount - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsSetMaxWithdrawCount(_maxWithdrawCount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_maxWithdrawCount]);
  return hexlify(concat(['0x6d67d5d4', __encodeData]));
}

/**
 * encode setOracle
 * @param {string} _oracle - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsSetOracle(_oracle: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_oracle]);
  return hexlify(concat(['0x7adbf973', __encodeData]));
}

/**
 * encode setTokenGateway
 * @param {string} _tokenGateway - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsSetTokenGateway(_tokenGateway: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_tokenGateway]);
  return hexlify(concat(['0xb9611c59', __encodeData]));
}

/**
 * encode setTriggerAddress
 * @param {string} _triggerAddress - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsSetTriggerAddress(_triggerAddress: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_triggerAddress]);
  return hexlify(concat(['0xa348b2ea', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {string | number} value - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsTransfer(to: string, value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,value]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} value - uint256
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsTransferFrom(from: string, to: string, value: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,value]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode unpause

 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsUnpause() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x3f4ba83a', __encodeData]));
}

/**
 * encode withdraw
 * @param {string | number} assets - uint256
 * @param {string} receiver - address
 * @param {string} owner - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsWithdraw(assets: string | number, receiver: string, owner: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address","address"], [assets,receiver,owner]);
  return hexlify(concat(['0xb460af94', __encodeData]));
}

/**
 * encode withdrawComplete

 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsWithdrawComplete() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x266a3bce', __encodeData]));
}

/**
 * encode withdrawCompleteTo
 * @param {string} receiver - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsWithdrawCompleteTo(receiver: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [receiver]);
  return hexlify(concat(['0xf29ee493', __encodeData]));
}

/**
 * encode withdrawCompleteToPROS

 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsWithdrawCompleteToPROS() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x2e6cb841', __encodeData]));
}

/**
 * encode withdrawFeeToken
 * @param {string} token - address
 * @param {string | number} amount - uint256
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeTransparentUpgradeableProxyWithProsWithdrawFeeToken(token: string, amount: string | number, to: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","address"], [token,amount,to]);
  return hexlify(concat(['0x883f3030', __encodeData]));
}