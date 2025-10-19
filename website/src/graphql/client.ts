import { HttpLink } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import { registerApolloClient } from "@apollo/client-integration-nextjs";


import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';

export const isDev = process.env.NODE_ENV !== 'production';



export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      // typePolicies: {
      //   Banner: {
      //     merge(existing, incoming) {
      //       // If no existing data, just return the incoming
      //       if (!existing) {
      //         return incoming;
      //       }
      //       // Create a new object by merging existing and incoming
      //       const merged = { ...existing, ...incoming };

      //       return merged;
      //     },
      //   },
      // },
    }),
    devtools: {
      enabled: isDev,
    },
    link: new HttpLink({
      headers: {
        Authorization,
      },
      uri: CONTENTUL_GRAPHQL_API,
    }),
  });
});

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}
