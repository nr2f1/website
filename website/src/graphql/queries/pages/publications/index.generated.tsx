import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import * as Types from '../../../types';

const defaultOptions = {} as const;
export type GetPublicationsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  patientResearchHeadingId: Types.Scalars['String']['input'];
  patientResearchContentId: Types.Scalars['String']['input'];
  geneResearchHeadingId: Types.Scalars['String']['input'];
  geneResearchContentId: Types.Scalars['String']['input'];
}>;


export type GetPublicationsPageQuery = { __typename?: 'Query', patientResearchHeading?: { __typename?: 'Heading', content?: string | null } | null, patientResearchContent?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, patientPublications?: { __typename?: 'PublicationCollection', items: Array<{ __typename?: 'Publication', title?: string | null, dateOfPublication?: any | null, link?: string | null, asset?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, geneResearchHeading?: { __typename?: 'Heading', content?: string | null } | null, geneResearchContent?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, genePublications?: { __typename?: 'PublicationCollection', items: Array<{ __typename?: 'Publication', title?: string | null, dateOfPublication?: any | null, link?: string | null, asset?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetPublicationsPageDocument = gql`
    query GetPublicationsPage($locale: String, $patientResearchHeadingId: String!, $patientResearchContentId: String!, $geneResearchHeadingId: String!, $geneResearchContentId: String!) {
  patientResearchHeading: heading(locale: $locale, id: $patientResearchHeadingId) {
    content
  }
  patientResearchContent: paragraphs(
    locale: $locale
    id: $patientResearchContentId
  ) {
    content {
      json
    }
  }
  patientPublications: publicationCollection(
    where: {typeOfResearch: "Patient"}
    order: dateOfPublication_DESC
  ) {
    items {
      title
      dateOfPublication
      asset {
        url
      }
      link
    }
  }
  geneResearchHeading: heading(locale: $locale, id: $geneResearchHeadingId) {
    content
  }
  geneResearchContent: paragraphs(locale: $locale, id: $geneResearchContentId) {
    content {
      json
    }
  }
  genePublications: publicationCollection(
    where: {typeOfResearch: "Gene"}
    order: dateOfPublication_DESC
  ) {
    items {
      title
      dateOfPublication
      asset {
        url
      }
      link
    }
  }
}
    `;

/**
 * __useGetPublicationsPageQuery__
 *
 * To run a query within a React component, call `useGetPublicationsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicationsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicationsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      patientResearchHeadingId: // value for 'patientResearchHeadingId'
 *      patientResearchContentId: // value for 'patientResearchContentId'
 *      geneResearchHeadingId: // value for 'geneResearchHeadingId'
 *      geneResearchContentId: // value for 'geneResearchContentId'
 *   },
 * });
 */
export function useGetPublicationsPageQuery(baseOptions: Apollo.QueryHookOptions<GetPublicationsPageQuery, GetPublicationsPageQueryVariables> & ({ variables: GetPublicationsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicationsPageQuery, GetPublicationsPageQueryVariables>(GetPublicationsPageDocument, options);
      }
export function useGetPublicationsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicationsPageQuery, GetPublicationsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicationsPageQuery, GetPublicationsPageQueryVariables>(GetPublicationsPageDocument, options);
        }
export function useGetPublicationsPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPublicationsPageQuery, GetPublicationsPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPublicationsPageQuery, GetPublicationsPageQueryVariables>(GetPublicationsPageDocument, options);
        }
export type GetPublicationsPageQueryHookResult = ReturnType<typeof useGetPublicationsPageQuery>;
export type GetPublicationsPageLazyQueryHookResult = ReturnType<typeof useGetPublicationsPageLazyQuery>;
export type GetPublicationsPageSuspenseQueryHookResult = ReturnType<typeof useGetPublicationsPageSuspenseQuery>;
export type GetPublicationsPageQueryResult = Apollo.QueryResult<GetPublicationsPageQuery, GetPublicationsPageQueryVariables>;