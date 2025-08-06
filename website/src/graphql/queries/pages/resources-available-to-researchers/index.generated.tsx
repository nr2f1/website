import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetResourcesAvailableToResearchersPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  biorepositorySamplesHeadingId: Types.Scalars['String']['input'];
  grantsHeadingId: Types.Scalars['String']['input'];
  patientRegistryRecordsHeadingId: Types.Scalars['String']['input'];
  miceModelsHeadingId: Types.Scalars['String']['input'];
}>;


export type GetResourcesAvailableToResearchersPageQuery = { __typename?: 'Query', biorepositorySamplesHeading?: { __typename?: 'Heading', content?: string | null } | null, grantsHeading?: { __typename?: 'Heading', content?: string | null } | null, patientRegistryRecordsHeading?: { __typename?: 'Heading', content?: string | null } | null, miceModelsHeading?: { __typename?: 'Heading', content?: string | null } | null };


export const GetResourcesAvailableToResearchersPageDocument = gql`
    query GetResourcesAvailableToResearchersPage($locale: String, $biorepositorySamplesHeadingId: String!, $grantsHeadingId: String!, $patientRegistryRecordsHeadingId: String!, $miceModelsHeadingId: String!) {
  biorepositorySamplesHeading: heading(
    locale: $locale
    id: $biorepositorySamplesHeadingId
  ) {
    content
  }
  grantsHeading: heading(locale: $locale, id: $grantsHeadingId) {
    content
  }
  patientRegistryRecordsHeading: heading(
    locale: $locale
    id: $patientRegistryRecordsHeadingId
  ) {
    content
  }
  miceModelsHeading: heading(locale: $locale, id: $miceModelsHeadingId) {
    content
  }
}
    `;

/**
 * __useGetResourcesAvailableToResearchersPageQuery__
 *
 * To run a query within a React component, call `useGetResourcesAvailableToResearchersPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourcesAvailableToResearchersPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourcesAvailableToResearchersPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      biorepositorySamplesHeadingId: // value for 'biorepositorySamplesHeadingId'
 *      grantsHeadingId: // value for 'grantsHeadingId'
 *      patientRegistryRecordsHeadingId: // value for 'patientRegistryRecordsHeadingId'
 *      miceModelsHeadingId: // value for 'miceModelsHeadingId'
 *   },
 * });
 */
export function useGetResourcesAvailableToResearchersPageQuery(baseOptions: Apollo.QueryHookOptions<GetResourcesAvailableToResearchersPageQuery, GetResourcesAvailableToResearchersPageQueryVariables> & ({ variables: GetResourcesAvailableToResearchersPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResourcesAvailableToResearchersPageQuery, GetResourcesAvailableToResearchersPageQueryVariables>(GetResourcesAvailableToResearchersPageDocument, options);
      }
export function useGetResourcesAvailableToResearchersPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResourcesAvailableToResearchersPageQuery, GetResourcesAvailableToResearchersPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResourcesAvailableToResearchersPageQuery, GetResourcesAvailableToResearchersPageQueryVariables>(GetResourcesAvailableToResearchersPageDocument, options);
        }
export function useGetResourcesAvailableToResearchersPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetResourcesAvailableToResearchersPageQuery, GetResourcesAvailableToResearchersPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetResourcesAvailableToResearchersPageQuery, GetResourcesAvailableToResearchersPageQueryVariables>(GetResourcesAvailableToResearchersPageDocument, options);
        }
export type GetResourcesAvailableToResearchersPageQueryHookResult = ReturnType<typeof useGetResourcesAvailableToResearchersPageQuery>;
export type GetResourcesAvailableToResearchersPageLazyQueryHookResult = ReturnType<typeof useGetResourcesAvailableToResearchersPageLazyQuery>;
export type GetResourcesAvailableToResearchersPageSuspenseQueryHookResult = ReturnType<typeof useGetResourcesAvailableToResearchersPageSuspenseQuery>;
export type GetResourcesAvailableToResearchersPageQueryResult = Apollo.QueryResult<GetResourcesAvailableToResearchersPageQuery, GetResourcesAvailableToResearchersPageQueryVariables>;