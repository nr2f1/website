## 8. Using Next.js Middleware for Content Internationalisation with Contentful

Date: 2024-03-23

## Context

This ADR explores utilizing Next.js middleware to determine content internationalisation and localisation based on Contentful's localization features and user preferences. Our website needs to support multiple languages to cater to a diverse audience. We aim to provide a seamless experience for users by serving content in their preferred language.

## Decision

We will implement Next.js middleware to leverage Contentful's localisation functionalities and dynamically serve localised content to users based on their preferred language.

Alternatives Considered

- Static Routing by Locale: Define separate routes for each supported locale (e.g., /en/about, /fr/about). This approach requires manual configuration and maintenance for each additional language.
- Client-side Detection: Use JavaScript to detect user language preferences and dynamically fetch localized content. This approach might introduce performance penalties and can be less SEO-friendly.

## Consequences

Benefits of Using Next.js Middleware with Contentful:

- Improved User Experience: Users automatically receive content in their preferred language, enhancing user experience and engagement.
- SEO Benefits: Search engines can better understand the website's content structure for different locales, potentially improving search engine ranking.
- Content Management Efficiency: Content creators can manage localised content within Contentful, streamlining the process.
- Next.js Middleware Advantages: Middleware allows for server-side logic before rendering, ensuring a faster initial page load and optimized SEO.

Drawbacks of Using Next.js Middleware with Contentful:

- Development Complexity: Implementing the middleware logic requires additional development effort.
- Contentful Setup: Contentful needs proper configuration for managing localized content effectively.

