import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';
import { cacheLife, cacheTag } from 'next/cache';
import possibleTypesQuery from "./posible-types.json";
import {
  HttpLink,
  ApolloLink
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";

const isDev = process.env.NODE_ENV !== 'production';

const possibleTypes = possibleTypesQuery.data.__schema.types.reduce((acc, supertype) => {
  if (supertype.possibleTypes) {
    acc[supertype.name] = supertype.possibleTypes.map(
      (subtype) => subtype.name
    );
  }
  return acc;
}, {} as Record<string, any>);

const link = ApolloLink.from([
  new RetryLink({
   attempts: (attempt, _operation, error) => {
     const statusCode = (error as any)?.statusCode;
     const shouldRetry =
      attempt < 5 &&
      statusCode === 429 &&
      !!(error as any)?.response?.headers?.get('X-Contentful-RateLimit-Reset');

     return shouldRetry;
   },
   delay: (_count, _operation, error) => {
    const delay =
     Number((error as any)?.response?.headers?.get('X-Contentful-RateLimit-Reset')) *
     1000;
    return delay || 0;
   },
  }),
  new HttpLink({
   uri: CONTENTUL_GRAPHQL_API,
   headers: {
     Authorization
   },
  }),
 ]);

const { getClient: getApolloClient, PreloadQuery } = registerApolloClient(
  () => {
    return new ApolloClient({
      cache: new InMemoryCache({
        typePolicies: {
          Banner: {
            merge(existing, incoming) {
              if (!existing) return incoming;
              return { ...existing, ...incoming };
            },
          },
        },
        possibleTypes,
      }),
      link,
    });
  },
);

type ContentfulQueryFn = ReturnType<typeof getApolloClient>['query'];

// Caches every Contentful read across requests (Cache Components).
// Editors' changes appear within the 'hours' cacheLife profile, or
// immediately once a Contentful publish webhook calls revalidateTag.
const cachedQuery = async (options: unknown) => {
  'use cache';
  cacheLife('hours');
  cacheTag('contentful');
  const { data, error } = await getApolloClient().query(
    options as Parameters<ContentfulQueryFn>[0],
  );
  return { data, error };
};

export const getClient = () => ({
  query: cachedQuery as ContentfulQueryFn,
});

export { PreloadQuery };

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}
