import { HttpLink } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';

import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';

export const isDev = process.env.NODE_ENV !== 'production';

// Create a function to get a new Apollo Client instance
function createApolloClient() {
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
}

// Export a function to get client instance for server components
export const getClient = () => createApolloClient();

// Export a query function for convenience
export const query = async (options: Parameters<ApolloClient['query']>[0]) => {
  const client = getClient();
  return await client.query(options);
};

// Create a simple PreloadQuery fallback component
// In the newer API, PreloadQuery functionality may be handled differently
export const PreloadQuery = ({ children }: { children: any }) => {
  return children;
};

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}
