# Website

## Description

A website for the NR2F1 Foundation, a non-profit organization dedicated to helping families living with rare variants on the Nr2f1 gene.

These variants cause a neurodevelopmental disorder called [Bosch-Boonstra-Schaaf optic atrophy syndrome](https://en.wikipedia.org/wiki/Bosch%E2%80%93Boonstra%E2%80%93Schaaf_optic_atrophy_syndrome) (BBSOAS).

## Goals

- Raise awareness of the NR2F1 Foundation and the work they do
- Provide information about the NR2F1 gene and BBSOAS
- Provide resources for families living with BBSOAS
- Guide families on how to register in the biorepository, which is a database of information about people with BBSOAS for research purposes
- Provide resources for healthcare professionals, researchers, and pharmaceutical companies
- Provide a blog for the NR2F1 Foundation to share updates and stories
- Provide a donation page for people to support the NR2F1 Foundation

To accomplish these goals, the website should have the following features:

- Should be easy to maintain and update
- Is accessible to all users
- Is responsive and works well on all devices
- Handles internationalisation and localisation
- Is SEO-friendly

## Project organisation

This is a monorepo and we have the following projects:

- [website](./website/readme.md): built using [Next.js](https://nextjs.org/), a [React](https://react.dev/) framework. It uses [TypeScript](https://www.typescriptlang.org/) for type-checking, [Sass](https://sass-lang.com/) for styling, [Contenful](https://www.contentful.com/) as a headless CMS, [Give Butter](https://givebutter.com/) for donations, and [Vercel](https://vercel.com) for deployment.

## Development

Our backlog is tracked as GitHub issues, feel free to [check them out](https://github.com/nr2f1/website/issues).

We are following conventional commits and semantic versioning for the project.

### Local server

```sh
pnpm nx dev website
```

### Format

```sh
pnpm biome format --write <PATH>
```

### Lint

```sh
pnpm biome lint  <PATH>
```

### Build

```sh
pnpm nx build website
```

## Deployment

The website is deployed to Vercel and the process is documented here [Deployment](../docs/development/deployment/readme.md)
