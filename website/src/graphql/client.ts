import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

const isDev = process.env.NODE_ENV !== 'production';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Banner: {
          merge(existing, incoming) {
            // If no existing data, just return the incoming
            if (!existing) {
              return incoming;
            }
            // Create a new object by merging existing and incoming
            const merged = { ...existing, ...incoming };

            return merged;
          },
        },
      },
    }),
    link: new HttpLink({
      uri: CONTENTUL_GRAPHQL_API,
      headers: {
        Authorization,
      },
    }),
  });
});

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}
