import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetWhatIsBbsoasPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  introId: Types.Scalars['String']['input'];
  whatCausesBbsoasHeadingId: Types.Scalars['String']['input'];
  whatCausesBbsoasParagraphsId: Types.Scalars['String']['input'];
  symptomsOfBbsoasHeadingId: Types.Scalars['String']['input'];
  symptomsOfBbsoasParagraphsId: Types.Scalars['String']['input'];
  developmentDelayAccordionId: Types.Scalars['String']['input'];
  disabilityAccordionId: Types.Scalars['String']['input'];
  visualImpairmentAccordionId: Types.Scalars['String']['input'];
  alacrimaAccordionId: Types.Scalars['String']['input'];
  nystagmusAccordionId: Types.Scalars['String']['input'];
  repetitiveBehaviourAccordionId: Types.Scalars['String']['input'];
  autismAccordionId: Types.Scalars['String']['input'];
  speechDelayAccordionId: Types.Scalars['String']['input'];
  swallingAccordionId: Types.Scalars['String']['input'];
  hypotoniaAccordionId: Types.Scalars['String']['input'];
  epilepsyAccordionId: Types.Scalars['String']['input'];
  adhdAccordionId: Types.Scalars['String']['input'];
  hearingAccordionId: Types.Scalars['String']['input'];
  symptomsVaryHeadingId: Types.Scalars['String']['input'];
  symptomsVaryParagraphsId: Types.Scalars['String']['input'];
  inheritanceHeadingId: Types.Scalars['String']['input'];
  inheritanceParagraphsId: Types.Scalars['String']['input'];
  diagnosisHeadingId: Types.Scalars['String']['input'];
  diagnosisParagraphsId: Types.Scalars['String']['input'];
  prevalenceHeadingId: Types.Scalars['String']['input'];
  prevalenceParagraphsId: Types.Scalars['String']['input'];
  incidenceHeadingId: Types.Scalars['String']['input'];
  incidenceParagraphsId: Types.Scalars['String']['input'];
  managementHeadingId: Types.Scalars['String']['input'];
  managementParagraphsId: Types.Scalars['String']['input'];
  researchHeadingId: Types.Scalars['String']['input'];
  researchParagraphsId: Types.Scalars['String']['input'];
  lifeHeadingId: Types.Scalars['String']['input'];
  lifeParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetWhatIsBbsoasPageQuery = { __typename?: 'Query', intro?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, whatCausesBbsoasHeading?: { __typename?: 'Heading', content?: string | null } | null, whatCausesBbsoasParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, symptomsOfBbsoasHeading?: { __typename?: 'Heading', content?: string | null } | null, symptomsOfBbsoasParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, developmentDelayAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, disabilityAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, visualImpairmentAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, alacrimaAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, nystagmusAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, repetitiveBehaviourAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, autismAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, speechDelayAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, swallingAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, hypotoniaAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, epilepsyAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, adhdAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, hearingAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, symptomsVaryHeading?: { __typename?: 'Heading', content?: string | null } | null, symptomsVaryParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, inheritanceHeading?: { __typename?: 'Heading', content?: string | null } | null, inheritanceParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, diagnosisHeading?: { __typename?: 'Heading', content?: string | null } | null, diagnosisParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, prevalenceHeading?: { __typename?: 'Heading', content?: string | null } | null, prevalenceParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, incidenceHeading?: { __typename?: 'Heading', content?: string | null } | null, incidenceParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, managementHeading?: { __typename?: 'Heading', content?: string | null } | null, managementParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, researchHeading?: { __typename?: 'Heading', content?: string | null } | null, researchParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, lifeHeading?: { __typename?: 'Heading', content?: string | null } | null, lifeParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetWhatIsBbsoasPageDocument = gql`
    query GetWhatIsBbsoasPage($locale: String, $introId: String!, $whatCausesBbsoasHeadingId: String!, $whatCausesBbsoasParagraphsId: String!, $symptomsOfBbsoasHeadingId: String!, $symptomsOfBbsoasParagraphsId: String!, $developmentDelayAccordionId: String!, $disabilityAccordionId: String!, $visualImpairmentAccordionId: String!, $alacrimaAccordionId: String!, $nystagmusAccordionId: String!, $repetitiveBehaviourAccordionId: String!, $autismAccordionId: String!, $speechDelayAccordionId: String!, $swallingAccordionId: String!, $hypotoniaAccordionId: String!, $epilepsyAccordionId: String!, $adhdAccordionId: String!, $hearingAccordionId: String!, $symptomsVaryHeadingId: String!, $symptomsVaryParagraphsId: String!, $inheritanceHeadingId: String!, $inheritanceParagraphsId: String!, $diagnosisHeadingId: String!, $diagnosisParagraphsId: String!, $prevalenceHeadingId: String!, $prevalenceParagraphsId: String!, $incidenceHeadingId: String!, $incidenceParagraphsId: String!, $managementHeadingId: String!, $managementParagraphsId: String!, $researchHeadingId: String!, $researchParagraphsId: String!, $lifeHeadingId: String!, $lifeParagraphsId: String!) {
  intro: paragraphs(locale: $locale, id: $introId) {
    content {
      json
    }
  }
  whatCausesBbsoasHeading: heading(
    locale: $locale
    id: $whatCausesBbsoasHeadingId
  ) {
    content
  }
  whatCausesBbsoasParagraphs: paragraphs(
    locale: $locale
    id: $whatCausesBbsoasParagraphsId
  ) {
    content {
      json
    }
  }
  symptomsOfBbsoasHeading: heading(
    locale: $locale
    id: $symptomsOfBbsoasHeadingId
  ) {
    content
  }
  symptomsOfBbsoasParagraphs: paragraphs(
    locale: $locale
    id: $symptomsOfBbsoasParagraphsId
  ) {
    content {
      json
    }
  }
  developmentDelayAccordion: accordion(
    locale: $locale
    id: $developmentDelayAccordionId
  ) {
    title
    content {
      json
    }
  }
  disabilityAccordion: accordion(locale: $locale, id: $disabilityAccordionId) {
    title
    content {
      json
    }
  }
  visualImpairmentAccordion: accordion(
    locale: $locale
    id: $visualImpairmentAccordionId
  ) {
    title
    content {
      json
    }
  }
  alacrimaAccordion: accordion(locale: $locale, id: $alacrimaAccordionId) {
    title
    content {
      json
    }
  }
  nystagmusAccordion: accordion(locale: $locale, id: $nystagmusAccordionId) {
    title
    content {
      json
    }
  }
  repetitiveBehaviourAccordion: accordion(
    locale: $locale
    id: $repetitiveBehaviourAccordionId
  ) {
    title
    content {
      json
    }
  }
  autismAccordion: accordion(locale: $locale, id: $autismAccordionId) {
    title
    content {
      json
    }
  }
  speechDelayAccordion: accordion(locale: $locale, id: $speechDelayAccordionId) {
    title
    content {
      json
    }
  }
  swallingAccordion: accordion(locale: $locale, id: $swallingAccordionId) {
    title
    content {
      json
    }
  }
  hypotoniaAccordion: accordion(locale: $locale, id: $hypotoniaAccordionId) {
    title
    content {
      json
    }
  }
  epilepsyAccordion: accordion(locale: $locale, id: $epilepsyAccordionId) {
    title
    content {
      json
    }
  }
  adhdAccordion: accordion(locale: $locale, id: $adhdAccordionId) {
    title
    content {
      json
    }
  }
  hearingAccordion: accordion(locale: $locale, id: $hearingAccordionId) {
    title
    content {
      json
    }
  }
  symptomsVaryHeading: heading(locale: $locale, id: $symptomsVaryHeadingId) {
    content
  }
  symptomsVaryParagraphs: paragraphs(
    locale: $locale
    id: $symptomsVaryParagraphsId
  ) {
    content {
      json
    }
  }
  inheritanceHeading: heading(locale: $locale, id: $inheritanceHeadingId) {
    content
  }
  inheritanceParagraphs: paragraphs(locale: $locale, id: $inheritanceParagraphsId) {
    content {
      json
    }
  }
  diagnosisHeading: heading(locale: $locale, id: $diagnosisHeadingId) {
    content
  }
  diagnosisParagraphs: paragraphs(locale: $locale, id: $diagnosisParagraphsId) {
    content {
      json
    }
  }
  prevalenceHeading: heading(locale: $locale, id: $prevalenceHeadingId) {
    content
  }
  prevalenceParagraphs: paragraphs(locale: $locale, id: $prevalenceParagraphsId) {
    content {
      json
    }
  }
  incidenceHeading: heading(locale: $locale, id: $incidenceHeadingId) {
    content
  }
  incidenceParagraphs: paragraphs(locale: $locale, id: $incidenceParagraphsId) {
    content {
      json
    }
  }
  managementHeading: heading(locale: $locale, id: $managementHeadingId) {
    content
  }
  managementParagraphs: paragraphs(locale: $locale, id: $managementParagraphsId) {
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
  lifeHeading: heading(locale: $locale, id: $lifeHeadingId) {
    content
  }
  lifeParagraphs: paragraphs(locale: $locale, id: $lifeParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetWhatIsBbsoasPageQuery__
 *
 * To run a query within a React component, call `useGetWhatIsBbsoasPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWhatIsBbsoasPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWhatIsBbsoasPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      introId: // value for 'introId'
 *      whatCausesBbsoasHeadingId: // value for 'whatCausesBbsoasHeadingId'
 *      whatCausesBbsoasParagraphsId: // value for 'whatCausesBbsoasParagraphsId'
 *      symptomsOfBbsoasHeadingId: // value for 'symptomsOfBbsoasHeadingId'
 *      symptomsOfBbsoasParagraphsId: // value for 'symptomsOfBbsoasParagraphsId'
 *      developmentDelayAccordionId: // value for 'developmentDelayAccordionId'
 *      disabilityAccordionId: // value for 'disabilityAccordionId'
 *      visualImpairmentAccordionId: // value for 'visualImpairmentAccordionId'
 *      alacrimaAccordionId: // value for 'alacrimaAccordionId'
 *      nystagmusAccordionId: // value for 'nystagmusAccordionId'
 *      repetitiveBehaviourAccordionId: // value for 'repetitiveBehaviourAccordionId'
 *      autismAccordionId: // value for 'autismAccordionId'
 *      speechDelayAccordionId: // value for 'speechDelayAccordionId'
 *      swallingAccordionId: // value for 'swallingAccordionId'
 *      hypotoniaAccordionId: // value for 'hypotoniaAccordionId'
 *      epilepsyAccordionId: // value for 'epilepsyAccordionId'
 *      adhdAccordionId: // value for 'adhdAccordionId'
 *      hearingAccordionId: // value for 'hearingAccordionId'
 *      symptomsVaryHeadingId: // value for 'symptomsVaryHeadingId'
 *      symptomsVaryParagraphsId: // value for 'symptomsVaryParagraphsId'
 *      inheritanceHeadingId: // value for 'inheritanceHeadingId'
 *      inheritanceParagraphsId: // value for 'inheritanceParagraphsId'
 *      diagnosisHeadingId: // value for 'diagnosisHeadingId'
 *      diagnosisParagraphsId: // value for 'diagnosisParagraphsId'
 *      prevalenceHeadingId: // value for 'prevalenceHeadingId'
 *      prevalenceParagraphsId: // value for 'prevalenceParagraphsId'
 *      incidenceHeadingId: // value for 'incidenceHeadingId'
 *      incidenceParagraphsId: // value for 'incidenceParagraphsId'
 *      managementHeadingId: // value for 'managementHeadingId'
 *      managementParagraphsId: // value for 'managementParagraphsId'
 *      researchHeadingId: // value for 'researchHeadingId'
 *      researchParagraphsId: // value for 'researchParagraphsId'
 *      lifeHeadingId: // value for 'lifeHeadingId'
 *      lifeParagraphsId: // value for 'lifeParagraphsId'
 *   },
 * });
 */
export function useGetWhatIsBbsoasPageQuery(baseOptions: Apollo.QueryHookOptions<GetWhatIsBbsoasPageQuery, GetWhatIsBbsoasPageQueryVariables> & ({ variables: GetWhatIsBbsoasPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWhatIsBbsoasPageQuery, GetWhatIsBbsoasPageQueryVariables>(GetWhatIsBbsoasPageDocument, options);
      }
export function useGetWhatIsBbsoasPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWhatIsBbsoasPageQuery, GetWhatIsBbsoasPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWhatIsBbsoasPageQuery, GetWhatIsBbsoasPageQueryVariables>(GetWhatIsBbsoasPageDocument, options);
        }
export function useGetWhatIsBbsoasPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWhatIsBbsoasPageQuery, GetWhatIsBbsoasPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWhatIsBbsoasPageQuery, GetWhatIsBbsoasPageQueryVariables>(GetWhatIsBbsoasPageDocument, options);
        }
export type GetWhatIsBbsoasPageQueryHookResult = ReturnType<typeof useGetWhatIsBbsoasPageQuery>;
export type GetWhatIsBbsoasPageLazyQueryHookResult = ReturnType<typeof useGetWhatIsBbsoasPageLazyQuery>;
export type GetWhatIsBbsoasPageSuspenseQueryHookResult = ReturnType<typeof useGetWhatIsBbsoasPageSuspenseQuery>;
export type GetWhatIsBbsoasPageQueryResult = Apollo.QueryResult<GetWhatIsBbsoasPageQuery, GetWhatIsBbsoasPageQueryVariables>;