import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCustomMintableERC20_NEW_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCustomMintableERC20_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20_NEW_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCustomMintableERC20_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCustomMintableERC20_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchCustomMintableERC20Allowance(chainId: number, __to: string, owner: string, spender: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCustomMintableERC20AllowanceQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, owner, spender],
    enabled: [!!chainId, !!__to, !!owner, !!spender], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20Allowance(chainId, __to, owner, spender);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @returns {bigint} balance - uint256
 */
export function fetchCustomMintableERC20BalanceOf(chainId: number, __to: string, owner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCustomMintableERC20BalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, owner],
    enabled: [!!chainId, !!__to, !!owner], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20BalanceOf(chainId, __to, owner);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchCustomMintableERC20Decimals(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint8"])
}
export function getFetchCustomMintableERC20DecimalsQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20Decimals(chainId, __to);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchCustomMintableERC20Name(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}
export function getFetchCustomMintableERC20NameQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20Name(chainId, __to);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchCustomMintableERC20Symbol(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}
export function getFetchCustomMintableERC20SymbolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20Symbol(chainId, __to);
    }
  }
}

/**
 * fetch team
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCustomMintableERC20Team(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x85f2aef2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCustomMintableERC20TeamQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20Team(chainId, __to);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCustomMintableERC20TotalSupply(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCustomMintableERC20TotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20TotalSupply(chainId, __to);
    }
  }
}

/**
 * fetch tradeBurnRatio
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCustomMintableERC20TradeBurnRatio(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe59850f7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCustomMintableERC20TradeBurnRatioQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20TradeBurnRatio(chainId, __to);
    }
  }
}

/**
 * fetch tradeFeeRatio
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCustomMintableERC20TradeFeeRatio(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x870c66d6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCustomMintableERC20TradeFeeRatioQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCustomMintableERC20TradeFeeRatio(chainId, __to);
    }
  }
}

/**
 * encode abandonOwnership
 * @param {string} zeroAddress - address
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20AbandonOwnership(zeroAddress: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [zeroAddress]);
  return hexlify(concat(['0xb4c50ff4', __encodeData]));
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20Approve(spender: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,amount]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burn
 * @param {number} value - uint256
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20Burn(value: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [value]);
  return hexlify(concat(['0x42966c68', __encodeData]));
}

/**
 * encode changeTeamAccount
 * @param {string} newTeam - address
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20ChangeTeamAccount(newTeam: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newTeam]);
  return hexlify(concat(['0x3a625ee6', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeCustomMintableERC20ClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode init
 * @param {string} _creator - address
 * @param {number} _initSupply - uint256
 * @param {string} _name - string
 * @param {string} _symbol - string
 * @param {number} _decimals - uint8
 * @param {number} _tradeBurnRatio - uint256
 * @param {number} _tradeFeeRatio - uint256
 * @param {string} _team - address
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20Init(_creator: string, _initSupply: number, _name: string, _symbol: string, _decimals: number, _tradeBurnRatio: number, _tradeFeeRatio: number, _team: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","string","string","uint8","uint256","uint256","address"], [_creator,_initSupply,_name,_symbol,_decimals,_tradeBurnRatio,_tradeFeeRatio,_team]);
  return hexlify(concat(['0x4ca60825', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20InitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode mint
 * @param {string} user - address
 * @param {number} value - uint256
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20Mint(user: string, value: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [user,value]);
  return hexlify(concat(['0x40c10f19', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20Transfer(to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20TransferFrom(from: string, to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,amount]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeCustomMintableERC20TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}