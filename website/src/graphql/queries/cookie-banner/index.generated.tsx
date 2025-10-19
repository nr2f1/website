import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetCookieBannerQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetCookieBannerQuery = { __typename?: 'Query', heading?: { __typename?: 'Heading', content?: string | null } | null, paragraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, resourceSet?: { __typename?: 'ResourceSet', resourcesCollection?: { __typename?: 'ResourceSetResourcesCollection', items: Array<{ __typename?: 'MicrocopyResource', key?: string | null, value?: string | null } | null> } | null } | null };


export const GetCookieBannerDocument = gql`
    query GetCookieBanner($locale: String) {
  heading(locale: $locale, id: "75JVmdAYFPHndWv80VJ8wz") {
    content
  }
  paragraphs(locale: $locale, id: "6nLeNH9hAgS5qDMWSIaOwO") {
    content {
      json
    }
  }
  resourceSet(locale: $locale, id: "34h4V1fIBxMLa55nzXn4cG") {
    resourcesCollection {
      items {
        key
        value
      }
    }
  }
}
    `;

/**
 * __useGetCookieBannerQuery__
 *
 * To run a query within a React component, call `useGetCookieBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCookieBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCookieBannerQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetCookieBannerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCookieBannerQuery, GetCookieBannerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCookieBannerQuery, GetCookieBannerQueryVariables>(GetCookieBannerDocument, options);
      }
export function useGetCookieBannerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCookieBannerQuery, GetCookieBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCookieBannerQuery, GetCookieBannerQueryVariables>(GetCookieBannerDocument, options);
        }
export function useGetCookieBannerSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCookieBannerQuery, GetCookieBannerQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetCookieBannerQuery, GetCookieBannerQueryVariables>(GetCookieBannerDocument, options);
        }
export type GetCookieBannerQueryHookResult = ReturnType<typeof useGetCookieBannerQuery>;
export type GetCookieBannerLazyQueryHookResult = ReturnType<typeof useGetCookieBannerLazyQuery>;
export type GetCookieBannerSuspenseQueryHookResult = ReturnType<typeof useGetCookieBannerSuspenseQuery>;
export type GetCookieBannerQueryResult = ApolloReactCommon.QueryResult<GetCookieBannerQuery, GetCookieBannerQueryVariables>;