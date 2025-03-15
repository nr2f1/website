# NR2F1 Foundation Website

## Description

This is the source code for the website of the NR2F1 Foundation, a non-profit organisation dedicated to helping families living with rare variants of the Nr2f1 gene.

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

This is a monorepo, and we have the following projects:

- [website](./website/readme.md): built using [Next.js](https://nextjs.org/), a [React](https://react.dev/) framework. It uses [TypeScript](https://www.typescriptlang.org/) for type-checking, [Sass](https://sass-lang.com/) for styling, [Contenful](https://www.contentful.com/) as a headless CMS, [Give Butter](https://givebutter.com/) for donations, and [Vercel](https://vercel.com) for deployment.
- [website-assets](./website-assets/readme.md): to keep the costs as low as possible, the website assets are stored in this NX project. This way, the assets are deployed to GitHub pages (https://nr2f1.github.io/website/) and can be used in the website

## Development

### First timer

We wrote some guidance for first-time contributors [check it out](https://github.com/nr2f1/website/blob/main/CONTRIBUTING.md).

Our backlog is tracked as GitHub issues; feel free to [check them out](https://github.com/nr2f1/website/issues).

We are following conventional commits and semantic versioning for the project.

### How to install

1. Clone the repository

```sh
git clone git@github.com:nr2f1/website.git
```

2. Install dependencies

```sh
pnpm install
```

3. Copy the `.env.example` file in the **website** folder to `.env` and fill in the environment variables

```sh
cat ./website/.env.example > ./website/.env
```

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

### End-to-end tests

```sh
pnpm nx e2e website
```

### How to deploy

We are using conventional commits and semantic versioning for the project. The deployment process is described in the [Deployment](./docs/development/deployment/readme.md) documentation.
