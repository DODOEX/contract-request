import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };
import clear from 'rollup-plugin-clear';
import { babel } from '@rollup/plugin-babel';

const extensions = ['.js', '.ts'];
const baseConfig = {
  input: pkg.source,
  plugins: [
    typescript(),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled',
    }),
    clear({
      // required, point out which directories should be clear.
      targets: ['dist'],
      // optional, whether clear the directores when rollup recompile on --watch mode.
      watch: true, // default: false
    }),
  ],
};

export default [
  {
    ...baseConfig,
    output: [
      {
        dir: 'dist',
        format: 'es',
        plugins: [terser()],
      },
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        chunkFileNames: '[name]-[hash].cjs',
        format: 'cjs',
        sourcemap: false,
        plugins: [terser()],
      },
    ],
  },
];
