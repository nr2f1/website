import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAllNewsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetAllNewsQuery = { __typename?: 'Query', posts?: { __typename?: 'BlogPageCollection', total: number, items: Array<{ __typename?: 'BlogPage', title?: string | null, date?: any | null, slug?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, newsletters?: { __typename?: 'NewsletterCollection', total: number, items: Array<{ __typename?: 'Newsletter', date?: any | null, title?: string | null, newsletterContent?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, podcasts?: { __typename?: 'PodcastCollection', total: number, items: Array<{ __typename?: 'Podcast', title?: string | null, date?: any | null, url?: string | null } | null> } | null };

export type GetBlogPostsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  limit: Types.Scalars['Int']['input'];
  skip: Types.Scalars['Int']['input'];
}>;


export type GetBlogPostsQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', total: number, items: Array<{ __typename?: 'BlogPage', date?: any | null, title?: string | null, slug?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetPodcastsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  limit: Types.Scalars['Int']['input'];
  skip: Types.Scalars['Int']['input'];
}>;


export type GetPodcastsQuery = { __typename?: 'Query', podcastCollection?: { __typename?: 'PodcastCollection', total: number, items: Array<{ __typename?: 'Podcast', date?: any | null, title?: string | null, url?: string | null } | null> } | null };

export type GetNewslettersQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  limit: Types.Scalars['Int']['input'];
  skip: Types.Scalars['Int']['input'];
}>;


export type GetNewslettersQuery = { __typename?: 'Query', newsletterCollection?: { __typename?: 'NewsletterCollection', total: number, items: Array<{ __typename?: 'Newsletter', date?: any | null, title?: string | null, newsletterContent?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetBlogPostsSlugsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBlogPostsSlugsQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', slug?: string | null, date?: any | null, excerpt?: string | null, title?: string | null } | null> } | null };

export type GetAllBlogPostsForRssQueryVariables = Types.Exact<{
  locale: Types.Scalars['String']['input'];
}>;


export type GetAllBlogPostsForRssQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', date?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetAllNewsDocument = gql`
    query GetAllNews($locale: String) {
  posts: blogPageCollection(locale: $locale, order: date_DESC) {
    total
    items {
      title
      date
      image {
        url
      }
      slug
    }
  }
  newsletters: newsletterCollection(order: date_DESC, locale: $locale) {
    total
    items {
      date
      title
      newsletterContent {
        url
      }
    }
  }
  podcasts: podcastCollection(order: date_ASC, locale: $locale) {
    total
    items {
      title
      date
      url
    }
  }
}
    `;

/**
 * __useGetAllNewsQuery__
 *
 * To run a query within a React component, call `useGetAllNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNewsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetAllNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
      }
export function useGetAllNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
        }
export function useGetAllNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
        }
export type GetAllNewsQueryHookResult = ReturnType<typeof useGetAllNewsQuery>;
export type GetAllNewsLazyQueryHookResult = ReturnType<typeof useGetAllNewsLazyQuery>;
export type GetAllNewsSuspenseQueryHookResult = ReturnType<typeof useGetAllNewsSuspenseQuery>;
export type GetAllNewsQueryResult = Apollo.QueryResult<GetAllNewsQuery, GetAllNewsQueryVariables>;
export const GetBlogPostsDocument = gql`
    query GetBlogPosts($locale: String, $limit: Int!, $skip: Int!) {
  blogPageCollection(locale: $locale, limit: $limit, skip: $skip) {
    total
    items {
      date
      title
      slug
      image {
        url
      }
    }
  }
}
    `;

/**
 * __useGetBlogPostsQuery__
 *
 * To run a query within a React component, call `useGetBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogPostsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetBlogPostsQuery(baseOptions: Apollo.QueryHookOptions<GetBlogPostsQuery, GetBlogPostsQueryVariables> & ({ variables: GetBlogPostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogPostsQuery, GetBlogPostsQueryVariables>(GetBlogPostsDocument, options);
      }
export function useGetBlogPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogPostsQuery, GetBlogPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogPostsQuery, GetBlogPostsQueryVariables>(GetBlogPostsDocument, options);
        }
export function useGetBlogPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBlogPostsQuery, GetBlogPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogPostsQuery, GetBlogPostsQueryVariables>(GetBlogPostsDocument, options);
        }
export type GetBlogPostsQueryHookResult = ReturnType<typeof useGetBlogPostsQuery>;
export type GetBlogPostsLazyQueryHookResult = ReturnType<typeof useGetBlogPostsLazyQuery>;
export type GetBlogPostsSuspenseQueryHookResult = ReturnType<typeof useGetBlogPostsSuspenseQuery>;
export type GetBlogPostsQueryResult = Apollo.QueryResult<GetBlogPostsQuery, GetBlogPostsQueryVariables>;
export const GetPodcastsDocument = gql`
    query GetPodcasts($locale: String, $limit: Int!, $skip: Int!) {
  podcastCollection(locale: $locale, limit: $limit, skip: $skip) {
    total
    items {
      date
      title
      url
    }
  }
}
    `;

/**
 * __useGetPodcastsQuery__
 *
 * To run a query within a React component, call `useGetPodcastsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPodcastsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPodcastsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetPodcastsQuery(baseOptions: Apollo.QueryHookOptions<GetPodcastsQuery, GetPodcastsQueryVariables> & ({ variables: GetPodcastsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPodcastsQuery, GetPodcastsQueryVariables>(GetPodcastsDocument, options);
      }
export function useGetPodcastsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPodcastsQuery, GetPodcastsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPodcastsQuery, GetPodcastsQueryVariables>(GetPodcastsDocument, options);
        }
export function useGetPodcastsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPodcastsQuery, GetPodcastsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPodcastsQuery, GetPodcastsQueryVariables>(GetPodcastsDocument, options);
        }
export type GetPodcastsQueryHookResult = ReturnType<typeof useGetPodcastsQuery>;
export type GetPodcastsLazyQueryHookResult = ReturnType<typeof useGetPodcastsLazyQuery>;
export type GetPodcastsSuspenseQueryHookResult = ReturnType<typeof useGetPodcastsSuspenseQuery>;
export type GetPodcastsQueryResult = Apollo.QueryResult<GetPodcastsQuery, GetPodcastsQueryVariables>;
export const GetNewslettersDocument = gql`
    query GetNewsletters($locale: String, $limit: Int!, $skip: Int!) {
  newsletterCollection(locale: $locale, limit: $limit, skip: $skip) {
    total
    items {
      date
      title
      newsletterContent(locale: $locale) {
        url
      }
    }
  }
}
    `;

/**
 * __useGetNewslettersQuery__
 *
 * To run a query within a React component, call `useGetNewslettersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewslettersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewslettersQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetNewslettersQuery(baseOptions: Apollo.QueryHookOptions<GetNewslettersQuery, GetNewslettersQueryVariables> & ({ variables: GetNewslettersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewslettersQuery, GetNewslettersQueryVariables>(GetNewslettersDocument, options);
      }
export function useGetNewslettersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewslettersQuery, GetNewslettersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewslettersQuery, GetNewslettersQueryVariables>(GetNewslettersDocument, options);
        }
export function useGetNewslettersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNewslettersQuery, GetNewslettersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNewslettersQuery, GetNewslettersQueryVariables>(GetNewslettersDocument, options);
        }
export type GetNewslettersQueryHookResult = ReturnType<typeof useGetNewslettersQuery>;
export type GetNewslettersLazyQueryHookResult = ReturnType<typeof useGetNewslettersLazyQuery>;
export type GetNewslettersSuspenseQueryHookResult = ReturnType<typeof useGetNewslettersSuspenseQuery>;
export type GetNewslettersQueryResult = Apollo.QueryResult<GetNewslettersQuery, GetNewslettersQueryVariables>;
export const GetBlogPostsSlugsDocument = gql`
    query GetBlogPostsSlugs {
  blogPageCollection {
    items {
      slug
      date
      excerpt
      title
    }
  }
}
    `;

/**
 * __useGetBlogPostsSlugsQuery__
 *
 * To run a query within a React component, call `useGetBlogPostsSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogPostsSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogPostsSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlogPostsSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogPostsSlugsQuery, GetBlogPostsSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogPostsSlugsQuery, GetBlogPostsSlugsQueryVariables>(GetBlogPostsSlugsDocument, options);
      }
export function useGetBlogPostsSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogPostsSlugsQuery, GetBlogPostsSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogPostsSlugsQuery, GetBlogPostsSlugsQueryVariables>(GetBlogPostsSlugsDocument, options);
        }
export function useGetBlogPostsSlugsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBlogPostsSlugsQuery, GetBlogPostsSlugsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogPostsSlugsQuery, GetBlogPostsSlugsQueryVariables>(GetBlogPostsSlugsDocument, options);
        }
export type GetBlogPostsSlugsQueryHookResult = ReturnType<typeof useGetBlogPostsSlugsQuery>;
export type GetBlogPostsSlugsLazyQueryHookResult = ReturnType<typeof useGetBlogPostsSlugsLazyQuery>;
export type GetBlogPostsSlugsSuspenseQueryHookResult = ReturnType<typeof useGetBlogPostsSlugsSuspenseQuery>;
export type GetBlogPostsSlugsQueryResult = Apollo.QueryResult<GetBlogPostsSlugsQuery, GetBlogPostsSlugsQueryVariables>;
export const GetAllBlogPostsForRssDocument = gql`
    query GetAllBlogPostsForRSS($locale: String!) {
  blogPageCollection(locale: $locale, order: date_DESC) {
    items {
      date
      title
      slug
      excerpt
      image {
        url
      }
    }
  }
}
    `;

/**
 * __useGetAllBlogPostsForRssQuery__
 *
 * To run a query within a React component, call `useGetAllBlogPostsForRssQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogPostsForRssQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogPostsForRssQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetAllBlogPostsForRssQuery(baseOptions: Apollo.QueryHookOptions<GetAllBlogPostsForRssQuery, GetAllBlogPostsForRssQueryVariables> & ({ variables: GetAllBlogPostsForRssQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogPostsForRssQuery, GetAllBlogPostsForRssQueryVariables>(GetAllBlogPostsForRssDocument, options);
      }
export function useGetAllBlogPostsForRssLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogPostsForRssQuery, GetAllBlogPostsForRssQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogPostsForRssQuery, GetAllBlogPostsForRssQueryVariables>(GetAllBlogPostsForRssDocument, options);
        }
export function useGetAllBlogPostsForRssSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllBlogPostsForRssQuery, GetAllBlogPostsForRssQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogPostsForRssQuery, GetAllBlogPostsForRssQueryVariables>(GetAllBlogPostsForRssDocument, options);
        }
export type GetAllBlogPostsForRssQueryHookResult = ReturnType<typeof useGetAllBlogPostsForRssQuery>;
export type GetAllBlogPostsForRssLazyQueryHookResult = ReturnType<typeof useGetAllBlogPostsForRssLazyQuery>;
export type GetAllBlogPostsForRssSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogPostsForRssSuspenseQuery>;
export type GetAllBlogPostsForRssQueryResult = Apollo.QueryResult<GetAllBlogPostsForRssQuery, GetAllBlogPostsForRssQueryVariables>;