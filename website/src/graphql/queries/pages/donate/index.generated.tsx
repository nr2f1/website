import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetDonatePageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  donatePageParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetDonatePageQuery = { __typename?: 'Query', mainbody?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetDonatePageDocument = gql`
    query GetDonatePage($locale: String, $donatePageParagraphsId: String!) {
  mainbody: paragraphs(locale: $locale, id: $donatePageParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetDonatePageQuery__
 *
 * To run a query within a React component, call `useGetDonatePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDonatePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDonatePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      donatePageParagraphsId: // value for 'donatePageParagraphsId'
 *   },
 * });
 */
export function useGetDonatePageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetDonatePageQuery, GetDonatePageQueryVariables> & ({ variables: GetDonatePageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetDonatePageQuery, GetDonatePageQueryVariables>(GetDonatePageDocument, options);
      }
export function useGetDonatePageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDonatePageQuery, GetDonatePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetDonatePageQuery, GetDonatePageQueryVariables>(GetDonatePageDocument, options);
        }
export function useGetDonatePageSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetDonatePageQuery, GetDonatePageQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetDonatePageQuery, GetDonatePageQueryVariables>(GetDonatePageDocument, options);
        }
export type GetDonatePageQueryHookResult = ReturnType<typeof useGetDonatePageQuery>;
export type GetDonatePageLazyQueryHookResult = ReturnType<typeof useGetDonatePageLazyQuery>;
export type GetDonatePageSuspenseQueryHookResult = ReturnType<typeof useGetDonatePageSuspenseQuery>;
export type GetDonatePageQueryResult = ApolloReactCommon.QueryResult<GetDonatePageQuery, GetDonatePageQueryVariables>;