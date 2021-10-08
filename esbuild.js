require('esbuild').build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './dist/index.js',
  platform: 'node',
  target: 'node14.8.0',
  minify: true,
  external: [
    'express',
    'morgan'
  ],
}).catch(() => process.exit(1));
