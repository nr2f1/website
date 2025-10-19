import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetPartnershipsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  partnershipsPageheadingId: Types.Scalars['String']['input'];
  partnershipsPageParagraphsId: Types.Scalars['String']['input'];
  partnersHeadingId: Types.Scalars['String']['input'];
  nr2f1FranceAssetId: Types.Scalars['String']['input'];
  nr2f1FranceLinkId: Types.Scalars['String']['input'];
  schaafLaboratoryAssetId: Types.Scalars['String']['input'];
  schaafLaboratoryLinkId: Types.Scalars['String']['input'];
  cincinnatiAssetId: Types.Scalars['String']['input'];
  cincinnatiLinkId: Types.Scalars['String']['input'];
  valroseAssetId: Types.Scalars['String']['input'];
  valroseLinkId: Types.Scalars['String']['input'];
  combinedBrainAssetId: Types.Scalars['String']['input'];
  combinedBrainLinkId: Types.Scalars['String']['input'];
  renAssetId: Types.Scalars['String']['input'];
  renLinkId: Types.Scalars['String']['input'];
  globalGenesAssetId: Types.Scalars['String']['input'];
  globalGenesLinkId: Types.Scalars['String']['input'];
  uniqueAssetId: Types.Scalars['String']['input'];
  uniqueLinkId: Types.Scalars['String']['input'];
  nicoAssetId: Types.Scalars['String']['input'];
  nicoLinkId: Types.Scalars['String']['input'];
}>;


export type GetPartnershipsPageQuery = { __typename?: 'Query', heading?: { __typename?: 'Heading', content?: string | null } | null, paragraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, partnersHeading?: { __typename?: 'Heading', content?: string | null } | null, nr2f1FranceAsset?: { __typename?: 'Asset', url?: string | null } | null, nr2f1FranceLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, schaafLaboratoryAsset?: { __typename?: 'Asset', url?: string | null } | null, schaafLaboratoryLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, cincinnatiAsset?: { __typename?: 'Asset', url?: string | null } | null, cincinnatiLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, valroseAsset?: { __typename?: 'Asset', url?: string | null } | null, valroseLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, combinedBrainAsset?: { __typename?: 'Asset', url?: string | null } | null, combinedBrainLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, renAsset?: { __typename?: 'Asset', url?: string | null } | null, renLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, globalGenesAsset?: { __typename?: 'Asset', url?: string | null } | null, globalGenesLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, uniqueAsset?: { __typename?: 'Asset', url?: string | null } | null, uniqueLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null, nicoAsset?: { __typename?: 'Asset', url?: string | null } | null, nicoLink?: { __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null };


export const GetPartnershipsPageDocument = gql`
    query GetPartnershipsPage($locale: String, $partnershipsPageheadingId: String!, $partnershipsPageParagraphsId: String!, $partnersHeadingId: String!, $nr2f1FranceAssetId: String!, $nr2f1FranceLinkId: String!, $schaafLaboratoryAssetId: String!, $schaafLaboratoryLinkId: String!, $cincinnatiAssetId: String!, $cincinnatiLinkId: String!, $valroseAssetId: String!, $valroseLinkId: String!, $combinedBrainAssetId: String!, $combinedBrainLinkId: String!, $renAssetId: String!, $renLinkId: String!, $globalGenesAssetId: String!, $globalGenesLinkId: String!, $uniqueAssetId: String!, $uniqueLinkId: String!, $nicoAssetId: String!, $nicoLinkId: String!) {
  heading(locale: $locale, id: $partnershipsPageheadingId) {
    content
  }
  paragraphs(locale: $locale, id: $partnershipsPageParagraphsId) {
    content {
      json
    }
  }
  partnersHeading: heading(locale: $locale, id: $partnersHeadingId) {
    content
  }
  nr2f1FranceAsset: asset(id: $nr2f1FranceAssetId) {
    url
  }
  nr2f1FranceLink: link(locale: $locale, id: $nr2f1FranceLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  schaafLaboratoryAsset: asset(id: $schaafLaboratoryAssetId) {
    url
  }
  schaafLaboratoryLink: link(locale: $locale, id: $schaafLaboratoryLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  cincinnatiAsset: asset(id: $cincinnatiAssetId) {
    url
  }
  cincinnatiLink: link(locale: $locale, id: $cincinnatiLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  valroseAsset: asset(id: $valroseAssetId) {
    url
  }
  valroseLink: link(locale: $locale, id: $valroseLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  combinedBrainAsset: asset(id: $combinedBrainAssetId) {
    url
  }
  combinedBrainLink: link(locale: $locale, id: $combinedBrainLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  renAsset: asset(id: $renAssetId) {
    url
  }
  renLink: link(locale: $locale, id: $renLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  globalGenesAsset: asset(id: $globalGenesAssetId) {
    url
  }
  globalGenesLink: link(locale: $locale, id: $globalGenesLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  uniqueAsset: asset(id: $uniqueAssetId) {
    url
  }
  uniqueLink: link(locale: $locale, id: $uniqueLinkId) {
    text {
      content
    }
    target {
      url
    }
  }
  nicoAsset: asset(id: $nicoAssetId) {
    url
  }
  nicoLink: link(locale: $locale, id: $nicoLinkId) {
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
 * __useGetPartnershipsPageQuery__
 *
 * To run a query within a React component, call `useGetPartnershipsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPartnershipsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPartnershipsPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      partnershipsPageheadingId: // value for 'partnershipsPageheadingId'
 *      partnershipsPageParagraphsId: // value for 'partnershipsPageParagraphsId'
 *      partnersHeadingId: // value for 'partnersHeadingId'
 *      nr2f1FranceAssetId: // value for 'nr2f1FranceAssetId'
 *      nr2f1FranceLinkId: // value for 'nr2f1FranceLinkId'
 *      schaafLaboratoryAssetId: // value for 'schaafLaboratoryAssetId'
 *      schaafLaboratoryLinkId: // value for 'schaafLaboratoryLinkId'
 *      cincinnatiAssetId: // value for 'cincinnatiAssetId'
 *      cincinnatiLinkId: // value for 'cincinnatiLinkId'
 *      valroseAssetId: // value for 'valroseAssetId'
 *      valroseLinkId: // value for 'valroseLinkId'
 *      combinedBrainAssetId: // value for 'combinedBrainAssetId'
 *      combinedBrainLinkId: // value for 'combinedBrainLinkId'
 *      renAssetId: // value for 'renAssetId'
 *      renLinkId: // value for 'renLinkId'
 *      globalGenesAssetId: // value for 'globalGenesAssetId'
 *      globalGenesLinkId: // value for 'globalGenesLinkId'
 *      uniqueAssetId: // value for 'uniqueAssetId'
 *      uniqueLinkId: // value for 'uniqueLinkId'
 *      nicoAssetId: // value for 'nicoAssetId'
 *      nicoLinkId: // value for 'nicoLinkId'
 *   },
 * });
 */
export function useGetPartnershipsPageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPartnershipsPageQuery, GetPartnershipsPageQueryVariables> & ({ variables: GetPartnershipsPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPartnershipsPageQuery, GetPartnershipsPageQueryVariables>(GetPartnershipsPageDocument, options);
      }
export function useGetPartnershipsPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPartnershipsPageQuery, GetPartnershipsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPartnershipsPageQuery, GetPartnershipsPageQueryVariables>(GetPartnershipsPageDocument, options);
        }
export function useGetPartnershipsPageSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetPartnershipsPageQuery, GetPartnershipsPageQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetPartnershipsPageQuery, GetPartnershipsPageQueryVariables>(GetPartnershipsPageDocument, options);
        }
export type GetPartnershipsPageQueryHookResult = ReturnType<typeof useGetPartnershipsPageQuery>;
export type GetPartnershipsPageLazyQueryHookResult = ReturnType<typeof useGetPartnershipsPageLazyQuery>;
export type GetPartnershipsPageSuspenseQueryHookResult = ReturnType<typeof useGetPartnershipsPageSuspenseQuery>;
export type GetPartnershipsPageQueryResult = ApolloReactCommon.QueryResult<GetPartnershipsPageQuery, GetPartnershipsPageQueryVariables>;