/// <reference types='vitest' />

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',

  build: {
    assetsDir: './',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: '../dist/website-assets',
    reportCompressedSize: true,
  },
  cacheDir: '../node_modules/.vite/website-assets',

  plugins: [nxViteTsPaths()],

  preview: {
    host: 'localhost',
    port: 4300,
  },
  root: __dirname,

  server: {
    host: 'localhost',
    port: 4200,
  },
});
