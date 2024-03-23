# 7. Using Vercel for Hosting and Preview Releases

Date: 2024-03-23

## Context

This ADR explores adopting Vercel as the primary hosting platform for our application. Vercel also offers built-in features for previewing deployments.

## Decision

We will adopt Vercel as the primary hosting platform for our application and leverage its preview deployment feature.

Alternatives Considered

- Cloud Platforms (AWS, GCP, Azure): These platforms offer various hosting options, but may require more manual configuration for deployments and potentially lack built-in preview functionality.

## Consequences

Benefits of Using Vercel:

- Simplified Deployment: Vercel offers streamlined deployment processes, potentially reducing deployment overhead.
- Scalability: Vercel's infrastructure automatically scales to handle traffic spikes.
- Integrated Preview Deployments: Vercel's built-in preview deployment feature allows for easy testing and sharing of development progress.
- Global CDN: Vercel provides a global Content Delivery Network (CDN) for faster content delivery.

Potential Drawbacks:

- Vendor Lock-In:  Switching hosting providers in the future might be more complex.
- Pricing: Vercel's free tier might have limitations, requiring paid plans for certain workloads.

