import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  // @ts-ignore
  plugins: [react()],
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
      '@services': '/services',
      '@shared': '/shared',
      '@styles': '/styles',
      '@tests': '/tests',
      '@routes': '/routes',
    },
  },
});
