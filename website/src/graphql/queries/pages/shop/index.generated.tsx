import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetShopQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  shopHeadingId: Types.Scalars['String']['input'];
  shopParagraphsId: Types.Scalars['String']['input'];
  shopLinkCtaId: Types.Scalars['String']['input'];
}>;


export type GetShopQuery = { __typename?: 'Query', heading?: { __typename?: 'Heading', content?: string | null } | null, paragraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, link?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null };


export const GetShopDocument = gql`
    query GetShop($locale: String, $shopHeadingId: String!, $shopParagraphsId: String!, $shopLinkCtaId: String!) {
  heading(locale: $locale, id: $shopHeadingId) {
    content
  }
  paragraphs(locale: $locale, id: $shopParagraphsId) {
    content {
      json
    }
  }
  link(locale: $locale, id: $shopLinkCtaId) {
    target {
      url
    }
    text {
      content
    }
  }
}
    `;

/**
 * __useGetShopQuery__
 *
 * To run a query within a React component, call `useGetShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      shopHeadingId: // value for 'shopHeadingId'
 *      shopParagraphsId: // value for 'shopParagraphsId'
 *      shopLinkCtaId: // value for 'shopLinkCtaId'
 *   },
 * });
 */
export function useGetShopQuery(baseOptions: Apollo.QueryHookOptions<GetShopQuery, GetShopQueryVariables> & ({ variables: GetShopQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShopQuery, GetShopQueryVariables>(GetShopDocument, options);
      }
export function useGetShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShopQuery, GetShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShopQuery, GetShopQueryVariables>(GetShopDocument, options);
        }
export function useGetShopSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetShopQuery, GetShopQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetShopQuery, GetShopQueryVariables>(GetShopDocument, options);
        }
export type GetShopQueryHookResult = ReturnType<typeof useGetShopQuery>;
export type GetShopLazyQueryHookResult = ReturnType<typeof useGetShopLazyQuery>;
export type GetShopSuspenseQueryHookResult = ReturnType<typeof useGetShopSuspenseQuery>;
export type GetShopQueryResult = Apollo.QueryResult<GetShopQuery, GetShopQueryVariables>;