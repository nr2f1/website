import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOrganizationPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  boardHeadingId: Types.Scalars['String']['input'];
  boardParagraphsId: Types.Scalars['String']['input'];
  volunteersHeadingId: Types.Scalars['String']['input'];
  scientificHeadingId: Types.Scalars['String']['input'];
  scientificParagraphsId: Types.Scalars['String']['input'];
  organizationResearchHeadingId: Types.Scalars['String']['input'];
  organizationResearchParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetOrganizationPageQuery = { __typename?: 'Query', boardHeading?: { __typename?: 'Heading', content?: string | null } | null, boardParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, boardMembers?: { __typename?: 'MemberCollection', items: Array<{ __typename?: 'Member', name?: string | null, title?: string | null, email?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null } | null, about?: { __typename?: 'MemberAbout', json: any } | null } | null> } | null, volunteersHeading?: { __typename?: 'Heading', content?: string | null } | null, volunteersMembers?: { __typename?: 'MemberCollection', items: Array<{ __typename?: 'Member', name?: string | null, title?: string | null, email?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null } | null, about?: { __typename?: 'MemberAbout', json: any } | null } | null> } | null, scientificHeading?: { __typename?: 'Heading', content?: string | null } | null, scientificParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, scientificMembers?: { __typename?: 'MemberCollection', items: Array<{ __typename?: 'Member', name?: string | null, title?: string | null, email?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null } | null, about?: { __typename?: 'MemberAbout', json: any } | null } | null> } | null, researchHeading?: { __typename?: 'Heading', content?: string | null } | null, researchParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, researchMembers?: { __typename?: 'MemberCollection', items: Array<{ __typename?: 'Member', name?: string | null, title?: string | null, email?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null } | null, about?: { __typename?: 'MemberAbout', json: any } | null } | null> } | null };


export const GetOrganizationPageDocument = gql`
    query GetOrganizationPage($locale: String, $boardHeadingId: String!, $boardParagraphsId: String!, $volunteersHeadingId: String!, $scientificHeadingId: String!, $scientificParagraphsId: String!, $organizationResearchHeadingId: String!, $organizationResearchParagraphsId: String!) {
  boardHeading: heading(locale: $locale, id: $boardHeadingId) {
    content
  }
  boardParagraphs: paragraphs(locale: $locale, id: $boardParagraphsId) {
    content {
      json
    }
  }
  boardMembers: memberCollection(where: {category: "board"}, order: order_ASC) {
    items {
      image {
        url
        width
      }
      name
      title
      email
      about {
        json
      }
    }
  }
  volunteersHeading: heading(locale: $locale, id: $volunteersHeadingId) {
    content
  }
  volunteersMembers: memberCollection(
    where: {category: "volunteer"}
    order: name_ASC
  ) {
    items {
      image {
        url
        width
      }
      name
      title
      email
      about {
        json
      }
    }
  }
  scientificHeading: heading(locale: $locale, id: $scientificHeadingId) {
    content
  }
  scientificParagraphs: paragraphs(locale: $locale, id: $scientificParagraphsId) {
    content {
      json
    }
  }
  scientificMembers: memberCollection(
    where: {category: "scientific"}
    order: name_ASC
  ) {
    items {
      image {
        url
        width
      }
      name
      title
      email
      about {
        json
      }
    }
  }
  researchHeading: heading(locale: $locale, id: $organizationResearchHeadingId) {
    content
  }
  researchParagraphs: paragraphs(
    locale: $locale
    id: $organizationResearchParagraphsId
  ) {
    content {
      json
    }
  }
  researchMembers: memberCollection(
    where: {category: "research"}
    order: name_ASC
  ) {
    items {
      image {
        url
        width
      }
      name
      title
      email
      about {
        json
      }
    }
  }
}
    `;

/**
 * __useGetOrganizationPageQuery__
 *
 * To run a query within a React component, call `useGetOrganizationPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      boardHeadingId: // value for 'boardHeadingId'
 *      boardParagraphsId: // value for 'boardParagraphsId'
 *      volunteersHeadingId: // value for 'volunteersHeadingId'
 *      scientificHeadingId: // value for 'scientificHeadingId'
 *      scientificParagraphsId: // value for 'scientificParagraphsId'
 *      organizationResearchHeadingId: // value for 'organizationResearchHeadingId'
 *      organizationResearchParagraphsId: // value for 'organizationResearchParagraphsId'
 *   },
 * });
 */
export function useGetOrganizationPageQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationPageQuery, GetOrganizationPageQueryVariables> & ({ variables: GetOrganizationPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>(GetOrganizationPageDocument, options);
      }
export function useGetOrganizationPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>(GetOrganizationPageDocument, options);
        }
export function useGetOrganizationPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>(GetOrganizationPageDocument, options);
        }
export type GetOrganizationPageQueryHookResult = ReturnType<typeof useGetOrganizationPageQuery>;
export type GetOrganizationPageLazyQueryHookResult = ReturnType<typeof useGetOrganizationPageLazyQuery>;
export type GetOrganizationPageSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationPageSuspenseQuery>;
export type GetOrganizationPageQueryResult = Apollo.QueryResult<GetOrganizationPageQuery, GetOrganizationPageQueryVariables>;