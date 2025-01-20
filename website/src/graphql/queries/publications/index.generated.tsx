import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPublicationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPublicationsQuery = { __typename?: 'Query', patient?: { __typename?: 'PublicationCollection', items: Array<{ __typename?: 'Publication', title?: string | null, dateOfPublication?: any | null, link?: string | null, asset?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, gene?: { __typename?: 'PublicationCollection', items: Array<{ __typename?: 'Publication', title?: string | null, dateOfPublication?: any | null, link?: string | null, asset?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetPublicationsDocument = gql`
    query GetPublications {
  patient: publicationCollection(
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
  gene: publicationCollection(
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
 * __useGetPublicationsQuery__
 *
 * To run a query within a React component, call `useGetPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPublicationsQuery(baseOptions?: Apollo.QueryHookOptions<GetPublicationsQuery, GetPublicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicationsQuery, GetPublicationsQueryVariables>(GetPublicationsDocument, options);
      }
export function useGetPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicationsQuery, GetPublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicationsQuery, GetPublicationsQueryVariables>(GetPublicationsDocument, options);
        }
export function useGetPublicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPublicationsQuery, GetPublicationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPublicationsQuery, GetPublicationsQueryVariables>(GetPublicationsDocument, options);
        }
export type GetPublicationsQueryHookResult = ReturnType<typeof useGetPublicationsQuery>;
export type GetPublicationsLazyQueryHookResult = ReturnType<typeof useGetPublicationsLazyQuery>;
export type GetPublicationsSuspenseQueryHookResult = ReturnType<typeof useGetPublicationsSuspenseQuery>;
export type GetPublicationsQueryResult = Apollo.QueryResult<GetPublicationsQuery, GetPublicationsQueryVariables>;