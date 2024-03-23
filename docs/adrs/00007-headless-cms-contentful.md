# 7. Utilising a Headless CMS and Selecting Contentful as the Provider

Date: 2024-03-23

## Context

This ADR proposes adopting a headless CMS (Content Management System) for managing website content and choosing Contentful as the primary provider.

## Decision

We will implement a headless CMS strategy and utilise Contentful as the chosen provider for managing our website content.

### Alternatives Considered

* Traditional CMS: A traditional CMS combines content management functionalities with a built-in front-end presentation layer, limiting flexibility for custom development. 
* Custom Content Management System: Building a custom CMS from scratch offers full control but requires significant development effort and ongoing maintenance.
* Alternative Headless CMS Providers (Strapi, Prismic): Several headless CMS options exist, each with its own feature set and pricing structure.

## Consequences

Benefits of Headless CMS with Contentful:

- Flexibility: Headless CMS decouples content management from the front-end, allowing for a custom-built user interface and integration with any front-end framework. 
- Scalability: Contentful offers a scalable solution that can adapt to growing content needs. 
- API-driven Content Delivery: Contentful provides a robust API for fetching and managing content within our application.
- Contentful Features: Contentful offers features like content previews, version control, and integrations with various marketing tools.

Drawbacks of Using a Headless CMS and Contentful:

- Learning Curve:  The development team will need to learn the headless CMS approach and Contentful's API.
- Integration Effort: Integrating Contentful with our application requires development effort.
- Vendor Lock-In:  Switching CMS providers in the future might be complex.
- Contentful Pricing:  Contentful has various pricing tiers, so ongoing costs need to be monitored.

