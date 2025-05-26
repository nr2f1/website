import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetNewsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetNewsQuery = { __typename?: 'Query', entryCollection?: { __typename?: 'EntryCollection', total: number, items: Array<{ __typename?: 'Accordion' } | { __typename?: 'Banner' } | { __typename: 'BlogPage', title?: string | null, slug?: string | null, date?: any | null, excerpt?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | { __typename?: 'BoardMember' } | { __typename?: 'Heading' } | { __typename?: 'HtmlHeadMetadata' } | { __typename?: 'Hyperlink' } | { __typename?: 'Image' } | { __typename?: 'Link' } | { __typename?: 'LinkContent' } | { __typename?: 'MicrocopyResource' } | { __typename?: 'NavigationList' } | { __typename: 'Newsletter', date?: any | null, newsletterContent?: { __typename?: 'Asset', url?: string | null } | null } | { __typename?: 'PageHeader' } | { __typename?: 'Paragraphs' } | { __typename: 'Podcast', date?: any | null, url?: string | null, title?: string | null, name?: string | null } | { __typename?: 'Publication' } | { __typename?: 'ResourceSet' } | { __typename?: 'Volunteer' } | null> } | null };


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