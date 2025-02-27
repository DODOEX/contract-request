import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch BIRD_TEAM
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerBIRD_TEAM(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcead1dcc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerBIRD_TEAMQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerBIRD_TEAM', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerBIRD_TEAM(chainId as number,__to as string);
    }
  }
}

/**
 * fetch ETH_ADDRESS
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerETH_ADDRESS(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa734f06e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerETH_ADDRESSQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerETH_ADDRESS', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerETH_ADDRESS(chainId as number,__to as string);
    }
  }
}

/**
 * fetch FEE_MODEL
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerFEE_MODEL(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd61374dd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerFEE_MODELQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerFEE_MODEL', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerFEE_MODEL(chainId as number,__to as string);
    }
  }
}

/**
 * fetch MESSAGE_PROXY
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerMESSAGE_PROXY(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x739fcf4f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerMESSAGE_PROXYQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerMESSAGE_PROXY', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerMESSAGE_PROXY(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _CURRENT_CHAIN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint64
 */
export function fetchDFTManager_CURRENT_CHAIN_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x71bcceaf', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint64","name":"","type":"uint64"}])
}
export function getFetchDFTManager_CURRENT_CHAIN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManager_CURRENT_CHAIN_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManager_CURRENT_CHAIN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDFTManager_WETH_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManager_WETH_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManager_WETH_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManager_WETH_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch adapters
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerAdapters(chainId: number, __to: string, __input1: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xe5711ffc', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerAdaptersQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerAdapters', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerAdapters(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch allowedComposer
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerAllowedComposer(chainId: number, __to: string, __input1: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xfac15c3e', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerAllowedComposerQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerAllowedComposer', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerAllowedComposer(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch botWhitelist
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerBotWhitelist(chainId: number, __to: string, __input1: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x0cdcc6a8', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerBotWhitelistQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerBotWhitelist', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerBotWhitelist(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch canSend
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerCanSend(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7903d8c8', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerCanSendQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerCanSend', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerCanSend(chainId as number,__to as string);
    }
  }
}

/**
 * fetch claimableGas
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerClaimableGas(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xac59d302', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerClaimableGasQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerClaimableGas', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerClaimableGas(chainId as number,__to as string);
    }
  }
}

/**
 * fetch claimableRefund
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerClaimableRefund(chainId: number, __to: string, __input1: string, __input2: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0x9e8844ea', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerClaimableRefundQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerClaimableRefund', chainId, __to, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDFTManagerClaimableRefund(chainId as number,__to as string,__input1 as string,__input2 as string);
    }
  }
}

/**
 * fetch getPendingDepositList
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {[{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}, bigint]} __output0 - tuple[]
 */
export function fetchDFTManagerGetPendingDepositList(chainId: number, __to: string): Promise<[{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}, bigint]> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x36ecda06', __encodeData]));
  return contractRequests.batchCall<[{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}, bigint]>(chainId, __to, __data, [{"components":[{"components":[{"components":[{"internalType":"bytes32","name":"externalID","type":"bytes32"},{"internalType":"uint64","name":"chain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"}],"internalType":"struct MessageType.OriginInfo","name":"origin","type":"tuple"},{"internalType":"uint64","name":"srcChain","type":"uint64"},{"internalType":"uint64","name":"dstChain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"dstMinReceive","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"composer","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct MessageType.SendMessage","name":"sendMessage","type":"tuple"},{"internalType":"uint256","name":"outFee","type":"uint256"}],"internalType":"struct MessageType.PendingMessage[]","name":"","type":"tuple[]"}])
}
export function getFetchDFTManagerGetPendingDepositListQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerGetPendingDepositList', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerGetPendingDepositList(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getPendingMulsigVaultDepositList
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {[{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}, bigint]} __output0 - tuple[]
 */
export function fetchDFTManagerGetPendingMulsigVaultDepositList(chainId: number, __to: string): Promise<[{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}, bigint]> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5033f7b7', __encodeData]));
  return contractRequests.batchCall<[{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}, bigint]>(chainId, __to, __data, [{"components":[{"components":[{"components":[{"internalType":"bytes32","name":"externalID","type":"bytes32"},{"internalType":"uint64","name":"chain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"}],"internalType":"struct MessageType.OriginInfo","name":"origin","type":"tuple"},{"internalType":"uint64","name":"srcChain","type":"uint64"},{"internalType":"uint64","name":"dstChain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"dstMinReceive","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"composer","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct MessageType.SendMessage","name":"sendMessage","type":"tuple"},{"internalType":"uint256","name":"outFee","type":"uint256"}],"internalType":"struct MessageType.PendingMessage[]","name":"","type":"tuple[]"}])
}
export function getFetchDFTManagerGetPendingMulsigVaultDepositListQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerGetPendingMulsigVaultDepositList', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerGetPendingMulsigVaultDepositList(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getRefundInfo
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} externalID - bytes32
 * @returns {{externalID: string; user: string; token: string; amount: bigint; isClaimed: boolean}} __output0 - tuple
 */
export function fetchDFTManagerGetRefundInfo(chainId: number, __to: string, externalID: string): Promise<{externalID: string; user: string; token: string; amount: bigint; isClaimed: boolean}> {
  const __encodeData = defaultAbiCoder.encode(["bytes32"], [externalID]);
  const __data = hexlify(concat(['0x6a0924c8', __encodeData]));
  return contractRequests.batchCall<{externalID: string; user: string; token: string; amount: bigint; isClaimed: boolean}>(chainId, __to, __data, [{"components":[{"internalType":"bytes32","name":"externalID","type":"bytes32"},{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"isClaimed","type":"bool"}],"internalType":"struct MessageType.RefundInfo","name":"","type":"tuple"}])
}
export function getFetchDFTManagerGetRefundInfoQueryOptions(chainId: number | undefined, __to: string | undefined, externalID: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerGetRefundInfo', chainId, __to, externalID],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && externalID !== undefined && externalID !== null, 
    queryFn: () => {
        return fetchDFTManagerGetRefundInfo(chainId as number,__to as string,externalID as string);
    }
  }
}

/**
 * fetch globalNonce
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerGlobalNonce(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x37e23222', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerGlobalNonceQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerGlobalNonce', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerGlobalNonce(chainId as number,__to as string);
    }
  }
}

/**
 * fetch heteroLocalChainTokens
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @param {string} __input2 - bytes32
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerHeteroLocalChainTokens(chainId: number, __to: string, __input1: number, __input2: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64","bytes32"], [__input1,__input2]);
  const __data = hexlify(concat(['0x0e996ba5', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerHeteroLocalChainTokensQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerHeteroLocalChainTokens', chainId, __to, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDFTManagerHeteroLocalChainTokens(chainId as number,__to as string,__input1 as number,__input2 as string);
    }
  }
}

/**
 * fetch heteroOtherChainTokens
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @param {string} __input2 - address
 * @returns {string} __output0 - bytes32
 */
export function fetchDFTManagerHeteroOtherChainTokens(chainId: number, __to: string, __input1: number, __input2: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0x3fb45a46', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchDFTManagerHeteroOtherChainTokensQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerHeteroOtherChainTokens', chainId, __to, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDFTManagerHeteroOtherChainTokens(chainId as number,__to as string,__input1 as number,__input2 as string);
    }
  }
}

/**
 * fetch heteroPeers
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @returns {string} __output0 - bytes32
 */
export function fetchDFTManagerHeteroPeers(chainId: number, __to: string, __input1: number): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64"], [__input1]);
  const __data = hexlify(concat(['0xbe5768d6', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchDFTManagerHeteroPeersQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerHeteroPeers', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerHeteroPeers(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch invalidChain
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerInvalidChain(chainId: number, __to: string, __input1: number): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["uint64"], [__input1]);
  const __data = hexlify(concat(['0xc006967a', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerInvalidChainQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerInvalidChain', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerInvalidChain(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch localChainAdmins
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @param {string} __input2 - address
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerLocalChainAdmins(chainId: number, __to: string, __input1: number, __input2: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0xcb6cd2b7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerLocalChainAdminsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerLocalChainAdmins', chainId, __to, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDFTManagerLocalChainAdmins(chainId as number,__to as string,__input1 as number,__input2 as string);
    }
  }
}

/**
 * fetch localChainTokens
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @param {string} __input2 - address
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerLocalChainTokens(chainId: number, __to: string, __input1: number, __input2: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0xdec42f01', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerLocalChainTokensQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerLocalChainTokens', chainId, __to, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDFTManagerLocalChainTokens(chainId as number,__to as string,__input1 as number,__input2 as string);
    }
  }
}

/**
 * fetch mulsigVaultPeers
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerMulsigVaultPeers(chainId: number, __to: string, __input1: number): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64"], [__input1]);
  const __data = hexlify(concat(['0x89c17abe', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerMulsigVaultPeersQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerMulsigVaultPeers', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerMulsigVaultPeers(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch operableTokens
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerOperableTokens(chainId: number, __to: string, __input1: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x6a256c9a', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerOperableTokensQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerOperableTokens', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerOperableTokens(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch otherChainTokens
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @param {string} __input2 - address
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerOtherChainTokens(chainId: number, __to: string, __input1: number, __input2: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0xfc9ddf7c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerOtherChainTokensQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerOtherChainTokens', chainId, __to, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDFTManagerOtherChainTokens(chainId as number,__to as string,__input1 as number,__input2 as string);
    }
  }
}

/**
 * fetch overCapDeposit
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerOverCapDeposit(chainId: number, __to: string, __input1: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x8c32d935', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerOverCapDepositQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerOverCapDeposit', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerOverCapDeposit(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerOwner(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerOwnerQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerOwner', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDFTManagerOwner(chainId as number,__to as string);
    }
  }
}

/**
 * fetch peers
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @returns {string} __output0 - address
 */
export function fetchDFTManagerPeers(chainId: number, __to: string, __input1: number): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint64"], [__input1]);
  const __data = hexlify(concat(['0xaf576c7a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDFTManagerPeersQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerPeers', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerPeers(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch pendingDepositList
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}} sendMessage - tuple
 * @returns {bigint} outFee - uint256
 */
export function fetchDFTManagerPendingDepositList(chainId: number, __to: string, __input1: number): Promise<{
    sendMessage: {origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string};
    outFee: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xb879bd24', __encodeData]));
  return contractRequests.batchCall<{
    sendMessage: {origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string};
    outFee: bigint;
  }>(chainId, __to, __data, [{"components":[{"components":[{"internalType":"bytes32","name":"externalID","type":"bytes32"},{"internalType":"uint64","name":"chain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"}],"internalType":"struct MessageType.OriginInfo","name":"origin","type":"tuple"},{"internalType":"uint64","name":"srcChain","type":"uint64"},{"internalType":"uint64","name":"dstChain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"dstMinReceive","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"composer","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct MessageType.SendMessage","name":"sendMessage","type":"tuple"},{"internalType":"uint256","name":"outFee","type":"uint256"}])
}
export function getFetchDFTManagerPendingDepositListQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerPendingDepositList', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerPendingDepositList(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch pendingFeeRates
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint64
 * @param {string} __input2 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerPendingFeeRates(chainId: number, __to: string, __input1: number, __input2: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint64","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0x211687df', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerPendingFeeRatesQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerPendingFeeRates', chainId, __to, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchDFTManagerPendingFeeRates(chainId as number,__to as string,__input1 as number,__input2 as string);
    }
  }
}

/**
 * fetch pendingMulsigVaultDepositList
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {{origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string}} sendMessage - tuple
 * @returns {bigint} outFee - uint256
 */
export function fetchDFTManagerPendingMulsigVaultDepositList(chainId: number, __to: string, __input1: number): Promise<{
    sendMessage: {origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string};
    outFee: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x9ab5e0b3', __encodeData]));
  return contractRequests.batchCall<{
    sendMessage: {origin: {externalID: string; chain: bigint; sender: string; token: string}; srcChain: bigint; dstChain: bigint; sender: string; receiver: string; nonce: bigint; token: string; amount: bigint; dstMinReceive: bigint; targetContract: string; composer: string; data: string};
    outFee: bigint;
  }>(chainId, __to, __data, [{"components":[{"components":[{"internalType":"bytes32","name":"externalID","type":"bytes32"},{"internalType":"uint64","name":"chain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"}],"internalType":"struct MessageType.OriginInfo","name":"origin","type":"tuple"},{"internalType":"uint64","name":"srcChain","type":"uint64"},{"internalType":"uint64","name":"dstChain","type":"uint64"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"dstMinReceive","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"composer","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct MessageType.SendMessage","name":"sendMessage","type":"tuple"},{"internalType":"uint256","name":"outFee","type":"uint256"}])
}
export function getFetchDFTManagerPendingMulsigVaultDepositListQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerPendingMulsigVaultDepositList', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerPendingMulsigVaultDepositList(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch queryGas
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {{externalID: string; chain: number; sender: string; token: string}} origin - tuple
 * @param {string} token - address
 * @param {number} dstChain - uint64
 * @param {string} receiver - address
 * @param {number} amount - uint256
 * @param {number} minReceiveAmount - uint256
 * @param {string} targetContract - address
 * @param {string} composer - address
 * @param {string} data - bytes
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerQueryGas(chainId: number, __to: string, origin: {externalID: string; chain: number; sender: string; token: string}, token: string, dstChain: number, receiver: string, amount: number, minReceiveAmount: number, targetContract: string, composer: string, data: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["tuple(bytes32, uint64, address, address)","address","uint64","address","uint256","uint256","address","address","bytes"], [Object.values(origin),token,dstChain,receiver,amount,minReceiveAmount,targetContract,composer,data]);
  const __data = hexlify(concat(['0x4d02a8c4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerQueryGasQueryOptions(chainId: number | undefined, __to: string | undefined, origin: {externalID: string; chain: number; sender: string; token: string} | undefined, token: string | undefined, dstChain: number | undefined, receiver: string | undefined, amount: number | undefined, minReceiveAmount: number | undefined, targetContract: string | undefined, composer: string | undefined, data: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerQueryGas', chainId, __to, origin, token, dstChain, receiver, amount, minReceiveAmount, targetContract, composer, data],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && origin !== undefined && origin !== null && token !== undefined && token !== null && dstChain !== undefined && dstChain !== null && receiver !== undefined && receiver !== null && amount !== undefined && amount !== null && minReceiveAmount !== undefined && minReceiveAmount !== null && targetContract !== undefined && targetContract !== null && composer !== undefined && composer !== null && data !== undefined && data !== null, 
    queryFn: () => {
        return fetchDFTManagerQueryGas(chainId as number,__to as string,origin as {externalID: string; chain: number; sender: string; token: string},token as string,dstChain as number,receiver as string,amount as number,minReceiveAmount as number,targetContract as string,composer as string,data as string);
    }
  }
}

/**
 * fetch queryGasWithSendInfo
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {{origin: {externalID: string; chain: number; sender: string; token: string}; srcChain: number; dstChain: number; sender: string; receiver: string; nonce: number; token: string; amount: number; dstMinReceive: number; targetContract: string; composer: string; data: string}} sendInfo - tuple
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerQueryGasWithSendInfo(chainId: number, __to: string, sendInfo: {origin: {externalID: string; chain: number; sender: string; token: string}; srcChain: number; dstChain: number; sender: string; receiver: string; nonce: number; token: string; amount: number; dstMinReceive: number; targetContract: string; composer: string; data: string}): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["tuple(tuple(bytes32, uint64, address, address), uint64, uint64, address, address, uint256, address, uint256, uint256, address, address, bytes)"], [Object.values(sendInfo)]);
  const __data = hexlify(concat(['0xcc46107f', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerQueryGasWithSendInfoQueryOptions(chainId: number | undefined, __to: string | undefined, sendInfo: {origin: {externalID: string; chain: number; sender: string; token: string}; srcChain: number; dstChain: number; sender: string; receiver: string; nonce: number; token: string; amount: number; dstMinReceive: number; targetContract: string; composer: string; data: string} | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerQueryGasWithSendInfo', chainId, __to, sendInfo],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && sendInfo !== undefined && sendInfo !== null, 
    queryFn: () => {
        return fetchDFTManagerQueryGasWithSendInfo(chainId as number,__to as string,sendInfo as {origin: {externalID: string; chain: number; sender: string; token: string}; srcChain: number; dstChain: number; sender: string; receiver: string; nonce: number; token: string; amount: number; dstMinReceive: number; targetContract: string; composer: string; data: string});
    }
  }
}

/**
 * fetch queryHeteroGas
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} token - uint256
 * @param {number} dstChain - uint256
 * @param {number} receiver - uint256
 * @param {number} amount - uint256
 * @param {number} minReceiveAmount - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerQueryHeteroGas(chainId: number, __to: string, token: number, dstChain: number, receiver: number, amount: number, minReceiveAmount: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256","uint256"], [token,dstChain,receiver,amount,minReceiveAmount]);
  const __data = hexlify(concat(['0xcd3d5d18', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerQueryHeteroGasQueryOptions(chainId: number | undefined, __to: string | undefined, token: number | undefined, dstChain: number | undefined, receiver: number | undefined, amount: number | undefined, minReceiveAmount: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerQueryHeteroGas', chainId, __to, token, dstChain, receiver, amount, minReceiveAmount],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && token !== undefined && token !== null && dstChain !== undefined && dstChain !== null && receiver !== undefined && receiver !== null && amount !== undefined && amount !== null && minReceiveAmount !== undefined && minReceiveAmount !== null, 
    queryFn: () => {
        return fetchDFTManagerQueryHeteroGas(chainId as number,__to as string,token as number,dstChain as number,receiver as number,amount as number,minReceiveAmount as number);
    }
  }
}

/**
 * fetch refundInfos
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - bytes32
 * @returns {string} externalID - bytes32
 * @returns {string} user - address
 * @returns {string} token - address
 * @returns {bigint} amount - uint256
 * @returns {boolean} isClaimed - bool
 */
export function fetchDFTManagerRefundInfos(chainId: number, __to: string, __input1: string): Promise<{
    externalID: string;
    user: string;
    token: string;
    amount: bigint;
    isClaimed: boolean;
  }> {
  const __encodeData = defaultAbiCoder.encode(["bytes32"], [__input1]);
  const __data = hexlify(concat(['0x9a978ba2', __encodeData]));
  return contractRequests.batchCall<{
    externalID: string;
    user: string;
    token: string;
    amount: bigint;
    isClaimed: boolean;
  }>(chainId, __to, __data, [{"internalType":"bytes32","name":"externalID","type":"bytes32"},{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"isClaimed","type":"bool"}])
}
export function getFetchDFTManagerRefundInfosQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerRefundInfos', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerRefundInfos(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch targets
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDFTManagerTargets(chainId: number, __to: string, __input1: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x562c4784', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDFTManagerTargetsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerTargets', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerTargets(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch tokenReserve
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} token - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerTokenReserve(chainId: number, __to: string, token: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  const __data = hexlify(concat(['0x54d39008', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerTokenReserveQueryOptions(chainId: number | undefined, __to: string | undefined, token: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerTokenReserve', chainId, __to, token],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && token !== undefined && token !== null, 
    queryFn: () => {
        return fetchDFTManagerTokenReserve(chainId as number,__to as string,token as string);
    }
  }
}

/**
 * fetch userTotalRefund
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDFTManagerUserTotalRefund(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x0591c28e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDFTManagerUserTotalRefundQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDFTManagerUserTotalRefund', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDFTManagerUserTotalRefund(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * encode claimGas

 * @returns {string} encode data
 */
export function encodeDFTManagerClaimGas() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xa95d6b1c', __encodeData]));
}

/**
 * encode claimRefund
 * @param {string} externalID - bytes32
 * @returns {string} encode data
 */
export function encodeDFTManagerClaimRefund(externalID: string) {
  const __encodeData = defaultAbiCoder.encode(["bytes32"], [externalID]);
  return hexlify(concat(['0x71de2ffc', __encodeData]));
}

/**
 * encode confirmDeposit
 * @param {string | number} index - uint256
 * @param {string} externalID - bytes32
 * @param {boolean} isMulsigVault - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerConfirmDeposit(index: string | number, externalID: string, isMulsigVault: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bytes32","bool"], [index,externalID,isMulsigVault]);
  return hexlify(concat(['0x05de5ca2', __encodeData]));
}

/**
 * encode receiveHeteroMessage
 * @param {string | number} externalID - uint256
 * @param {string | number} otherChainToken - uint256
 * @param {string | number} sharedAmount - uint256
 * @param {string | number} minReceiveAmount - uint256
 * @param {string | number} srcChain - uint256
 * @param {string | number} srcNonce - uint256
 * @param {string | number} sender - uint256
 * @param {string | number} receiver - uint256
 * @param {string | number} composer - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDFTManagerReceiveHeteroMessage(externalID: string | number, otherChainToken: string | number, sharedAmount: string | number, minReceiveAmount: string | number, srcChain: string | number, srcNonce: string | number, sender: string | number, receiver: string | number, composer: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256","uint256","bytes"], [externalID,otherChainToken,sharedAmount,minReceiveAmount,srcChain,srcNonce,sender,receiver,composer,data]);
  return hexlify(concat(['0x86aa1e2c', __encodeData]));
}

/**
 * encode receiveMessage
 * @param {{externalID: string; chain: string | number; sender: string; token: string}} origin - tuple
 * @param {string} otherChainToken - address
 * @param {string | number} sharedAmount - uint256
 * @param {string | number} minReceiveAmount - uint256
 * @param {string | number} srcChain - uint64
 * @param {string | number} srcNonce - uint256
 * @param {string} sender - address
 * @param {string} receiver - address
 * @param {string} composer - address
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDFTManagerReceiveMessage(origin: {externalID: string; chain: string | number; sender: string; token: string}, otherChainToken: string, sharedAmount: string | number, minReceiveAmount: string | number, srcChain: string | number, srcNonce: string | number, sender: string, receiver: string, composer: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["tuple(bytes32, uint64, address, address)","address","uint256","uint256","uint64","uint256","address","address","address","bytes"], [Object.values(origin),otherChainToken,sharedAmount,minReceiveAmount,srcChain,srcNonce,sender,receiver,composer,data]);
  return hexlify(concat(['0xe732b8a6', __encodeData]));
}

/**
 * encode refund
 * @param {string} user - address
 * @param {string} token - address
 * @param {string | number} amount - uint256
 * @param {string} externalID - bytes32
 * @returns {string} encode data
 */
export function encodeDFTManagerRefund(user: string, token: string, amount: string | number, externalID: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","bytes32"], [user,token,amount,externalID]);
  return hexlify(concat(['0x43562bc4', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeDFTManagerRenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode revertDeposit
 * @param {string | number} index - uint256
 * @param {string} externalID - bytes32
 * @param {boolean} isMulsigVault - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerRevertDeposit(index: string | number, externalID: string, isMulsigVault: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint256","bytes32","bool"], [index,externalID,isMulsigVault]);
  return hexlify(concat(['0x85d38e79', __encodeData]));
}

/**
 * encode send
 * @param {{externalID: string; chain: string | number; sender: string; token: string}} origin - tuple
 * @param {string} token - address
 * @param {string | number} dstChain - uint64
 * @param {string} receiver - address
 * @param {string | number} amount - uint256
 * @param {string | number} minReceiveAmount - uint256
 * @param {string} targetContract - address
 * @param {string} composer - address
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDFTManagerSend(origin: {externalID: string; chain: string | number; sender: string; token: string}, token: string, dstChain: string | number, receiver: string, amount: string | number, minReceiveAmount: string | number, targetContract: string, composer: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["tuple(bytes32, uint64, address, address)","address","uint64","address","uint256","uint256","address","address","bytes"], [Object.values(origin),token,dstChain,receiver,amount,minReceiveAmount,targetContract,composer,data]);
  return hexlify(concat(['0xfbd9465c', __encodeData]));
}

/**
 * encode sendHetero
 * @param {string | number} token - uint256
 * @param {string | number} dstChain - uint256
 * @param {string | number} receiver - uint256
 * @param {string | number} amount - uint256
 * @param {string | number} minReceiveAmount - uint256
 * @returns {string} encode data
 */
export function encodeDFTManagerSendHetero(token: string | number, dstChain: string | number, receiver: string | number, amount: string | number, minReceiveAmount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256","uint256"], [token,dstChain,receiver,amount,minReceiveAmount]);
  return hexlify(concat(['0x5cd6ea60', __encodeData]));
}

/**
 * encode setAdapter
 * @param {string} adapter - address
 * @param {boolean} flag - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetAdapter(adapter: string, flag: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [adapter,flag]);
  return hexlify(concat(['0x332f6465', __encodeData]));
}

/**
 * encode setBirdTeam
 * @param {string} team - address
 * @returns {string} encode data
 */
export function encodeDFTManagerSetBirdTeam(team: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [team]);
  return hexlify(concat(['0x8ab0d6fe', __encodeData]));
}

/**
 * encode setCanSend
 * @param {boolean} flag - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetCanSend(flag: boolean) {
  const __encodeData = defaultAbiCoder.encode(["bool"], [flag]);
  return hexlify(concat(['0x7efe060b', __encodeData]));
}

/**
 * encode setComposer
 * @param {string} composer - address
 * @param {boolean} isAllowed - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetComposer(composer: string, isAllowed: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [composer,isAllowed]);
  return hexlify(concat(['0xe77b36b7', __encodeData]));
}

/**
 * encode setFeeModel
 * @param {string} model - address
 * @returns {string} encode data
 */
export function encodeDFTManagerSetFeeModel(model: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [model]);
  return hexlify(concat(['0xa5a9504e', __encodeData]));
}

/**
 * encode setHeteroPeer
 * @param {string | number} dstChain - uint64
 * @param {string} peer - bytes32
 * @returns {string} encode data
 */
export function encodeDFTManagerSetHeteroPeer(dstChain: string | number, peer: string) {
  const __encodeData = defaultAbiCoder.encode(["uint64","bytes32"], [dstChain,peer]);
  return hexlify(concat(['0x19404d37', __encodeData]));
}

/**
 * encode setHeteroPeerTokens
 * @param {string | number} chain - uint64
 * @param {string} srcChainToken - address
 * @param {string} dstChainToken - bytes32
 * @returns {string} encode data
 */
export function encodeDFTManagerSetHeteroPeerTokens(chain: string | number, srcChainToken: string, dstChainToken: string) {
  const __encodeData = defaultAbiCoder.encode(["uint64","address","bytes32"], [chain,srcChainToken,dstChainToken]);
  return hexlify(concat(['0xb80e523c', __encodeData]));
}

/**
 * encode setInvalidChain
 * @param {string | number} chain - uint64
 * @param {boolean} isInvalid - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetInvalidChain(chain: string | number, isInvalid: boolean) {
  const __encodeData = defaultAbiCoder.encode(["uint64","bool"], [chain,isInvalid]);
  return hexlify(concat(['0xd7704194', __encodeData]));
}

/**
 * encode setMessageProxy
 * @param {string} proxy - address
 * @returns {string} encode data
 */
export function encodeDFTManagerSetMessageProxy(proxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [proxy]);
  return hexlify(concat(['0xd52223cd', __encodeData]));
}

/**
 * encode setMulsigVaultPeer
 * @param {string | number} chainId - uint64
 * @param {string} peer - address
 * @returns {string} encode data
 */
export function encodeDFTManagerSetMulsigVaultPeer(chainId: string | number, peer: string) {
  const __encodeData = defaultAbiCoder.encode(["uint64","address"], [chainId,peer]);
  return hexlify(concat(['0x47c2009f', __encodeData]));
}

/**
 * encode setOperableToken
 * @param {string} token - address
 * @param {boolean} flag - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetOperableToken(token: string, flag: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [token,flag]);
  return hexlify(concat(['0x592ca433', __encodeData]));
}

/**
 * encode setOverCapWhitelist
 * @param {string} account - address
 * @param {boolean} isAllowed - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetOverCapWhitelist(account: string, isAllowed: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [account,isAllowed]);
  return hexlify(concat(['0x18a0031e', __encodeData]));
}

/**
 * encode setPeer
 * @param {string | number} chainId - uint64
 * @param {string} peer - address
 * @returns {string} encode data
 */
export function encodeDFTManagerSetPeer(chainId: string | number, peer: string) {
  const __encodeData = defaultAbiCoder.encode(["uint64","address"], [chainId,peer]);
  return hexlify(concat(['0x9bdbfabb', __encodeData]));
}

/**
 * encode setPeerTokens
 * @param {string | number} dstChain - uint64
 * @param {string} srcChainToken - address
 * @param {string} dstChainToken - address
 * @returns {string} encode data
 */
export function encodeDFTManagerSetPeerTokens(dstChain: string | number, srcChainToken: string, dstChainToken: string) {
  const __encodeData = defaultAbiCoder.encode(["uint64","address","address"], [dstChain,srcChainToken,dstChainToken]);
  return hexlify(concat(['0xfda5755c', __encodeData]));
}

/**
 * encode setPendingFeeRate
 * @param {string | number} chain - uint64
 * @param {string} token - address
 * @param {string | number} feeRate - uint256
 * @returns {string} encode data
 */
export function encodeDFTManagerSetPendingFeeRate(chain: string | number, token: string, feeRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint64","address","uint256"], [chain,token,feeRate]);
  return hexlify(concat(['0x3b7597fd', __encodeData]));
}

/**
 * encode setRefund
 * @param {string} externalID - bytes32
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDFTManagerSetRefund(externalID: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["bytes32","uint256"], [externalID,amount]);
  return hexlify(concat(['0xdcd34038', __encodeData]));
}

/**
 * encode setTarget
 * @param {string} target - address
 * @param {boolean} flag - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetTarget(target: string, flag: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [target,flag]);
  return hexlify(concat(['0x80ffe77f', __encodeData]));
}

/**
 * encode setWhitelist
 * @param {string} account - address
 * @param {boolean} isAllowed - bool
 * @returns {string} encode data
 */
export function encodeDFTManagerSetWhitelist(account: string, isAllowed: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [account,isAllowed]);
  return hexlify(concat(['0x53d6fd59', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDFTManagerTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}