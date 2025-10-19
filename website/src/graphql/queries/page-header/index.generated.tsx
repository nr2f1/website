import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetPageHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetPageHeaderQuery = { __typename?: 'Query', pageHeader?: { __typename?: 'PageHeader', title?: string | null, lastUpdated?: any | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null };

export type GetBlogPageHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetBlogPageHeaderQuery = { __typename?: 'Query', pageHeader?: { __typename?: 'PageHeader', title?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null, lastUpdated?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', date?: any | null } | null> } | null };

export type GetPodcastPageHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetPodcastPageHeaderQuery = { __typename?: 'Query', pageHeader?: { __typename?: 'PageHeader', title?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null, lastUpdated?: { __typename?: 'PodcastCollection', items: Array<{ __typename?: 'Podcast', date?: any | null } | null> } | null };

export type GetNewsletterPageHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetNewsletterPageHeaderQuery = { __typename?: 'Query', pageHeader?: { __typename?: 'PageHeader', title?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null, lastUpdated?: { __typename?: 'NewsletterCollection', items: Array<{ __typename?: 'Newsletter', date?: any | null } | null> } | null };


export const GetPageHeaderDocument = gql`
    query GetPageHeader($id: String!, $locale: String) {
  pageHeader(id: $id, locale: $locale) {
    title
    lastUpdated
    image {
      url
    }
  }
}
    `;

/**
 * __useGetPageHeaderQuery__
 *
 * To run a query within a React component, call `useGetPageHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageHeaderQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetPageHeaderQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPageHeaderQuery, GetPageHeaderQueryVariables> & ({ variables: GetPageHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPageHeaderQuery, GetPageHeaderQueryVariables>(GetPageHeaderDocument, options);
      }
export function useGetPageHeaderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPageHeaderQuery, GetPageHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPageHeaderQuery, GetPageHeaderQueryVariables>(GetPageHeaderDocument, options);
        }
export function useGetPageHeaderSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetPageHeaderQuery, GetPageHeaderQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetPageHeaderQuery, GetPageHeaderQueryVariables>(GetPageHeaderDocument, options);
        }
export type GetPageHeaderQueryHookResult = ReturnType<typeof useGetPageHeaderQuery>;
export type GetPageHeaderLazyQueryHookResult = ReturnType<typeof useGetPageHeaderLazyQuery>;
export type GetPageHeaderSuspenseQueryHookResult = ReturnType<typeof useGetPageHeaderSuspenseQuery>;
export type GetPageHeaderQueryResult = ApolloReactCommon.QueryResult<GetPageHeaderQuery, GetPageHeaderQueryVariables>;
export const GetBlogPageHeaderDocument = gql`
    query GetBlogPageHeader($id: String!, $locale: String) {
  pageHeader(id: $id, locale: $locale) {
    title
    image {
      url
    }
  }
  lastUpdated: blogPageCollection(limit: 1, order: date_DESC) {
    items {
      date
    }
  }
}
    `;

/**
 * __useGetBlogPageHeaderQuery__
 *
 * To run a query within a React component, call `useGetBlogPageHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogPageHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogPageHeaderQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetBlogPageHeaderQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables> & ({ variables: GetBlogPageHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>(GetBlogPageHeaderDocument, options);
      }
export function useGetBlogPageHeaderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>(GetBlogPageHeaderDocument, options);
        }
export function useGetBlogPageHeaderSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>(GetBlogPageHeaderDocument, options);
        }
export type GetBlogPageHeaderQueryHookResult = ReturnType<typeof useGetBlogPageHeaderQuery>;
export type GetBlogPageHeaderLazyQueryHookResult = ReturnType<typeof useGetBlogPageHeaderLazyQuery>;
export type GetBlogPageHeaderSuspenseQueryHookResult = ReturnType<typeof useGetBlogPageHeaderSuspenseQuery>;
export type GetBlogPageHeaderQueryResult = ApolloReactCommon.QueryResult<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>;
export const GetPodcastPageHeaderDocument = gql`
    query GetPodcastPageHeader($id: String!, $locale: String) {
  pageHeader(id: $id, locale: $locale) {
    title
    image {
      url
    }
  }
  lastUpdated: podcastCollection(limit: 1, order: date_DESC) {
    items {
      date
    }
  }
}
    `;

/**
 * __useGetPodcastPageHeaderQuery__
 *
 * To run a query within a React component, call `useGetPodcastPageHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPodcastPageHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPodcastPageHeaderQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetPodcastPageHeaderQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPodcastPageHeaderQuery, GetPodcastPageHeaderQueryVariables> & ({ variables: GetPodcastPageHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPodcastPageHeaderQuery, GetPodcastPageHeaderQueryVariables>(GetPodcastPageHeaderDocument, options);
      }
export function useGetPodcastPageHeaderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPodcastPageHeaderQuery, GetPodcastPageHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPodcastPageHeaderQuery, GetPodcastPageHeaderQueryVariables>(GetPodcastPageHeaderDocument, options);
        }
export function useGetPodcastPageHeaderSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetPodcastPageHeaderQuery, GetPodcastPageHeaderQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetPodcastPageHeaderQuery, GetPodcastPageHeaderQueryVariables>(GetPodcastPageHeaderDocument, options);
        }
export type GetPodcastPageHeaderQueryHookResult = ReturnType<typeof useGetPodcastPageHeaderQuery>;
export type GetPodcastPageHeaderLazyQueryHookResult = ReturnType<typeof useGetPodcastPageHeaderLazyQuery>;
export type GetPodcastPageHeaderSuspenseQueryHookResult = ReturnType<typeof useGetPodcastPageHeaderSuspenseQuery>;
export type GetPodcastPageHeaderQueryResult = ApolloReactCommon.QueryResult<GetPodcastPageHeaderQuery, GetPodcastPageHeaderQueryVariables>;
export const GetNewsletterPageHeaderDocument = gql`
    query GetNewsletterPageHeader($id: String!, $locale: String) {
  pageHeader(id: $id, locale: $locale) {
    title
    image {
      url
    }
  }
  lastUpdated: newsletterCollection(limit: 1, order: date_DESC) {
    items {
      date
    }
  }
}
    `;

/**
 * __useGetNewsletterPageHeaderQuery__
 *
 * To run a query within a React component, call `useGetNewsletterPageHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsletterPageHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsletterPageHeaderQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetNewsletterPageHeaderQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetNewsletterPageHeaderQuery, GetNewsletterPageHeaderQueryVariables> & ({ variables: GetNewsletterPageHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetNewsletterPageHeaderQuery, GetNewsletterPageHeaderQueryVariables>(GetNewsletterPageHeaderDocument, options);
      }
export function useGetNewsletterPageHeaderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetNewsletterPageHeaderQuery, GetNewsletterPageHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetNewsletterPageHeaderQuery, GetNewsletterPageHeaderQueryVariables>(GetNewsletterPageHeaderDocument, options);
        }
export function useGetNewsletterPageHeaderSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetNewsletterPageHeaderQuery, GetNewsletterPageHeaderQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetNewsletterPageHeaderQuery, GetNewsletterPageHeaderQueryVariables>(GetNewsletterPageHeaderDocument, options);
        }
export type GetNewsletterPageHeaderQueryHookResult = ReturnType<typeof useGetNewsletterPageHeaderQuery>;
export type GetNewsletterPageHeaderLazyQueryHookResult = ReturnType<typeof useGetNewsletterPageHeaderLazyQuery>;
export type GetNewsletterPageHeaderSuspenseQueryHookResult = ReturnType<typeof useGetNewsletterPageHeaderSuspenseQuery>;
export type GetNewsletterPageHeaderQueryResult = ApolloReactCommon.QueryResult<GetNewsletterPageHeaderQuery, GetNewsletterPageHeaderQueryVariables>;