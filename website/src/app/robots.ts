import { BASE_URL } from '@routes/index';
import type { MetadataRoute } from 'next';

/*
AI Bot Protection**
- Blocks major AI training bots (GPTBot, ChatGPT-User, CCBot, etc.)
- Protects your content from being used for AI training without permission
- Important for medical content where accuracy and attribution matter
*/

export default function robots(): MetadataRoute.Robots {
  return {
    host: BASE_URL,
    rules: [
      {
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/*.json$',
          '/*/opengraph-image*',
          '/*/twitter-image*',
          '/*/icon*',
          '/*/apple-icon*',
        ],
        userAgent: '*',
      },
      {
        disallow: '/',
        userAgent: 'GPTBot',
      },
      {
        disallow: '/',
        userAgent: 'ChatGPT-User',
      },
      {
        disallow: '/',
        userAgent: 'CCBot',
      },
      {
        disallow: '/',
        userAgent: 'anthropic-ai',
      },
      {
        disallow: '/',
        userAgent: 'Claude-Web',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
