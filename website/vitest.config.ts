import { defineConfig } from 'vitest/config';

export default defineConfig({
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
    },
  },
});
