import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOrganizationPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  boardHeadingId: Types.Scalars['String']['input'];
  volunteersHeadingId: Types.Scalars['String']['input'];
  scientificHeadingId: Types.Scalars['String']['input'];
  organizationResearchHeadingId: Types.Scalars['String']['input'];
}>;


export type GetOrganizationPageQuery = { __typename?: 'Query', boardHeading?: { __typename?: 'Heading', content?: string | null } | null, volunteersHeading?: { __typename?: 'Heading', content?: string | null } | null, scientificHeading?: { __typename?: 'Heading', content?: string | null } | null, researchHeading?: { __typename?: 'Heading', content?: string | null } | null };


export const GetOrganizationPageDocument = gql`
    query GetOrganizationPage($locale: String, $boardHeadingId: String!, $volunteersHeadingId: String!, $scientificHeadingId: String!, $organizationResearchHeadingId: String!) {
  boardHeading: heading(locale: $locale, id: $boardHeadingId) {
    content
  }
  volunteersHeading: heading(locale: $locale, id: $volunteersHeadingId) {
    content
  }
  scientificHeading: heading(locale: $locale, id: $scientificHeadingId) {
    content
  }
  researchHeading: heading(locale: $locale, id: $organizationResearchHeadingId) {
    content
  }
}
    `;

/**
 * __useGetOrganizationPageQuery__
 *
 * To run a query within a React component, call `useGetOrganizationPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      boardHeadingId: // value for 'boardHeadingId'
 *      volunteersHeadingId: // value for 'volunteersHeadingId'
 *      scientificHeadingId: // value for 'scientificHeadingId'
 *      organizationResearchHeadingId: // value for 'organizationResearchHeadingId'
 *   },
 * });
 */
export function useGetOrganizationPageQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationPageQuery, GetOrganizationPageQueryVariables> & ({ variables: GetOrganizationPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>(GetOrganizationPageDocument, options);
      }
export function useGetOrganizationPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>(GetOrganizationPageDocument, options);
        }
export function useGetOrganizationPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>(GetOrganizationPageDocument, options);
        }
export type GetOrganizationPageQueryHookResult = ReturnType<typeof useGetOrganizationPageQuery>;
export type GetOrganizationPageLazyQueryHookResult = ReturnType<typeof useGetOrganizationPageLazyQuery>;
export type GetOrganizationPageSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationPageSuspenseQuery>;
export type GetOrganizationPageQueryResult = Apollo.QueryResult<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>;