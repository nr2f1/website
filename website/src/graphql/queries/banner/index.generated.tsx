import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import * as Types from '../../types';

const defaultOptions = {} as const;
export type GetBannerQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id: Types.Scalars['String']['input'];
}>;


export type GetBannerQuery = { __typename?: 'Query', banner?: { __typename?: 'Banner', heading?: { __typename?: 'Heading', content?: string | null } | null, content?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, cta?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null };


export const GetBannerDocument = gql`
    query GetBanner($locale: String, $id: String!) {
  banner(id: $id) {
    heading(locale: $locale) {
      content
    }
    content(locale: $locale) {
      content {
        json
      }
    }
    cta(locale: $locale) {
      target {
        url
      }
      text {
        content
      }
    }
    image {
      url
    }
  }
}
    `;

/**
 * __useGetBannerQuery__
 *
 * To run a query within a React component, call `useGetBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBannerQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBannerQuery(baseOptions: Apollo.QueryHookOptions<GetBannerQuery, GetBannerQueryVariables> & ({ variables: GetBannerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBannerQuery, GetBannerQueryVariables>(GetBannerDocument, options);
      }
export function useGetBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBannerQuery, GetBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBannerQuery, GetBannerQueryVariables>(GetBannerDocument, options);
        }
export function useGetBannerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBannerQuery, GetBannerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBannerQuery, GetBannerQueryVariables>(GetBannerDocument, options);
        }
export type GetBannerQueryHookResult = ReturnType<typeof useGetBannerQuery>;
export type GetBannerLazyQueryHookResult = ReturnType<typeof useGetBannerLazyQuery>;
export type GetBannerSuspenseQueryHookResult = ReturnType<typeof useGetBannerSuspenseQuery>;
export type GetBannerQueryResult = Apollo.QueryResult<GetBannerQuery, GetBannerQueryVariables>;