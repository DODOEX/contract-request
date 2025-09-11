import { ContractRequests } from '@dodoex/contract-request';
import {
  ContractCallGenerate,
  ContractCodeGenerateParameters,
} from '@dodoex/contract-call-generate';
import path from 'path';
import fs from 'fs';
import fsExtra from 'fs-extra';

const CONTRACT_CONFIG_DIR = path.join(path.resolve(), 'contract-config');
const OUTPUT_BASE_DIR = path.join(path.resolve(), 'src');
const CONTRACT_FUNCTION_FILENAME = 'contract';
const CONTRACT_ADDRESS_FILENAME = 'config';
const OUTPUT_CONTRACT_FUNCTION_DIR = path.join(
  OUTPUT_BASE_DIR,
  CONTRACT_FUNCTION_FILENAME,
);
const OUTPUT_CONTRACT_ADDRESS_DIR = path.join(
  OUTPUT_BASE_DIR,
  CONTRACT_ADDRESS_FILENAME,
);
const OUTPUT_CONTRACT_ADDRESS_FILE = path.join(
  OUTPUT_CONTRACT_ADDRESS_DIR,
  'index.ts',
);
const OUTPUT_FILE = path.join(path.resolve(), 'src/index.ts');
const EXCLUDE_CONFIG_KEYS = ['ChainId', 'Chain', 'Account'];
const DYNAMIC_CONFIG_KEYS = ['Templates'];

const CONTRACT_QUERY_COMMON_KEY = 'contract-request';

type ChainIdAndNameObject = {
  [chainId: string]: string;
};
type ContractConfig = {
  [key: string]: string;
};

async function main() {
  const {
    chainIdAndNameObject,
    contractAddressData,
    dynamicContractAddressData,
  } = getConfig();
  const etherscanAPIkey = process.env.ETHERSCAN_API_KEY;
  if (!etherscanAPIkey) {
    throw new Error('ETHERSCAN_API_KEY is undefined');
  }
  const contractCallGenerate = new ContractCallGenerate({
    etherscanAPIkey,
    contractAddressData,
    dynamicContractAddressData,
    contractRequests: new ContractRequests(),
    fetchSecondLimit: 5,
    codeConfig: {
      generateQuery: true,
      queryKeyCommon: [CONTRACT_QUERY_COMMON_KEY],
    },
    needKeys: [
      'VE33NonfungiblePositionManager',
      'VE33V2Router',
      'VE33V2Pair',
      'VE33V3Pair',
      'VE33V2Gauge',
      'VE33V3Gauge',
      'VE33Voter',
      'VE33VotingEscrow',
      'VE33RewardsDistributor',
      'VE33V2BribeVotingReward',
      'VE33V3BribeVotingReward',
      'VE33V2FeesVotingReward',
      'VE33V3FeesVotingReward',
    ],
  });
  await contractCallGenerate.generate(OUTPUT_CONTRACT_FUNCTION_DIR);
  generateContractAddressConfig(chainIdAndNameObject, contractAddressData);
  generateExportCode();
}

function getConfig() {
  const contractAddressData =
    {} as ContractCodeGenerateParameters['contractAddressData'];
  const dynamicContractAddressData =
    {} as ContractCodeGenerateParameters['dynamicContractAddressData'];
  const chainIdAndNameObject = {} as ChainIdAndNameObject;
  fs.readdirSync(CONTRACT_CONFIG_DIR).forEach((fileName) => {
    const config = fsExtra.readJSONSync(
      path.join(CONTRACT_CONFIG_DIR, fileName),
    );
    const chainId = config.ChainId;
    chainIdAndNameObject[chainId] = config.Chain;
    const currentContractAddressData = {} as ContractConfig;
    const currentDynamicContractAddressData = {} as ContractConfig;
    Object.entries(config).forEach(([key, value]: [string, any]) => {
      if (EXCLUDE_CONFIG_KEYS.includes(key)) return;
      if (DYNAMIC_CONFIG_KEYS.includes(key)) {
        assignConfig(currentDynamicContractAddressData, value);
        return;
      }
      if (key === 'Token') {
        if (value.WETH) {
          currentDynamicContractAddressData.ERC20 = value.WETH;
        }
        if (value.vDODOToken) {
          currentContractAddressData.vDODOToken = value.vDODOToken;
        }
        return;
      }
      assignConfig(currentContractAddressData, value);
    });
    if (Object.keys(currentContractAddressData).length) {
      contractAddressData[chainId] = currentContractAddressData;
    }
    if (Object.keys(currentDynamicContractAddressData).length) {
      dynamicContractAddressData[chainId] = currentDynamicContractAddressData;
    }
  });

  return {
    chainIdAndNameObject,
    contractAddressData,
    dynamicContractAddressData,
  };
}

function assignConfig(target: ContractConfig, source: ContractConfig) {
  if (source) {
    Object.entries(source).forEach(([key, value]) => {
      if (value) {
        if (target[key]) {
          console.log(`Warn: Duplicate configuration key: ${key}`);
        }
        target[key] = value;
      }
    });
  }
  return target;
}

function generateContractAddressConfig(
  chainIdAndNameObject: ChainIdAndNameObject,
  contractAddressData: ContractCodeGenerateParameters['contractAddressData'],
) {
  let multiCallAddressObject = {};
  const chainNameAndIdObject: {
    [key: string]: string;
  } = {};
  Object.entries(contractAddressData).forEach(([key, config]) => {
    if (config.MulticallWithValid) {
      multiCallAddressObject[key] = config.MulticallWithValid;
    }
    const chainName = chainIdAndNameObject[key];
    chainNameAndIdObject[chainName] = key;
    fsExtra.outputFileSync(
      path.join(OUTPUT_CONTRACT_ADDRESS_DIR, `${chainName}.ts`),
      `
const CONTRACT_CONFIG = ${JSON.stringify(config)};
export default CONTRACT_CONFIG;    
  `,
    );
  });

  let addressConfigCode = '';
  const chainIdContractObject = {} as {
    [chainId: string]: string;
  };
  fs.readdirSync(OUTPUT_CONTRACT_ADDRESS_DIR).forEach((file) => {
    if (file === 'index.ts') return;
    const fileName = file.replace(/\.ts$/, '');
    const chainName = fileName.replace(/-([a-z])?/g, (_, p1) => {
      return p1?.toUpperCase() ?? '';
    });
    addressConfigCode += `import { default as ${chainName} } from './${fileName}'\n`;
    const chainId = chainNameAndIdObject[fileName];
    chainIdContractObject[chainId] = chainName;
  });
  addressConfigCode += `\nexport function getConfig(chainId: number) {
    switch (chainId) {
      ${Object.entries(chainIdContractObject)
        .map(([key, value]) => {
          return `case ${key}:
          return ${value};
        `;
        })
        .join('')}
      default:
        return null;
    }
}\n\n`;

  fs.readdirSync(OUTPUT_CONTRACT_ADDRESS_DIR).forEach((file) => {
    if (file === 'index.ts') return;
    const fileName = file.replace(/\.ts$/, '');
    const chainName = fileName.replace(/-([a-z])?/g, (_, p1) => {
      return p1?.toUpperCase() ?? '';
    });
    addressConfigCode += `export { default as ${chainName} } from './${fileName}'\n`;
  });
  addressConfigCode += `\nexport const multiCallAddressList = ${JSON.stringify(multiCallAddressObject)}
`;
  fsExtra.outputFileSync(OUTPUT_CONTRACT_ADDRESS_FILE, addressConfigCode);
}

function generateExportCode() {
  let result = `export { setContractRequests } from './contractRequests';\n`;
  result += `export const CONTRACT_QUERY_COMMON_KEY = '${CONTRACT_QUERY_COMMON_KEY}';\n`;
  result += `export * from './config';\n\n`;
  fs.readdirSync(OUTPUT_CONTRACT_FUNCTION_DIR).forEach((file) => {
    const fileName = file.replace(/\.ts$/, '');
    result += `export * from './${CONTRACT_FUNCTION_FILENAME}/${fileName}';\n`;
  });
  fsExtra.outputFileSync(OUTPUT_FILE, result);
}

main();
