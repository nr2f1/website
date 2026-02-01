import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import {
  registerApolloClient,
} from '@apollo/client-integration-nextjs';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';
import possibleTypesQuery from "./posible-types.json";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from "@apollo/client/core";
import { RetryLink } from "@apollo/client/link/retry";
 import { ServerError } from "@apollo/client/errors";

const isDev = process.env.NODE_ENV !== 'production';


const possibleTypes = possibleTypesQuery.data.__schema.types.reduce((acc, supertype) => {
  if (supertype.possibleTypes) {
    acc[supertype.name] = supertype.possibleTypes.map(
      (subtype) => subtype.name
    );
  }
  return acc;
}, {} as Record<string, any>);


export const link = ApolloLink.from([
  new RetryLink({
   attempts: (attempt, _operation, error) => {
     // Check if the error is a ServerError instance
     if (!ServerError.is(error)) {
      return false;
     }

     const shouldRetry =
      attempt < 5 &&
      error.statusCode === 429 &&
      !!error.response?.headers?.get('X-Contentful-RateLimit-Reset');

     return shouldRetry;
   },
   delay: (_count, _operation, error) => {
    // Check if the error is a ServerError instance
    if (!ServerError.is(error)) {
     return 0;
    }

    const delay =
     Number(error.response?.headers?.get('X-Contentful-RateLimit-Reset')) *
     1000;
    console.info('CONTENTFUL-RATELIMIT: retry in ', delay, 'ms');
    return delay;
   },
  }),
  new HttpLink({
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
