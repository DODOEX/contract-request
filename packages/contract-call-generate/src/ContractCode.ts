import { id, JsonFragment, JsonFragmentType, ParamType } from 'ethers';

const CHAIN_ID_PARAMETER_NAME = 'chainId';
const GET_CONTRACT_FUNCTION_NAME = 'getContractAddressByChainId';

export interface CodeFormatOptions {
  ts: boolean;
  indent: number | 'tab';
  readonlyFCNamePrefix?: string;
  readonlyFCNameSuffix?: string;
  encodeFCNamePrefix?: string;
  encodeFCNameSuffix?: string;
}

type RequestCodeRender = (query: {
  chainIdVariable: string;
  toVariable: string;
  dataVariable: string;
  outputTypes: ReadonlyArray<string | ParamType>;
}) => Promise<any>;

export interface ContractCodeParameters {
  contractAddressObject: {
    [chainId: number]: string;
  };
  requestCodeDependCode: string;
  requestCodeRender?: RequestCodeRender;
  format?: Partial<CodeFormatOptions>;
}

function getTsTypeBySolidityType({
  type,
  components,
}: {
  type?: string;
  components?: ReadonlyArray<JsonFragmentType>;
}): string {
  if (!type) {
    return 'null';
  }
  switch (type) {
    case 'bool':
      return 'boolean';
    case 'address':
    case 'string':
      return 'string';
    case 'number':
      return 'number';

    case 'tuple[]':
      if (!components?.length) return 'Array<any>';
      return `[${components.map((component) => getTsTypeBySolidityType(component)).join(', ')}]`;

    default:
      if (type.endsWith('[]')) {
        return `Array<${getTsTypeBySolidityType({
          type: type.substring(0, type.length - 2),
          components,
        })}>`;
      }
      if (type.startsWith('bytes')) {
        return 'string';
      }
      if (
        type.startsWith('int') ||
        type.startsWith('uint') ||
        type.startsWith('fixed') ||
        type.startsWith('ufixed')
      ) {
        return 'bigint';
      }
      break;
  }
  throw new Error(`Invalid type: ${type}`);
}

const defaultFormat: Required<CodeFormatOptions> = {
  ts: false,
  indent: 2,
  readonlyFCNamePrefix: 'fetch',
  readonlyFCNameSuffix: '',
  encodeFCNamePrefix: 'encode',
  encodeFCNameSuffix: '',
};

export class ContractCode {
  fragments: JsonFragment[];
  format: Required<CodeFormatOptions>;
  indentSymbol: string;
  requestCodeRender?: RequestCodeRender;
  requestCodeDependCode: string;
  dependCode = `import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';`;
  readonlyDependCode: string;

  constructor(fragments: JsonFragment[], init: ContractCodeParameters) {
    this.fragments = fragments;
    this.requestCodeDependCode = init.requestCodeDependCode;
    this.requestCodeRender = init.requestCodeRender;

    this.format = {
      ...defaultFormat,
      ...init?.format,
    };
    this.indentSymbol = this.getIndentSymbol(this.format.indent);
    this.readonlyDependCode = `function ${GET_CONTRACT_FUNCTION_NAME}(chainId${this.format.ts ? ': number' : ''}) {
${this.indentSymbol}const contractAddressObject = ${JSON.stringify(init.contractAddressObject)};
${this.indentSymbol}const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
${this.indentSymbol}if (!result) throw new Error(\`Not support ChainId: \${chainId}.\`)
${this.indentSymbol}return result\n}`;
  }

  static getTsTypeBySolidityType = getTsTypeBySolidityType;

  getCode() {
    const { readonlyCodes, encodeCodes } = this.getAllFunctionCode();

    const code = [
      this.dependCode,
      this.requestCodeDependCode,
      this.readonlyDependCode,
      ...readonlyCodes,
      ...encodeCodes,
    ].join('\n\n');

    return code;
  }

  getAllFunctionCode() {
    const readonlyCodes = [] as string[];
    const encodeCodes = [] as string[];
    const readonlyNameCountMap = new Map<string, number>();
    const encodeNameCountMap = new Map<string, number>();
    this.fragments.forEach((fragment) => {
      if (fragment.type !== 'function' || !fragment.stateMutability) {
        return;
      }
      const name = fragment.name ?? '';
      if (['pure', 'view'].includes(fragment.stateMutability)) {
        let suffix = undefined as string | undefined;
        if (!readonlyNameCountMap.has(name)) {
          readonlyNameCountMap.set(name, 1);
        } else {
          const count = readonlyNameCountMap.get(name)! + 1;
          suffix = String(count);
          readonlyNameCountMap.set(name, count);
        }
        readonlyCodes.push(this.getReadonlyMethodCode(fragment, suffix));
        return;
      }
      if (['nonpayable', 'payable'].includes(fragment.stateMutability)) {
        let suffix = undefined as string | undefined;
        if (!encodeNameCountMap.has(name)) {
          encodeNameCountMap.set(name, 1);
        } else {
          const count = encodeNameCountMap.get(name)! + 1;
          suffix = String(count);
          encodeNameCountMap.set(name, count);
        }
        encodeCodes.push(this.getWriteMethodEncodeCode(fragment, suffix));
      }
    });

    return {
      readonlyCodes,
      encodeCodes,
    };
  }

  getReadonlyMethodCode(fragment: JsonFragment, suffix = '') {
    const fragmentInputs = fragment.inputs ?? [];
    const inputs = [
      {
        name: CHAIN_ID_PARAMETER_NAME,
        type: 'number',
      },
      ...fragmentInputs,
    ];
    let returnType = '';

    let remarks = '/**\n';
    remarks += ` * fetch ${fragment.name}\n`;
    remarks +=
      inputs
        .map(
          (input) =>
            ` * @param {${getTsTypeBySolidityType(input)}} ${
              input.name
            } - ${input.type}`,
        )
        .join('\n') + '\n';

    if (fragment.outputs?.length) {
      const returnTypeArray = [] as Array<{
        type: string;
        name: string;
      }>;
      remarks +=
        fragment.outputs
          .map((output) => {
            const tsType = getTsTypeBySolidityType(output);
            returnTypeArray.push({
              type: tsType,
              name: output.name ?? '',
            });
            return ` * @returns {${tsType}} ${output.name} - ${output.type}`;
          })
          .join('\n') + '\n';

      if (this.format.ts) {
        if (returnTypeArray.length === 1) {
          returnType = `<${returnTypeArray[0].type}>`;
        } else {
          returnType = `<{\n${returnTypeArray.map((item) => `${this.indentSymbol}${this.indentSymbol}${item.name}: ${item.type};`).join('\n')}\n${this.indentSymbol}}>`;
        }
      }
    } else {
      remarks += ' * @returns void\n';
    }

    remarks += ' */\n';

    let functionName = fragment.name ?? '';
    if (this.format.readonlyFCNamePrefix) {
      functionName = `${this.format.readonlyFCNamePrefix}${
        functionName.charAt(0).toUpperCase() + functionName.slice(1)
      }`;
    }
    functionName += this.format.readonlyFCNameSuffix + suffix;

    const parameters = this.format.ts
      ? inputs.map(
          (input) => `${input.name}: ${getTsTypeBySolidityType(input)}`,
        )
      : inputs.map((input) => input.name);

    const outputTypes =
      fragment.outputs?.map((output) => output.type as string) ?? [];

    let result = `${remarks}export function ${functionName}(${parameters.join(', ')}) {
${this.indentSymbol}const __to = ${GET_CONTRACT_FUNCTION_NAME}(${CHAIN_ID_PARAMETER_NAME});

${this.getEncodeFunctionCode(fragment, '__data')}\n`;
    if (this.requestCodeRender) {
      result += this.requestCodeRender({
        chainIdVariable: CHAIN_ID_PARAMETER_NAME,
        toVariable: '__to',
        dataVariable: '__data',
        outputTypes,
      });
    } else {
      result += `${this.indentSymbol}return contractRequests.batchCall${returnType}(${CHAIN_ID_PARAMETER_NAME}, __to, __data, ${JSON.stringify(outputTypes)})\n`;
    }
    result += '}';
    return result;
  }

  getWriteMethodEncodeCode(fragment: JsonFragment, suffix = '') {
    const fragmentInputs = fragment.inputs ?? [];
    const inputs = fragmentInputs;

    let remarks = '/**\n';
    remarks += ` * encode ${fragment.name}\n`;
    remarks +=
      inputs
        .map(
          (input) =>
            ` * @param {${getTsTypeBySolidityType(input)}} ${
              input.name
            } - ${input.type}`,
        )
        .join('\n') + '\n';

    remarks += ' * @returns {string} encode data\n';

    remarks += ' */\n';

    let functionName = fragment.name ?? '';
    if (this.format.encodeFCNamePrefix) {
      functionName = `${this.format.encodeFCNamePrefix}${
        functionName.charAt(0).toUpperCase() + functionName.slice(1)
      }`;
    }
    functionName += this.format.encodeFCNameSuffix + suffix;

    const parameters = this.format.ts
      ? inputs?.map(
          (input) => `${input.name}: ${getTsTypeBySolidityType(input)}`,
        )
      : inputs?.map((input) => input.name);

    return `${remarks}export function ${functionName}(${parameters?.join(
      ', ',
    )}) {\n${this.getEncodeCode(fragmentInputs)}\n}`;
  }

  getIndentSymbol(indent: CodeFormatOptions['indent']) {
    if (indent === 'tab') {
      return '\t';
    } else {
      return Array(indent).fill(' ').join('');
    }
  }

  getEncodeCode(
    inputs: Exclude<JsonFragment['inputs'], undefined>,
    name?: string,
  ) {
    const types = JSON.stringify(inputs.map((input) => input.type));
    const values = `[${inputs.map((input) => input.name).join(',')}]`;
    if (name) {
      return `${
        this.indentSymbol
      }const ${name} = defaultAbiCoder.encode(${types}, ${values});`;
    }
    return `${this.indentSymbol}return defaultAbiCoder.encode(${types}, ${values});`;
  }

  getEncodeFunctionCode(fragment: JsonFragment, name: string) {
    const encodeDataName = '__encodeData';
    let result = this.getEncodeCode(fragment.inputs ?? [], encodeDataName);
    const selector = id(
      `${fragment.name}(${fragment.inputs?.map((input) => input.type)?.join(',')})`,
    ).substring(0, 10);
    result += `\n${this.indentSymbol}const ${name} = hexlify(concat(['${selector}', ${encodeDataName}]));`;
    return result;
  }
}
