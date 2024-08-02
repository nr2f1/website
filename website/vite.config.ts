import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: __dirname,
  plugins: [nxViteTsPaths(), react()],
  test: {
    reporters: ['default'],
    environment: 'jsdom',
    setupFiles: ['tests/setup.ts'],
    root: 'website/src',
    globals: true,
    alias: {
      '@app': '/app',
      '@components': '/components',
      '@config': '/config',
      '@graphql': '/graphql',
      '@i18n': '/i18n',
      '@models': '/models',
      '@shared': '/shared',
      '@styles': '/styles',
      '@tests': '/tests',
    },
  },
});
