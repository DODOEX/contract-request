import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch CANCEL_AUTHORIZATION_TYPEHASH
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - bytes32
 */
export function fetchErc20CANCEL_AUTHORIZATION_TYPEHASH(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd9169487', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - bytes32
 */
export function fetchErc20DOMAIN_SEPARATOR(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - bytes32
 */
export function fetchErc20PERMIT_TYPEHASH(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch RECEIVE_WITH_AUTHORIZATION_TYPEHASH
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - bytes32
 */
export function fetchErc20RECEIVE_WITH_AUTHORIZATION_TYPEHASH(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7f2eecc3', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch TRANSFER_WITH_AUTHORIZATION_TYPEHASH
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - bytes32
 */
export function fetchErc20TRANSFER_WITH_AUTHORIZATION_TYPEHASH(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa0cc6a68', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint}  - uint256
 */
export function fetchErc20Allowance(chainId: number, __to: string, owner: string, spender: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch authorizationState
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} authorizer - address
 * @param {string} nonce - bytes32
 * @returns {boolean}  - bool
 */
export function fetchErc20AuthorizationState(chainId: number, __to: string, authorizer: string, nonce: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bytes32"], [authorizer,nonce]);
  const __data = hexlify(concat(['0xe94a0102', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} account - address
 * @returns {bigint}  - uint256
 */
export function fetchErc20BalanceOf(chainId: number, __to: string, account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch blacklister
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchErc20Blacklister(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbd102430', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch currency
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - string
 */
export function fetchErc20Currency(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe5a6b10f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint8
 */
export function fetchErc20Decimals(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint8"])
}

/**
 * fetch isBlacklisted
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} _account - address
 * @returns {boolean}  - bool
 */
export function fetchErc20IsBlacklisted(chainId: number, __to: string, _account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_account]);
  const __data = hexlify(concat(['0xfe575a87', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch isMinter
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} account - address
 * @returns {boolean}  - bool
 */
export function fetchErc20IsMinter(chainId: number, __to: string, account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0xaa271e1a', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch masterMinter
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchErc20MasterMinter(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x35d99f35', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch minterAllowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} minter - address
 * @returns {bigint}  - uint256
 */
export function fetchErc20MinterAllowance(chainId: number, __to: string, minter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [minter]);
  const __data = hexlify(concat(['0x8a6db9c3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - string
 */
export function fetchErc20Name(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch nonces
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @returns {bigint}  - uint256
 */
export function fetchErc20Nonces(chainId: number, __to: string, owner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x7ecebe00', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchErc20Owner(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch paused
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean}  - bool
 */
export function fetchErc20Paused(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5c975abb', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch pauser
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchErc20Pauser(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9fd0506d', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch rescuer
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchErc20Rescuer(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x38a63183', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - string
 */
export function fetchErc20Symbol(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint256
 */
export function fetchErc20TotalSupply(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch version
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - string
 */
export function fetchErc20Version(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {bigint} value - uint256
 * @returns {string} encode data
 */
export function encodeErc20Approve(spender: string, value: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,value]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode blacklist
 * @param {string} _account - address
 * @returns {string} encode data
 */
export function encodeErc20Blacklist(_account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_account]);
  return hexlify(concat(['0xf9f92be4', __encodeData]));
}

/**
 * encode burn
 * @param {bigint} _amount - uint256
 * @returns {string} encode data
 */
export function encodeErc20Burn(_amount: bigint) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0x42966c68', __encodeData]));
}

/**
 * encode cancelAuthorization
 * @param {string} authorizer - address
 * @param {string} nonce - bytes32
 * @param {bigint} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20CancelAuthorization(authorizer: string, nonce: string, v: bigint, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bytes32","uint8","bytes32","bytes32"], [authorizer,nonce,v,r,s]);
  return hexlify(concat(['0x5a049a70', __encodeData]));
}

/**
 * encode cancelAuthorization
 * @param {string} authorizer - address
 * @param {string} nonce - bytes32
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20CancelAuthorization2(authorizer: string, nonce: string, signature: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bytes32","bytes"], [authorizer,nonce,signature]);
  return hexlify(concat(['0xb7b72899', __encodeData]));
}

/**
 * encode configureMinter
 * @param {string} minter - address
 * @param {bigint} minterAllowedAmount - uint256
 * @returns {string} encode data
 */
export function encodeErc20ConfigureMinter(minter: string, minterAllowedAmount: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [minter,minterAllowedAmount]);
  return hexlify(concat(['0x4e44d956', __encodeData]));
}

/**
 * encode decreaseAllowance
 * @param {string} spender - address
 * @param {bigint} decrement - uint256
 * @returns {string} encode data
 */
export function encodeErc20DecreaseAllowance(spender: string, decrement: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,decrement]);
  return hexlify(concat(['0xa457c2d7', __encodeData]));
}

/**
 * encode increaseAllowance
 * @param {string} spender - address
 * @param {bigint} increment - uint256
 * @returns {string} encode data
 */
export function encodeErc20IncreaseAllowance(spender: string, increment: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,increment]);
  return hexlify(concat(['0x39509351', __encodeData]));
}

/**
 * encode initialize
 * @param {string} tokenName - string
 * @param {string} tokenSymbol - string
 * @param {string} tokenCurrency - string
 * @param {bigint} tokenDecimals - uint8
 * @param {string} newMasterMinter - address
 * @param {string} newPauser - address
 * @param {string} newBlacklister - address
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeErc20Initialize(tokenName: string, tokenSymbol: string, tokenCurrency: string, tokenDecimals: bigint, newMasterMinter: string, newPauser: string, newBlacklister: string, newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["string","string","string","uint8","address","address","address","address"], [tokenName,tokenSymbol,tokenCurrency,tokenDecimals,newMasterMinter,newPauser,newBlacklister,newOwner]);
  return hexlify(concat(['0x3357162b', __encodeData]));
}

/**
 * encode initializeV2
 * @param {string} newName - string
 * @returns {string} encode data
 */
export function encodeErc20InitializeV2(newName: string) {
  const __encodeData = defaultAbiCoder.encode(["string"], [newName]);
  return hexlify(concat(['0xd608ea64', __encodeData]));
}

/**
 * encode initializeV2_1
 * @param {string} lostAndFound - address
 * @returns {string} encode data
 */
export function encodeErc20InitializeV2_1(lostAndFound: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [lostAndFound]);
  return hexlify(concat(['0x2fc81e09', __encodeData]));
}

/**
 * encode initializeV2_2
 * @param {Array<string>} accountsToBlacklist - address[]
 * @param {string} newSymbol - string
 * @returns {string} encode data
 */
export function encodeErc20InitializeV2_2(accountsToBlacklist: Array<string>, newSymbol: string) {
  const __encodeData = defaultAbiCoder.encode(["address[]","string"], [accountsToBlacklist,newSymbol]);
  return hexlify(concat(['0x430239b4', __encodeData]));
}

/**
 * encode mint
 * @param {string} _to - address
 * @param {bigint} _amount - uint256
 * @returns {string} encode data
 */
export function encodeErc20Mint(_to: string, _amount: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [_to,_amount]);
  return hexlify(concat(['0x40c10f19', __encodeData]));
}

/**
 * encode pause

 * @returns {string} encode data
 */
export function encodeErc20Pause() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x8456cb59', __encodeData]));
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {bigint} value - uint256
 * @param {bigint} deadline - uint256
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20Permit(owner: string, spender: string, value: bigint, deadline: bigint, signature: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","bytes"], [owner,spender,value,deadline,signature]);
  return hexlify(concat(['0x9fd5a6cf', __encodeData]));
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {bigint} value - uint256
 * @param {bigint} deadline - uint256
 * @param {bigint} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20Permit2(owner: string, spender: string, value: bigint, deadline: bigint, v: bigint, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint8","bytes32","bytes32"], [owner,spender,value,deadline,v,r,s]);
  return hexlify(concat(['0xd505accf', __encodeData]));
}

/**
 * encode receiveWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {bigint} value - uint256
 * @param {bigint} validAfter - uint256
 * @param {bigint} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20ReceiveWithAuthorization(from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, signature: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","bytes"], [from,to,value,validAfter,validBefore,nonce,signature]);
  return hexlify(concat(['0x88b7ab63', __encodeData]));
}

/**
 * encode receiveWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {bigint} value - uint256
 * @param {bigint} validAfter - uint256
 * @param {bigint} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {bigint} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20ReceiveWithAuthorization2(from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, v: bigint, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","uint8","bytes32","bytes32"], [from,to,value,validAfter,validBefore,nonce,v,r,s]);
  return hexlify(concat(['0xef55bec6', __encodeData]));
}

/**
 * encode removeMinter
 * @param {string} minter - address
 * @returns {string} encode data
 */
export function encodeErc20RemoveMinter(minter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [minter]);
  return hexlify(concat(['0x3092afd5', __encodeData]));
}

/**
 * encode rescueERC20
 * @param {string} tokenContract - address
 * @param {string} to - address
 * @param {bigint} amount - uint256
 * @returns {string} encode data
 */
export function encodeErc20RescueERC20(tokenContract: string, to: string, amount: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [tokenContract,to,amount]);
  return hexlify(concat(['0xb2118a8d', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {bigint} value - uint256
 * @returns {string} encode data
 */
export function encodeErc20Transfer(to: string, value: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,value]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {bigint} value - uint256
 * @returns {string} encode data
 */
export function encodeErc20TransferFrom(from: string, to: string, value: bigint) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,value]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeErc20TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode transferWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {bigint} value - uint256
 * @param {bigint} validAfter - uint256
 * @param {bigint} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20TransferWithAuthorization(from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, signature: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","bytes"], [from,to,value,validAfter,validBefore,nonce,signature]);
  return hexlify(concat(['0xcf092995', __encodeData]));
}

/**
 * encode transferWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {bigint} value - uint256
 * @param {bigint} validAfter - uint256
 * @param {bigint} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {bigint} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20TransferWithAuthorization2(from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, v: bigint, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","uint8","bytes32","bytes32"], [from,to,value,validAfter,validBefore,nonce,v,r,s]);
  return hexlify(concat(['0xe3ee160e', __encodeData]));
}

/**
 * encode unBlacklist
 * @param {string} _account - address
 * @returns {string} encode data
 */
export function encodeErc20UnBlacklist(_account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_account]);
  return hexlify(concat(['0x1a895266', __encodeData]));
}

/**
 * encode unpause

 * @returns {string} encode data
 */
export function encodeErc20Unpause() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x3f4ba83a', __encodeData]));
}

/**
 * encode updateBlacklister
 * @param {string} _newBlacklister - address
 * @returns {string} encode data
 */
export function encodeErc20UpdateBlacklister(_newBlacklister: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newBlacklister]);
  return hexlify(concat(['0xad38bf22', __encodeData]));
}

/**
 * encode updateMasterMinter
 * @param {string} _newMasterMinter - address
 * @returns {string} encode data
 */
export function encodeErc20UpdateMasterMinter(_newMasterMinter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMasterMinter]);
  return hexlify(concat(['0xaa20e1e4', __encodeData]));
}

/**
 * encode updatePauser
 * @param {string} _newPauser - address
 * @returns {string} encode data
 */
export function encodeErc20UpdatePauser(_newPauser: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newPauser]);
  return hexlify(concat(['0x554bab3c', __encodeData]));
}

/**
 * encode updateRescuer
 * @param {string} newRescuer - address
 * @returns {string} encode data
 */
export function encodeErc20UpdateRescuer(newRescuer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newRescuer]);
  return hexlify(concat(['0x2ab60045', __encodeData]));
}