import { composePlugins, withNx } from '@nx/next';
import type { WithNxOptions } from '@nx/next/plugins/with-nx';

const nextConfig: WithNxOptions = {
  experimental: {
    viewTransition: true,
  },

  async headers() {
    return [
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'index, follow',
          },
        ],
        source: '/(.*)',
      },
      // Block indexing for disallowed paths from robots.txt
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/api/:path*',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/admin/:path*',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/private/:path*',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/_next/:path*',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/:path*.json',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/:path*/opengraph-image:ext*',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/:path*/twitter-image:ext*',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/:path*/icon:ext*',
      },
      {
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
        source: '/:path*/apple-icon:ext*',
      },
    ];
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
