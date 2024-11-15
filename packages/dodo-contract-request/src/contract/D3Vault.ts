import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getD3VaultContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x49186E32fEd50fd6B5604A2618c7B0b03Cd41414"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch DISCOUNT
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultDISCOUNT(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d37b457', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch IM
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultIM(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1d898f52', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch MM
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultMM(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3a21c719', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_CLONE_FACTORY_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _D3TOKEN_LOGIC_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_D3TOKEN_LOGIC_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1ad0ee33', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _D3_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_D3_FACTORY_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbd31200c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _MAINTAINER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_MAINTAINER_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4322ec83', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _ORACLE_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_ORACLE_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x73a2ab7c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _PENDING_REMOVE_POOL_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_PENDING_REMOVE_POOL_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x74aec29c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _POOL_QUOTA_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_POOL_QUOTA_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x96ec3445', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _RATE_MANAGER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_RATE_MANAGER_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x83728e29', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _USER_QUOTA_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3Vault_USER_QUOTA_(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf4a48008', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch accrualTimestampMap
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultAccrualTimestampMap(chainId: number, __input1: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x29b8ba37', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch accrueInterestForRead
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint} totalBorrowsNew - uint256
 * @returns {bigint} totalReservesNew - uint256
 * @returns {bigint} borrowIndexNew - uint256
 * @returns {bigint} accrualTime - uint256
 */
export function fetchD3VaultAccrueInterestForRead(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0xa81efe21', __encodeData]));
  return contractRequests.batchCall<{
    totalBorrowsNew: bigint;
    totalReservesNew: bigint;
    borrowIndexNew: bigint;
    accrualTime: bigint;
  }>(chainId, __to, __data, ["uint256","uint256","uint256","uint256"])
}

/**
 * fetch allPoolAddrMap
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultAllPoolAddrMap(chainId: number, __input1: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x70cd746d', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch allowedLiquidator
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultAllowedLiquidator(chainId: number, __input1: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1e516051', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch allowedRouter
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultAllowedRouter(chainId: number, __input1: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x30ca07d5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch assetInfo
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} dToken - address
 * @returns {bigint} balance - uint256
 * @returns {bigint} totalBorrows - uint256
 * @returns {bigint} borrowIndex - uint256
 * @returns {bigint} accrualTime - uint256
 * @returns {bigint} totalReserves - uint256
 * @returns {bigint} withdrawnReserves - uint256
 * @returns {bigint} reserveFactor - uint256
 * @returns {bigint} maxDepositAmount - uint256
 * @returns {bigint} maxCollateralAmount - uint256
 * @returns {bigint} collateralWeight - uint256
 * @returns {bigint} debtWeight - uint256
 */
export function fetchD3VaultAssetInfo(chainId: number, __input1: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x8b0dcb4e', __encodeData]));
  return contractRequests.batchCall<{
    dToken: string;
    balance: bigint;
    totalBorrows: bigint;
    borrowIndex: bigint;
    accrualTime: bigint;
    totalReserves: bigint;
    withdrawnReserves: bigint;
    reserveFactor: bigint;
    maxDepositAmount: bigint;
    maxCollateralAmount: bigint;
    collateralWeight: bigint;
    debtWeight: bigint;
  }>(chainId, __to, __data, ["address","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256"])
}

/**
 * fetch checkBadDebt
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultCheckBadDebt(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0xe2c2acff', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch checkBadDebtAfterAccrue
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultCheckBadDebtAfterAccrue(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x1476fcc2', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch checkBorrowSafe
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultCheckBorrowSafe(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x55928664', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch checkCanBeLiquidated
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultCheckCanBeLiquidated(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x80b47fb0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch checkCanBeLiquidatedAfterAccrue
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultCheckCanBeLiquidatedAfterAccrue(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x6ad682d3', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch checkSafe
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultCheckSafe(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x02b345c3', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch creatorPoolMap
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string}  - address
 */
export function fetchD3VaultCreatorPoolMap(chainId: number, __input1: string, __input2: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x1c4905c7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getAssetInfo
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {string} dToken - address
 * @returns {bigint} totalBorrows - uint256
 * @returns {bigint} totalReserves - uint256
 * @returns {bigint} reserveFactor - uint256
 * @returns {bigint} borrowIndex - uint256
 * @returns {bigint} accrualTime - uint256
 * @returns {bigint} maxDepositAmount - uint256
 * @returns {bigint} collateralWeight - uint256
 * @returns {bigint} debtWeight - uint256
 * @returns {bigint} withdrawnReserves - uint256
 * @returns {bigint} balance - uint256
 */
export function fetchD3VaultGetAssetInfo(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0xafad2e16', __encodeData]));
  return contractRequests.batchCall<{
    dToken: string;
    totalBorrows: bigint;
    totalReserves: bigint;
    reserveFactor: bigint;
    borrowIndex: bigint;
    accrualTime: bigint;
    maxDepositAmount: bigint;
    collateralWeight: bigint;
    debtWeight: bigint;
    withdrawnReserves: bigint;
    balance: bigint;
  }>(chainId, __to, __data, ["address","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256"])
}

/**
 * fetch getBalanceAndBorrows
 * @param {number} chainId - number
 * @param {string} pool - address
 * @param {string} token - address
 * @returns {bigint}  - uint256
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetBalanceAndBorrows(chainId: number, pool: string, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [pool,token]);
  const __data = hexlify(concat(['0x27f1a921', __encodeData]));
  return contractRequests.batchCall<{
    : bigint;
    : bigint;
  }>(chainId, __to, __data, ["uint256","uint256"])
}

/**
 * fetch getBorrowRate
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint} rate - uint256
 */
export function fetchD3VaultGetBorrowRate(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0xd71275f6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCash
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetCash(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0x607b463a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCollateralRatio
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetCollateralRatio(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x15a3ba43', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCollateralRatioBorrow
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetCollateralRatioBorrow(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x2f38d1f8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCompoundInterestRate
 * @param {number} chainId - number
 * @param {number} r - uint256
 * @param {number} t - uint256
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetCompoundInterestRate(chainId: number, r: number, t: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [r,t]);
  const __data = hexlify(concat(['0x40f1e8dc', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getCumulativeBorrowRate
 * @param {number} chainId - number
 * @param {string} pool - address
 * @param {string} token - address
 * @returns {bigint} cumulativeRate - uint256
 * @returns {bigint} currentAmount - uint256
 */
export function fetchD3VaultGetCumulativeBorrowRate(chainId: number, pool: string, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [pool,token]);
  const __data = hexlify(concat(['0x2f6a5f18', __encodeData]));
  return contractRequests.batchCall<{
    cumulativeRate: bigint;
    currentAmount: bigint;
  }>(chainId, __to, __data, ["uint256","uint256"])
}

/**
 * fetch getExchangeRate
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint} exchangeRate - uint256
 */
export function fetchD3VaultGetExchangeRate(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0xefb7601d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getIMMM
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetIMMM(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0bb3d79e', __encodeData]));
  return contractRequests.batchCall<{
    : bigint;
    : bigint;
  }>(chainId, __to, __data, ["uint256","uint256"])
}

/**
 * fetch getLatestBorrowIndex
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint} borrowIndex - uint256
 */
export function fetchD3VaultGetLatestBorrowIndex(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0xfe81608f', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getPoolBorrowAmount
 * @param {number} chainId - number
 * @param {string} pool - address
 * @param {string} token - address
 * @returns {bigint} amount - uint256
 */
export function fetchD3VaultGetPoolBorrowAmount(chainId: number, pool: string, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [pool,token]);
  const __data = hexlify(concat(['0x43a0ffd7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getPoolLeftQuota
 * @param {number} chainId - number
 * @param {string} pool - address
 * @param {string} token - address
 * @returns {bigint} leftQuota - uint256
 */
export function fetchD3VaultGetPoolLeftQuota(chainId: number, pool: string, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [pool,token]);
  const __data = hexlify(concat(['0xf3b8fe62', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getReservesInVault
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetReservesInVault(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0x2f9bbe0f', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getTokenList
 * @param {number} chainId - number
 * @returns {Array<string>}  - address[]
 */
export function fetchD3VaultGetTokenList(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x273cbaa0', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, ["address[]"])
}

/**
 * fetch getTotalAssetsValue
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {bigint} totalValue - uint256
 */
export function fetchD3VaultGetTotalAssetsValue(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x0f489b15', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getTotalBorrows
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetTotalBorrows(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0xb87147df', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getTotalDebtValue
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {bigint} totalDebt - uint256
 */
export function fetchD3VaultGetTotalDebtValue(chainId: number, pool: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x293a5077', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getUtilizationRatio
 * @param {number} chainId - number
 * @param {string} token - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultGetUtilizationRatio(chainId: number, token: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0xf12f3453', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch liquidationTarget
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @returns {bigint}  - uint256
 */
export function fetchD3VaultLiquidationTarget(chainId: number, __input1: string, __input2: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0x458a6ff8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchD3VaultOwner(chainId: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch tokenList
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string}  - address
 */
export function fetchD3VaultTokenList(chainId: number, __input1: number) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x9ead7222', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch tokens
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchD3VaultTokens(chainId: number, __input1: string) {
  const __to = getD3VaultContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xe4860339', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * encode accrueInterest
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeD3VaultAccrueInterest(token: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  return hexlify(concat(['0x9198e515', __encodeData]));
}

/**
 * encode accrueInterests

 * @returns {string} encode data
 */
export function encodeD3VaultAccrueInterests() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xbf5cb4b0', __encodeData]));
}

/**
 * encode addD3Pool
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeD3VaultAddD3Pool(pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  return hexlify(concat(['0x83b4e5a4', __encodeData]));
}

/**
 * encode addD3PoolByFactory
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeD3VaultAddD3PoolByFactory(pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  return hexlify(concat(['0xc37b45dd', __encodeData]));
}

/**
 * encode addLiquidator
 * @param {string} liquidator - address
 * @returns {string} encode data
 */
export function encodeD3VaultAddLiquidator(liquidator: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [liquidator]);
  return hexlify(concat(['0x4c4e7f6f', __encodeData]));
}

/**
 * encode addNewToken
 * @param {string} token - address
 * @param {number} maxDeposit - uint256
 * @param {number} maxCollateral - uint256
 * @param {number} collateralWeight - uint256
 * @param {number} debtWeight - uint256
 * @param {number} reserveFactor - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultAddNewToken(token: string, maxDeposit: number, maxCollateral: number, collateralWeight: number, debtWeight: number, reserveFactor: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint256"], [token,maxDeposit,maxCollateral,collateralWeight,debtWeight,reserveFactor]);
  return hexlify(concat(['0x191990d5', __encodeData]));
}

/**
 * encode addRouter
 * @param {string} router - address
 * @returns {string} encode data
 */
export function encodeD3VaultAddRouter(router: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [router]);
  return hexlify(concat(['0x24ca984e', __encodeData]));
}

/**
 * encode finishLiquidation
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeD3VaultFinishLiquidation(pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  return hexlify(concat(['0x3095f9a5', __encodeData]));
}

/**
 * encode finishPoolRemove

 * @returns {string} encode data
 */
export function encodeD3VaultFinishPoolRemove() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x100e9cd4', __encodeData]));
}

/**
 * encode liquidate
 * @param {string} pool - address
 * @param {string} collateral - address
 * @param {number} collateralAmount - uint256
 * @param {string} debt - address
 * @param {number} debtToCover - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultLiquidate(pool: string, collateral: string, collateralAmount: number, debt: string, debtToCover: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","address","uint256"], [pool,collateral,collateralAmount,debt,debtToCover]);
  return hexlify(concat(['0xb9473461', __encodeData]));
}

/**
 * encode liquidateByDODO
 * @param {string} pool - address
 * @param {{fromToken: string; toToken: string; fromAmount: number}} order - tuple
 * @param {string} routeData - bytes
 * @param {string} router - address
 * @returns {string} encode data
 */
export function encodeD3VaultLiquidateByDODO(pool: string, order: {fromToken: string; toToken: string; fromAmount: number}, routeData: string, router: string) {
  const __encodeData = defaultAbiCoder.encode(["address","tuple(address, address, uint256)","bytes","address"], [pool,order,routeData,router]);
  return hexlify(concat(['0xbb31fa64', __encodeData]));
}

/**
 * encode pendingRemovePoolRepayAll
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeD3VaultPendingRemovePoolRepayAll(token: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  return hexlify(concat(['0xc7978412', __encodeData]));
}

/**
 * encode poolBorrow
 * @param {string} token - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultPoolBorrow(token: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,amount]);
  return hexlify(concat(['0xda68d1ff', __encodeData]));
}

/**
 * encode poolRepay
 * @param {string} token - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultPoolRepay(token: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,amount]);
  return hexlify(concat(['0x03585b05', __encodeData]));
}

/**
 * encode poolRepayAll
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeD3VaultPoolRepayAll(token: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  return hexlify(concat(['0xfcd1fbbf', __encodeData]));
}

/**
 * encode removeD3Pool
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeD3VaultRemoveD3Pool(pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  return hexlify(concat(['0xff0a0864', __encodeData]));
}

/**
 * encode removeLiquidator
 * @param {string} liquidator - address
 * @returns {string} encode data
 */
export function encodeD3VaultRemoveLiquidator(liquidator: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [liquidator]);
  return hexlify(concat(['0xefb74400', __encodeData]));
}

/**
 * encode removeRouter
 * @param {string} router - address
 * @returns {string} encode data
 */
export function encodeD3VaultRemoveRouter(router: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [router]);
  return hexlify(concat(['0x6ae0b154', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeD3VaultRenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode setCloneFactory
 * @param {string} cloneFactory - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetCloneFactory(cloneFactory: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [cloneFactory]);
  return hexlify(concat(['0x4f4e6eea', __encodeData]));
}

/**
 * encode setDTokenTemplate
 * @param {string} dTokenTemplate - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetDTokenTemplate(dTokenTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [dTokenTemplate]);
  return hexlify(concat(['0x49876f1a', __encodeData]));
}

/**
 * encode setDiscount
 * @param {number} discount - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultSetDiscount(discount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [discount]);
  return hexlify(concat(['0xdabd2719', __encodeData]));
}

/**
 * encode setIM
 * @param {number} newIM - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultSetIM(newIM: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newIM]);
  return hexlify(concat(['0x5697f4bd', __encodeData]));
}

/**
 * encode setMM
 * @param {number} newMM - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultSetMM(newMM: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newMM]);
  return hexlify(concat(['0x072c0699', __encodeData]));
}

/**
 * encode setMaintainer
 * @param {string} maintainer - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetMaintainer(maintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [maintainer]);
  return hexlify(concat(['0x13ea5d29', __encodeData]));
}

/**
 * encode setNewD3Factory
 * @param {string} newFactory - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetNewD3Factory(newFactory: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newFactory]);
  return hexlify(concat(['0x52e8562e', __encodeData]));
}

/**
 * encode setNewD3PoolQuota
 * @param {string} newQuota - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetNewD3PoolQuota(newQuota: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newQuota]);
  return hexlify(concat(['0xebd8e9cf', __encodeData]));
}

/**
 * encode setNewD3UserQuota
 * @param {string} newQuota - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetNewD3UserQuota(newQuota: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newQuota]);
  return hexlify(concat(['0xcce8739b', __encodeData]));
}

/**
 * encode setNewOracle
 * @param {string} newOracle - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetNewOracle(newOracle: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOracle]);
  return hexlify(concat(['0x3d6a3664', __encodeData]));
}

/**
 * encode setNewRateManager
 * @param {string} newRateManager - address
 * @returns {string} encode data
 */
export function encodeD3VaultSetNewRateManager(newRateManager: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newRateManager]);
  return hexlify(concat(['0xb802c7bb', __encodeData]));
}

/**
 * encode setToken
 * @param {string} token - address
 * @param {number} maxDeposit - uint256
 * @param {number} maxCollateral - uint256
 * @param {number} collateralWeight - uint256
 * @param {number} debtWeight - uint256
 * @param {number} reserveFactor - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultSetToken(token: string, maxDeposit: number, maxCollateral: number, collateralWeight: number, debtWeight: number, reserveFactor: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint256"], [token,maxDeposit,maxCollateral,collateralWeight,debtWeight,reserveFactor]);
  return hexlify(concat(['0x9c69549f', __encodeData]));
}

/**
 * encode startLiquidation
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeD3VaultStartLiquidation(pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  return hexlify(concat(['0xe1c50100', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeD3VaultTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode userDeposit
 * @param {string} user - address
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeD3VaultUserDeposit(user: string, token: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [user,token]);
  return hexlify(concat(['0x8629b6b2', __encodeData]));
}

/**
 * encode userWithdraw
 * @param {string} to - address
 * @param {string} user - address
 * @param {string} token - address
 * @param {number} dTokenAmount - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultUserWithdraw(to: string, user: string, token: string, dTokenAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256"], [to,user,token,dTokenAmount]);
  return hexlify(concat(['0x1303c0e1', __encodeData]));
}

/**
 * encode withdrawReserves
 * @param {string} token - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeD3VaultWithdrawReserves(token: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,amount]);
  return hexlify(concat(['0xe478795d', __encodeData]));
}