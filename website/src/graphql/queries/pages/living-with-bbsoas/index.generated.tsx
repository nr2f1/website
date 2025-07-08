import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import * as Types from '../../../types';

const defaultOptions = {} as const;
export type GetLivingWithBbsoasUpperPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  testAndTherapiesHeadingId: Types.Scalars['String']['input'];
  testAndTherapiesParagraphsId: Types.Scalars['String']['input'];
  registerPatientHeadingId: Types.Scalars['String']['input'];
  registerPatientParagraphsId: Types.Scalars['String']['input'];
  registerPatientLinkId: Types.Scalars['String']['input'];
  understandingBbsoasHeadingId: Types.Scalars['String']['input'];
  understandingBbsoasParagraphsId: Types.Scalars['String']['input'];
  handingLettersHeadingId: Types.Scalars['String']['input'];
  bbsoasClinicHeadingId: Types.Scalars['String']['input'];
}>;


export type GetLivingWithBbsoasUpperPageQuery = { __typename?: 'Query', testAndTherapiesHeading?: { __typename?: 'Heading', content?: string | null } | null, testAndTherapiesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientHeading?: { __typename?: 'Heading', content?: string | null } | null, registerPatientParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientCta?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, understandingBbsoasHeading?: { __typename?: 'Heading', content?: string | null } | null, understandingBbsoasParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, handingLettersHeading?: { __typename?: 'Heading', content?: string | null } | null, bbsoasClinicHeading?: { __typename?: 'Heading', content?: string | null } | null };

export type GetLivingWithBbsoasBottomPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  handingLettersHeadingId: Types.Scalars['String']['input'];
  handingLettersParagraphsId: Types.Scalars['String']['input'];
  bbsoasClinicHeadingId: Types.Scalars['String']['input'];
  bbsoasClinicParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetLivingWithBbsoasBottomPageQuery = { __typename?: 'Query', handingLettersHeading?: { __typename?: 'Heading', content?: string | null } | null, handingLettersParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, bbsoasClinicHeading?: { __typename?: 'Heading', content?: string | null } | null, bbsoasClinicParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetLivingWithBbsoasUpperPageDocument = gql`
    query GetLivingWithBbsoasUpperPage($locale: String, $testAndTherapiesHeadingId: String!, $testAndTherapiesParagraphsId: String!, $registerPatientHeadingId: String!, $registerPatientParagraphsId: String!, $registerPatientLinkId: String!, $understandingBbsoasHeadingId: String!, $understandingBbsoasParagraphsId: String!, $handingLettersHeadingId: String!, $bbsoasClinicHeadingId: String!) {
  testAndTherapiesHeading: heading(
    locale: $locale
    id: $testAndTherapiesHeadingId
  ) {
    content
  }
  testAndTherapiesParagraphs: paragraphs(
    locale: $locale
    id: $testAndTherapiesParagraphsId
  ) {
    content {
      json
    }
  }
  registerPatientHeading: heading(locale: $locale, id: $registerPatientHeadingId) {
    content
  }
  registerPatientParagraphs: paragraphs(
    locale: $locale
    id: $registerPatientParagraphsId
  ) {
    content {
      json
    }
  }
  registerPatientCta: link(locale: $locale, id: $registerPatientLinkId) {
    target {
      url
    }
    text {
      content
    }
  }
  understandingBbsoasHeading: heading(
    locale: $locale
    id: $understandingBbsoasHeadingId
  ) {
    content
  }
  understandingBbsoasParagraphs: paragraphs(
    locale: $locale
    id: $understandingBbsoasParagraphsId
  ) {
    content {
      json
    }
  }
  handingLettersHeading: heading(locale: $locale, id: $handingLettersHeadingId) {
    content
  }
  bbsoasClinicHeading: heading(locale: $locale, id: $bbsoasClinicHeadingId) {
    content
  }
}
    `;

/**
 * __useGetLivingWithBbsoasUpperPageQuery__
 *
 * To run a query within a React component, call `useGetLivingWithBbsoasUpperPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLivingWithBbsoasUpperPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLivingWithBbsoasUpperPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      testAndTherapiesHeadingId: // value for 'testAndTherapiesHeadingId'
 *      testAndTherapiesParagraphsId: // value for 'testAndTherapiesParagraphsId'
 *      registerPatientHeadingId: // value for 'registerPatientHeadingId'
 *      registerPatientParagraphsId: // value for 'registerPatientParagraphsId'
 *      registerPatientLinkId: // value for 'registerPatientLinkId'
 *      understandingBbsoasHeadingId: // value for 'understandingBbsoasHeadingId'
 *      understandingBbsoasParagraphsId: // value for 'understandingBbsoasParagraphsId'
 *      handingLettersHeadingId: // value for 'handingLettersHeadingId'
 *      bbsoasClinicHeadingId: // value for 'bbsoasClinicHeadingId'
 *   },
 * });
 */
export function useGetLivingWithBbsoasUpperPageQuery(baseOptions: Apollo.QueryHookOptions<GetLivingWithBbsoasUpperPageQuery, GetLivingWithBbsoasUpperPageQueryVariables> & ({ variables: GetLivingWithBbsoasUpperPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLivingWithBbsoasUpperPageQuery, GetLivingWithBbsoasUpperPageQueryVariables>(GetLivingWithBbsoasUpperPageDocument, options);
      }
export function useGetLivingWithBbsoasUpperPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLivingWithBbsoasUpperPageQuery, GetLivingWithBbsoasUpperPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLivingWithBbsoasUpperPageQuery, GetLivingWithBbsoasUpperPageQueryVariables>(GetLivingWithBbsoasUpperPageDocument, options);
        }
export function useGetLivingWithBbsoasUpperPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLivingWithBbsoasUpperPageQuery, GetLivingWithBbsoasUpperPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLivingWithBbsoasUpperPageQuery, GetLivingWithBbsoasUpperPageQueryVariables>(GetLivingWithBbsoasUpperPageDocument, options);
        }
export type GetLivingWithBbsoasUpperPageQueryHookResult = ReturnType<typeof useGetLivingWithBbsoasUpperPageQuery>;
export type GetLivingWithBbsoasUpperPageLazyQueryHookResult = ReturnType<typeof useGetLivingWithBbsoasUpperPageLazyQuery>;
export type GetLivingWithBbsoasUpperPageSuspenseQueryHookResult = ReturnType<typeof useGetLivingWithBbsoasUpperPageSuspenseQuery>;
export type GetLivingWithBbsoasUpperPageQueryResult = Apollo.QueryResult<GetLivingWithBbsoasUpperPageQuery, GetLivingWithBbsoasUpperPageQueryVariables>;
export const GetLivingWithBbsoasBottomPageDocument = gql`
    query GetLivingWithBbsoasBottomPage($locale: String, $handingLettersHeadingId: String!, $handingLettersParagraphsId: String!, $bbsoasClinicHeadingId: String!, $bbsoasClinicParagraphsId: String!) {
  handingLettersHeading: heading(locale: $locale, id: $handingLettersHeadingId) {
    content
  }
  handingLettersParagraphs: paragraphs(
    locale: $locale
    id: $handingLettersParagraphsId
  ) {
    content {
      json
    }
  }
  bbsoasClinicHeading: heading(locale: $locale, id: $bbsoasClinicHeadingId) {
    content
  }
  bbsoasClinicParagraphs: paragraphs(
    locale: $locale
    id: $bbsoasClinicParagraphsId
  ) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetLivingWithBbsoasBottomPageQuery__
 *
 * To run a query within a React component, call `useGetLivingWithBbsoasBottomPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLivingWithBbsoasBottomPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLivingWithBbsoasBottomPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      handingLettersHeadingId: // value for 'handingLettersHeadingId'
 *      handingLettersParagraphsId: // value for 'handingLettersParagraphsId'
 *      bbsoasClinicHeadingId: // value for 'bbsoasClinicHeadingId'
 *      bbsoasClinicParagraphsId: // value for 'bbsoasClinicParagraphsId'
 *   },
 * });
 */
export function useGetLivingWithBbsoasBottomPageQuery(baseOptions: Apollo.QueryHookOptions<GetLivingWithBbsoasBottomPageQuery, GetLivingWithBbsoasBottomPageQueryVariables> & ({ variables: GetLivingWithBbsoasBottomPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLivingWithBbsoasBottomPageQuery, GetLivingWithBbsoasBottomPageQueryVariables>(GetLivingWithBbsoasBottomPageDocument, options);
      }
export function useGetLivingWithBbsoasBottomPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLivingWithBbsoasBottomPageQuery, GetLivingWithBbsoasBottomPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLivingWithBbsoasBottomPageQuery, GetLivingWithBbsoasBottomPageQueryVariables>(GetLivingWithBbsoasBottomPageDocument, options);
        }
export function useGetLivingWithBbsoasBottomPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLivingWithBbsoasBottomPageQuery, GetLivingWithBbsoasBottomPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLivingWithBbsoasBottomPageQuery, GetLivingWithBbsoasBottomPageQueryVariables>(GetLivingWithBbsoasBottomPageDocument, options);
        }
export type GetLivingWithBbsoasBottomPageQueryHookResult = ReturnType<typeof useGetLivingWithBbsoasBottomPageQuery>;
export type GetLivingWithBbsoasBottomPageLazyQueryHookResult = ReturnType<typeof useGetLivingWithBbsoasBottomPageLazyQuery>;
export type GetLivingWithBbsoasBottomPageSuspenseQueryHookResult = ReturnType<typeof useGetLivingWithBbsoasBottomPageSuspenseQuery>;
export type GetLivingWithBbsoasBottomPageQueryResult = Apollo.QueryResult<GetLivingWithBbsoasBottomPageQuery, GetLivingWithBbsoasBottomPageQueryVariables>;