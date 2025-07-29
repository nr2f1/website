import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPrivacyPolicyPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  privacyPolicyPageParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetPrivacyPolicyPageQuery = { __typename?: 'Query', mainbody?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetPrivacyPolicyPageDocument = gql`
    query GetPrivacyPolicyPage($locale: String, $privacyPolicyPageParagraphsId: String!) {
  mainbody: paragraphs(locale: $locale, id: $privacyPolicyPageParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetPrivacyPolicyPageQuery__
 *
 * To run a query within a React component, call `useGetPrivacyPolicyPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivacyPolicyPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivacyPolicyPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      privacyPolicyPageParagraphsId: // value for 'privacyPolicyPageParagraphsId'
 *   },
 * });
 */
export function useGetPrivacyPolicyPageQuery(baseOptions: Apollo.QueryHookOptions<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables> & ({ variables: GetPrivacyPolicyPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>(GetPrivacyPolicyPageDocument, options);
      }
export function useGetPrivacyPolicyPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>(GetPrivacyPolicyPageDocument, options);
        }
export function useGetPrivacyPolicyPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>(GetPrivacyPolicyPageDocument, options);
        }
export type GetPrivacyPolicyPageQueryHookResult = ReturnType<typeof useGetPrivacyPolicyPageQuery>;
export type GetPrivacyPolicyPageLazyQueryHookResult = ReturnType<typeof useGetPrivacyPolicyPageLazyQuery>;
export type GetPrivacyPolicyPageSuspenseQueryHookResult = ReturnType<typeof useGetPrivacyPolicyPageSuspenseQuery>;
export type GetPrivacyPolicyPageQueryResult = Apollo.QueryResult<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>;