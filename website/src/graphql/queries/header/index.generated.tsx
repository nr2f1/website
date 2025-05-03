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
  aboutUsParnershipsId: Types.Scalars['String']['input'];
}>;


export type GetHeaderQuery = { __typename?: 'Query', registerPatient?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, donate?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, aboutBbsoas?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null> } | null } | null, livingWithBbsoas?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null> } | null } | null, research?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null> } | null } | null, aboutUs?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null> } | null } | null, supportUs?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null> } | null } | null };

export type GetNewHeaderQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  registerPatientId: Types.Scalars['String']['input'];
  donateId: Types.Scalars['String']['input'];
  aboutCopiesId: Types.Scalars['String']['input'];
  aboutUsLinkOrganisationId: Types.Scalars['String']['input'];
  aboutUsLinkOurStrategyId: Types.Scalars['String']['input'];
  aboutUsLinkOurNewsId: Types.Scalars['String']['input'];
  aboutUsLinkFinancialsId: Types.Scalars['String']['input'];
  aboutUsLinkParnershipsId: Types.Scalars['String']['input'];
  aboutUsLinkConferenceId: Types.Scalars['String']['input'];
  whatIsBbsoasLinkId: Types.Scalars['String']['input'];
  contactUsLinkId: Types.Scalars['String']['input'];
  livingWithBbsoasMicrocopyId: Types.Scalars['String']['input'];
  livingWithBbsoasLinkId: Types.Scalars['String']['input'];
  registerABbsoasPatientLinkId: Types.Scalars['String']['input'];
  supportGroupsLinkId: Types.Scalars['String']['input'];
}>;


export type GetNewHeaderQuery = { __typename?: 'Query', registerPatient?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, donate?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsCopies?: { __typename?: 'ResourceSet', resourcesCollection?: { __typename?: 'ResourceSetResourcesCollection', items: Array<{ __typename?: 'MicrocopyResource', key?: string | null, value?: string | null } | null> } | null } | null, aboutUsLinkOrganisation?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsLinkOurStrategy?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsLinkOurNews?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsFinancials?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsParnerships?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsConference?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, whatIsBbsoas?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, contactUs?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, livingWithBbsoasMicrocopy?: { __typename?: 'MicrocopyResource', value?: string | null } | null, livingWithBbsoasLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, registerABbsoasPatientLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, supportGroupsLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null };


export const GetHeaderDocument = gql`
    query GetHeader($locale: String, $registerPatientId: String!, $donateId: String!, $aboutBbsoasId: String!, $livingWithBbsoasId: String!, $researchId: String!, $aboutUsId: String!, $supportUsId: String!, $aboutUsParnershipsId: String!) {
  registerPatient: link(id: $registerPatientId, locale: $locale) {
    target {
      url
    }
    text {
      content
    }
  }
  donate: link(id: $donateId, locale: $locale) {
    target {
      url
    }
    text {
      content
    }
  }
  aboutBbsoas: navigationList(id: $aboutBbsoasId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        target {
          url
        }
        text {
          content
        }
      }
    }
  }
  livingWithBbsoas: navigationList(id: $livingWithBbsoasId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        target {
          url
        }
        text {
          content
        }
      }
    }
  }
  research: navigationList(id: $researchId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        target {
          url
        }
        text {
          content
        }
      }
    }
  }
  aboutUs: navigationList(id: $aboutUsId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        target {
          url
        }
        text {
          content
        }
      }
    }
  }
  supportUs: navigationList(id: $supportUsId, locale: $locale) {
    name
    linksCollection(locale: $locale) {
      items {
        target {
          url
        }
        text {
          content
        }
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
 *      aboutUsParnershipsId: // value for 'aboutUsParnershipsId'
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
export const GetNewHeaderDocument = gql`
    query GetNewHeader($locale: String, $registerPatientId: String!, $donateId: String!, $aboutCopiesId: String!, $aboutUsLinkOrganisationId: String!, $aboutUsLinkOurStrategyId: String!, $aboutUsLinkOurNewsId: String!, $aboutUsLinkFinancialsId: String!, $aboutUsLinkParnershipsId: String!, $aboutUsLinkConferenceId: String!, $whatIsBbsoasLinkId: String!, $contactUsLinkId: String!, $livingWithBbsoasMicrocopyId: String!, $livingWithBbsoasLinkId: String!, $registerABbsoasPatientLinkId: String!, $supportGroupsLinkId: String!) {
  registerPatient: link(locale: $locale, id: $registerPatientId) {
    text {
      content
    }
    target {
      url
    }
  }
  donate: link(locale: $locale, id: $donateId) {
    text {
      content
    }
    target {
      url
    }
  }
  aboutUsCopies: resourceSet(locale: $locale, id: $aboutCopiesId) {
    resourcesCollection {
      items {
        key
        value
      }
    }
  }
  aboutUsLinkOrganisation: link(locale: $locale, id: $aboutUsLinkOrganisationId) {
    text {
      content
    }
    target {
      url
    }
  }
  aboutUsLinkOurStrategy: link(locale: $locale, id: $aboutUsLinkOurStrategyId) {
    text {
      content
    }
    target {
      url
    }
  }
  aboutUsLinkOurNews: link(locale: $locale, id: $aboutUsLinkOurNewsId) {
    text {
      content
    }
    target {
      url
    }
  }
  aboutUsFinancials: link(locale: $locale, id: $aboutUsLinkFinancialsId) {
    text {
      content
    }
    target {
      url
    }
  }
  aboutUsParnerships: link(locale: $locale, id: $aboutUsLinkParnershipsId) {
    text {
      content
    }
    target {
      url
    }
  }
  aboutUsConference: link(locale: $locale, id: $aboutUsLinkConferenceId) {
    text {
      content
    }
    target {
      url
    }
  }
  whatIsBbsoas: link(locale: $locale, id: $whatIsBbsoasLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  contactUs: link(locale: $locale, id: $contactUsLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  livingWithBbsoasMicrocopy: microcopyResource(
    locale: $locale
    id: $livingWithBbsoasMicrocopyId
  ) {
    value
  }
  livingWithBbsoasLink: link(locale: $locale, id: $livingWithBbsoasLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  registerABbsoasPatientLink: link(
    locale: $locale
    id: $registerABbsoasPatientLinkId
  ) {
    text {
      content
    }
    target {
      url
    }
  }
  supportGroupsLink: link(locale: $locale, id: $supportGroupsLinkId) {
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
 * __useGetNewHeaderQuery__
 *
 * To run a query within a React component, call `useGetNewHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewHeaderQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      registerPatientId: // value for 'registerPatientId'
 *      donateId: // value for 'donateId'
 *      aboutCopiesId: // value for 'aboutCopiesId'
 *      aboutUsLinkOrganisationId: // value for 'aboutUsLinkOrganisationId'
 *      aboutUsLinkOurStrategyId: // value for 'aboutUsLinkOurStrategyId'
 *      aboutUsLinkOurNewsId: // value for 'aboutUsLinkOurNewsId'
 *      aboutUsLinkFinancialsId: // value for 'aboutUsLinkFinancialsId'
 *      aboutUsLinkParnershipsId: // value for 'aboutUsLinkParnershipsId'
 *      aboutUsLinkConferenceId: // value for 'aboutUsLinkConferenceId'
 *      whatIsBbsoasLinkId: // value for 'whatIsBbsoasLinkId'
 *      contactUsLinkId: // value for 'contactUsLinkId'
 *      livingWithBbsoasMicrocopyId: // value for 'livingWithBbsoasMicrocopyId'
 *      livingWithBbsoasLinkId: // value for 'livingWithBbsoasLinkId'
 *      registerABbsoasPatientLinkId: // value for 'registerABbsoasPatientLinkId'
 *      supportGroupsLinkId: // value for 'supportGroupsLinkId'
 *   },
 * });
 */
export function useGetNewHeaderQuery(baseOptions: Apollo.QueryHookOptions<GetNewHeaderQuery, GetNewHeaderQueryVariables> & ({ variables: GetNewHeaderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewHeaderQuery, GetNewHeaderQueryVariables>(GetNewHeaderDocument, options);
      }
export function useGetNewHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewHeaderQuery, GetNewHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewHeaderQuery, GetNewHeaderQueryVariables>(GetNewHeaderDocument, options);
        }
export function useGetNewHeaderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNewHeaderQuery, GetNewHeaderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNewHeaderQuery, GetNewHeaderQueryVariables>(GetNewHeaderDocument, options);
        }
export type GetNewHeaderQueryHookResult = ReturnType<typeof useGetNewHeaderQuery>;
export type GetNewHeaderLazyQueryHookResult = ReturnType<typeof useGetNewHeaderLazyQuery>;
export type GetNewHeaderSuspenseQueryHookResult = ReturnType<typeof useGetNewHeaderSuspenseQuery>;
export type GetNewHeaderQueryResult = Apollo.QueryResult<GetNewHeaderQuery, GetNewHeaderQueryVariables>;