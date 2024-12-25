import type { Options } from 'tsup';

export const tsup: Options = {
  target: 'es2020',
  format: ['cjs', 'esm'],
  entry: ['src/index.ts'],
  outDir: 'dist',
  clean: true,
  dts: true,
  treeshake: true,
  sourcemap: false,
  minify: true,  
};
