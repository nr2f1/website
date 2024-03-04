import { CodegenConfig } from '@graphql-codegen/cli';
import { Authorization, CONTENTUL_GRAPHQL_API } from './utils';

const config: CodegenConfig = {
  schema: {
    [CONTENTUL_GRAPHQL_API]: {
      headers: {
        Authorization,
      },
    },
  },
  documents: ['website/src/graphql/**/*.graphql'],
  generates: {
    'website/src/graphql/types.ts': {
      plugins: ['typescript'],
      overwrite: true,
    },
    'website/src/graphql/': {
      preset: 'near-operation-file',
      overwrite: true,
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withResultType: true,
      },
    },
  },
};

export default config;
