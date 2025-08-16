import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  slug: Types.Scalars['String']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', title?: string | null, excerpt?: string | null, date?: any | null, body?: { __typename?: 'BlogPageBody', json: any, links: { __typename?: 'BlogPageBodyLinks', entries: { __typename?: 'BlogPageBodyEntries', inline: Array<{ __typename?: 'Accordion', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Banner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPage', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BoardMember', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Heading', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'HtmlHeadMetadata', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Hyperlink', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'LinkContent', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'MicrocopyResource', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'NavigationList', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Newsletter', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'PageHeader', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Paragraphs', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Podcast', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Publication', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ResourceSet', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Volunteer', sys: { __typename?: 'Sys', id: string } } | null>, block: Array<{ __typename?: 'Accordion', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Banner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPage', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BoardMember', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Heading', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'HtmlHeadMetadata', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Hyperlink', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'LinkContent', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'MicrocopyResource', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'NavigationList', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Newsletter', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'PageHeader', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Paragraphs', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Podcast', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Publication', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ResourceSet', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Volunteer', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'BlogPageBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetPostDocument = gql`
    query GetPost($locale: String, $slug: String!) {
  blogPageCollection(locale: $locale, where: {slug: $slug}, limit: 1) {
    items {
      title
      excerpt
      body {
        json
        links {
          entries {
            inline {
              sys {
                id
              }
            }
            block {
              sys {
                id
              }
            }
          }
          assets {
            block {
              sys {
                id
              }
              url
              title
              width
              height
              description
            }
          }
        }
      }
      date
      image {
        url
      }
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables> & ({ variables: GetPostQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export function useGetPostSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
