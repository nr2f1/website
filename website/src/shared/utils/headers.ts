import type { NextConfig } from 'next/types';

const GTM_URL = 'https://www.googletagmanager.com';
const CONTENTFUL_ASSETS_URL = 'https://images.ctfassets.net';
const CONTENTFUL_GRAPHQL_URL = 'https://graphql.contentful.com';

const headers: NextConfig['headers'] = async () => {
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
    {
      headers: [
        {
          key: 'Content-Security-Policy',
          value: [
            `default-src 'self'`,
            `script-src 'self' 'unsafe-inline' ${GTM_URL} https://vercel.live`,
            `style-src 'self' 'unsafe-inline' https://vercel.live`,
            `img-src 'self' blob: data: ${GTM_URL} https://*.googlesyndication.com https://vercel.live https://vercel.com`,
            `font-src 'self' https://vercel.live https://assets.vercel.com https://fonts.gstatic.com`,
            `media-src 'self' ${CONTENTFUL_ASSETS_URL}`,
            `frame-ancestors 'self' ${CONTENTFUL_ASSETS_URL}`,
            `frame-src 'self' ${GTM_URL} https://vercel.live`,
            `connect-src 'self' ${GTM_URL} https://*.google-analytics.com https://*.googlesyndication.com`,
            `form-action 'self'`,
            `object-src 'none'`,
            `base-uri 'self'`,
          ].join(';'),
        },
      ],
      source: '/(.*)',
    },
  ];
};

export default headers;
