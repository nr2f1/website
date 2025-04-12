import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetSupportGroupsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  supportGroupsIntroParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetSupportGroupsPageQuery = { __typename?: 'Query', intropParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetSupportGroupsPageDocument = gql`
    query GetSupportGroupsPage($locale: String, $supportGroupsIntroParagraphsId: String!) {
  intropParagraphs: paragraphs(
    locale: $locale
    id: $supportGroupsIntroParagraphsId
  ) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetSupportGroupsPageQuery__
 *
 * To run a query within a React component, call `useGetSupportGroupsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupportGroupsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupportGroupsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      supportGroupsIntroParagraphsId: // value for 'supportGroupsIntroParagraphsId'
 *   },
 * });
 */
export function useGetSupportGroupsPageQuery(baseOptions: Apollo.QueryHookOptions<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables> & ({ variables: GetSupportGroupsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>(GetSupportGroupsPageDocument, options);
      }
export function useGetSupportGroupsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>(GetSupportGroupsPageDocument, options);
        }
export function useGetSupportGroupsPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>(GetSupportGroupsPageDocument, options);
        }
export type GetSupportGroupsPageQueryHookResult = ReturnType<typeof useGetSupportGroupsPageQuery>;
export type GetSupportGroupsPageLazyQueryHookResult = ReturnType<typeof useGetSupportGroupsPageLazyQuery>;
export type GetSupportGroupsPageSuspenseQueryHookResult = ReturnType<typeof useGetSupportGroupsPageSuspenseQuery>;
export type GetSupportGroupsPageQueryResult = Apollo.QueryResult<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>;