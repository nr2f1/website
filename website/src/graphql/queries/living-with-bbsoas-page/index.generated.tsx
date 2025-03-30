import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLivingWithBbsoasUpperPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  testAndTherapiesHeadingId: Types.Scalars['String']['input'];
  testAndTherapiesParagraphsId: Types.Scalars['String']['input'];
  registerPatientHeadingId: Types.Scalars['String']['input'];
  registerPatientParagraphsId: Types.Scalars['String']['input'];
  registerPatientLinkId: Types.Scalars['String']['input'];
  understandingBbsoasHeadingId: Types.Scalars['String']['input'];
}>;


export type GetLivingWithBbsoasUpperPageQuery = { __typename?: 'Query', testAndTherapiesHeading?: { __typename?: 'Heading', content?: string | null } | null, testAndTherapiesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientHeading?: { __typename?: 'Heading', content?: string | null } | null, registerPatientParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientCta?: { __typename?: 'Link', content?: string | null, href?: string | null } | null, understandingBbsoasHeading?: { __typename?: 'Heading', content?: string | null } | null };


export const GetLivingWithBbsoasUpperPageDocument = gql`
    query GetLivingWithBbsoasUpperPage($locale: String, $testAndTherapiesHeadingId: String!, $testAndTherapiesParagraphsId: String!, $registerPatientHeadingId: String!, $registerPatientParagraphsId: String!, $registerPatientLinkId: String!, $understandingBbsoasHeadingId: String!) {
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
    content
    href
  }
  understandingBbsoasHeading: heading(
    locale: $locale
    id: $understandingBbsoasHeadingId
  ) {
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