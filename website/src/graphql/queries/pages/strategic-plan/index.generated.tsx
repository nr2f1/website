import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import type * as Types from '../../../types';

const defaultOptions = {} as const;
export type GetStrategicPlanUpperPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  ourObjectivesHeadingId: Types.Scalars['String']['input'];
  ourObjectivesParagraphsId: Types.Scalars['String']['input'];
  educationHeadingId: Types.Scalars['String']['input'];
  educationParagraphsId: Types.Scalars['String']['input'];
  advocacyHeadingId: Types.Scalars['String']['input'];
  advocacyParagraphsId: Types.Scalars['String']['input'];
  advocacyProgressParagraphsId: Types.Scalars['String']['input'];
  researchHeadingId: Types.Scalars['String']['input'];
  researchParagraphsId: Types.Scalars['String']['input'];
  researchProgressParagraphsId: Types.Scalars['String']['input'];
  getThereHeadingId: Types.Scalars['String']['input'];
  fiveYearsHeadingId: Types.Scalars['String']['input'];
}>;


export type GetStrategicPlanUpperPageQuery = { __typename?: 'Query', ourObjectivesHeading?: { __typename?: 'Heading', content?: string | null } | null, ourObjectivesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, educationHeading?: { __typename?: 'Heading', content?: string | null } | null, educationParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, advocacyHeading?: { __typename?: 'Heading', content?: string | null } | null, advocacyParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, advocacyProgressParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, researchHeading?: { __typename?: 'Heading', content?: string | null } | null, researchParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, researchProgressParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, getThereHeading?: { __typename?: 'Heading', content?: string | null } | null, fiveYearsHeading?: { __typename?: 'Heading', content?: string | null } | null };

export type GetStrategicPlanMiddlePageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  getThereHeadingId: Types.Scalars['String']['input'];
  getThereParagraphsId: Types.Scalars['String']['input'];
  getThereProgressParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetStrategicPlanMiddlePageQuery = { __typename?: 'Query', getThereHeading?: { __typename?: 'Heading', content?: string | null } | null, getThereParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, getThereProgressParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };

export type GetStrategicPlanBottomPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  fiveYearsHeadingId: Types.Scalars['String']['input'];
  fiveYearsParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetStrategicPlanBottomPageQuery = { __typename?: 'Query', fiveYearsHeading?: { __typename?: 'Heading', content?: string | null } | null, fiveYearsParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetStrategicPlanUpperPageDocument = gql`
    query GetStrategicPlanUpperPage($locale: String, $ourObjectivesHeadingId: String!, $ourObjectivesParagraphsId: String!, $educationHeadingId: String!, $educationParagraphsId: String!, $advocacyHeadingId: String!, $advocacyParagraphsId: String!, $advocacyProgressParagraphsId: String!, $researchHeadingId: String!, $researchParagraphsId: String!, $researchProgressParagraphsId: String!, $getThereHeadingId: String!, $fiveYearsHeadingId: String!) {
  ourObjectivesHeading: heading(locale: $locale, id: $ourObjectivesHeadingId) {
    content
  }
  ourObjectivesParagraphs: paragraphs(
    locale: $locale
    id: $ourObjectivesParagraphsId
  ) {
    content {
      json
    }
  }
  educationHeading: heading(locale: $locale, id: $educationHeadingId) {
    content
  }
  educationParagraphs: paragraphs(locale: $locale, id: $educationParagraphsId) {
    content {
      json
    }
  }
  advocacyHeading: heading(locale: $locale, id: $advocacyHeadingId) {
    content
  }
  advocacyParagraphs: paragraphs(locale: $locale, id: $advocacyParagraphsId) {
    content {
      json
    }
  }
  advocacyProgressParagraphs: paragraphs(
    locale: $locale
    id: $advocacyProgressParagraphsId
  ) {
    content {
      json
    }
  }
  researchHeading: heading(locale: $locale, id: $researchHeadingId) {
    content
  }
  researchParagraphs: paragraphs(locale: $locale, id: $researchParagraphsId) {
    content {
      json
    }
  }
  researchProgressParagraphs: paragraphs(
    locale: $locale
    id: $researchProgressParagraphsId
  ) {
    content {
      json
    }
  }
  getThereHeading: heading(locale: $locale, id: $getThereHeadingId) {
    content
  }
  fiveYearsHeading: heading(locale: $locale, id: $fiveYearsHeadingId) {
    content
  }
}
    `;

/**
 * __useGetStrategicPlanUpperPageQuery__
 *
 * To run a query within a React component, call `useGetStrategicPlanUpperPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStrategicPlanUpperPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStrategicPlanUpperPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      ourObjectivesHeadingId: // value for 'ourObjectivesHeadingId'
 *      ourObjectivesParagraphsId: // value for 'ourObjectivesParagraphsId'
 *      educationHeadingId: // value for 'educationHeadingId'
 *      educationParagraphsId: // value for 'educationParagraphsId'
 *      advocacyHeadingId: // value for 'advocacyHeadingId'
 *      advocacyParagraphsId: // value for 'advocacyParagraphsId'
 *      advocacyProgressParagraphsId: // value for 'advocacyProgressParagraphsId'
 *      researchHeadingId: // value for 'researchHeadingId'
 *      researchParagraphsId: // value for 'researchParagraphsId'
 *      researchProgressParagraphsId: // value for 'researchProgressParagraphsId'
 *      getThereHeadingId: // value for 'getThereHeadingId'
 *      fiveYearsHeadingId: // value for 'fiveYearsHeadingId'
 *   },
 * });
 */
export function useGetStrategicPlanUpperPageQuery(baseOptions: Apollo.QueryHookOptions<GetStrategicPlanUpperPageQuery, GetStrategicPlanUpperPageQueryVariables> & ({ variables: GetStrategicPlanUpperPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStrategicPlanUpperPageQuery, GetStrategicPlanUpperPageQueryVariables>(GetStrategicPlanUpperPageDocument, options);
      }
export function useGetStrategicPlanUpperPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStrategicPlanUpperPageQuery, GetStrategicPlanUpperPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStrategicPlanUpperPageQuery, GetStrategicPlanUpperPageQueryVariables>(GetStrategicPlanUpperPageDocument, options);
        }
export function useGetStrategicPlanUpperPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStrategicPlanUpperPageQuery, GetStrategicPlanUpperPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStrategicPlanUpperPageQuery, GetStrategicPlanUpperPageQueryVariables>(GetStrategicPlanUpperPageDocument, options);
        }
export type GetStrategicPlanUpperPageQueryHookResult = ReturnType<typeof useGetStrategicPlanUpperPageQuery>;
export type GetStrategicPlanUpperPageLazyQueryHookResult = ReturnType<typeof useGetStrategicPlanUpperPageLazyQuery>;
export type GetStrategicPlanUpperPageSuspenseQueryHookResult = ReturnType<typeof useGetStrategicPlanUpperPageSuspenseQuery>;
export type GetStrategicPlanUpperPageQueryResult = Apollo.QueryResult<GetStrategicPlanUpperPageQuery, GetStrategicPlanUpperPageQueryVariables>;
export const GetStrategicPlanMiddlePageDocument = gql`
    query GetStrategicPlanMiddlePage($locale: String, $getThereHeadingId: String!, $getThereParagraphsId: String!, $getThereProgressParagraphsId: String!) {
  getThereHeading: heading(locale: $locale, id: $getThereHeadingId) {
    content
  }
  getThereParagraphs: paragraphs(locale: $locale, id: $getThereParagraphsId) {
    content {
      json
    }
  }
  getThereProgressParagraphs: paragraphs(
    locale: $locale
    id: $getThereProgressParagraphsId
  ) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetStrategicPlanMiddlePageQuery__
 *
 * To run a query within a React component, call `useGetStrategicPlanMiddlePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStrategicPlanMiddlePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStrategicPlanMiddlePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      getThereHeadingId: // value for 'getThereHeadingId'
 *      getThereParagraphsId: // value for 'getThereParagraphsId'
 *      getThereProgressParagraphsId: // value for 'getThereProgressParagraphsId'
 *   },
 * });
 */
export function useGetStrategicPlanMiddlePageQuery(baseOptions: Apollo.QueryHookOptions<GetStrategicPlanMiddlePageQuery, GetStrategicPlanMiddlePageQueryVariables> & ({ variables: GetStrategicPlanMiddlePageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStrategicPlanMiddlePageQuery, GetStrategicPlanMiddlePageQueryVariables>(GetStrategicPlanMiddlePageDocument, options);
      }
export function useGetStrategicPlanMiddlePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStrategicPlanMiddlePageQuery, GetStrategicPlanMiddlePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStrategicPlanMiddlePageQuery, GetStrategicPlanMiddlePageQueryVariables>(GetStrategicPlanMiddlePageDocument, options);
        }
export function useGetStrategicPlanMiddlePageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStrategicPlanMiddlePageQuery, GetStrategicPlanMiddlePageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStrategicPlanMiddlePageQuery, GetStrategicPlanMiddlePageQueryVariables>(GetStrategicPlanMiddlePageDocument, options);
        }
export type GetStrategicPlanMiddlePageQueryHookResult = ReturnType<typeof useGetStrategicPlanMiddlePageQuery>;
export type GetStrategicPlanMiddlePageLazyQueryHookResult = ReturnType<typeof useGetStrategicPlanMiddlePageLazyQuery>;
export type GetStrategicPlanMiddlePageSuspenseQueryHookResult = ReturnType<typeof useGetStrategicPlanMiddlePageSuspenseQuery>;
export type GetStrategicPlanMiddlePageQueryResult = Apollo.QueryResult<GetStrategicPlanMiddlePageQuery, GetStrategicPlanMiddlePageQueryVariables>;
export const GetStrategicPlanBottomPageDocument = gql`
    query GetStrategicPlanBottomPage($locale: String, $fiveYearsHeadingId: String!, $fiveYearsParagraphsId: String!) {
  fiveYearsHeading: heading(locale: $locale, id: $fiveYearsHeadingId) {
    content
  }
  fiveYearsParagraphs: paragraphs(locale: $locale, id: $fiveYearsParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetStrategicPlanBottomPageQuery__
 *
 * To run a query within a React component, call `useGetStrategicPlanBottomPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStrategicPlanBottomPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStrategicPlanBottomPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      fiveYearsHeadingId: // value for 'fiveYearsHeadingId'
 *      fiveYearsParagraphsId: // value for 'fiveYearsParagraphsId'
 *   },
 * });
 */
export function useGetStrategicPlanBottomPageQuery(baseOptions: Apollo.QueryHookOptions<GetStrategicPlanBottomPageQuery, GetStrategicPlanBottomPageQueryVariables> & ({ variables: GetStrategicPlanBottomPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStrategicPlanBottomPageQuery, GetStrategicPlanBottomPageQueryVariables>(GetStrategicPlanBottomPageDocument, options);
      }
export function useGetStrategicPlanBottomPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStrategicPlanBottomPageQuery, GetStrategicPlanBottomPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStrategicPlanBottomPageQuery, GetStrategicPlanBottomPageQueryVariables>(GetStrategicPlanBottomPageDocument, options);
        }
export function useGetStrategicPlanBottomPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStrategicPlanBottomPageQuery, GetStrategicPlanBottomPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStrategicPlanBottomPageQuery, GetStrategicPlanBottomPageQueryVariables>(GetStrategicPlanBottomPageDocument, options);
        }
export type GetStrategicPlanBottomPageQueryHookResult = ReturnType<typeof useGetStrategicPlanBottomPageQuery>;
export type GetStrategicPlanBottomPageLazyQueryHookResult = ReturnType<typeof useGetStrategicPlanBottomPageLazyQuery>;
export type GetStrategicPlanBottomPageSuspenseQueryHookResult = ReturnType<typeof useGetStrategicPlanBottomPageSuspenseQuery>;
export type GetStrategicPlanBottomPageQueryResult = Apollo.QueryResult<GetStrategicPlanBottomPageQuery, GetStrategicPlanBottomPageQueryVariables>;
