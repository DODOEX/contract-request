import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDodoTeamContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x95C4F5b83aA70810D4f142d58e5F7242Bd891CB0"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch NAME
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchDodoTeamNAME(chainId: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa3f4df7e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch VERSION
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchDodoTeamVERSION(chainId: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xffa1ad74', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch approvedHashes
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - bytes32
 * @returns {bigint} __output0 - uint256
 */
export function fetchDodoTeamApprovedHashes(chainId: number, __input1: string, __input2: string) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","bytes32"], [__input1,__input2]);
  const __data = hexlify(concat(['0x7d832974', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch domainSeparator
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchDodoTeamDomainSeparator(chainId: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf698da25', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch encodeTransactionData
 * @param {number} chainId - number
 * @param {string} to - address
 * @param {number} value - uint256
 * @param {string} data - bytes
 * @param {number} operation - uint8
 * @param {number} safeTxGas - uint256
 * @param {number} baseGas - uint256
 * @param {number} gasPrice - uint256
 * @param {string} gasToken - address
 * @param {string} refundReceiver - address
 * @param {number} _nonce - uint256
 * @returns {string} __output0 - bytes
 */
export function fetchDodoTeamEncodeTransactionData(chainId: number, to: string, value: number, data: string, operation: number, safeTxGas: number, baseGas: number, gasPrice: number, gasToken: string, refundReceiver: string, _nonce: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes","uint8","uint256","uint256","uint256","address","address","uint256"], [to,value,data,operation,safeTxGas,baseGas,gasPrice,gasToken,refundReceiver,_nonce]);
  const __data = hexlify(concat(['0xe86637db', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes"])
}

/**
 * fetch getMessageHash
 * @param {number} chainId - number
 * @param {string} message - bytes
 * @returns {string} __output0 - bytes32
 */
export function fetchDodoTeamGetMessageHash(chainId: number, message: string) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes"], [message]);
  const __data = hexlify(concat(['0x0a1028c4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch getModules
 * @param {number} chainId - number
 * @returns {Array<string>} __output0 - address[]
 */
export function fetchDodoTeamGetModules(chainId: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb2494df3', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, ["address[]"])
}

/**
 * fetch getModulesPaginated
 * @param {number} chainId - number
 * @param {string} start - address
 * @param {number} pageSize - uint256
 * @returns {Array<string>} array - address[]
 * @returns {string} next - address
 */
export function fetchDodoTeamGetModulesPaginated(chainId: number, start: string, pageSize: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [start,pageSize]);
  const __data = hexlify(concat(['0xcc2f8452', __encodeData]));
  return contractRequests.batchCall<{
    array: Array<string>;
    next: string;
  }>(chainId, __to, __data, ["address[]","address"])
}

/**
 * fetch getOwners
 * @param {number} chainId - number
 * @returns {Array<string>} __output0 - address[]
 */
export function fetchDodoTeamGetOwners(chainId: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa0e67e2b', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, ["address[]"])
}

/**
 * fetch getThreshold
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDodoTeamGetThreshold(chainId: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe75235b8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getTransactionHash
 * @param {number} chainId - number
 * @param {string} to - address
 * @param {number} value - uint256
 * @param {string} data - bytes
 * @param {number} operation - uint8
 * @param {number} safeTxGas - uint256
 * @param {number} baseGas - uint256
 * @param {number} gasPrice - uint256
 * @param {string} gasToken - address
 * @param {string} refundReceiver - address
 * @param {number} _nonce - uint256
 * @returns {string} __output0 - bytes32
 */
export function fetchDodoTeamGetTransactionHash(chainId: number, to: string, value: number, data: string, operation: number, safeTxGas: number, baseGas: number, gasPrice: number, gasToken: string, refundReceiver: string, _nonce: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes","uint8","uint256","uint256","uint256","address","address","uint256"], [to,value,data,operation,safeTxGas,baseGas,gasPrice,gasToken,refundReceiver,_nonce]);
  const __data = hexlify(concat(['0xd8d11f78', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch isOwner
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDodoTeamIsOwner(chainId: number, owner: string) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x2f54bf6e', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch nonce
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDodoTeamNonce(chainId: number) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaffed0e0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch signedMessages
 * @param {number} chainId - number
 * @param {string} __input1 - bytes32
 * @returns {bigint} __output0 - uint256
 */
export function fetchDodoTeamSignedMessages(chainId: number, __input1: string) {
  const __to = getDodoTeamContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes32"], [__input1]);
  const __data = hexlify(concat(['0x5ae6bd37', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * encode addOwnerWithThreshold
 * @param {string} owner - address
 * @param {string} _threshold - uint256
 * @returns {string} encode data
 */
export function encodeDodoTeamAddOwnerWithThreshold(owner: string, _threshold: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [owner,_threshold]);
  return hexlify(concat(['0x0d582f13', __encodeData]));
}

/**
 * encode approveHash
 * @param {string} hashToApprove - bytes32
 * @returns {string} encode data
 */
export function encodeDodoTeamApproveHash(hashToApprove: string) {
  const __encodeData = defaultAbiCoder.encode(["bytes32"], [hashToApprove]);
  return hexlify(concat(['0xd4d9bdcd', __encodeData]));
}

/**
 * encode changeMasterCopy
 * @param {string} _masterCopy - address
 * @returns {string} encode data
 */
export function encodeDodoTeamChangeMasterCopy(_masterCopy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_masterCopy]);
  return hexlify(concat(['0x7de7edef', __encodeData]));
}

/**
 * encode changeThreshold
 * @param {string} _threshold - uint256
 * @returns {string} encode data
 */
export function encodeDodoTeamChangeThreshold(_threshold: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_threshold]);
  return hexlify(concat(['0x694e80c3', __encodeData]));
}

/**
 * encode disableModule
 * @param {string} prevModule - address
 * @param {string} module - address
 * @returns {string} encode data
 */
export function encodeDodoTeamDisableModule(prevModule: string, module: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [prevModule,module]);
  return hexlify(concat(['0xe009cfde', __encodeData]));
}

/**
 * encode enableModule
 * @param {string} module - address
 * @returns {string} encode data
 */
export function encodeDodoTeamEnableModule(module: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [module]);
  return hexlify(concat(['0x610b5925', __encodeData]));
}

/**
 * encode execTransaction
 * @param {string} to - address
 * @param {string} value - uint256
 * @param {string} data - bytes
 * @param {string} operation - uint8
 * @param {string} safeTxGas - uint256
 * @param {string} baseGas - uint256
 * @param {string} gasPrice - uint256
 * @param {string} gasToken - address
 * @param {string} refundReceiver - address
 * @param {string} signatures - bytes
 * @returns {string} encode data
 */
export function encodeDodoTeamExecTransaction(to: string, value: string, data: string, operation: string, safeTxGas: string, baseGas: string, gasPrice: string, gasToken: string, refundReceiver: string, signatures: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes","uint8","uint256","uint256","uint256","address","address","bytes"], [to,value,data,operation,safeTxGas,baseGas,gasPrice,gasToken,refundReceiver,signatures]);
  return hexlify(concat(['0x6a761202', __encodeData]));
}

/**
 * encode execTransactionFromModule
 * @param {string} to - address
 * @param {string} value - uint256
 * @param {string} data - bytes
 * @param {string} operation - uint8
 * @returns {string} encode data
 */
export function encodeDodoTeamExecTransactionFromModule(to: string, value: string, data: string, operation: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes","uint8"], [to,value,data,operation]);
  return hexlify(concat(['0x468721a7', __encodeData]));
}

/**
 * encode execTransactionFromModuleReturnData
 * @param {string} to - address
 * @param {string} value - uint256
 * @param {string} data - bytes
 * @param {string} operation - uint8
 * @returns {string} encode data
 */
export function encodeDodoTeamExecTransactionFromModuleReturnData(to: string, value: string, data: string, operation: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes","uint8"], [to,value,data,operation]);
  return hexlify(concat(['0x5229073f', __encodeData]));
}

/**
 * encode isValidSignature
 * @param {string} _data - bytes
 * @param {string} _signature - bytes
 * @returns {string} encode data
 */
export function encodeDodoTeamIsValidSignature(_data: string, _signature: string) {
  const __encodeData = defaultAbiCoder.encode(["bytes","bytes"], [_data,_signature]);
  return hexlify(concat(['0x20c13b0b', __encodeData]));
}

/**
 * encode removeOwner
 * @param {string} prevOwner - address
 * @param {string} owner - address
 * @param {string} _threshold - uint256
 * @returns {string} encode data
 */
export function encodeDodoTeamRemoveOwner(prevOwner: string, owner: string, _threshold: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [prevOwner,owner,_threshold]);
  return hexlify(concat(['0xf8dc5dd9', __encodeData]));
}

/**
 * encode requiredTxGas
 * @param {string} to - address
 * @param {string} value - uint256
 * @param {string} data - bytes
 * @param {string} operation - uint8
 * @returns {string} encode data
 */
export function encodeDodoTeamRequiredTxGas(to: string, value: string, data: string, operation: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes","uint8"], [to,value,data,operation]);
  return hexlify(concat(['0xc4ca3a9c', __encodeData]));
}

/**
 * encode setFallbackHandler
 * @param {string} handler - address
 * @returns {string} encode data
 */
export function encodeDodoTeamSetFallbackHandler(handler: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [handler]);
  return hexlify(concat(['0xf08a0323', __encodeData]));
}

/**
 * encode setup
 * @param {Array<string>} _owners - address[]
 * @param {string} _threshold - uint256
 * @param {string} to - address
 * @param {string} data - bytes
 * @param {string} fallbackHandler - address
 * @param {string} paymentToken - address
 * @param {string} payment - uint256
 * @param {string} paymentReceiver - address
 * @returns {string} encode data
 */
export function encodeDodoTeamSetup(_owners: Array<string>, _threshold: string, to: string, data: string, fallbackHandler: string, paymentToken: string, payment: string, paymentReceiver: string) {
  const __encodeData = defaultAbiCoder.encode(["address[]","uint256","address","bytes","address","address","uint256","address"], [_owners,_threshold,to,data,fallbackHandler,paymentToken,payment,paymentReceiver]);
  return hexlify(concat(['0xb63e800d', __encodeData]));
}

/**
 * encode signMessage
 * @param {string} _data - bytes
 * @returns {string} encode data
 */
export function encodeDodoTeamSignMessage(_data: string) {
  const __encodeData = defaultAbiCoder.encode(["bytes"], [_data]);
  return hexlify(concat(['0x85a5affe', __encodeData]));
}

/**
 * encode swapOwner
 * @param {string} prevOwner - address
 * @param {string} oldOwner - address
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDodoTeamSwapOwner(prevOwner: string, oldOwner: string, newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [prevOwner,oldOwner,newOwner]);
  return hexlify(concat(['0xe318b52b', __encodeData]));
}