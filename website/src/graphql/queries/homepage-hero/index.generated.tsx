import * as Apollo from '@apollo/client';

import { gql } from '@apollo/client';
import * as Types from '../../types';

const defaultOptions = {} as const;
export type GetHomePageHeroQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  heroHeadingId: Types.Scalars['String']['input'];
  heroParagraphId: Types.Scalars['String']['input'];
  heroCtaId: Types.Scalars['String']['input'];
  heroNavigationListId: Types.Scalars['String']['input'];
  heroImageId: Types.Scalars['String']['input'];
}>;


export type GetHomePageHeroQuery = { __typename?: 'Query', heroHeading?: { __typename?: 'Heading', content?: string | null } | null, heroParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, heroCta?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, heroNavigationList?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', text?: { __typename?: 'LinkContent', content?: string | null } | null, target?: { __typename?: 'Hyperlink', url?: string | null } | null } | null> } | null } | null, heroImage?: { __typename?: 'Image', altText?: string | null, asset?: { __typename?: 'Asset', url?: string | null } | null } | null };


export const GetHomePageHeroDocument = gql`
    query GetHomePageHero($locale: String, $heroHeadingId: String!, $heroParagraphId: String!, $heroCtaId: String!, $heroNavigationListId: String!, $heroImageId: String!) {
  heroHeading: heading(id: $heroHeadingId, locale: $locale) {
    content
  }
  heroParagraph: paragraphs(id: $heroParagraphId, locale: $locale) {
    content {
      json
    }
  }
  heroCta: link(id: $heroCtaId, locale: $locale) {
    target {
      url
    }
    text {
      content
    }
  }
  heroNavigationList: navigationList(id: $heroNavigationListId, locale: $locale) {
    name
    linksCollection {
      items {
        text {
          content
        }
        target {
          url
        }
      }
    }
  }
  heroImage: image(id: $heroImageId, locale: $locale) {
    altText
    asset {
      url
    }
  }
}
    `;

/**
 * __useGetHomePageHeroQuery__
 *
 * To run a query within a React component, call `useGetHomePageHeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageHeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageHeroQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      heroHeadingId: // value for 'heroHeadingId'
 *      heroParagraphId: // value for 'heroParagraphId'
 *      heroCtaId: // value for 'heroCtaId'
 *      heroNavigationListId: // value for 'heroNavigationListId'
 *      heroImageId: // value for 'heroImageId'
 *   },
 * });
 */
export function useGetHomePageHeroQuery(baseOptions: Apollo.QueryHookOptions<GetHomePageHeroQuery, GetHomePageHeroQueryVariables> & ({ variables: GetHomePageHeroQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageHeroQuery, GetHomePageHeroQueryVariables>(GetHomePageHeroDocument, options);
      }
export function useGetHomePageHeroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageHeroQuery, GetHomePageHeroQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageHeroQuery, GetHomePageHeroQueryVariables>(GetHomePageHeroDocument, options);
        }
export function useGetHomePageHeroSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHomePageHeroQuery, GetHomePageHeroQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHomePageHeroQuery, GetHomePageHeroQueryVariables>(GetHomePageHeroDocument, options);
        }
export type GetHomePageHeroQueryHookResult = ReturnType<typeof useGetHomePageHeroQuery>;
export type GetHomePageHeroLazyQueryHookResult = ReturnType<typeof useGetHomePageHeroLazyQuery>;
export type GetHomePageHeroSuspenseQueryHookResult = ReturnType<typeof useGetHomePageHeroSuspenseQuery>;
export type GetHomePageHeroQueryResult = Apollo.QueryResult<GetHomePageHeroQuery, GetHomePageHeroQueryVariables>;