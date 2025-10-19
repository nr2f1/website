import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetContactUsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  contactUsPageParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetContactUsPageQuery = { __typename?: 'Query', mainbody?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetContactUsPageDocument = gql`
    query GetContactUsPage($locale: String, $contactUsPageParagraphsId: String!) {
  mainbody: paragraphs(locale: $locale, id: $contactUsPageParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetContactUsPageQuery__
 *
 * To run a query within a React component, call `useGetContactUsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactUsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactUsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      contactUsPageParagraphsId: // value for 'contactUsPageParagraphsId'
 *   },
 * });
 */
export function useGetContactUsPageQuery(baseOptions: Apollo.QueryHookOptions<GetContactUsPageQuery, GetContactUsPageQueryVariables> & ({ variables: GetContactUsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactUsPageQuery, GetContactUsPageQueryVariables>(GetContactUsPageDocument, options);
      }
export function useGetContactUsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactUsPageQuery, GetContactUsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactUsPageQuery, GetContactUsPageQueryVariables>(GetContactUsPageDocument, options);
        }
export function useGetContactUsPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetContactUsPageQuery, GetContactUsPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetContactUsPageQuery, GetContactUsPageQueryVariables>(GetContactUsPageDocument, options);
        }
export type GetContactUsPageQueryHookResult = ReturnType<typeof useGetContactUsPageQuery>;
export type GetContactUsPageLazyQueryHookResult = ReturnType<typeof useGetContactUsPageLazyQuery>;
export type GetContactUsPageSuspenseQueryHookResult = ReturnType<typeof useGetContactUsPageSuspenseQuery>;
export type GetContactUsPageQueryResult = Apollo.QueryResult<GetContactUsPageQuery, GetContactUsPageQueryVariables>;