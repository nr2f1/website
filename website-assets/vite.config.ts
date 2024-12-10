/// <reference types='vitest' />
import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/website-assets',
  base: './',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [nxViteTsPaths()],

  build: {
    outDir: '../dist/website-assets',
    reportCompressedSize: true,
    assetsDir: './',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
