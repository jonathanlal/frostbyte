import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(
  readFileSync('package.json', { encoding: 'utf8' })
);

export default [
  {
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        entryFileNames: '[name].cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        entryFileNames: '[name].mjs',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts(), tsConfigPaths()],
  },
];
