import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetResearchPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  researchIntroParagraphsId: Types.Scalars['String']['input'];
  initiativesHeadingId: Types.Scalars['String']['input'];
  registerPatientHeadingId: Types.Scalars['String']['input'];
  registerPatientParagraphsId: Types.Scalars['String']['input'];
  registerPatientLinkId: Types.Scalars['String']['input'];
  initiativesParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetResearchPageQuery = { __typename?: 'Query', researchIntroParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientHeading?: { __typename?: 'Heading', content?: string | null } | null, registerPatientParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, registerPatientCta?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, initiativesHeading?: { __typename?: 'Heading', content?: string | null } | null, initiativesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetResearchPageDocument = gql`
    query GetResearchPage($locale: String, $researchIntroParagraphsId: String!, $initiativesHeadingId: String!, $registerPatientHeadingId: String!, $registerPatientParagraphsId: String!, $registerPatientLinkId: String!, $initiativesParagraphsId: String!) {
  researchIntroParagraphs: paragraphs(
    locale: $locale
    id: $researchIntroParagraphsId
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
  initiativesHeading: heading(locale: $locale, id: $initiativesHeadingId) {
    content
  }
  initiativesParagraphs: paragraphs(locale: $locale, id: $initiativesParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetResearchPageQuery__
 *
 * To run a query within a React component, call `useGetResearchPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResearchPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResearchPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      researchIntroParagraphsId: // value for 'researchIntroParagraphsId'
 *      initiativesHeadingId: // value for 'initiativesHeadingId'
 *      registerPatientHeadingId: // value for 'registerPatientHeadingId'
 *      registerPatientParagraphsId: // value for 'registerPatientParagraphsId'
 *      registerPatientLinkId: // value for 'registerPatientLinkId'
 *      initiativesParagraphsId: // value for 'initiativesParagraphsId'
 *   },
 * });
 */
export function useGetResearchPageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetResearchPageQuery, GetResearchPageQueryVariables> & ({ variables: GetResearchPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetResearchPageQuery, GetResearchPageQueryVariables>(GetResearchPageDocument, options);
      }
export function useGetResearchPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetResearchPageQuery, GetResearchPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetResearchPageQuery, GetResearchPageQueryVariables>(GetResearchPageDocument, options);
        }
export function useGetResearchPageSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetResearchPageQuery, GetResearchPageQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetResearchPageQuery, GetResearchPageQueryVariables>(GetResearchPageDocument, options);
        }
export type GetResearchPageQueryHookResult = ReturnType<typeof useGetResearchPageQuery>;
export type GetResearchPageLazyQueryHookResult = ReturnType<typeof useGetResearchPageLazyQuery>;
export type GetResearchPageSuspenseQueryHookResult = ReturnType<typeof useGetResearchPageSuspenseQuery>;
export type GetResearchPageQueryResult = ApolloReactCommon.QueryResult<GetResearchPageQuery, GetResearchPageQueryVariables>;