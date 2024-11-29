export interface CodeFormatOptions {
  ts: boolean;
  indent: number | 'tab';
}

export interface CodeParameters {
  format?: Partial<CodeFormatOptions>;
}

const defaultFormat: Required<CodeFormatOptions> = {
  ts: false,
  indent: 2,
};

export class Code {
  format: Required<CodeFormatOptions>;
  indentSymbol: string;
  constructor(init: CodeParameters) {
    this.format = {
      ...defaultFormat,
      ...init.format,
    };
    this.indentSymbol = this.getIndentSymbol(this.format.indent);
  }

  getIndentSymbol(indent: CodeFormatOptions['indent'] = this.format.indent) {
    if (indent === 'tab') {
      return '\t';
    } else {
      return Array(indent).fill(' ').join('');
    }
  }

  getFormatCode(code: string) {
    return code.replace(/\n([\s\t]+)/g, (_, p1) => {
      const len = p1.length;
      return (
        '\n' +
        Object.keys(new Array(len + 1).join(','))
          .map(() => this.getIndentSymbol())
          .join('')
      );
    });
  }
}
