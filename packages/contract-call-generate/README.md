# Contract Call Generator

`Contract Call Generator` is a library that automatically generates code for interacting with Ethereum Virtual Machine (EVM) contract methods. It supports both read-only (view) and writable contract methods by generating the necessary code for querying results or encoding parameters, respectively.

## Features

- **Lower performance consumption**: No need to manually manage the ABI, and fewer methods to execute
- **Any contract request method**: Libraries that can be used with any contract request.
- **Automatic Code Generation**: Generates code for interacting with EVM smart contracts, including read-only and writable methods.
- **Supports Multiple Chains**: Works with Ethereum, Arbitrum, and other EVM-compatible chains.
- **ABI Fetching**: Automatically fetches ABI from Etherscan using the provided API key.
- **Flexible Contract Address Configuration**: Allows static and dynamic contract addresses for various chains.

## Prerequisites

- Etherscan API Key (to fetch the ABI of the contracts)
- At least one contract address from Ethereum (Mainnet) or Sepolia testnet.

## Installation

To install the required dependencies, use:

```bash
yarn add @dodoex/contract-call-generate
```

## Usage

Here's an example of how to use the Contract Call Generator in your project:

```javascript
const contractCallGenerate = new ContractCallGenerate({
  etherscanAPIkey: 'YOUR_ETHERSCAN_API_KEY',
  contractAddressData: {
    1: ethConfig.CONTRACT_CONFIG, // Ethereum Mainnet contract config
    42161: arbConfig.CONTRACT_CONFIG, // Arbitrum contract config
    // ...
  },
  dynamicContractAddressData: {
    1: ethConfig.DYNAMIC_CONTRACT_CONFIG,
    42161: arbConfig.DYNAMIC_CONTRACT_CONFIG,
    // ...
  },
  contractRequests: new ContractRequests(),
  fetchSecondLimit: 5,
});
contractCallGenerate.generate(path.join(path.resolve(), 'src/contract'));
```

### Parameters

- etherscanAPIkey: Your API key for accessing Etherscan to fetch contract ABI data.
- contractAddressData: A configuration object with chain IDs as keys and contract addresses for static contracts.
- dynamicContractAddressData: Similar to contractAddressData, but for contracts whose addresses might change.
- contractRequests: Instance of the ContractRequests class for making network requests.
- fetchSecondLimit: Limits the frequency of fetching data from the network to avoid rate limits.

## ABI Fetching

The ABI for each contract address will be fetched from Etherscan. You need to provide an API key and at least one contract address from Ethereum Mainnet or Sepolia testnet to ensure ABI data can be retrieved.

Contributing
We welcome contributions! Please open an issue or submit a pull request if you'd like to improve the project.
