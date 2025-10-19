import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetFooterQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  stayInTouchId: Types.Scalars['String']['input'];
  socialMediaTextId: Types.Scalars['String']['input'];
  copyrightId: Types.Scalars['String']['input'];
  warningId: Types.Scalars['String']['input'];
  contactUsId: Types.Scalars['String']['input'];
}>;


export type GetFooterQuery = { __typename?: 'Query', stayInTouch?: { __typename?: 'Heading', content?: string | null } | null, socialMediaText?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, copyright?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, warning?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, contactUs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetFooterDocument = gql`
    query GetFooter($locale: String, $stayInTouchId: String!, $socialMediaTextId: String!, $copyrightId: String!, $warningId: String!, $contactUsId: String!) {
  stayInTouch: heading(id: $stayInTouchId, locale: $locale) {
    content
  }
  socialMediaText: paragraphs(id: $socialMediaTextId, locale: $locale) {
    content {
      json
    }
  }
  copyright: paragraphs(id: $copyrightId, locale: $locale) {
    content {
      json
    }
  }
  warning: paragraphs(id: $warningId, locale: $locale) {
    content {
      json
    }
  }
  contactUs: paragraphs(id: $contactUsId, locale: $locale) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetFooterQuery__
 *
 * To run a query within a React component, call `useGetFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFooterQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      stayInTouchId: // value for 'stayInTouchId'
 *      socialMediaTextId: // value for 'socialMediaTextId'
 *      copyrightId: // value for 'copyrightId'
 *      warningId: // value for 'warningId'
 *      contactUsId: // value for 'contactUsId'
 *   },
 * });
 */
export function useGetFooterQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetFooterQuery, GetFooterQueryVariables> & ({ variables: GetFooterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
      }
export function useGetFooterLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
        }
export function useGetFooterSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
        }
export type GetFooterQueryHookResult = ReturnType<typeof useGetFooterQuery>;
export type GetFooterLazyQueryHookResult = ReturnType<typeof useGetFooterLazyQuery>;
export type GetFooterSuspenseQueryHookResult = ReturnType<typeof useGetFooterSuspenseQuery>;
export type GetFooterQueryResult = ApolloReactCommon.QueryResult<GetFooterQuery, GetFooterQueryVariables>;