import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetVolunteerPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  volunteerParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetVolunteerPageQuery = { __typename?: 'Query', mainbody?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetVolunteerPageDocument = gql`
    query GetVolunteerPage($locale: String, $volunteerParagraphsId: String!) {
  mainbody: paragraphs(locale: $locale, id: $volunteerParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetVolunteerPageQuery__
 *
 * To run a query within a React component, call `useGetVolunteerPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVolunteerPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVolunteerPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      volunteerParagraphsId: // value for 'volunteerParagraphsId'
 *   },
 * });
 */
export function useGetVolunteerPageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetVolunteerPageQuery, GetVolunteerPageQueryVariables> & ({ variables: GetVolunteerPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetVolunteerPageQuery, GetVolunteerPageQueryVariables>(GetVolunteerPageDocument, options);
      }
export function useGetVolunteerPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetVolunteerPageQuery, GetVolunteerPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetVolunteerPageQuery, GetVolunteerPageQueryVariables>(GetVolunteerPageDocument, options);
        }
export function useGetVolunteerPageSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetVolunteerPageQuery, GetVolunteerPageQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetVolunteerPageQuery, GetVolunteerPageQueryVariables>(GetVolunteerPageDocument, options);
        }
export type GetVolunteerPageQueryHookResult = ReturnType<typeof useGetVolunteerPageQuery>;
export type GetVolunteerPageLazyQueryHookResult = ReturnType<typeof useGetVolunteerPageLazyQuery>;
export type GetVolunteerPageSuspenseQueryHookResult = ReturnType<typeof useGetVolunteerPageSuspenseQuery>;
export type GetVolunteerPageQueryResult = ApolloReactCommon.QueryResult<GetVolunteerPageQuery, GetVolunteerPageQueryVariables>;