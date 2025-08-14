import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetSupportUsCardsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  donateHeadingId: Types.Scalars['String']['input'];
  donateParagraphId: Types.Scalars['String']['input'];
  donateCtaId: Types.Scalars['String']['input'];
  fundraiseHeadingId: Types.Scalars['String']['input'];
  fundraiseParagraphId: Types.Scalars['String']['input'];
  fundraiseCtaId: Types.Scalars['String']['input'];
  volunteerHeadingId: Types.Scalars['String']['input'];
  volunteerParagraphId: Types.Scalars['String']['input'];
  volunteerCtaId: Types.Scalars['String']['input'];
}>;


export type GetSupportUsCardsQuery = { __typename?: 'Query', donateHeading?: { __typename?: 'Heading', content?: string | null } | null, donateParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, donateCta?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, fundraiseHeading?: { __typename?: 'Heading', content?: string | null } | null, fundraiseParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, fundraiseCta?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, volunteerHeading?: { __typename?: 'Heading', content?: string | null } | null, volunteerParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, volunteerCta?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null };


export const GetSupportUsCardsDocument = gql`
    query GetSupportUsCards($locale: String, $donateHeadingId: String!, $donateParagraphId: String!, $donateCtaId: String!, $fundraiseHeadingId: String!, $fundraiseParagraphId: String!, $fundraiseCtaId: String!, $volunteerHeadingId: String!, $volunteerParagraphId: String!, $volunteerCtaId: String!) {
  donateHeading: heading(id: $donateHeadingId, locale: $locale) {
    content
  }
  donateParagraph: paragraphs(id: $donateParagraphId, locale: $locale) {
    content {
      json
    }
  }
  donateCta: link(id: $donateCtaId, locale: $locale) {
    text {
      content
    }
    target {
      url
    }
  }
  fundraiseHeading: heading(id: $fundraiseHeadingId, locale: $locale) {
    content
  }
  fundraiseParagraph: paragraphs(id: $fundraiseParagraphId, locale: $locale) {
    content {
      json
    }
  }
  fundraiseCta: link(id: $fundraiseCtaId, locale: $locale) {
    text {
      content
    }
    target {
      url
    }
  }
  volunteerHeading: heading(id: $volunteerHeadingId, locale: $locale) {
    content
  }
  volunteerParagraph: paragraphs(id: $volunteerParagraphId, locale: $locale) {
    content {
      json
    }
  }
  volunteerCta: link(id: $volunteerCtaId, locale: $locale) {
    text {
      content
    }
    target {
      url
    }
  }
}
    `;

/**
 * __useGetSupportUsCardsQuery__
 *
 * To run a query within a React component, call `useGetSupportUsCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupportUsCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupportUsCardsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      donateHeadingId: // value for 'donateHeadingId'
 *      donateParagraphId: // value for 'donateParagraphId'
 *      donateCtaId: // value for 'donateCtaId'
 *      fundraiseHeadingId: // value for 'fundraiseHeadingId'
 *      fundraiseParagraphId: // value for 'fundraiseParagraphId'
 *      fundraiseCtaId: // value for 'fundraiseCtaId'
 *      volunteerHeadingId: // value for 'volunteerHeadingId'
 *      volunteerParagraphId: // value for 'volunteerParagraphId'
 *      volunteerCtaId: // value for 'volunteerCtaId'
 *   },
 * });
 */
export function useGetSupportUsCardsQuery(baseOptions: Apollo.QueryHookOptions<GetSupportUsCardsQuery, GetSupportUsCardsQueryVariables> & ({ variables: GetSupportUsCardsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSupportUsCardsQuery, GetSupportUsCardsQueryVariables>(GetSupportUsCardsDocument, options);
      }
export function useGetSupportUsCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSupportUsCardsQuery, GetSupportUsCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSupportUsCardsQuery, GetSupportUsCardsQueryVariables>(GetSupportUsCardsDocument, options);
        }
export function useGetSupportUsCardsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSupportUsCardsQuery, GetSupportUsCardsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSupportUsCardsQuery, GetSupportUsCardsQueryVariables>(GetSupportUsCardsDocument, options);
        }
export type GetSupportUsCardsQueryHookResult = ReturnType<typeof useGetSupportUsCardsQuery>;
export type GetSupportUsCardsLazyQueryHookResult = ReturnType<typeof useGetSupportUsCardsLazyQuery>;
export type GetSupportUsCardsSuspenseQueryHookResult = ReturnType<typeof useGetSupportUsCardsSuspenseQuery>;
export type GetSupportUsCardsQueryResult = Apollo.QueryResult<GetSupportUsCardsQuery, GetSupportUsCardsQueryVariables>;