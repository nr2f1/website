import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import * as Types from '../../types';

const defaultOptions = {} as const;
export type GetMetadataQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetMetadataQuery = { __typename?: 'Query', htmlHeadMetadata?: { __typename?: 'HtmlHeadMetadata', title?: string | null, description?: string | null, keywords?: string | null } | null };


export const GetMetadataDocument = gql`
    query GetMetadata($id: String!, $locale: String) {
  htmlHeadMetadata(id: $id, locale: $locale) {
    title
    description
    keywords
  }
}
    `;

/**
 * __useGetMetadataQuery__
 *
 * To run a query within a React component, call `useGetMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMetadataQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetMetadataQuery(baseOptions: Apollo.QueryHookOptions<GetMetadataQuery, GetMetadataQueryVariables> & ({ variables: GetMetadataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMetadataQuery, GetMetadataQueryVariables>(GetMetadataDocument, options);
      }
export function useGetMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMetadataQuery, GetMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMetadataQuery, GetMetadataQueryVariables>(GetMetadataDocument, options);
        }
export function useGetMetadataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMetadataQuery, GetMetadataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMetadataQuery, GetMetadataQueryVariables>(GetMetadataDocument, options);
        }
export type GetMetadataQueryHookResult = ReturnType<typeof useGetMetadataQuery>;
export type GetMetadataLazyQueryHookResult = ReturnType<typeof useGetMetadataLazyQuery>;
export type GetMetadataSuspenseQueryHookResult = ReturnType<typeof useGetMetadataSuspenseQuery>;
export type GetMetadataQueryResult = Apollo.QueryResult<GetMetadataQuery, GetMetadataQueryVariables>;
