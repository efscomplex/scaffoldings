const path = require('path')

const isProd = process.env.ENV === 'production'
//const outfile = isProd ? './build/app.js' : './dist/app.js'

require('esbuild')
   .build({
      entryPoints: ['./src/index.tsx'],
      bundle: true,
      define: {
         ['process.env.NODE_ENV']: `"${process.env.ENV}"`
      },
      minify: process.env.ENV === 'production',
      sourcemap: !isProd,
      color: true,
      splitting: true,
      outdir: 'dist',
      format: 'esm'
   })
   .catch(() => process.exit(1))
