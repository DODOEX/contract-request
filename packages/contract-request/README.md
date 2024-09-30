# Contract Requests Library

`Contract Requests Library` is a library designed for interacting with EVM smart contracts. It provides contract request functions and method parameter encoding. The library supports user-specified RPC addresses or third-party libraries for querying. Additionally, it allows merging multiple contract requests into a single request within a specified time frame, without requiring RPC support for batching, offering an advantage over `viem`'s batch feature.

## Features

- **Contract Requests**: Allows users to provide RPC addresses for sending contract requests or integrate with third-party libraries.
- **Parameter Encoding**: Automatically encodes contract method parameters.
- **Batch Request Merging**: Merges multiple contract requests within a specified time frame to improve performance, without requiring RPC support for batching.
- **Multi-Chain Support**: Easily configurable for multiple chains like Ethereum Mainnet, Arbitrum, etc.

## Installation

First, install the necessary dependencies:

```bash
yarn add @dodoex/contract-request
```

## Usage

Here is an example of how to use.

```javascript
const contractRequests = new ContractRequests({
  rpc: {
    1: 'https://rpc.ankr.com/eth', // Ethereum Mainnet RPC
    42161: 'https://arb1.arbitrum.io/rpc', // Arbitrum RPC
  },
  multiCallAddressList: {
    1: ETH_CONTRACT_CONFIG.multiCall, // Ethereum Multicall contract address
    42161: ARB_CONTRACT_CONFIG.multiCall, // Arbitrum Multicall contract address
  },
  batchParameters: {
    batchStallTime: 10, // Batch delay time in milliseconds
    batchMaxCount: 100, // Maximum number of requests in a batch
  },
});
```

## Batch Request Merging

Unlike `viem`'s batch processing, this library's batch request merging does not require RPC support. You can specify the time frame in which multiple requests are merged into one, along with the maximum number of requests. This reduces network requests and improves performance.

## Contributing

We welcome contributions! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.
