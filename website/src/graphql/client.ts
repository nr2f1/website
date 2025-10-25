import { createHttpLink, from, HttpLink } from '@apollo/client';
import { RetryLink } from "@apollo/client/link/retry";
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';

const isDev = process.env.NODE_ENV !== 'production';

export const link = from([
 	new RetryLink({
 		attempts: (count, _operation, error) => {
 			const shouldRetry =
 				count < 5 &&
 				error.statusCode === 429 &&
 				error.response?.headers?.get('X-Contentful-RateLimit-Reset');

 			return shouldRetry;
 		},
 		delay: (count, _operation, error) => {
 			const delay =
 				Number(error.response?.headers?.get('X-Contentful-RateLimit-Reset')) *
 				1000;
 			console.info('CONTENTFUL-RATELIMIT: retry in ', delay, 'ms');
 			return delay;
 		},
 	}),
 	createHttpLink({
 		uri: CONTENTUL_GRAPHQL_API,
 		credentials: 'same-origin',
 		headers: {
  			Authorization
 		},
 	}),
 ]);

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
    link,
  });
});

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}
