import { composePlugins, withNx } from '@nx/next';
import type { WithNxOptions } from '@nx/next/plugins/with-nx';
import headers from './src/shared/utils/headers';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: WithNxOptions = {
  experimental: {
    viewTransition: true,
  },

  headers,
  images: {
    remotePatterns: [
      {
        hostname: 'nr2f1.github.io',
        pathname: '/website/**',
        protocol: 'https',
      },
      {
        hostname: 'images.ctfassets.net',
        pathname: '/9j9d6tsmuyzl/**',
        protocol: 'https',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: isDev,
    },
  },
  poweredByHeader: false,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  turbopack: {
    resolveAlias: {
      '@app/*': 'website/src/app/*',
      '@components/*': 'website/src/components/*',
      '@config/*': 'website/src/config/*',
      '@graphql/*': 'website/src/graphql/*',
      '@i18n/*': 'website/src/i18n/*',
      '@models/*': 'website/src/models/*',
      '@routes/*': 'website/src/routes/*',
      '@services/*': 'website/src/services/*',
      '@shared/*': 'website/src/shared/*',
      '@styles/*': 'website/src/styles/*',
      '@tests/*': 'website/src/tests/*',
    },
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
