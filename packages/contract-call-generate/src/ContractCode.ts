import { id, JsonFragment, JsonFragmentType, ParamType } from 'ethers';
import { getCapitalizeFirstLetter } from './utils/utils';
import { Code, CodeParameters } from './Code';

const CHAIN_ID_PARAMETER_NAME = 'chainId';
const getContractAddressFunctionName = (name: string) => {
  return `get${
    name.charAt(0).toUpperCase() + name.slice(1)
  }ContractAddressByChainId`;
};

export interface ContractCodeConfig {
  generateQuery?: boolean;
  queryKeyCommon?: any[];
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

export interface ContractCodeParameters extends CodeParameters {
  contractAddressObject?: {
    [chainId: number]: string;
  };
  requestCodeDependCode: string;
  requestCodeRender?: RequestCodeRender;
  config?: Partial<ContractCodeConfig>;
}

function getTsTypeBySolidityType(
  {
    type,
    components,
  }: {
    type?: string;
    components?: ReadonlyArray<JsonFragmentType>;
  },
  params: {
    intType?: string;
  } = {},
): string {
  if (!type) {
    return 'null';
  }
  const intType = params.intType ?? 'number';
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
      return `[${components.map((component) => getTsTypeBySolidityType(component, params)).join(', ')}]`;
    case 'tuple':
      if (!components?.length) return 'any';
      return `{${components.map((component) => `${component.name}: ${getTsTypeBySolidityType(component, params)}`).join('; ')}}`;

    default:
      if (type.endsWith('[]')) {
        return `Array<${getTsTypeBySolidityType(
          {
            type: type.substring(0, type.length - 2),
            components,
          },
          params,
        )}>`;
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
        return intType;
      }
      break;
  }
  throw new Error(`Invalid type: ${type}`);
}

function convertFragmentType(
  type?: string,
  components?: ReadonlyArray<JsonFragmentType>,
) {
  if (type?.startsWith('tuple')) {
    let componentsType = '';
    if (components?.length) {
      componentsType = components
        ?.map((component) =>
          convertFragmentType(component.type, component.components),
        )
        .join(', ');
    }
    return `tuple(${componentsType})${type.endsWith('[]') ? '[]' : ''}`;
  }
  return type;
}

const defaultContractCodeConfig: Required<ContractCodeConfig> = {
  generateQuery: false,
  queryKeyCommon: [],
  readonlyFCNamePrefix: 'fetch',
  readonlyFCNameSuffix: '',
  encodeFCNamePrefix: 'encode',
  encodeFCNameSuffix: '',
};

export class ContractCode extends Code {
  name: string;
  fragments: JsonFragment[];
  config: Required<ContractCodeConfig>;
  requestCodeRender?: RequestCodeRender;
  requestCodeDependCode: string;
  dependCode = `import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';`;
  readonlyDependCode = '';
  isDynamic = false;

  constructor(
    name: string,
    fragments: JsonFragment[],
    init: ContractCodeParameters,
  ) {
    super(init);
    this.name = name;
    this.fragments = fragments;
    this.requestCodeDependCode = init.requestCodeDependCode;
    this.requestCodeRender = init.requestCodeRender;

    this.config = {
      ...defaultContractCodeConfig,
      ...init?.config,
    };
    this.indentSymbol = this.getIndentSymbol(this.format.indent);
    if (init.contractAddressObject) {
      this.readonlyDependCode = `export function ${getContractAddressFunctionName(name)}(chainId${this.format.ts ? ': number' : ''}) {
  ${this.indentSymbol}const contractAddressObject = ${JSON.stringify(init.contractAddressObject)};
  ${this.indentSymbol}const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
  ${this.indentSymbol}return result\n}`;
    } else {
      this.isDynamic = true;
    }
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
    let inputAnonymousIndex = 0;
    let outputAnonymousIndex = 0;
    const fragmentInputs =
      fragment.inputs?.map((input) => ({
        ...input,
        name: input.name || `__input${++inputAnonymousIndex}`,
      })) ?? [];
    const inputs = [
      {
        name: CHAIN_ID_PARAMETER_NAME,
        type: 'number',
      },
      ...fragmentInputs,
    ];
    let toCode = '';
    if (this.isDynamic) {
      inputs.splice(1, 0, {
        name: '__to',
        type: 'string',
      });
    } else {
      toCode = `${this.indentSymbol}const __to = ${getContractAddressFunctionName(this.name)}(${CHAIN_ID_PARAMETER_NAME});`;
    }
    const outputs = fragment.outputs?.map((output) => ({
      ...output,
      name: output.name || `__output${outputAnonymousIndex++}`,
    }));

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

    if (outputs?.length) {
      const returnTypeArray = [] as Array<{
        type: string;
        name: string;
      }>;
      remarks +=
        outputs
          .map((output) => {
            const tsType = getTsTypeBySolidityType(output, {
              intType: 'bigint',
            });
            returnTypeArray.push({
              type: tsType,
              name: output.name ?? '',
            });
            return ` * @returns {${tsType}} ${output.name} - ${output.type}`;
          })
          .join('\n') + '\n';

      if (this.format.ts) {
        if (returnTypeArray.length === 1) {
          returnType = returnTypeArray[0].type;
        } else {
          returnType = `{\n${returnTypeArray.map((item) => `${this.indentSymbol}${this.indentSymbol}${item.name}: ${item.type};`).join('\n')}\n${this.indentSymbol}}`;
        }
      }
    } else {
      remarks += ' * @returns void\n';
    }

    remarks += ' */\n';

    let functionName = fragment.name ?? '';
    if (this.config.readonlyFCNamePrefix) {
      functionName = `${this.config.readonlyFCNamePrefix}${getCapitalizeFirstLetter(functionName)}`;
    }
    functionName += this.config.readonlyFCNameSuffix + suffix;

    const parameters = this.format.ts
      ? inputs.map(
          (input) => `${input.name}: ${getTsTypeBySolidityType(input)}`,
        )
      : inputs.map((input) => input.name);

    const outputTypes =
      fragment.outputs?.map((output) => output.type as string) ?? [];

    let result = `${remarks}export function ${functionName}(${parameters.join(', ')}): Promise<${returnType}> {${toCode ? `\n${toCode}\n\n` : '\n'}${this.getEncodeFunctionCode(
      {
        ...fragment,
        inputs: fragmentInputs,
      },
      '__data',
    )}\n`;
    if (this.requestCodeRender) {
      result += this.requestCodeRender({
        chainIdVariable: CHAIN_ID_PARAMETER_NAME,
        toVariable: '__to',
        dataVariable: '__data',
        outputTypes,
      });
    } else {
      result += `${this.indentSymbol}return contractRequests.batchCall<${returnType}>(${CHAIN_ID_PARAMETER_NAME}, __to, __data, ${JSON.stringify(fragment.outputs)})\n`;
    }
    result += '}';

    if (this.config.generateQuery) {
      result += '\n' + this.getQueryCode(inputs, functionName);
    }
    return result;
  }

  getQueryCode(inputs: JsonFragmentType[], queryFnName: string) {
    const parameters = inputs.map((input) => input.name);
    const parametersAndType = inputs.map(
      (input) => `${input.name}: ${getTsTypeBySolidityType(input)} | undefined`,
    );
    const parametersCode = parameters.join(', ');
    const parametersAndTypeCode = this.format.ts
      ? parametersAndType.join(', ')
      : parametersCode;
    return this
      .getFormatCode(`export function get${getCapitalizeFirstLetter(queryFnName)}QueryOptions(${parametersAndTypeCode}) {
 return {
  queryKey: [${this.config.queryKeyCommon?.length ? this.config.queryKeyCommon.map((key) => `'${key}'`).join(', ') + (parameters.length ? ', ' : '') : ''}${parametersCode}],
  enabled: ${inputs.map((input) => `${input.name} !== undefined && ${input.name} !== null`).join(' && ')}, 
  queryFn: () => {
    return ${queryFnName}(${inputs.map((input) => `${input.name} as ${getTsTypeBySolidityType(input)}`)});
  }
 }
}`);
  }

  getWriteMethodEncodeCode(fragment: JsonFragment, suffix = '') {
    let inputAnonymousIndex = 0;
    const inputs =
      fragment.inputs?.map((input) => ({
        ...input,
        name: input.name || `__input${++inputAnonymousIndex}`,
      })) ?? [];

    let remarks = '/**\n';
    remarks += ` * encode ${fragment.name}\n`;
    remarks +=
      inputs
        .map(
          (input) =>
            ` * @param {${getTsTypeBySolidityType(input, {
              intType: 'string | number',
            })}} ${input.name} - ${input.type}`,
        )
        .join('\n') + '\n';

    remarks += ' * @returns {string} encode data\n';

    remarks += ' */\n';

    let functionName = fragment.name ?? '';
    if (this.config.encodeFCNamePrefix) {
      functionName = `${this.config.encodeFCNamePrefix}${
        functionName.charAt(0).toUpperCase() + functionName.slice(1)
      }`;
    }
    functionName += this.config.encodeFCNameSuffix + suffix;

    const parameters = this.format.ts
      ? inputs?.map(
          (input) =>
            `${input.name}: ${getTsTypeBySolidityType(input, {
              intType: 'string | number',
            })}`,
        )
      : inputs?.map((input) => input.name);

    return `${remarks}export function ${functionName}(${parameters?.join(
      ', ',
    )}) {\n${this.getEncodeFunctionCode({
      ...fragment,
      inputs,
    })}\n}`;
  }

  getEncodeCode(
    inputs: Exclude<JsonFragment['inputs'], undefined>,
    name?: string,
  ) {
    let inputAnonymousIndex = 0;
    const types = JSON.stringify(
      inputs.map((input) => convertFragmentType(input.type, input.components)),
    );
    const values = `[${inputs
      .map((input) => {
        const name = input.name || `__input${++inputAnonymousIndex}`;
        if (input.type === 'tuple' && input.components?.length) {
          return `Object.values(${name})`;
        }
        return name;
      })
      .join(',')}]`;
    if (name) {
      return `${
        this.indentSymbol
      }const ${name} = defaultAbiCoder.encode(${types}, ${values});`;
    }
    return `${this.indentSymbol}return defaultAbiCoder.encode(${types}, ${values});`;
  }

  getEncodeFunctionCode(fragment: JsonFragment, name?: string) {
    const encodeDataName = '__encodeData';
    let result = this.getEncodeCode(fragment.inputs ?? [], encodeDataName);
    const selector = id(
      `${fragment.name}(${fragment.inputs?.map((input) => input.type)?.join(',')})`,
    ).substring(0, 10);

    if (name) {
      result += `\n${this.indentSymbol}const ${name} = hexlify(concat(['${selector}', ${encodeDataName}]));`;
      return result;
    }
    result += `\n${this.indentSymbol}return hexlify(concat(['${selector}', ${encodeDataName}]));`;
    return result;
  }
}
