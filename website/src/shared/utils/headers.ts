import type { NextConfig } from 'next/types';

// External service URLs for CSP policy
const CLOUDFLARE_INSIGHTS = 'https://static.cloudflareinsights.com';
const CONTENTFUL_ASSETS_URL = 'https://assets.ctfassets.net';
const CONTENTFUL_GRAPHQL_URL = 'https://graphql.contentful.com';
const CONTENTFUL_IMAGES_URL = 'https://images.ctfassets.net';
const FACEBOOK_SDK = 'https://connect.facebook.net';
const GIVEBUTTER = 'https://givebutter.com';
const GIVEBUTTER_API = 'https://api.givebutter.com';
const GIVEBUTTER_IMAGES = 'https://givebutter.s3.amazonaws.com';
const GIVEBUTTER_WIDGETS =
  'https://widgets.givebutter.com https://widgets.givebutter.com/widgets.min.js.map';
const GOOGLE_FONTS_API = 'https://fonts.googleapis.com';
const GOOGLE_FONTS_STATIC = 'https://fonts.gstatic.com';
const GOOGLE_MAPS = 'https://maps.googleapis.com';
const GOOGLE_MAPS_STATIC = 'https://maps.gstatic.com';
const GTM_URL = 'https://www.googletagmanager.com';
const POSTHOG = 'https://app.posthog.com';
const SCHEMA_ORG = 'https://schema.org';
const STRIPE_JS = 'https://js.stripe.com';
const STRIPE_NETWORK = 'https://m.stripe.network';
const TURNSTILE = 'https://challenges.cloudflare.com';
const YOUTUBE_WWW = 'https://www.youtube.com';
const YOUTUBE_NO_WWW = 'https://youtube.com';

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
          key: 'Content-Security-Policy',
          value: [
            // Allow resources from same origin by default
            `default-src 'self'`,
            // Scripts: Self, inline, eval, and third-party services
            `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GTM_URL} ${GIVEBUTTER_WIDGETS} ${FACEBOOK_SDK} ${CLOUDFLARE_INSIGHTS} ${STRIPE_JS} ${STRIPE_NETWORK} ${TURNSTILE} ${POSTHOG} https://vercel.live`,
            // Styles: Self, inline, Google Fonts API, Vercel Live
            `style-src 'self' 'unsafe-inline' ${GOOGLE_FONTS_API} https://vercel.live`,
            // Images: Self, blob/data URIs, and all third-party image sources
            `img-src 'self' blob: data: ${GTM_URL} ${CONTENTFUL_IMAGES_URL} ${CONTENTFUL_ASSETS_URL} ${GIVEBUTTER_IMAGES} ${GIVEBUTTER} ${GOOGLE_MAPS_STATIC} https://*.googlesyndication.com https://vercel.live https://vercel.com`,
            // Fonts: Self, Google Fonts, Vercel assets
            `font-src 'self' ${GOOGLE_FONTS_STATIC} https://vercel.live https://assets.vercel.com`,
            // Media: Self, Contentful assets, Givebutter
            `media-src 'self' ${CONTENTFUL_IMAGES_URL} ${CONTENTFUL_ASSETS_URL} ${GIVEBUTTER}`,
            // Prevent embedding in frames except for trusted sources
            `frame-ancestors 'self'`,
            // Frames/iframes: Self and trusted third-party services
            `frame-src 'self' ${GTM_URL} ${GIVEBUTTER} ${STRIPE_JS} ${STRIPE_NETWORK} ${TURNSTILE} https://vercel.live ${YOUTUBE_WWW} ${YOUTUBE_NO_WWW} ${CONTENTFUL_ASSETS_URL}`,
            // Network requests: APIs and analytics
            `connect-src 'self' ${GTM_URL} ${CONTENTFUL_GRAPHQL_URL} ${GIVEBUTTER_API} ${GIVEBUTTER} ${SCHEMA_ORG} ${FACEBOOK_SDK} ${CLOUDFLARE_INSIGHTS} ${GOOGLE_MAPS} ${STRIPE_JS} ${STRIPE_NETWORK} ${POSTHOG} https://*.google-analytics.com https://*.googlesyndication.com https://vercel.live ${CONTENTFUL_ASSETS_URL} ${GIVEBUTTER_WIDGETS}`,
            // Form submissions: Self and trusted payment processors
            `form-action 'self' ${GIVEBUTTER} ${STRIPE_JS}`,
            // Block plugins and embeds except for trusted sources
            `object-src 'self' ${CONTENTFUL_IMAGES_URL} ${CONTENTFUL_ASSETS_URL}`,
            // Restrict base tag
            `base-uri 'self'`,
            // PWA manifest
            `manifest-src 'self'`,
            // Service workers
            `worker-src 'self'`,
            // Child sources for frames and workers
            `child-src 'self' ${GIVEBUTTER} ${STRIPE_JS} ${STRIPE_NETWORK}`,
            // Upgrade HTTP to HTTPS automatically
            'upgrade-insecure-requests',
          ].join('; '),
        },
      ],
      source: '/(.*)',
    },
  ];
};

export default headers;
