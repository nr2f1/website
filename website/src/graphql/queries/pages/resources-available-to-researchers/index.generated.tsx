import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetResourcesAvailableToResearchersPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  resourcesAvailableintroParagraphsId: Types.Scalars['String']['input'];
  biorepositorySamplesHeadingId: Types.Scalars['String']['input'];
  grantsHeadingId: Types.Scalars['String']['input'];
  grantsSamplesParagraphsId: Types.Scalars['String']['input'];
  biorepositorySamplesParagraphsId: Types.Scalars['String']['input'];
  patientRegistryRecordsHeadingId: Types.Scalars['String']['input'];
  patientRegistryRecordsParagraphsId: Types.Scalars['String']['input'];
  miceModelsHeadingId: Types.Scalars['String']['input'];
  miceModelsParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetResourcesAvailableToResearchersPageQuery = { __typename?: 'Query', resourcesAvailableintroParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, biorepositorySamplesHeading?: { __typename?: 'Heading', content?: string | null } | null, biorepositorySamplesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, grantsHeading?: { __typename?: 'Heading', content?: string | null } | null, grantsSamplesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, patientRegistryRecordsHeading?: { __typename?: 'Heading', content?: string | null } | null, patientRegistryRecordsParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, miceModelsHeading?: { __typename?: 'Heading', content?: string | null } | null, miceModelsParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetResourcesAvailableToResearchersPageDocument = gql`
    query GetResourcesAvailableToResearchersPage($locale: String, $resourcesAvailableintroParagraphsId: String!, $biorepositorySamplesHeadingId: String!, $grantsHeadingId: String!, $grantsSamplesParagraphsId: String!, $biorepositorySamplesParagraphsId: String!, $patientRegistryRecordsHeadingId: String!, $patientRegistryRecordsParagraphsId: String!, $miceModelsHeadingId: String!, $miceModelsParagraphsId: String!) {
  resourcesAvailableintroParagraphs: paragraphs(
    locale: $locale
    id: $resourcesAvailableintroParagraphsId
  ) {
    content {
      json
    }
  }
  biorepositorySamplesHeading: heading(
    locale: $locale
    id: $biorepositorySamplesHeadingId
  ) {
    content
  }
  biorepositorySamplesParagraphs: paragraphs(
    locale: $locale
    id: $biorepositorySamplesParagraphsId
  ) {
    content {
      json
    }
  }
  grantsHeading: heading(locale: $locale, id: $grantsHeadingId) {
    content
  }
  grantsSamplesParagraphs: paragraphs(
    locale: $locale
    id: $grantsSamplesParagraphsId
  ) {
    content {
      json
    }
  }
  patientRegistryRecordsHeading: heading(
    locale: $locale
    id: $patientRegistryRecordsHeadingId
  ) {
    content
  }
  patientRegistryRecordsParagraphs: paragraphs(
    locale: $locale
    id: $patientRegistryRecordsParagraphsId
  ) {
    content {
      json
    }
  }
  miceModelsHeading: heading(locale: $locale, id: $miceModelsHeadingId) {
    content
  }
  miceModelsParagraphs: paragraphs(locale: $locale, id: $miceModelsParagraphsId) {
    content {
      json
    }
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
 *      resourcesAvailableintroParagraphsId: // value for 'resourcesAvailableintroParagraphsId'
 *      biorepositorySamplesHeadingId: // value for 'biorepositorySamplesHeadingId'
 *      grantsHeadingId: // value for 'grantsHeadingId'
 *      grantsSamplesParagraphsId: // value for 'grantsSamplesParagraphsId'
 *      biorepositorySamplesParagraphsId: // value for 'biorepositorySamplesParagraphsId'
 *      patientRegistryRecordsHeadingId: // value for 'patientRegistryRecordsHeadingId'
 *      patientRegistryRecordsParagraphsId: // value for 'patientRegistryRecordsParagraphsId'
 *      miceModelsHeadingId: // value for 'miceModelsHeadingId'
 *      miceModelsParagraphsId: // value for 'miceModelsParagraphsId'
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