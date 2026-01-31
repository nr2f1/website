import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPatientCountPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  patientCountIntroParagraphId: Types.Scalars['String']['input'];
  patientCountHeadingCountId: Types.Scalars['String']['input'];
  patientCountParagraphId: Types.Scalars['String']['input'];
  patientCountHeadingJoinId: Types.Scalars['String']['input'];
  patientCountParagraphJoinId: Types.Scalars['String']['input'];
  howToTakePartHeadingId: Types.Scalars['String']['input'];
  howToTakePartParagraphId: Types.Scalars['String']['input'];
  registerPatientLinkId: Types.Scalars['String']['input'];
  missionParagraphId: Types.Scalars['String']['input'];
}>;


export type GetPatientCountPageQuery = { __typename?: 'Query', patientCountIntroParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, patientCountHeadingCount?: { __typename?: 'Heading', content?: string | null } | null, patientCountParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, patientCountHeadingJoin?: { __typename?: 'Heading', content?: string | null } | null, patientCountParagraphJoin?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, howToTakePartHeading?: { __typename?: 'Heading', content?: string | null } | null, registerPatientCta?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, howToTakePartParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, missionParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetPatientCountPageDocument = gql`
    query GetPatientCountPage($locale: String, $patientCountIntroParagraphId: String!, $patientCountHeadingCountId: String!, $patientCountParagraphId: String!, $patientCountHeadingJoinId: String!, $patientCountParagraphJoinId: String!, $howToTakePartHeadingId: String!, $howToTakePartParagraphId: String!, $registerPatientLinkId: String!, $missionParagraphId: String!) {
  patientCountIntroParagraph: paragraphs(
    locale: $locale
    id: $patientCountIntroParagraphId
  ) {
    content {
      json
    }
  }
  patientCountHeadingCount: heading(
    locale: $locale
    id: $patientCountHeadingCountId
  ) {
    content
  }
  patientCountParagraph: paragraphs(locale: $locale, id: $patientCountParagraphId) {
    content {
      json
    }
  }
  patientCountHeadingJoin: heading(
    locale: $locale
    id: $patientCountHeadingJoinId
  ) {
    content
  }
  patientCountParagraphJoin: paragraphs(
    locale: $locale
    id: $patientCountParagraphJoinId
  ) {
    content {
      json
    }
  }
  howToTakePartHeading: heading(locale: $locale, id: $howToTakePartHeadingId) {
    content
  }
  registerPatientCta: link(locale: $locale, id: $registerPatientLinkId) {
    target {
      url
    }
    text {
      content
    }
  }
  howToTakePartParagraph: paragraphs(
    locale: $locale
    id: $howToTakePartParagraphId
  ) {
    content {
      json
    }
  }
  missionParagraph: paragraphs(locale: $locale, id: $missionParagraphId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetPatientCountPageQuery__
 *
 * To run a query within a React component, call `useGetPatientCountPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatientCountPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatientCountPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      patientCountIntroParagraphId: // value for 'patientCountIntroParagraphId'
 *      patientCountHeadingCountId: // value for 'patientCountHeadingCountId'
 *      patientCountParagraphId: // value for 'patientCountParagraphId'
 *      patientCountHeadingJoinId: // value for 'patientCountHeadingJoinId'
 *      patientCountParagraphJoinId: // value for 'patientCountParagraphJoinId'
 *      howToTakePartHeadingId: // value for 'howToTakePartHeadingId'
 *      howToTakePartParagraphId: // value for 'howToTakePartParagraphId'
 *      registerPatientLinkId: // value for 'registerPatientLinkId'
 *      missionParagraphId: // value for 'missionParagraphId'
 *   },
 * });
 */
export function useGetPatientCountPageQuery(baseOptions: Apollo.QueryHookOptions<GetPatientCountPageQuery, GetPatientCountPageQueryVariables> & ({ variables: GetPatientCountPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPatientCountPageQuery, GetPatientCountPageQueryVariables>(GetPatientCountPageDocument, options);
      }
export function useGetPatientCountPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPatientCountPageQuery, GetPatientCountPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPatientCountPageQuery, GetPatientCountPageQueryVariables>(GetPatientCountPageDocument, options);
        }
export function useGetPatientCountPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPatientCountPageQuery, GetPatientCountPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPatientCountPageQuery, GetPatientCountPageQueryVariables>(GetPatientCountPageDocument, options);
        }
export type GetPatientCountPageQueryHookResult = ReturnType<typeof useGetPatientCountPageQuery>;
export type GetPatientCountPageLazyQueryHookResult = ReturnType<typeof useGetPatientCountPageLazyQuery>;
export type GetPatientCountPageSuspenseQueryHookResult = ReturnType<typeof useGetPatientCountPageSuspenseQuery>;
export type GetPatientCountPageQueryResult = Apollo.QueryResult<GetPatientCountPageQuery, GetPatientCountPageQueryVariables>;