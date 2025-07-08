import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import * as Types from '../../types';

const defaultOptions = {} as const;
export type GetWhatWeDoQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  whatWeDoHeadingId: Types.Scalars['String']['input'];
  ourVisionParagraphId: Types.Scalars['String']['input'];
  educatePeopleHeadingId: Types.Scalars['String']['input'];
  educatePeopleParagraphId: Types.Scalars['String']['input'];
  learnMoreCtaId: Types.Scalars['String']['input'];
  empowerFamiliesHeadingId: Types.Scalars['String']['input'];
  empowerFamiliesParagraphId: Types.Scalars['String']['input'];
  driveResearchHeadingId: Types.Scalars['String']['input'];
  driveResearchParagraphId: Types.Scalars['String']['input'];
}>;


export type GetWhatWeDoQuery = { __typename?: 'Query', whatWeDoHeading?: { __typename?: 'Heading', content?: string | null } | null, ourVisionParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, educatePeopleHeading?: { __typename?: 'Heading', content?: string | null } | null, educatePeopleParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, learnMoreCta?: { __typename?: 'Link', content?: string | null } | null, empowerFamiliesHeading?: { __typename?: 'Heading', content?: string | null } | null, empowerFamiliesParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, driveResearchHeading?: { __typename?: 'Heading', content?: string | null } | null, driveResearchParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetWhatWeDoDocument = gql`
    query GetWhatWeDo($locale: String, $whatWeDoHeadingId: String!, $ourVisionParagraphId: String!, $educatePeopleHeadingId: String!, $educatePeopleParagraphId: String!, $learnMoreCtaId: String!, $empowerFamiliesHeadingId: String!, $empowerFamiliesParagraphId: String!, $driveResearchHeadingId: String!, $driveResearchParagraphId: String!) {
  whatWeDoHeading: heading(id: $whatWeDoHeadingId, locale: $locale) {
    content
  }
  ourVisionParagraph: paragraphs(id: $ourVisionParagraphId, locale: $locale) {
    content {
      json
    }
  }
  educatePeopleHeading: heading(id: $educatePeopleHeadingId, locale: $locale) {
    content
  }
  educatePeopleParagraph: paragraphs(
    id: $educatePeopleParagraphId
    locale: $locale
  ) {
    content {
      json
    }
  }
  learnMoreCta: link(id: $learnMoreCtaId, locale: $locale) {
    content
  }
  empowerFamiliesHeading: heading(id: $empowerFamiliesHeadingId, locale: $locale) {
    content
  }
  empowerFamiliesParagraph: paragraphs(
    id: $empowerFamiliesParagraphId
    locale: $locale
  ) {
    content {
      json
    }
  }
  driveResearchHeading: heading(id: $driveResearchHeadingId, locale: $locale) {
    content
  }
  driveResearchParagraph: paragraphs(
    id: $driveResearchParagraphId
    locale: $locale
  ) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetWhatWeDoQuery__
 *
 * To run a query within a React component, call `useGetWhatWeDoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWhatWeDoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWhatWeDoQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      whatWeDoHeadingId: // value for 'whatWeDoHeadingId'
 *      ourVisionParagraphId: // value for 'ourVisionParagraphId'
 *      educatePeopleHeadingId: // value for 'educatePeopleHeadingId'
 *      educatePeopleParagraphId: // value for 'educatePeopleParagraphId'
 *      learnMoreCtaId: // value for 'learnMoreCtaId'
 *      empowerFamiliesHeadingId: // value for 'empowerFamiliesHeadingId'
 *      empowerFamiliesParagraphId: // value for 'empowerFamiliesParagraphId'
 *      driveResearchHeadingId: // value for 'driveResearchHeadingId'
 *      driveResearchParagraphId: // value for 'driveResearchParagraphId'
 *   },
 * });
 */
export function useGetWhatWeDoQuery(baseOptions: Apollo.QueryHookOptions<GetWhatWeDoQuery, GetWhatWeDoQueryVariables> & ({ variables: GetWhatWeDoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWhatWeDoQuery, GetWhatWeDoQueryVariables>(GetWhatWeDoDocument, options);
      }
export function useGetWhatWeDoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWhatWeDoQuery, GetWhatWeDoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWhatWeDoQuery, GetWhatWeDoQueryVariables>(GetWhatWeDoDocument, options);
        }
export function useGetWhatWeDoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWhatWeDoQuery, GetWhatWeDoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWhatWeDoQuery, GetWhatWeDoQueryVariables>(GetWhatWeDoDocument, options);
        }
export type GetWhatWeDoQueryHookResult = ReturnType<typeof useGetWhatWeDoQuery>;
export type GetWhatWeDoLazyQueryHookResult = ReturnType<typeof useGetWhatWeDoLazyQuery>;
export type GetWhatWeDoSuspenseQueryHookResult = ReturnType<typeof useGetWhatWeDoSuspenseQuery>;
export type GetWhatWeDoQueryResult = Apollo.QueryResult<GetWhatWeDoQuery, GetWhatWeDoQueryVariables>;