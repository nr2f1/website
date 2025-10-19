import type { CodegenConfig } from '@graphql-codegen/cli';
import { Authorization, CONTENTUL_GRAPHQL_API } from './utils';

const config: CodegenConfig = {
  documents: ['website/src/graphql/**/*.graphql'],
  generates: {
    'website/src/graphql/': {
      config: {
        apolloReactCommonImportFrom: '@apollo/client/react',
        apolloReactHooksImportFrom: '@apollo/client/react',
        reactApolloVersion: 3,
        withResultType: true,
      },
      overwrite: true,
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
        extension: '.generated.tsx',
      },
    },
    'website/src/graphql/types.ts': {
      overwrite: true,
      plugins: ['typescript'],
    },
  },
  schema: {
    [CONTENTUL_GRAPHQL_API]: {
      headers: {
        Authorization,
      },
    },
  },
};

export default config;
