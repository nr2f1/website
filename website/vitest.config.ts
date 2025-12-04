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
  // @ts-expect-error
  plugins: [react()],
  test: {
    alias: {
      '@app': '/app',
      '@components': '/components',
      '@config': '/config',
      '@graphql': '/graphql',
      '@i18n': '/i18n',
      '@models': '/models',
      '@routes': '/routes',
      '@services': '/services',
      '@shared': '/shared',
      '@styles': '/styles',
      '@tests': '/tests',
    },
    environment: 'jsdom',
    globals: true,
    reporters: ['default'],
    root: 'website/src',
    setupFiles: ['tests/setup.ts'],
  },
});
