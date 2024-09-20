import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    format: 'esm',
    bundle: true,
    splitting: true,
    allowOverwrite: true,
    minify: true,
  })
  .catch(() => process.exit(1));
