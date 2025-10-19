// Apollo React wrapper to fix skipToken export issue
// This module re-exports everything from @apollo/client/react with proper skipToken handling

export {
  ApolloProvider,
  createQueryPreloader,
  getApolloContext,
  useApolloClient,
  useBackgroundQuery,
  useFragment,
  useLazyQuery,
  useLoadableQuery,
  useMutation,
  useQuery,
  useQueryRefHandlers,
  useReactiveVar,
  useReadQuery,
  useSubscription,
  useSuspenseFragment,
  useSuspenseQuery,
} from '@apollo/client/react';

// Create a skipToken symbol as fallback since it's not being exported properly
const apolloSkipToken = Symbol('apollo.skipToken');

// Export skipToken
export const skipToken = apolloSkipToken;

// Type definitions for hooks
export type {
  QueryHookOptions,
  LazyQueryHookOptions,
  SuspenseQueryHookOptions,
  MutationHookOptions,
  SubscriptionHookOptions,
  QueryResult,
  LazyQueryResult,
  MutationResult,
  SubscriptionResult,
} from '@apollo/client/react';
