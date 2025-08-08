import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFundraisingCampaignsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  fundraisingCampaignsHeadingId: Types.Scalars['String']['input'];
  fundraisingCampaignsLinkId: Types.Scalars['String']['input'];
}>;


export type GetFundraisingCampaignsQuery = { __typename?: 'Query', fundraisingCampaignsHeading?: { __typename?: 'Heading', content?: string | null } | null, fundraisingCampaignsLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null };


export const GetFundraisingCampaignsDocument = gql`
    query GetFundraisingCampaigns($locale: String, $fundraisingCampaignsHeadingId: String!, $fundraisingCampaignsLinkId: String!) {
  fundraisingCampaignsHeading: heading(
    id: $fundraisingCampaignsHeadingId
    locale: $locale
  ) {
    content
  }
  fundraisingCampaignsLink: link(locale: $locale, id: $fundraisingCampaignsLinkId) {
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
 * __useGetFundraisingCampaignsQuery__
 *
 * To run a query within a React component, call `useGetFundraisingCampaignsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFundraisingCampaignsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFundraisingCampaignsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      fundraisingCampaignsHeadingId: // value for 'fundraisingCampaignsHeadingId'
 *      fundraisingCampaignsLinkId: // value for 'fundraisingCampaignsLinkId'
 *   },
 * });
 */
export function useGetFundraisingCampaignsQuery(baseOptions: Apollo.QueryHookOptions<GetFundraisingCampaignsQuery, GetFundraisingCampaignsQueryVariables> & ({ variables: GetFundraisingCampaignsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFundraisingCampaignsQuery, GetFundraisingCampaignsQueryVariables>(GetFundraisingCampaignsDocument, options);
      }
export function useGetFundraisingCampaignsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFundraisingCampaignsQuery, GetFundraisingCampaignsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFundraisingCampaignsQuery, GetFundraisingCampaignsQueryVariables>(GetFundraisingCampaignsDocument, options);
        }
export function useGetFundraisingCampaignsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFundraisingCampaignsQuery, GetFundraisingCampaignsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFundraisingCampaignsQuery, GetFundraisingCampaignsQueryVariables>(GetFundraisingCampaignsDocument, options);
        }
export type GetFundraisingCampaignsQueryHookResult = ReturnType<typeof useGetFundraisingCampaignsQuery>;
export type GetFundraisingCampaignsLazyQueryHookResult = ReturnType<typeof useGetFundraisingCampaignsLazyQuery>;
export type GetFundraisingCampaignsSuspenseQueryHookResult = ReturnType<typeof useGetFundraisingCampaignsSuspenseQuery>;
export type GetFundraisingCampaignsQueryResult = Apollo.QueryResult<GetFundraisingCampaignsQuery, GetFundraisingCampaignsQueryVariables>;