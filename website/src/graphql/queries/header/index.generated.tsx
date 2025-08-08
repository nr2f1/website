import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetHeaderQueryVariables = Types.Exact<{
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
  researchMicrocopyId: Types.Scalars['String']['input'];
  researchLinkId: Types.Scalars['String']['input'];
  getInvolvedInBbsoasLinkId: Types.Scalars['String']['input'];
  publicationsLinkId: Types.Scalars['String']['input'];
  resourcesAvailableToresearchersLinkId: Types.Scalars['String']['input'];
  supportUsMicrocopyId: Types.Scalars['String']['input'];
  supportUsLinkId: Types.Scalars['String']['input'];
  volunteerLinkId: Types.Scalars['String']['input'];
  fundraiseLinkId: Types.Scalars['String']['input'];
  shopLinkId: Types.Scalars['String']['input'];
}>;


export type GetHeaderQuery = { __typename?: 'Query', registerPatient?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, donate?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsCopies?: { __typename?: 'ResourceSet', resourcesCollection?: { __typename?: 'ResourceSetResourcesCollection', items: Array<{ __typename?: 'MicrocopyResource', key?: string | null, value?: string | null } | null> } | null } | null, aboutUsLinkOrganisation?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsLinkOurStrategy?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsLinkOurNews?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsFinancials?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsParnerships?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, aboutUsConference?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, whatIsBbsoas?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, contactUs?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, livingWithBbsoasMicrocopy?: { __typename?: 'MicrocopyResource', value?: string | null } | null, livingWithBbsoasLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, registerABbsoasPatientLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, supportGroupsLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, researchMicrocopy?: { __typename?: 'MicrocopyResource', value?: string | null } | null, researchLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, getInvolvedInBbsoasLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, resourcesAvailableToresearchersLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, publicationsLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, supportUsMicrocopy?: { __typename?: 'MicrocopyResource', value?: string | null } | null, supportUsLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, volunteerLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, fundraiseLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, shopLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null };


export const GetHeaderDocument = gql`
    query GetHeader($locale: String, $registerPatientId: String!, $donateId: String!, $aboutCopiesId: String!, $aboutUsLinkOrganisationId: String!, $aboutUsLinkOurStrategyId: String!, $aboutUsLinkOurNewsId: String!, $aboutUsLinkFinancialsId: String!, $aboutUsLinkParnershipsId: String!, $aboutUsLinkConferenceId: String!, $whatIsBbsoasLinkId: String!, $contactUsLinkId: String!, $livingWithBbsoasMicrocopyId: String!, $livingWithBbsoasLinkId: String!, $registerABbsoasPatientLinkId: String!, $supportGroupsLinkId: String!, $researchMicrocopyId: String!, $researchLinkId: String!, $getInvolvedInBbsoasLinkId: String!, $publicationsLinkId: String!, $resourcesAvailableToresearchersLinkId: String!, $supportUsMicrocopyId: String!, $supportUsLinkId: String!, $volunteerLinkId: String!, $fundraiseLinkId: String!, $shopLinkId: String!) {
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
  researchMicrocopy: microcopyResource(locale: $locale, id: $researchMicrocopyId) {
    value
  }
  researchLink: link(locale: $locale, id: $researchLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  getInvolvedInBbsoasLink: link(locale: $locale, id: $getInvolvedInBbsoasLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  resourcesAvailableToresearchersLink: link(
    locale: $locale
    id: $resourcesAvailableToresearchersLinkId
  ) {
    text {
      content
    }
    target {
      url
    }
  }
  publicationsLink: link(locale: $locale, id: $publicationsLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  supportUsMicrocopy: microcopyResource(
    locale: $locale
    id: $supportUsMicrocopyId
  ) {
    value
  }
  supportUsLink: link(locale: $locale, id: $supportUsLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  volunteerLink: link(locale: $locale, id: $volunteerLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  fundraiseLink: link(locale: $locale, id: $fundraiseLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  shopLink: link(locale: $locale, id: $shopLinkId) {
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
 *      researchMicrocopyId: // value for 'researchMicrocopyId'
 *      researchLinkId: // value for 'researchLinkId'
 *      getInvolvedInBbsoasLinkId: // value for 'getInvolvedInBbsoasLinkId'
 *      publicationsLinkId: // value for 'publicationsLinkId'
 *      resourcesAvailableToresearchersLinkId: // value for 'resourcesAvailableToresearchersLinkId'
 *      supportUsMicrocopyId: // value for 'supportUsMicrocopyId'
 *      supportUsLinkId: // value for 'supportUsLinkId'
 *      volunteerLinkId: // value for 'volunteerLinkId'
 *      fundraiseLinkId: // value for 'fundraiseLinkId'
 *      shopLinkId: // value for 'shopLinkId'
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