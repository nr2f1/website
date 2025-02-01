import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLatestNewsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  latestNewsTitleId: Types.Scalars['String']['input'];
  latestNewsCtaId: Types.Scalars['String']['input'];
}>;


export type GetLatestNewsQuery = { __typename?: 'Query', title?: { __typename?: 'Heading', content?: string | null } | null, posts?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', title?: string | null, date?: any | null, slug?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, newsletters?: { __typename?: 'NewsletterCollection', items: Array<{ __typename?: 'Newsletter', date?: any | null, newsletterContent?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, cta?: { __typename?: 'Link', href?: string | null, content?: string | null } | null };


export const GetLatestNewsDocument = gql`
    query GetLatestNews($locale: String, $latestNewsTitleId: String!, $latestNewsCtaId: String!) {
  title: heading(id: $latestNewsTitleId, locale: $locale) {
    content
  }
  posts: blogPageCollection(locale: $locale, limit: 6, order: date_DESC) {
    items {
      title
      date
      image {
        url
      }
      slug
    }
  }
  newsletters: newsletterCollection(limit: 6, order: date_DESC) {
    items {
      date
      newsletterContent {
        url
      }
    }
  }
  cta: link(id: $latestNewsCtaId, locale: $locale) {
    href
    content
  }
}
    `;

/**
 * __useGetLatestNewsQuery__
 *
 * To run a query within a React component, call `useGetLatestNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestNewsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      latestNewsTitleId: // value for 'latestNewsTitleId'
 *      latestNewsCtaId: // value for 'latestNewsCtaId'
 *   },
 * });
 */
export function useGetLatestNewsQuery(baseOptions: Apollo.QueryHookOptions<GetLatestNewsQuery, GetLatestNewsQueryVariables> & ({ variables: GetLatestNewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestNewsQuery, GetLatestNewsQueryVariables>(GetLatestNewsDocument, options);
      }
export function useGetLatestNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestNewsQuery, GetLatestNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestNewsQuery, GetLatestNewsQueryVariables>(GetLatestNewsDocument, options);
        }
export function useGetLatestNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLatestNewsQuery, GetLatestNewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLatestNewsQuery, GetLatestNewsQueryVariables>(GetLatestNewsDocument, options);
        }
export type GetLatestNewsQueryHookResult = ReturnType<typeof useGetLatestNewsQuery>;
export type GetLatestNewsLazyQueryHookResult = ReturnType<typeof useGetLatestNewsLazyQuery>;
export type GetLatestNewsSuspenseQueryHookResult = ReturnType<typeof useGetLatestNewsSuspenseQuery>;
export type GetLatestNewsQueryResult = Apollo.QueryResult<GetLatestNewsQuery, GetLatestNewsQueryVariables>;