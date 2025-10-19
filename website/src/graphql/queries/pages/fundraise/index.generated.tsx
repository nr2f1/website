import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@graphql/apollo-react-wrapper';
import * as ApolloReactHooks from '@graphql/apollo-react-wrapper';
const defaultOptions = {} as const;
export type GetFunraisePageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  fundraisePageParagraphsId: Types.Scalars['String']['input'];
  campaignsHeadingId: Types.Scalars['String']['input'];
}>;


export type GetFunraisePageQuery = { __typename?: 'Query', mainBody?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, campaignsHeading?: { __typename?: 'Heading', content?: string | null } | null, campaigns?: { __typename?: 'FundraisingIdeaCollection', items: Array<{ __typename?: 'FundraisingIdea', heading?: string | null, image?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'FundraisingIdeaBody', json: any } | null, associatedBlog?: { __typename?: 'BlogPage', slug?: string | null } | null } | null> } | null };


export const GetFunraisePageDocument = gql`
    query GetFunraisePage($locale: String, $fundraisePageParagraphsId: String!, $campaignsHeadingId: String!) {
  mainBody: paragraphs(locale: $locale, id: $fundraisePageParagraphsId) {
    content {
      json
    }
  }
  campaignsHeading: heading(locale: $locale, id: $campaignsHeadingId) {
    content
  }
  campaigns: fundraisingIdeaCollection(
    locale: $locale
    order: sys_publishedAt_ASC
  ) {
    items {
      heading
      image {
        url
        description
        width
        height
      }
      body {
        json
      }
      associatedBlog {
        slug
      }
    }
  }
}
    `;

/**
 * __useGetFunraisePageQuery__
 *
 * To run a query within a React component, call `useGetFunraisePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFunraisePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFunraisePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      fundraisePageParagraphsId: // value for 'fundraisePageParagraphsId'
 *      campaignsHeadingId: // value for 'campaignsHeadingId'
 *   },
 * });
 */
export function useGetFunraisePageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetFunraisePageQuery, GetFunraisePageQueryVariables> & ({ variables: GetFunraisePageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFunraisePageQuery, GetFunraisePageQueryVariables>(GetFunraisePageDocument, options);
      }
export function useGetFunraisePageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFunraisePageQuery, GetFunraisePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFunraisePageQuery, GetFunraisePageQueryVariables>(GetFunraisePageDocument, options);
        }
export function useGetFunraisePageSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetFunraisePageQuery, GetFunraisePageQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetFunraisePageQuery, GetFunraisePageQueryVariables>(GetFunraisePageDocument, options);
        }
export type GetFunraisePageQueryHookResult = ReturnType<typeof useGetFunraisePageQuery>;
export type GetFunraisePageLazyQueryHookResult = ReturnType<typeof useGetFunraisePageLazyQuery>;
export type GetFunraisePageSuspenseQueryHookResult = ReturnType<typeof useGetFunraisePageSuspenseQuery>;
export type GetFunraisePageQueryResult = ApolloReactCommon.QueryResult<GetFunraisePageQuery, GetFunraisePageQueryVariables>;