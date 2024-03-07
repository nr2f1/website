import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBoardMembersQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetBoardMembersQuery = { __typename?: 'Query', boardMemberCollection?: { __typename?: 'BoardMemberCollection', items: Array<{ __typename?: 'BoardMember', name?: string | null, title?: string | null, position?: string | null, email?: string | null, bio?: string | null, order?: number | null, picture?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetBoardMembersDocument = gql`
    query GetBoardMembers($locale: String) {
  boardMemberCollection {
    items {
      name
      title(locale: $locale)
      position(locale: $locale)
      email
      bio(locale: $locale)
      order
      picture {
        url
      }
    }
  }
}
    `;

/**
 * __useGetBoardMembersQuery__
 *
 * To run a query within a React component, call `useGetBoardMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardMembersQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetBoardMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetBoardMembersQuery, GetBoardMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardMembersQuery, GetBoardMembersQueryVariables>(GetBoardMembersDocument, options);
      }
export function useGetBoardMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardMembersQuery, GetBoardMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardMembersQuery, GetBoardMembersQueryVariables>(GetBoardMembersDocument, options);
        }
export function useGetBoardMembersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBoardMembersQuery, GetBoardMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBoardMembersQuery, GetBoardMembersQueryVariables>(GetBoardMembersDocument, options);
        }
export type GetBoardMembersQueryHookResult = ReturnType<typeof useGetBoardMembersQuery>;
export type GetBoardMembersLazyQueryHookResult = ReturnType<typeof useGetBoardMembersLazyQuery>;
export type GetBoardMembersSuspenseQueryHookResult = ReturnType<typeof useGetBoardMembersSuspenseQuery>;
export type GetBoardMembersQueryResult = Apollo.QueryResult<GetBoardMembersQuery, GetBoardMembersQueryVariables>;