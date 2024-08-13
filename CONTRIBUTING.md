# How to contribute

We are really glad you're reading this, because we need volunteer developers to help this project come to fruition.

We want you working on things you're excited about.

Here are some important resources:

- [Current NR2F1 website](https://www.nr2f1.org)
- Our [project goals](./readme.md) described in the README
- Figma design files for the [NR2F1 website](https://www.figma.com/design/EqbHBTVqqqvkgqeL4GGNQn/NR2F1-website-redesign?node-id=184-1575&m=dev), if you need access please ask to be added to the project by sending an email to [web.admin@nr2f1.org](web.admin@nr2f1.org), or [pedro.martin@red-badger.com](pedro.martin@red-badger.com)
- [Our Code of Conduct](./CODE_OF_CONDUCT.md)
- [Some issues or bugs that you can help](https://github.com/nr2f1/website/issues)

## Testing

## Unit tests

We are using vitest with testing library for unit tests. To run the tests, you can use the following command:

```bash
pnpm nx test website
```

## End-to-end tests

Todo

## Submitting changes

We use conventional commits to manage our commits. Please follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format when writing your commit messages.

Please send a [GitHub Pull Request](https://github.com/nr2f1/website/compare?expand=1) with a clear list of what you've done.

When you send a pull request, we will love you forever if you include examples in how to run it.

## Coding conventions

We are using Biome for our code styling. To run the linter, you can use the following command:

```bash
pnpm biome lint
pnpm biome format
```

Thanks,
Pedro Martin, Jessica Morgan, and the NR2F1 team.
