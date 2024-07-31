import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBoardMembersQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetBoardMembersQuery = { __typename?: 'Query', boardMemberCollection?: { __typename?: 'BoardMemberCollection', items: Array<{ __typename?: 'BoardMember', name?: string | null, title?: string | null, position?: string | null, email?: string | null, bio?: string | null, order?: number | null, picture?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetHeaderQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { __typename?: 'Query', registerPatient?: { __typename?: 'Link', content?: string | null, href?: string | null } | null, donate?: { __typename?: 'Link', content?: string | null, href?: string | null } | null, aboutBbsoas?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, livingWithBbsoas?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, research?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, aboutUs?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, supportUs?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null };


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
export const GetHeaderDocument = gql`
    query GetHeader {
  registerPatient: link(id: "66IWfmWNjm0i2aGv78XJei") {
    content
    href
  }
  donate: link(id: "6PLP5EWQ4JNnx1EwThkq5G") {
    content
    href
  }
  aboutBbsoas: navigationList(id: "2UYFtEkEyzkPoTNsxNmFEb") {
    name
    linksCollection {
      items {
        content
        href
      }
    }
  }
  livingWithBbsoas: navigationList(id: "4jbJTi8bRgkk7pYdKHXU9") {
    name
    linksCollection {
      items {
        content
        href
      }
    }
  }
  research: navigationList(id: "2TeHhRlvLTOomJiHaxNPUP") {
    name
    linksCollection {
      items {
        content
        href
      }
    }
  }
  aboutUs: navigationList(id: "4Oi8Hm5OZH7kK8F6WgLOgg") {
    name
    linksCollection {
      items {
        content
        href
      }
    }
  }
  supportUs: navigationList(id: "Lw95NJKD8APWY3EJRdTkD") {
    name
    linksCollection {
      items {
        content
        href
      }
    }
  }
}
    `;

/**
 * __useGetHeaderQuery__
 *
 * To run a query within a React component, call `useGetHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeaderQuery(baseOptions?: Apollo.QueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
      }
export function useGetHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
        }
export function useGetHeaderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
        }
export type GetHeaderQueryHookResult = ReturnType<typeof useGetHeaderQuery>;
export type GetHeaderLazyQueryHookResult = ReturnType<typeof useGetHeaderLazyQuery>;
export type GetHeaderSuspenseQueryHookResult = ReturnType<typeof useGetHeaderSuspenseQuery>;
export type GetHeaderQueryResult = Apollo.QueryResult<GetHeaderQuery, GetHeaderQueryVariables>;