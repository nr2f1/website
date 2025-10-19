import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPageLatestNewsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetPageLatestNewsQuery = { __typename?: 'Query', posts?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', title?: string | null, date?: any | null, slug?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, newsletters?: { __typename?: 'NewsletterCollection', items: Array<{ __typename?: 'Newsletter', date?: any | null, title?: string | null, newsletterContent?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, podcasts?: { __typename?: 'PodcastCollection', items: Array<{ __typename?: 'Podcast', title?: string | null, date?: any | null, url?: string | null } | null> } | null };


export const GetPageLatestNewsDocument = gql`
    query GetPageLatestNews($locale: String) {
  posts: blogPageCollection(locale: $locale, limit: 3, order: date_DESC) {
    items {
      title
      date
      image {
        url
      }
      slug
    }
  }
  newsletters: newsletterCollection(locale: $locale, limit: 3, order: date_DESC) {
    items {
      date
      title
      newsletterContent {
        url
      }
    }
  }
  podcasts: podcastCollection(locale: $locale, limit: 3, order: date_ASC) {
    items {
      title
      date
      url
    }
  }
}
    `;

/**
 * __useGetPageLatestNewsQuery__
 *
 * To run a query within a React component, call `useGetPageLatestNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageLatestNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageLatestNewsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetPageLatestNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetPageLatestNewsQuery, GetPageLatestNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageLatestNewsQuery, GetPageLatestNewsQueryVariables>(GetPageLatestNewsDocument, options);
      }
export function useGetPageLatestNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageLatestNewsQuery, GetPageLatestNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageLatestNewsQuery, GetPageLatestNewsQueryVariables>(GetPageLatestNewsDocument, options);
        }
export function useGetPageLatestNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPageLatestNewsQuery, GetPageLatestNewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPageLatestNewsQuery, GetPageLatestNewsQueryVariables>(GetPageLatestNewsDocument, options);
        }
export type GetPageLatestNewsQueryHookResult = ReturnType<typeof useGetPageLatestNewsQuery>;
export type GetPageLatestNewsLazyQueryHookResult = ReturnType<typeof useGetPageLatestNewsLazyQuery>;
export type GetPageLatestNewsSuspenseQueryHookResult = ReturnType<typeof useGetPageLatestNewsSuspenseQuery>;
export type GetPageLatestNewsQueryResult = Apollo.QueryResult<GetPageLatestNewsQuery, GetPageLatestNewsQueryVariables>;