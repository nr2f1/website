import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';

export const { getClient } = registerApolloClient(() => {
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
