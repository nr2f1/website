import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetStrategicPlanPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  ourObjectivesHeadingId: Types.Scalars['String']['input'];
  ourObjectivesParagraphsId: Types.Scalars['String']['input'];
  educationHeadingId: Types.Scalars['String']['input'];
  educationParagraphsId: Types.Scalars['String']['input'];
  advocacyHeadingId: Types.Scalars['String']['input'];
  advocacyParagraphsId: Types.Scalars['String']['input'];
  advocacyProgressParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetStrategicPlanPageQuery = { __typename?: 'Query', ourObjectivesHeading?: { __typename?: 'Heading', content?: string | null } | null, ourObjectivesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, educationHeading?: { __typename?: 'Heading', content?: string | null } | null, educationParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, advocacyHeading?: { __typename?: 'Heading', content?: string | null } | null, advocacyParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, advocacyProgressParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetStrategicPlanPageDocument = gql`
    query GetStrategicPlanPage($locale: String, $ourObjectivesHeadingId: String!, $ourObjectivesParagraphsId: String!, $educationHeadingId: String!, $educationParagraphsId: String!, $advocacyHeadingId: String!, $advocacyParagraphsId: String!, $advocacyProgressParagraphsId: String!) {
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
}
    `;

/**
 * __useGetStrategicPlanPageQuery__
 *
 * To run a query within a React component, call `useGetStrategicPlanPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStrategicPlanPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStrategicPlanPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      ourObjectivesHeadingId: // value for 'ourObjectivesHeadingId'
 *      ourObjectivesParagraphsId: // value for 'ourObjectivesParagraphsId'
 *      educationHeadingId: // value for 'educationHeadingId'
 *      educationParagraphsId: // value for 'educationParagraphsId'
 *      advocacyHeadingId: // value for 'advocacyHeadingId'
 *      advocacyParagraphsId: // value for 'advocacyParagraphsId'
 *      advocacyProgressParagraphsId: // value for 'advocacyProgressParagraphsId'
 *   },
 * });
 */
export function useGetStrategicPlanPageQuery(baseOptions: Apollo.QueryHookOptions<GetStrategicPlanPageQuery, GetStrategicPlanPageQueryVariables> & ({ variables: GetStrategicPlanPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStrategicPlanPageQuery, GetStrategicPlanPageQueryVariables>(GetStrategicPlanPageDocument, options);
      }
export function useGetStrategicPlanPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStrategicPlanPageQuery, GetStrategicPlanPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStrategicPlanPageQuery, GetStrategicPlanPageQueryVariables>(GetStrategicPlanPageDocument, options);
        }
export function useGetStrategicPlanPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStrategicPlanPageQuery, GetStrategicPlanPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStrategicPlanPageQuery, GetStrategicPlanPageQueryVariables>(GetStrategicPlanPageDocument, options);
        }
export type GetStrategicPlanPageQueryHookResult = ReturnType<typeof useGetStrategicPlanPageQuery>;
export type GetStrategicPlanPageLazyQueryHookResult = ReturnType<typeof useGetStrategicPlanPageLazyQuery>;
export type GetStrategicPlanPageSuspenseQueryHookResult = ReturnType<typeof useGetStrategicPlanPageSuspenseQuery>;
export type GetStrategicPlanPageQueryResult = Apollo.QueryResult<GetStrategicPlanPageQuery, GetStrategicPlanPageQueryVariables>;