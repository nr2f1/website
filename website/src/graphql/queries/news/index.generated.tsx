import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetNewsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetNewsQuery = { __typename?: 'Query', entryCollection?: { __typename?: 'EntryCollection', total: number, items: Array<{ __typename?: 'Accordion' } | { __typename?: 'Banner' } | { __typename: 'BlogPage', title?: string | null, slug?: string | null, date?: any | null, excerpt?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | { __typename?: 'BoardMember' } | { __typename?: 'Heading' } | { __typename?: 'HtmlHeadMetadata' } | { __typename?: 'Hyperlink' } | { __typename?: 'Image' } | { __typename?: 'Link' } | { __typename?: 'LinkContent' } | { __typename?: 'MicrocopyResource' } | { __typename?: 'NavigationList' } | { __typename: 'Newsletter', date?: any | null, newsletterContent?: { __typename?: 'Asset', url?: string | null } | null } | { __typename?: 'PageHeader' } | { __typename?: 'Paragraphs' } | { __typename: 'Podcast', date?: any | null, url?: string | null, title?: string | null, name?: string | null } | { __typename?: 'Publication' } | { __typename?: 'ResourceSet' } | { __typename?: 'Volunteer' } | null> } | null };

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


export const GetNewsDocument = gql`
    query GetNews($locale: String) {
  entryCollection(
    where: {contentfulMetadata: {tags_exists: true, tags: {id_contains_some: ["blog", "newsletter", "podcast"]}}}
    locale: $locale
  ) {
    total
    items {
      ... on BlogPage {
        __typename
        title
        slug
        date
        excerpt
        image {
          url
        }
      }
      ... on Newsletter {
        __typename
        date
        newsletterContent {
          url
        }
      }
      ... on Podcast {
        __typename
        date
        url
        title
        name
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
 *   },
 * });
 */
export function useGetNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
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