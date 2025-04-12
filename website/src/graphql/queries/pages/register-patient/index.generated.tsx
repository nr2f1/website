import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRegisterPatientPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  introId: Types.Scalars['String']['input'];
  registerWithUsHeadingId: Types.Scalars['String']['input'];
  registerPatientRegistryHeadingId: Types.Scalars['String']['input'];
  registerClinicalIdHeadingId: Types.Scalars['String']['input'];
  registerWithUsContentId: Types.Scalars['String']['input'];
  registerPatientRegistryContentId: Types.Scalars['String']['input'];
  registerPatientRegistrySignUpLinkId: Types.Scalars['String']['input'];
  registerPatientRegistryLoginLinkId: Types.Scalars['String']['input'];
  whoCanTakePartAccordionId: Types.Scalars['String']['input'];
  whoWillHaveAccessAccordionId: Types.Scalars['String']['input'];
  otherThanFillSurveysAccordionId: Types.Scalars['String']['input'];
  matrixLanguagesAccordionId: Types.Scalars['String']['input'];
  whoContactAccordionId: Types.Scalars['String']['input'];
  registerClinicalIdContentId: Types.Scalars['String']['input'];
  registerContentIdLinkId: Types.Scalars['String']['input'];
}>;


export type GetRegisterPatientPageQuery = { __typename?: 'Query', intro?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerWithUsHeading?: { __typename?: 'Heading', content?: string | null } | null, registerPatientRegistryHeading?: { __typename?: 'Heading', content?: string | null } | null, registerClinicalIdHeading?: { __typename?: 'Heading', content?: string | null } | null, registerWithUsContent?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientRegistryContent?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientRegistrySignUpLink?: { __typename?: 'Link', content?: string | null, href?: string | null } | null, registerPatientRegistryLoginLink?: { __typename?: 'Link', content?: string | null, href?: string | null } | null, whoCanTakePartAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, whoWillHaveAccessAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, otherThanFillSurveysAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, matrixLanguagesAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, whoContactAccordion?: { __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null, registerClinicalIdContent?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerContentIdLink?: { __typename?: 'Link', content?: string | null, href?: string | null } | null };


export const GetRegisterPatientPageDocument = gql`
    query GetRegisterPatientPage($locale: String, $introId: String!, $registerWithUsHeadingId: String!, $registerPatientRegistryHeadingId: String!, $registerClinicalIdHeadingId: String!, $registerWithUsContentId: String!, $registerPatientRegistryContentId: String!, $registerPatientRegistrySignUpLinkId: String!, $registerPatientRegistryLoginLinkId: String!, $whoCanTakePartAccordionId: String!, $whoWillHaveAccessAccordionId: String!, $otherThanFillSurveysAccordionId: String!, $matrixLanguagesAccordionId: String!, $whoContactAccordionId: String!, $registerClinicalIdContentId: String!, $registerContentIdLinkId: String!) {
  intro: paragraphs(locale: $locale, id: $introId) {
    content {
      json
    }
  }
  registerWithUsHeading: heading(locale: $locale, id: $registerWithUsHeadingId) {
    content
  }
  registerPatientRegistryHeading: heading(
    locale: $locale
    id: $registerPatientRegistryHeadingId
  ) {
    content
  }
  registerClinicalIdHeading: heading(
    locale: $locale
    id: $registerClinicalIdHeadingId
  ) {
    content
  }
  registerWithUsContent: paragraphs(locale: $locale, id: $registerWithUsContentId) {
    content {
      json
    }
  }
  registerPatientRegistryContent: paragraphs(
    locale: $locale
    id: $registerPatientRegistryContentId
  ) {
    content {
      json
    }
  }
  registerPatientRegistrySignUpLink: link(
    locale: $locale
    id: $registerPatientRegistrySignUpLinkId
  ) {
    content
    href
  }
  registerPatientRegistryLoginLink: link(
    locale: $locale
    id: $registerPatientRegistryLoginLinkId
  ) {
    content
    href
  }
  whoCanTakePartAccordion: accordion(
    locale: $locale
    id: $whoCanTakePartAccordionId
  ) {
    title
    content {
      json
    }
  }
  whoWillHaveAccessAccordion: accordion(
    locale: $locale
    id: $whoWillHaveAccessAccordionId
  ) {
    title
    content {
      json
    }
  }
  otherThanFillSurveysAccordion: accordion(
    locale: $locale
    id: $otherThanFillSurveysAccordionId
  ) {
    title
    content {
      json
    }
  }
  matrixLanguagesAccordion: accordion(
    locale: $locale
    id: $matrixLanguagesAccordionId
  ) {
    title
    content {
      json
    }
  }
  whoContactAccordion: accordion(locale: $locale, id: $whoContactAccordionId) {
    title
    content {
      json
    }
  }
  registerClinicalIdContent: paragraphs(
    locale: $locale
    id: $registerClinicalIdContentId
  ) {
    content {
      json
    }
  }
  registerContentIdLink: link(locale: $locale, id: $registerContentIdLinkId) {
    content
    href
  }
}
    `;

/**
 * __useGetRegisterPatientPageQuery__
 *
 * To run a query within a React component, call `useGetRegisterPatientPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisterPatientPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisterPatientPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      introId: // value for 'introId'
 *      registerWithUsHeadingId: // value for 'registerWithUsHeadingId'
 *      registerPatientRegistryHeadingId: // value for 'registerPatientRegistryHeadingId'
 *      registerClinicalIdHeadingId: // value for 'registerClinicalIdHeadingId'
 *      registerWithUsContentId: // value for 'registerWithUsContentId'
 *      registerPatientRegistryContentId: // value for 'registerPatientRegistryContentId'
 *      registerPatientRegistrySignUpLinkId: // value for 'registerPatientRegistrySignUpLinkId'
 *      registerPatientRegistryLoginLinkId: // value for 'registerPatientRegistryLoginLinkId'
 *      whoCanTakePartAccordionId: // value for 'whoCanTakePartAccordionId'
 *      whoWillHaveAccessAccordionId: // value for 'whoWillHaveAccessAccordionId'
 *      otherThanFillSurveysAccordionId: // value for 'otherThanFillSurveysAccordionId'
 *      matrixLanguagesAccordionId: // value for 'matrixLanguagesAccordionId'
 *      whoContactAccordionId: // value for 'whoContactAccordionId'
 *      registerClinicalIdContentId: // value for 'registerClinicalIdContentId'
 *      registerContentIdLinkId: // value for 'registerContentIdLinkId'
 *   },
 * });
 */
export function useGetRegisterPatientPageQuery(baseOptions: Apollo.QueryHookOptions<GetRegisterPatientPageQuery, GetRegisterPatientPageQueryVariables> & ({ variables: GetRegisterPatientPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisterPatientPageQuery, GetRegisterPatientPageQueryVariables>(GetRegisterPatientPageDocument, options);
      }
export function useGetRegisterPatientPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisterPatientPageQuery, GetRegisterPatientPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisterPatientPageQuery, GetRegisterPatientPageQueryVariables>(GetRegisterPatientPageDocument, options);
        }
export function useGetRegisterPatientPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRegisterPatientPageQuery, GetRegisterPatientPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRegisterPatientPageQuery, GetRegisterPatientPageQueryVariables>(GetRegisterPatientPageDocument, options);
        }
export type GetRegisterPatientPageQueryHookResult = ReturnType<typeof useGetRegisterPatientPageQuery>;
export type GetRegisterPatientPageLazyQueryHookResult = ReturnType<typeof useGetRegisterPatientPageLazyQuery>;
export type GetRegisterPatientPageSuspenseQueryHookResult = ReturnType<typeof useGetRegisterPatientPageSuspenseQuery>;
export type GetRegisterPatientPageQueryResult = Apollo.QueryResult<GetRegisterPatientPageQuery, GetRegisterPatientPageQueryVariables>;