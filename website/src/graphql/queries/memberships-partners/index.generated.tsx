import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMembershipPartnersQueryVariables = Types.Exact<{
  membershipPartnersId: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetMembershipPartnersQuery = { __typename?: 'Query', navigationList?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null, referenceCollection?: { __typename?: 'LinkReferenceCollection', items: Array<{ __typename?: 'Accordion' } | { __typename?: 'Banner' } | { __typename?: 'BlogPage' } | { __typename?: 'BoardMember' } | { __typename?: 'FundraisingIdea' } | { __typename?: 'Heading' } | { __typename?: 'HtmlHeadMetadata' } | { __typename?: 'Hyperlink' } | { __typename?: 'Image', asset?: { __typename?: 'Asset', url?: string | null } | null } | { __typename?: 'Link' } | { __typename?: 'LinkContent' } | { __typename?: 'Member' } | { __typename?: 'MicrocopyResource' } | { __typename?: 'NavigationList' } | { __typename?: 'Newsletter' } | { __typename?: 'PageHeader' } | { __typename?: 'Paragraphs' } | { __typename?: 'Podcast' } | { __typename?: 'Publication' } | { __typename?: 'ResourceSet' } | { __typename?: 'Volunteer' } | null> } | null } | null> } | null } | null };


export const GetMembershipPartnersDocument = gql`
    query GetMembershipPartners($membershipPartnersId: String!, $locale: String) {
  navigationList(id: $membershipPartnersId, locale: $locale) {
    name
    linksCollection {
      items {
        target {
          url
        }
        text {
          content
        }
        referenceCollection(limit: 5) {
          items {
            ... on Image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetMembershipPartnersQuery__
 *
 * To run a query within a React component, call `useGetMembershipPartnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembershipPartnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembershipPartnersQuery({
 *   variables: {
 *      membershipPartnersId: // value for 'membershipPartnersId'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetMembershipPartnersQuery(baseOptions: Apollo.QueryHookOptions<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables> & ({ variables: GetMembershipPartnersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables>(GetMembershipPartnersDocument, options);
      }
export function useGetMembershipPartnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables>(GetMembershipPartnersDocument, options);
        }
export function useGetMembershipPartnersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables>(GetMembershipPartnersDocument, options);
        }
export type GetMembershipPartnersQueryHookResult = ReturnType<typeof useGetMembershipPartnersQuery>;
export type GetMembershipPartnersLazyQueryHookResult = ReturnType<typeof useGetMembershipPartnersLazyQuery>;
export type GetMembershipPartnersSuspenseQueryHookResult = ReturnType<typeof useGetMembershipPartnersSuspenseQuery>;
export type GetMembershipPartnersQueryResult = Apollo.QueryResult<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables>;