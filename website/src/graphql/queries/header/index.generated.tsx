import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetHeaderQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  registerPatientId: Types.Scalars['String']['input'];
  donateId: Types.Scalars['String']['input'];
  aboutBbsoasId: Types.Scalars['String']['input'];
  livingWithBbsoasId: Types.Scalars['String']['input'];
  researchId: Types.Scalars['String']['input'];
  aboutUsId: Types.Scalars['String']['input'];
  supportUsId: Types.Scalars['String']['input'];
}>;


export type GetHeaderQuery = { __typename?: 'Query', registerPatient?: { __typename?: 'Link', content?: string | null, href?: string | null } | null, donate?: { __typename?: 'Link', content?: string | null, href?: string | null } | null, aboutBbsoas?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, livingWithBbsoas?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, research?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, aboutUs?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null, supportUs?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', content?: string | null, href?: string | null } | null> } | null } | null };


export const GetHeaderDocument = gql`
    query GetHeader($locale: String, $registerPatientId: String!, $donateId: String!, $aboutBbsoasId: String!, $livingWithBbsoasId: String!, $researchId: String!, $aboutUsId: String!, $supportUsId: String!) {
  registerPatient: link(id: $registerPatientId, locale: $locale) {
    content
    href
  }
  donate: link(id: $donateId, locale: $locale) {
    content
    href
  }
  aboutBbsoas: navigationList(id: $aboutBbsoasId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        content
        href
      }
    }
  }
  livingWithBbsoas: navigationList(id: $livingWithBbsoasId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        content
        href
      }
    }
  }
  research: navigationList(id: $researchId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        content
        href
      }
    }
  }
  aboutUs: navigationList(id: $aboutUsId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        content
        href
      }
    }
  }
  supportUs: navigationList(id: $supportUsId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
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
 *      locale: // value for 'locale'
 *      registerPatientId: // value for 'registerPatientId'
 *      donateId: // value for 'donateId'
 *      aboutBbsoasId: // value for 'aboutBbsoasId'
 *      livingWithBbsoasId: // value for 'livingWithBbsoasId'
 *      researchId: // value for 'researchId'
 *      aboutUsId: // value for 'aboutUsId'
 *      supportUsId: // value for 'supportUsId'
 *   },
 * });
 */
export function useGetHeaderQuery(baseOptions: Apollo.QueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables> & ({ variables: GetHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
      }
export function useGetHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
        }
export function useGetHeaderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
        }
export type GetHeaderQueryHookResult = ReturnType<typeof useGetHeaderQuery>;
export type GetHeaderLazyQueryHookResult = ReturnType<typeof useGetHeaderLazyQuery>;
export type GetHeaderSuspenseQueryHookResult = ReturnType<typeof useGetHeaderSuspenseQuery>;
export type GetHeaderQueryResult = Apollo.QueryResult<GetHeaderQuery, GetHeaderQueryVariables>;