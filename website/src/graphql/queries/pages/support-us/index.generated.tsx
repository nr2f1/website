import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetSupportUsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  supportUsPageParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetSupportUsPageQuery = { __typename?: 'Query', mainbody?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetSupportUsPageDocument = gql`
    query GetSupportUsPage($locale: String, $supportUsPageParagraphsId: String!) {
  mainbody: paragraphs(locale: $locale, id: $supportUsPageParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetSupportUsPageQuery__
 *
 * To run a query within a React component, call `useGetSupportUsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupportUsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupportUsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      supportUsPageParagraphsId: // value for 'supportUsPageParagraphsId'
 *   },
 * });
 */
export function useGetSupportUsPageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetSupportUsPageQuery, GetSupportUsPageQueryVariables> & ({ variables: GetSupportUsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSupportUsPageQuery, GetSupportUsPageQueryVariables>(GetSupportUsPageDocument, options);
      }
export function useGetSupportUsPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSupportUsPageQuery, GetSupportUsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSupportUsPageQuery, GetSupportUsPageQueryVariables>(GetSupportUsPageDocument, options);
        }
export function useGetSupportUsPageSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetSupportUsPageQuery, GetSupportUsPageQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetSupportUsPageQuery, GetSupportUsPageQueryVariables>(GetSupportUsPageDocument, options);
        }
export type GetSupportUsPageQueryHookResult = ReturnType<typeof useGetSupportUsPageQuery>;
export type GetSupportUsPageLazyQueryHookResult = ReturnType<typeof useGetSupportUsPageLazyQuery>;
export type GetSupportUsPageSuspenseQueryHookResult = ReturnType<typeof useGetSupportUsPageSuspenseQuery>;
export type GetSupportUsPageQueryResult = ApolloReactCommon.QueryResult<GetSupportUsPageQuery, GetSupportUsPageQueryVariables>;