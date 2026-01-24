import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetConferenceBannerQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id: Types.Scalars['String']['input'];
}>;


export type GetConferenceBannerQuery = { __typename?: 'Query', conferenceBanner?: { __typename?: 'ConferenceBanner', conferenceDate?: any | null, content?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, cta?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, leftBanner?: { __typename?: 'Image', asset?: { __typename?: 'Asset', url?: string | null } | null } | null, rightBanner?: { __typename?: 'Image', asset?: { __typename?: 'Asset', url?: string | null } | null } | null } | null };


export const GetConferenceBannerDocument = gql`
    query GetConferenceBanner($locale: String, $id: String!) {
  conferenceBanner(id: $id, locale: $locale) {
    content {
      content {
        json
      }
    }
    conferenceDate
    cta {
      text {
        content
      }
      target {
        url
      }
    }
    leftBanner {
      asset {
        url
      }
    }
    rightBanner {
      asset {
        url
      }
    }
  }
}
    `;

/**
 * __useGetConferenceBannerQuery__
 *
 * To run a query within a React component, call `useGetConferenceBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConferenceBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConferenceBannerQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetConferenceBannerQuery(baseOptions: Apollo.QueryHookOptions<GetConferenceBannerQuery, GetConferenceBannerQueryVariables> & ({ variables: GetConferenceBannerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConferenceBannerQuery, GetConferenceBannerQueryVariables>(GetConferenceBannerDocument, options);
      }
export function useGetConferenceBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConferenceBannerQuery, GetConferenceBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConferenceBannerQuery, GetConferenceBannerQueryVariables>(GetConferenceBannerDocument, options);
        }
export function useGetConferenceBannerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetConferenceBannerQuery, GetConferenceBannerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetConferenceBannerQuery, GetConferenceBannerQueryVariables>(GetConferenceBannerDocument, options);
        }
export type GetConferenceBannerQueryHookResult = ReturnType<typeof useGetConferenceBannerQuery>;
export type GetConferenceBannerLazyQueryHookResult = ReturnType<typeof useGetConferenceBannerLazyQuery>;
export type GetConferenceBannerSuspenseQueryHookResult = ReturnType<typeof useGetConferenceBannerSuspenseQuery>;
export type GetConferenceBannerQueryResult = Apollo.QueryResult<GetConferenceBannerQuery, GetConferenceBannerQueryVariables>;