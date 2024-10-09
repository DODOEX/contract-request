# EVM Contract Monorepo

This monorepo contains three interconnected libraries aimed at simplifying interactions with EVM-based smart contracts. These libraries handle automatic code generation, contract requests, and DODO contract request generation. The entire setup is managed using Yarn Workspaces for efficient package management and development.

## Libraries

### 1. **Contract Call Generator**

This library is designed to automatically generate code for handling EVM smart contract methods. It differentiates between read-only methods (which generate query result code) and writable methods (which generate encoded parameter code). The library fetches contract ABIs from Etherscan using an API key and supports multiple chains, such as Ethereum and Arbitrum.

[Readme](https://github.com/DODOEX/contract-request/tree/main/packages/contract-call-generate#contract-call-generator)

### 2. **Contract Requests**

This library provides functionality for contract requests and contract method parameter encoding. It supports user-specified RPC addresses or integration with third-party libraries for querying. Additionally, it allows batch merging of multiple contract requests within a specified time frame, without relying on RPC support for batch processing.

[Readme](https://github.com/DODOEX/contract-request/tree/main/packages/contract-request#contract-requests-library)

### 3. **DODO Contract Requests**

This library leverages the functionality of the previous two libraries to generate requests specifically for interacting with DODO contracts. It simplifies the process of encoding and making contract requests related to DODO.

[Readme](https://github.com/DODOEX/contract-request/tree/main/packages/dodo-contract-request#dodo-contract-request)

## Installation

To install dependencies for all the libraries within the monorepo, simply run:

```bash
yarn install
```

This will install the necessary dependencies for all packages in the workspace.

## Usage

Each library in the monorepo can be used independently or in conjunction with the others to manage EVM contract interactions, requests, and DODO-specific operations. The usage of each library can be found in their respective directories under the `packages/` folder.

## Project Structure

```
root/
  └── packages/
      ├── contract-call-generator/
      ├── contract-requests/
      └── dodo-contract-requests/
```

- **contract-call-generator**: Code generation for EVM contract methods.
- **contract-requests**: Contract request methods and parameter encoding.
- **dodo-contract-requests**: DODO contract-specific request handling, utilizing the above libraries.

## Development

This project uses Yarn Workspaces to manage multiple packages within the same repository. To run or build any specific package, navigate to its directory and use the following commands:

```bash
# Navigate to a package directory
cd packages/contract-call-generator

# Run or build the package
yarn build
```

You can also run scripts from the root of the repository using Yarn Workspaces.

## Roadmap

Future plans and high-priority features and enhancements can be found in the [roadmap](https://github.com/orgs/DODOEX/projects/1/views/1?layout=board&visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C139022602%2C%22Labels%22%5D).

## Milestones

Tracking larger cycles, you can view [milestones](https://github.com/DODOEX/contract-request/milestones) to keep up with ongoing changes and updates to the library.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests if you would like to contribute to the project.
