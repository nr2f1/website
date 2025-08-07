import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetResearchPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  initiativesHeadingId: Types.Scalars['String']['input'];
}>;


export type GetResearchPageQuery = { __typename?: 'Query', initiativesHeading?: { __typename?: 'Heading', content?: string | null } | null };


export const GetResearchPageDocument = gql`
    query GetResearchPage($locale: String, $initiativesHeadingId: String!) {
  initiativesHeading: heading(locale: $locale, id: $initiativesHeadingId) {
    content
  }
}
    `;

/**
 * __useGetResearchPageQuery__
 *
 * To run a query within a React component, call `useGetResearchPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResearchPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResearchPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      initiativesHeadingId: // value for 'initiativesHeadingId'
 *   },
 * });
 */
export function useGetResearchPageQuery(baseOptions: Apollo.QueryHookOptions<GetResearchPageQuery, GetResearchPageQueryVariables> & ({ variables: GetResearchPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResearchPageQuery, GetResearchPageQueryVariables>(GetResearchPageDocument, options);
      }
export function useGetResearchPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResearchPageQuery, GetResearchPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResearchPageQuery, GetResearchPageQueryVariables>(GetResearchPageDocument, options);
        }
export function useGetResearchPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetResearchPageQuery, GetResearchPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetResearchPageQuery, GetResearchPageQueryVariables>(GetResearchPageDocument, options);
        }
export type GetResearchPageQueryHookResult = ReturnType<typeof useGetResearchPageQuery>;
export type GetResearchPageLazyQueryHookResult = ReturnType<typeof useGetResearchPageLazyQuery>;
export type GetResearchPageSuspenseQueryHookResult = ReturnType<typeof useGetResearchPageSuspenseQuery>;
export type GetResearchPageQueryResult = Apollo.QueryResult<GetResearchPageQuery, GetResearchPageQueryVariables>;