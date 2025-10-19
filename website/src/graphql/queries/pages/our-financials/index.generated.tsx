import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetOurFinancialsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  ourFinancialsPageParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetOurFinancialsPageQuery = { __typename?: 'Query', mainbody?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetOurFinancialsPageDocument = gql`
    query GetOurFinancialsPage($locale: String, $ourFinancialsPageParagraphsId: String!) {
  mainbody: paragraphs(locale: $locale, id: $ourFinancialsPageParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetOurFinancialsPageQuery__
 *
 * To run a query within a React component, call `useGetOurFinancialsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOurFinancialsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOurFinancialsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      ourFinancialsPageParagraphsId: // value for 'ourFinancialsPageParagraphsId'
 *   },
 * });
 */
export function useGetOurFinancialsPageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetOurFinancialsPageQuery, GetOurFinancialsPageQueryVariables> & ({ variables: GetOurFinancialsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetOurFinancialsPageQuery, GetOurFinancialsPageQueryVariables>(GetOurFinancialsPageDocument, options);
      }
export function useGetOurFinancialsPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOurFinancialsPageQuery, GetOurFinancialsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetOurFinancialsPageQuery, GetOurFinancialsPageQueryVariables>(GetOurFinancialsPageDocument, options);
        }
export function useGetOurFinancialsPageSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetOurFinancialsPageQuery, GetOurFinancialsPageQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetOurFinancialsPageQuery, GetOurFinancialsPageQueryVariables>(GetOurFinancialsPageDocument, options);
        }
export type GetOurFinancialsPageQueryHookResult = ReturnType<typeof useGetOurFinancialsPageQuery>;
export type GetOurFinancialsPageLazyQueryHookResult = ReturnType<typeof useGetOurFinancialsPageLazyQuery>;
export type GetOurFinancialsPageSuspenseQueryHookResult = ReturnType<typeof useGetOurFinancialsPageSuspenseQuery>;
export type GetOurFinancialsPageQueryResult = ApolloReactCommon.QueryResult<GetOurFinancialsPageQuery, GetOurFinancialsPageQueryVariables>;