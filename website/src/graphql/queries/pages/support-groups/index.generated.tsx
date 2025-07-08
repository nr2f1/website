import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import * as Types from '../../../types';

const defaultOptions = {} as const;
export type GetSupportGroupsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  supportGroupsIntroParagraphsId: Types.Scalars['String']['input'];
  virtualParentsHeadingId: Types.Scalars['String']['input'];
  virtualParentsParagraphsId: Types.Scalars['String']['input'];
  dadsHeadingId: Types.Scalars['String']['input'];
  dadsParagraphsId: Types.Scalars['String']['input'];
  caregiversHeadingId: Types.Scalars['String']['input'];
  spanishParentsHeadingId: Types.Scalars['String']['input'];
  caregiverParagraphsId: Types.Scalars['String']['input'];
  spanishParentsParagraphsId: Types.Scalars['String']['input'];
  facebookHeadingId: Types.Scalars['String']['input'];
  facebookParagraphsId: Types.Scalars['String']['input'];
  dadsUkHeadingId: Types.Scalars['String']['input'];
  dadsUkParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetSupportGroupsPageQuery = { __typename?: 'Query', intropParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, virtualParentsHeading?: { __typename?: 'Heading', content?: string | null } | null, virtualParentsParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, dadsHeading?: { __typename?: 'Heading', content?: string | null } | null, dadsParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, caregiversHeading?: { __typename?: 'Heading', content?: string | null } | null, caregiverParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, spanishParentsHeading?: { __typename?: 'Heading', content?: string | null } | null, spanishParentsParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, facebookHeading?: { __typename?: 'Heading', content?: string | null } | null, facebookParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, dadsUkHeading?: { __typename?: 'Heading', content?: string | null } | null, dadsUkParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetSupportGroupsPageDocument = gql`
    query GetSupportGroupsPage($locale: String, $supportGroupsIntroParagraphsId: String!, $virtualParentsHeadingId: String!, $virtualParentsParagraphsId: String!, $dadsHeadingId: String!, $dadsParagraphsId: String!, $caregiversHeadingId: String!, $spanishParentsHeadingId: String!, $caregiverParagraphsId: String!, $spanishParentsParagraphsId: String!, $facebookHeadingId: String!, $facebookParagraphsId: String!, $dadsUkHeadingId: String!, $dadsUkParagraphsId: String!) {
  intropParagraphs: paragraphs(
    locale: $locale
    id: $supportGroupsIntroParagraphsId
  ) {
    content {
      json
    }
  }
  virtualParentsHeading: heading(locale: $locale, id: $virtualParentsHeadingId) {
    content
  }
  virtualParentsParagraphs: paragraphs(
    locale: $locale
    id: $virtualParentsParagraphsId
  ) {
    content {
      json
    }
  }
  dadsHeading: heading(locale: $locale, id: $dadsHeadingId) {
    content
  }
  dadsParagraphs: paragraphs(locale: $locale, id: $dadsParagraphsId) {
    content {
      json
    }
  }
  caregiversHeading: heading(locale: $locale, id: $caregiversHeadingId) {
    content
  }
  caregiverParagraphs: paragraphs(locale: $locale, id: $caregiverParagraphsId) {
    content {
      json
    }
  }
  spanishParentsHeading: heading(locale: $locale, id: $spanishParentsHeadingId) {
    content
  }
  spanishParentsParagraphs: paragraphs(
    locale: $locale
    id: $spanishParentsParagraphsId
  ) {
    content {
      json
    }
  }
  facebookHeading: heading(locale: $locale, id: $facebookHeadingId) {
    content
  }
  facebookParagraphs: paragraphs(locale: $locale, id: $facebookParagraphsId) {
    content {
      json
    }
  }
  dadsUkHeading: heading(locale: $locale, id: $dadsUkHeadingId) {
    content
  }
  dadsUkParagraphs: paragraphs(locale: $locale, id: $dadsUkParagraphsId) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetSupportGroupsPageQuery__
 *
 * To run a query within a React component, call `useGetSupportGroupsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupportGroupsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupportGroupsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      supportGroupsIntroParagraphsId: // value for 'supportGroupsIntroParagraphsId'
 *      virtualParentsHeadingId: // value for 'virtualParentsHeadingId'
 *      virtualParentsParagraphsId: // value for 'virtualParentsParagraphsId'
 *      dadsHeadingId: // value for 'dadsHeadingId'
 *      dadsParagraphsId: // value for 'dadsParagraphsId'
 *      caregiversHeadingId: // value for 'caregiversHeadingId'
 *      spanishParentsHeadingId: // value for 'spanishParentsHeadingId'
 *      caregiverParagraphsId: // value for 'caregiverParagraphsId'
 *      spanishParentsParagraphsId: // value for 'spanishParentsParagraphsId'
 *      facebookHeadingId: // value for 'facebookHeadingId'
 *      facebookParagraphsId: // value for 'facebookParagraphsId'
 *      dadsUkHeadingId: // value for 'dadsUkHeadingId'
 *      dadsUkParagraphsId: // value for 'dadsUkParagraphsId'
 *   },
 * });
 */
export function useGetSupportGroupsPageQuery(baseOptions: Apollo.QueryHookOptions<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables> & ({ variables: GetSupportGroupsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>(GetSupportGroupsPageDocument, options);
      }
export function useGetSupportGroupsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>(GetSupportGroupsPageDocument, options);
        }
export function useGetSupportGroupsPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>(GetSupportGroupsPageDocument, options);
        }
export type GetSupportGroupsPageQueryHookResult = ReturnType<typeof useGetSupportGroupsPageQuery>;
export type GetSupportGroupsPageLazyQueryHookResult = ReturnType<typeof useGetSupportGroupsPageLazyQuery>;
export type GetSupportGroupsPageSuspenseQueryHookResult = ReturnType<typeof useGetSupportGroupsPageSuspenseQuery>;
export type GetSupportGroupsPageQueryResult = Apollo.QueryResult<GetSupportGroupsPageQuery, GetSupportGroupsPageQueryVariables>;