import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: CONTENTUL_GRAPHQL_API,
      headers: {
        Authorization,
      },
    }),
  });
});
