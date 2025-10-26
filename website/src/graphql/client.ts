import { createHttpLink, from } from '@apollo/client';
import { RetryLink } from "@apollo/client/link/retry";
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';
import possibleTypesQuery from "./posible-types.json";

const isDev = process.env.NODE_ENV !== 'production';


const possibleTypes = possibleTypesQuery.data.__schema.types.reduce((acc, supertype) => {
  if (supertype.possibleTypes) {
    acc[supertype.name] = supertype.possibleTypes.map(
      (subtype) => subtype.name
    );
  }
  return acc;
}, {} as Record<string, any>);


export const link = from([
 	new RetryLink({
 		attempts: (count, _operation, error) => {
 			const shouldRetry =
 				count < 5 &&
 				error.statusCode === 429 &&
 				error.response?.headers?.get('X-Contentful-RateLimit-Reset');

 			return shouldRetry;
 		},
 		delay: (_count, _operation, error) => {
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
      possibleTypes,
    }),
    link,
  });
});

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}
