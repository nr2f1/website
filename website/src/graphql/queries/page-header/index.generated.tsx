import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPageHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetPageHeaderQuery = { __typename?: 'Query', pageHeader?: { __typename?: 'PageHeader', title?: string | null, sectionTitle?: string | null, lastUpdated?: any | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null };

export type GetBlogPageHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetBlogPageHeaderQuery = { __typename?: 'Query', pageHeader?: { __typename?: 'PageHeader', title?: string | null, sectionTitle?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null, lastUpdated?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', date?: any | null } | null> } | null };


export const GetPageHeaderDocument = gql`
    query GetPageHeader($id: String!, $locale: String) {
  pageHeader(id: $id, locale: $locale) {
    title
    sectionTitle
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
export function useGetPageHeaderQuery(baseOptions: Apollo.QueryHookOptions<GetPageHeaderQuery, GetPageHeaderQueryVariables> & ({ variables: GetPageHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageHeaderQuery, GetPageHeaderQueryVariables>(GetPageHeaderDocument, options);
      }
export function useGetPageHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageHeaderQuery, GetPageHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageHeaderQuery, GetPageHeaderQueryVariables>(GetPageHeaderDocument, options);
        }
export function useGetPageHeaderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPageHeaderQuery, GetPageHeaderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPageHeaderQuery, GetPageHeaderQueryVariables>(GetPageHeaderDocument, options);
        }
export type GetPageHeaderQueryHookResult = ReturnType<typeof useGetPageHeaderQuery>;
export type GetPageHeaderLazyQueryHookResult = ReturnType<typeof useGetPageHeaderLazyQuery>;
export type GetPageHeaderSuspenseQueryHookResult = ReturnType<typeof useGetPageHeaderSuspenseQuery>;
export type GetPageHeaderQueryResult = Apollo.QueryResult<GetPageHeaderQuery, GetPageHeaderQueryVariables>;
export const GetBlogPageHeaderDocument = gql`
    query GetBlogPageHeader($id: String!, $locale: String) {
  pageHeader(id: $id, locale: $locale) {
    title
    sectionTitle
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
export function useGetBlogPageHeaderQuery(baseOptions: Apollo.QueryHookOptions<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables> & ({ variables: GetBlogPageHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>(GetBlogPageHeaderDocument, options);
      }
export function useGetBlogPageHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>(GetBlogPageHeaderDocument, options);
        }
export function useGetBlogPageHeaderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>(GetBlogPageHeaderDocument, options);
        }
export type GetBlogPageHeaderQueryHookResult = ReturnType<typeof useGetBlogPageHeaderQuery>;
export type GetBlogPageHeaderLazyQueryHookResult = ReturnType<typeof useGetBlogPageHeaderLazyQuery>;
export type GetBlogPageHeaderSuspenseQueryHookResult = ReturnType<typeof useGetBlogPageHeaderSuspenseQuery>;
export type GetBlogPageHeaderQueryResult = Apollo.QueryResult<GetBlogPageHeaderQuery, GetBlogPageHeaderQueryVariables>;