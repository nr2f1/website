import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetNewsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  limit: Types.Scalars['Int']['input'];
  skip: Types.Scalars['Int']['input'];
}>;


export type GetNewsQuery = { __typename?: 'Query', posts?: { __typename?: 'BlogPageCollection', total: number, items: Array<{ __typename?: 'BlogPage', title?: string | null, slug?: string | null, date?: any | null, excerpt?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, newsletters?: { __typename?: 'NewsletterCollection', total: number, items: Array<{ __typename?: 'Newsletter', date?: any | null, newsletterContent?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetNewsDocument = gql`
    query GetNews($locale: String, $limit: Int!, $skip: Int!) {
  posts: blogPageCollection(
    order: date_DESC
    locale: $locale
    limit: $limit
    skip: $skip
  ) {
    total
    items {
      title
      slug
      date
      excerpt
      image {
        url
      }
    }
  }
  newsletters: newsletterCollection(order: date_DESC) {
    total
    items {
      date
      newsletterContent {
        url
      }
    }
  }
}
    `;

/**
 * __useGetNewsQuery__
 *
 * To run a query within a React component, call `useGetNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetNewsQuery(baseOptions: Apollo.QueryHookOptions<GetNewsQuery, GetNewsQueryVariables> & ({ variables: GetNewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
      }
export function useGetNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
        }
export function useGetNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
        }
export type GetNewsQueryHookResult = ReturnType<typeof useGetNewsQuery>;
export type GetNewsLazyQueryHookResult = ReturnType<typeof useGetNewsLazyQuery>;
export type GetNewsSuspenseQueryHookResult = ReturnType<typeof useGetNewsSuspenseQuery>;
export type GetNewsQueryResult = Apollo.QueryResult<GetNewsQuery, GetNewsQueryVariables>;