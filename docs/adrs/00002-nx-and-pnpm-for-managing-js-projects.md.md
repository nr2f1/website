# 2. Nx and pnpm for managing projects

Date: 2024-03-05

## Status

Accepted

## Context

Applications will be written in TypeScript.

TS libraries generally do not ship TypeScript source code to clients.

Instead, the expectation is that developers will compile TS to JavaScript and then ship JS to an NPM package repository.

In our monorepo, however, rather than using an NPM package repository, our libraries depend directly on the TS source code.

However, because Node package managers generally expect to be shipped JS rather than TS, we need _some tool_ to manage to build TS dependencies to pull in the compiled artefacts.

We'll also need a JS package manager that provides suitable monorepo support.

This ensures that the same version of a shared dependency is used consistently across our projects.

## Decision

We will use [Nx](https://nx.dev/) for managing builds of our TypeScript projects and [PnPM](https://pnpm.io/) as our package manager.

## Alternatives Considered

- `turborepo` was considered. However, it is a much more powerful and customisable tool, and it didn't seem like we needed its power.
- `Rush` was also considered, but it comes with the requirement that you list every package in the repo in a top-level `rush.json` file.
  Maintaining such a file will quickly become painful when doing docker builds on only a subset of the repository.

## Consequences

Nx is smart about rebuilding what is needed, which should be helpful on developers' machines.

We will need to document the responsibilities of each tool, so it is clear which tool should be used for what purpose.

Since `pnpm` is aware of the JS dependencies of all the projects in the repo, care will be needed to install what is necessary in each CI run.
