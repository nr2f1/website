import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetForResearchersPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  patientRegistryHeadingId: Types.Scalars['String']['input'];
  biorepositoryHeadingId: Types.Scalars['String']['input'];
  surveyHeadingId: Types.Scalars['String']['input'];
  registerPatientInOurresearchPageParagraphsId: Types.Scalars['String']['input'];
  biorepositoryParagraphsBeforeAccordionsId: Types.Scalars['String']['input'];
  whatIsBioRepositoryAccordionId: Types.Scalars['String']['input'];
  whyBioRepositoryAccordionId: Types.Scalars['String']['input'];
  anotherSampleAccordionId: Types.Scalars['String']['input'];
  biorepositoryParagraphsAfterAccordionsId: Types.Scalars['String']['input'];
  surveyParagraphsBeforeAccordionsId: Types.Scalars['String']['input'];
  ortasWhatAccordionId: Types.Scalars['String']['input'];
  ortasWhyAccordionId: Types.Scalars['String']['input'];
  ortasWhoAccordionId: Types.Scalars['String']['input'];
  surveyParagraphsAfterAccordionsId: Types.Scalars['String']['input'];
}>;


export type GetForResearchersPageQuery = { __typename?: 'Query', patientRegistryHeading?: { __typename?: 'Heading', content?: string | null } | null, patientRegistryParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, biorepositoryHeading?: { __typename?: 'Heading', content?: string | null } | null, biorepositoryParagraphsBeforeAccordions?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, whatIsBioRepositoryAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, whyBioRepositoryAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, anotherSampleAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, biorepositoryParagraphsAfterAccordions?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, surveyHeading?: { __typename?: 'Heading', content?: string | null } | null, surveyParagraphsBeforeAccordions?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, ortasWhatAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, ortasWhyAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, ortasWhoAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, surveyParagraphsAfterAccordions?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetForResearchersPageDocument = gql`
    query GetForResearchersPage($locale: String, $patientRegistryHeadingId: String!, $biorepositoryHeadingId: String!, $surveyHeadingId: String!, $registerPatientInOurresearchPageParagraphsId: String!, $biorepositoryParagraphsBeforeAccordionsId: String!, $whatIsBioRepositoryAccordionId: String!, $whyBioRepositoryAccordionId: String!, $anotherSampleAccordionId: String!, $biorepositoryParagraphsAfterAccordionsId: String!, $surveyParagraphsBeforeAccordionsId: String!, $ortasWhatAccordionId: String!, $ortasWhyAccordionId: String!, $ortasWhoAccordionId: String!, $surveyParagraphsAfterAccordionsId: String!) {
  patientRegistryHeading: heading(locale: $locale, id: $patientRegistryHeadingId) {
    content
  }
  patientRegistryParagraphs: paragraphs(
    locale: $locale
    id: $registerPatientInOurresearchPageParagraphsId
  ) {
    content {
      json
    }
  }
  biorepositoryHeading: heading(locale: $locale, id: $biorepositoryHeadingId) {
    content
  }
  biorepositoryParagraphsBeforeAccordions: paragraphs(
    locale: $locale
    id: $biorepositoryParagraphsBeforeAccordionsId
  ) {
    content {
      json
    }
  }
  whatIsBioRepositoryAccordion: accordion(
    locale: $locale
    id: $whatIsBioRepositoryAccordionId
  ) {
    title
    content {
      json
    }
  }
  whyBioRepositoryAccordion: accordion(
    locale: $locale
    id: $whyBioRepositoryAccordionId
  ) {
    title
    content {
      json
    }
  }
  anotherSampleAccordion: accordion(
    locale: $locale
    id: $anotherSampleAccordionId
  ) {
    title
    content {
      json
    }
  }
  biorepositoryParagraphsAfterAccordions: paragraphs(
    locale: $locale
    id: $biorepositoryParagraphsAfterAccordionsId
  ) {
    content {
      json
    }
  }
  surveyHeading: heading(locale: $locale, id: $surveyHeadingId) {
    content
  }
  surveyParagraphsBeforeAccordions: paragraphs(
    locale: $locale
    id: $surveyParagraphsBeforeAccordionsId
  ) {
    content {
      json
    }
  }
  ortasWhatAccordion: accordion(locale: $locale, id: $ortasWhatAccordionId) {
    title
    content {
      json
    }
  }
  ortasWhyAccordion: accordion(locale: $locale, id: $ortasWhyAccordionId) {
    title
    content {
      json
    }
  }
  ortasWhoAccordion: accordion(locale: $locale, id: $ortasWhoAccordionId) {
    title
    content {
      json
    }
  }
  surveyParagraphsAfterAccordions: paragraphs(
    locale: $locale
    id: $surveyParagraphsAfterAccordionsId
  ) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetForResearchersPageQuery__
 *
 * To run a query within a React component, call `useGetForResearchersPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetForResearchersPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetForResearchersPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      patientRegistryHeadingId: // value for 'patientRegistryHeadingId'
 *      biorepositoryHeadingId: // value for 'biorepositoryHeadingId'
 *      surveyHeadingId: // value for 'surveyHeadingId'
 *      registerPatientInOurresearchPageParagraphsId: // value for 'registerPatientInOurresearchPageParagraphsId'
 *      biorepositoryParagraphsBeforeAccordionsId: // value for 'biorepositoryParagraphsBeforeAccordionsId'
 *      whatIsBioRepositoryAccordionId: // value for 'whatIsBioRepositoryAccordionId'
 *      whyBioRepositoryAccordionId: // value for 'whyBioRepositoryAccordionId'
 *      anotherSampleAccordionId: // value for 'anotherSampleAccordionId'
 *      biorepositoryParagraphsAfterAccordionsId: // value for 'biorepositoryParagraphsAfterAccordionsId'
 *      surveyParagraphsBeforeAccordionsId: // value for 'surveyParagraphsBeforeAccordionsId'
 *      ortasWhatAccordionId: // value for 'ortasWhatAccordionId'
 *      ortasWhyAccordionId: // value for 'ortasWhyAccordionId'
 *      ortasWhoAccordionId: // value for 'ortasWhoAccordionId'
 *      surveyParagraphsAfterAccordionsId: // value for 'surveyParagraphsAfterAccordionsId'
 *   },
 * });
 */
export function useGetForResearchersPageQuery(baseOptions: Apollo.QueryHookOptions<GetForResearchersPageQuery, GetForResearchersPageQueryVariables> & ({ variables: GetForResearchersPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetForResearchersPageQuery, GetForResearchersPageQueryVariables>(GetForResearchersPageDocument, options);
      }
export function useGetForResearchersPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetForResearchersPageQuery, GetForResearchersPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetForResearchersPageQuery, GetForResearchersPageQueryVariables>(GetForResearchersPageDocument, options);
        }
export function useGetForResearchersPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetForResearchersPageQuery, GetForResearchersPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetForResearchersPageQuery, GetForResearchersPageQueryVariables>(GetForResearchersPageDocument, options);
        }
export type GetForResearchersPageQueryHookResult = ReturnType<typeof useGetForResearchersPageQuery>;
export type GetForResearchersPageLazyQueryHookResult = ReturnType<typeof useGetForResearchersPageLazyQuery>;
export type GetForResearchersPageSuspenseQueryHookResult = ReturnType<typeof useGetForResearchersPageSuspenseQuery>;
export type GetForResearchersPageQueryResult = Apollo.QueryResult<GetForResearchersPageQuery, GetForResearchersPageQueryVariables>;