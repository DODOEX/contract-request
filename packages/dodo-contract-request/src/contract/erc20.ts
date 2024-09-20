import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

function getContractAddressByChainId(chainId: number) {
  const contractAddressObject = {"1":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","42161":"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"};
  const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
  if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
  return result
}

/**
 * fetch CANCEL_AUTHORIZATION_TYPEHASH
 * @param {number} chainId - int
 * @returns {string}  - bytes32
 */
export function fetchErc20CANCEL_AUTHORIZATION_TYPEHASH(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd9169487', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - int
 * @returns {string}  - bytes32
 */
export function fetchErc20DOMAIN_SEPARATOR(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - int
 * @returns {string}  - bytes32
 */
export function fetchErc20PERMIT_TYPEHASH(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch RECEIVE_WITH_AUTHORIZATION_TYPEHASH
 * @param {number} chainId - int
 * @returns {string}  - bytes32
 */
export function fetchErc20RECEIVE_WITH_AUTHORIZATION_TYPEHASH(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7f2eecc3', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch TRANSFER_WITH_AUTHORIZATION_TYPEHASH
 * @param {number} chainId - int
 * @returns {string}  - bytes32
 */
export function fetchErc20TRANSFER_WITH_AUTHORIZATION_TYPEHASH(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa0cc6a68', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch allowance
 * @param {number} chainId - int
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {number}  - uint256
 */
export function fetchErc20Allowance(chainId: number, owner: string, spender: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch authorizationState
 * @param {number} chainId - int
 * @param {string} authorizer - address
 * @param {string} nonce - bytes32
 * @returns {boolean}  - bool
 */
export function fetchErc20AuthorizationState(chainId: number, authorizer: string, nonce: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","bytes32"], [authorizer,nonce]);
  const __data = hexlify(concat(['0xe94a0102', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch balanceOf
 * @param {number} chainId - int
 * @param {string} account - address
 * @returns {number}  - uint256
 */
export function fetchErc20BalanceOf(chainId: number, account: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch blacklister
 * @param {number} chainId - int
 * @returns {string}  - address
 */
export function fetchErc20Blacklister(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbd102430', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch currency
 * @param {number} chainId - int
 * @returns {string}  - string
 */
export function fetchErc20Currency(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe5a6b10f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch decimals
 * @param {number} chainId - int
 * @returns {number}  - uint8
 */
export function fetchErc20Decimals(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint8"])
}

/**
 * fetch isBlacklisted
 * @param {number} chainId - int
 * @param {string} _account - address
 * @returns {boolean}  - bool
 */
export function fetchErc20IsBlacklisted(chainId: number, _account: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [_account]);
  const __data = hexlify(concat(['0xfe575a87', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch isMinter
 * @param {number} chainId - int
 * @param {string} account - address
 * @returns {boolean}  - bool
 */
export function fetchErc20IsMinter(chainId: number, account: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0xaa271e1a', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch masterMinter
 * @param {number} chainId - int
 * @returns {string}  - address
 */
export function fetchErc20MasterMinter(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x35d99f35', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch minterAllowance
 * @param {number} chainId - int
 * @param {string} minter - address
 * @returns {number}  - uint256
 */
export function fetchErc20MinterAllowance(chainId: number, minter: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [minter]);
  const __data = hexlify(concat(['0x8a6db9c3', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch name
 * @param {number} chainId - int
 * @returns {string}  - string
 */
export function fetchErc20Name(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch nonces
 * @param {number} chainId - int
 * @param {string} owner - address
 * @returns {number}  - uint256
 */
export function fetchErc20Nonces(chainId: number, owner: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x7ecebe00', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch owner
 * @param {number} chainId - int
 * @returns {string}  - address
 */
export function fetchErc20Owner(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch paused
 * @param {number} chainId - int
 * @returns {boolean}  - bool
 */
export function fetchErc20Paused(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5c975abb', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch pauser
 * @param {number} chainId - int
 * @returns {string}  - address
 */
export function fetchErc20Pauser(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9fd0506d', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch rescuer
 * @param {number} chainId - int
 * @returns {string}  - address
 */
export function fetchErc20Rescuer(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x38a63183', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch symbol
 * @param {number} chainId - int
 * @returns {string}  - string
 */
export function fetchErc20Symbol(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch totalSupply
 * @param {number} chainId - int
 * @returns {number}  - uint256
 */
export function fetchErc20TotalSupply(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<number>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch version
 * @param {number} chainId - int
 * @returns {string}  - string
 */
export function fetchErc20Version(chainId: number) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {number} value - uint256
 * @returns {string} encode data
 */
export function encodeErc20Approve(spender: string, value: number) {
  return defaultAbiCoder.encode(["address","uint256"], [spender,value]);
}

/**
 * encode blacklist
 * @param {string} _account - address
 * @returns {string} encode data
 */
export function encodeErc20Blacklist(_account: string) {
  return defaultAbiCoder.encode(["address"], [_account]);
}

/**
 * encode burn
 * @param {number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeErc20Burn(_amount: number) {
  return defaultAbiCoder.encode(["uint256"], [_amount]);
}

/**
 * encode cancelAuthorization
 * @param {string} authorizer - address
 * @param {string} nonce - bytes32
 * @param {number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20CancelAuthorization(authorizer: string, nonce: string, v: number, r: string, s: string) {
  return defaultAbiCoder.encode(["address","bytes32","uint8","bytes32","bytes32"], [authorizer,nonce,v,r,s]);
}

/**
 * encode cancelAuthorization
 * @param {string} authorizer - address
 * @param {string} nonce - bytes32
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20CancelAuthorization2(authorizer: string, nonce: string, signature: string) {
  return defaultAbiCoder.encode(["address","bytes32","bytes"], [authorizer,nonce,signature]);
}

/**
 * encode configureMinter
 * @param {string} minter - address
 * @param {number} minterAllowedAmount - uint256
 * @returns {string} encode data
 */
export function encodeErc20ConfigureMinter(minter: string, minterAllowedAmount: number) {
  return defaultAbiCoder.encode(["address","uint256"], [minter,minterAllowedAmount]);
}

/**
 * encode decreaseAllowance
 * @param {string} spender - address
 * @param {number} decrement - uint256
 * @returns {string} encode data
 */
export function encodeErc20DecreaseAllowance(spender: string, decrement: number) {
  return defaultAbiCoder.encode(["address","uint256"], [spender,decrement]);
}

/**
 * encode increaseAllowance
 * @param {string} spender - address
 * @param {number} increment - uint256
 * @returns {string} encode data
 */
export function encodeErc20IncreaseAllowance(spender: string, increment: number) {
  return defaultAbiCoder.encode(["address","uint256"], [spender,increment]);
}

/**
 * encode initialize
 * @param {string} tokenName - string
 * @param {string} tokenSymbol - string
 * @param {string} tokenCurrency - string
 * @param {number} tokenDecimals - uint8
 * @param {string} newMasterMinter - address
 * @param {string} newPauser - address
 * @param {string} newBlacklister - address
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeErc20Initialize(tokenName: string, tokenSymbol: string, tokenCurrency: string, tokenDecimals: number, newMasterMinter: string, newPauser: string, newBlacklister: string, newOwner: string) {
  return defaultAbiCoder.encode(["string","string","string","uint8","address","address","address","address"], [tokenName,tokenSymbol,tokenCurrency,tokenDecimals,newMasterMinter,newPauser,newBlacklister,newOwner]);
}

/**
 * encode initializeV2
 * @param {string} newName - string
 * @returns {string} encode data
 */
export function encodeErc20InitializeV2(newName: string) {
  return defaultAbiCoder.encode(["string"], [newName]);
}

/**
 * encode initializeV2_1
 * @param {string} lostAndFound - address
 * @returns {string} encode data
 */
export function encodeErc20InitializeV2_1(lostAndFound: string) {
  return defaultAbiCoder.encode(["address"], [lostAndFound]);
}

/**
 * encode initializeV2_2
 * @param {Array<string>} accountsToBlacklist - address[]
 * @param {string} newSymbol - string
 * @returns {string} encode data
 */
export function encodeErc20InitializeV2_2(accountsToBlacklist: Array<string>, newSymbol: string) {
  return defaultAbiCoder.encode(["address[]","string"], [accountsToBlacklist,newSymbol]);
}

/**
 * encode mint
 * @param {string} _to - address
 * @param {number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeErc20Mint(_to: string, _amount: number) {
  return defaultAbiCoder.encode(["address","uint256"], [_to,_amount]);
}

/**
 * encode pause

 * @returns {string} encode data
 */
export function encodeErc20Pause() {
  return defaultAbiCoder.encode([], []);
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {number} value - uint256
 * @param {number} deadline - uint256
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20Permit(owner: string, spender: string, value: number, deadline: number, signature: string) {
  return defaultAbiCoder.encode(["address","address","uint256","uint256","bytes"], [owner,spender,value,deadline,signature]);
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {number} value - uint256
 * @param {number} deadline - uint256
 * @param {number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20Permit2(owner: string, spender: string, value: number, deadline: number, v: number, r: string, s: string) {
  return defaultAbiCoder.encode(["address","address","uint256","uint256","uint8","bytes32","bytes32"], [owner,spender,value,deadline,v,r,s]);
}

/**
 * encode receiveWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} value - uint256
 * @param {number} validAfter - uint256
 * @param {number} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20ReceiveWithAuthorization(from: string, to: string, value: number, validAfter: number, validBefore: number, nonce: string, signature: string) {
  return defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","bytes"], [from,to,value,validAfter,validBefore,nonce,signature]);
}

/**
 * encode receiveWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} value - uint256
 * @param {number} validAfter - uint256
 * @param {number} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20ReceiveWithAuthorization2(from: string, to: string, value: number, validAfter: number, validBefore: number, nonce: string, v: number, r: string, s: string) {
  return defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","uint8","bytes32","bytes32"], [from,to,value,validAfter,validBefore,nonce,v,r,s]);
}

/**
 * encode removeMinter
 * @param {string} minter - address
 * @returns {string} encode data
 */
export function encodeErc20RemoveMinter(minter: string) {
  return defaultAbiCoder.encode(["address"], [minter]);
}

/**
 * encode rescueERC20
 * @param {string} tokenContract - address
 * @param {string} to - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeErc20RescueERC20(tokenContract: string, to: string, amount: number) {
  return defaultAbiCoder.encode(["address","address","uint256"], [tokenContract,to,amount]);
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {number} value - uint256
 * @returns {string} encode data
 */
export function encodeErc20Transfer(to: string, value: number) {
  return defaultAbiCoder.encode(["address","uint256"], [to,value]);
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} value - uint256
 * @returns {string} encode data
 */
export function encodeErc20TransferFrom(from: string, to: string, value: number) {
  return defaultAbiCoder.encode(["address","address","uint256"], [from,to,value]);
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeErc20TransferOwnership(newOwner: string) {
  return defaultAbiCoder.encode(["address"], [newOwner]);
}

/**
 * encode transferWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} value - uint256
 * @param {number} validAfter - uint256
 * @param {number} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {string} signature - bytes
 * @returns {string} encode data
 */
export function encodeErc20TransferWithAuthorization(from: string, to: string, value: number, validAfter: number, validBefore: number, nonce: string, signature: string) {
  return defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","bytes"], [from,to,value,validAfter,validBefore,nonce,signature]);
}

/**
 * encode transferWithAuthorization
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} value - uint256
 * @param {number} validAfter - uint256
 * @param {number} validBefore - uint256
 * @param {string} nonce - bytes32
 * @param {number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeErc20TransferWithAuthorization2(from: string, to: string, value: number, validAfter: number, validBefore: number, nonce: string, v: number, r: string, s: string) {
  return defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bytes32","uint8","bytes32","bytes32"], [from,to,value,validAfter,validBefore,nonce,v,r,s]);
}

/**
 * encode unBlacklist
 * @param {string} _account - address
 * @returns {string} encode data
 */
export function encodeErc20UnBlacklist(_account: string) {
  return defaultAbiCoder.encode(["address"], [_account]);
}

/**
 * encode unpause

 * @returns {string} encode data
 */
export function encodeErc20Unpause() {
  return defaultAbiCoder.encode([], []);
}

/**
 * encode updateBlacklister
 * @param {string} _newBlacklister - address
 * @returns {string} encode data
 */
export function encodeErc20UpdateBlacklister(_newBlacklister: string) {
  return defaultAbiCoder.encode(["address"], [_newBlacklister]);
}

/**
 * encode updateMasterMinter
 * @param {string} _newMasterMinter - address
 * @returns {string} encode data
 */
export function encodeErc20UpdateMasterMinter(_newMasterMinter: string) {
  return defaultAbiCoder.encode(["address"], [_newMasterMinter]);
}

/**
 * encode updatePauser
 * @param {string} _newPauser - address
 * @returns {string} encode data
 */
export function encodeErc20UpdatePauser(_newPauser: string) {
  return defaultAbiCoder.encode(["address"], [_newPauser]);
}

/**
 * encode updateRescuer
 * @param {string} newRescuer - address
 * @returns {string} encode data
 */
export function encodeErc20UpdateRescuer(newRescuer: string) {
  return defaultAbiCoder.encode(["address"], [newRescuer]);
}