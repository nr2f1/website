import { composePlugins, withNx } from '@nx/next';
import type { WithNxOptions } from '@nx/next/plugins/with-nx';

const nextConfig: WithNxOptions = {
  experimental: {
    viewTransition: true,
  },
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
      fullUrl: true,
    },
  },
  poweredByHeader: false,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
