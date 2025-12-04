import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetConferencePageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  nextConferenceHeadingId: Types.Scalars['String']['input'];
  introParagraphId: Types.Scalars['String']['input'];
  bookTicketsLinkId: Types.Scalars['String']['input'];
  infoParagraphId: Types.Scalars['String']['input'];
  bookTicketsHeadingId: Types.Scalars['String']['input'];
  offerHeadingId: Types.Scalars['String']['input'];
  offerParagraphsId: Types.Scalars['String']['input'];
  sponsorshipHeadingId: Types.Scalars['String']['input'];
  sponsorshipParagraphsId: Types.Scalars['String']['input'];
  faqsHeadingId: Types.Scalars['String']['input'];
  pastConferencesHeadingId: Types.Scalars['String']['input'];
  pastConferencesParagraphsId: Types.Scalars['String']['input'];
}>;


export type GetConferencePageQuery = { __typename?: 'Query', nextConferenceHeading?: { __typename?: 'Heading', content?: string | null } | null, introParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any, links: { __typename?: 'ParagraphsContentLinks', entries: { __typename?: 'ParagraphsContentEntries', inline: Array<
            | { __typename?: 'Accordion', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Banner', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'BlogPage', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'FundraisingIdea', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Heading', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'HtmlHeadMetadata', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Hyperlink', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Image', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'LinkContent', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Member', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'MicrocopyResource', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'NavigationList', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Newsletter', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'PageHeader', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Paragraphs', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Podcast', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Publication', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'ResourceSet', sys: { __typename?: 'Sys', id: string } }
           | null>, block: Array<
            | { __typename?: 'Accordion', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Banner', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'BlogPage', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'FundraisingIdea', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Heading', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'HtmlHeadMetadata', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Hyperlink', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Image', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'LinkContent', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Member', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'MicrocopyResource', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'NavigationList', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Newsletter', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'PageHeader', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Paragraphs', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Podcast', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Publication', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'ResourceSet', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'ParagraphsContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null, bookTicketsLink?: { __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null } | null, infoParagraph?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any, links: { __typename?: 'ParagraphsContentLinks', entries: { __typename?: 'ParagraphsContentEntries', inline: Array<
            | { __typename?: 'Accordion', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Banner', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'BlogPage', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'FundraisingIdea', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Heading', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'HtmlHeadMetadata', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Hyperlink', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Image', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'LinkContent', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Member', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'MicrocopyResource', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'NavigationList', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Newsletter', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'PageHeader', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Paragraphs', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Podcast', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Publication', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'ResourceSet', sys: { __typename?: 'Sys', id: string } }
           | null>, block: Array<
            | { __typename?: 'Accordion', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Banner', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'BlogPage', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'FundraisingIdea', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Heading', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'HtmlHeadMetadata', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Hyperlink', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Image', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'LinkContent', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Member', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'MicrocopyResource', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'NavigationList', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Newsletter', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'PageHeader', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Paragraphs', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Podcast', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'Publication', sys: { __typename?: 'Sys', id: string } }
            | { __typename?: 'ResourceSet', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'ParagraphsContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null, bookTicketsHeading?: { __typename?: 'Heading', content?: string | null } | null, offerHeading?: { __typename?: 'Heading', content?: string | null } | null, offerParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, sponsorshipHeading?: { __typename?: 'Heading', content?: string | null } | null, sponsorshipParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null, faqsHeading?: { __typename?: 'Heading', content?: string | null } | null, accordionCollection?: { __typename?: 'AccordionCollection', items: Array<{ __typename?: 'Accordion', title?: string | null, content?: { __typename?: 'AccordionContent', json: any } | null } | null> } | null, pastConferencesHeading?: { __typename?: 'Heading', content?: string | null } | null, pastConferencesParagraphs?: { __typename?: 'Paragraphs', content?: { __typename?: 'ParagraphsContent', json: any } | null } | null };


export const GetConferencePageDocument = gql`
    query GetConferencePage($locale: String, $nextConferenceHeadingId: String!, $introParagraphId: String!, $bookTicketsLinkId: String!, $infoParagraphId: String!, $bookTicketsHeadingId: String!, $offerHeadingId: String!, $offerParagraphsId: String!, $sponsorshipHeadingId: String!, $sponsorshipParagraphsId: String!, $faqsHeadingId: String!, $pastConferencesHeadingId: String!, $pastConferencesParagraphsId: String!) {
  nextConferenceHeading: heading(locale: $locale, id: $nextConferenceHeadingId) {
    content
  }
  introParagraph: paragraphs(locale: $locale, id: $introParagraphId) {
    content {
      json
      links {
        entries {
          inline {
            sys {
              id
            }
          }
          block {
            sys {
              id
            }
          }
        }
        assets {
          block {
            sys {
              id
            }
            url
            title
            width
            description
            contentType
          }
        }
      }
    }
  }
  bookTicketsLink: link(locale: $locale, id: $bookTicketsLinkId) {
    target {
      url
    }
    text {
      content
    }
  }
  infoParagraph: paragraphs(locale: $locale, id: $infoParagraphId) {
    content {
      json
      links {
        entries {
          inline {
            sys {
              id
            }
          }
          block {
            sys {
              id
            }
          }
        }
        assets {
          block {
            sys {
              id
            }
            url
            title
            width
            description
            contentType
          }
        }
      }
    }
  }
  bookTicketsHeading: heading(locale: $locale, id: $bookTicketsHeadingId) {
    content
  }
  offerHeading: heading(locale: $locale, id: $offerHeadingId) {
    content
  }
  offerParagraphs: paragraphs(locale: $locale, id: $offerParagraphsId) {
    content {
      json
    }
  }
  sponsorshipHeading: heading(locale: $locale, id: $sponsorshipHeadingId) {
    content
  }
  sponsorshipParagraphs: paragraphs(locale: $locale, id: $sponsorshipParagraphsId) {
    content {
      json
    }
  }
  faqsHeading: heading(locale: $locale, id: $faqsHeadingId) {
    content
  }
  accordionCollection(
    locale: $locale
    where: {contentfulMetadata: {tags: {id_contains_all: ["conferencePage"]}}}
    order: sys_firstPublishedAt_ASC
  ) {
    items {
      title
      content {
        json
      }
    }
  }
  pastConferencesHeading: heading(locale: $locale, id: $pastConferencesHeadingId) {
    content
  }
  pastConferencesParagraphs: paragraphs(
    locale: $locale
    id: $pastConferencesParagraphsId
  ) {
    content {
      json
    }
  }
}
    `;

/**
 * __useGetConferencePageQuery__
 *
 * To run a query within a React component, call `useGetConferencePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConferencePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConferencePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      nextConferenceHeadingId: // value for 'nextConferenceHeadingId'
 *      introParagraphId: // value for 'introParagraphId'
 *      bookTicketsLinkId: // value for 'bookTicketsLinkId'
 *      infoParagraphId: // value for 'infoParagraphId'
 *      bookTicketsHeadingId: // value for 'bookTicketsHeadingId'
 *      offerHeadingId: // value for 'offerHeadingId'
 *      offerParagraphsId: // value for 'offerParagraphsId'
 *      sponsorshipHeadingId: // value for 'sponsorshipHeadingId'
 *      sponsorshipParagraphsId: // value for 'sponsorshipParagraphsId'
 *      faqsHeadingId: // value for 'faqsHeadingId'
 *      pastConferencesHeadingId: // value for 'pastConferencesHeadingId'
 *      pastConferencesParagraphsId: // value for 'pastConferencesParagraphsId'
 *   },
 * });
 */
export function useGetConferencePageQuery(baseOptions: Apollo.QueryHookOptions<GetConferencePageQuery, GetConferencePageQueryVariables> & ({ variables: GetConferencePageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConferencePageQuery, GetConferencePageQueryVariables>(GetConferencePageDocument, options);
      }
export function useGetConferencePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConferencePageQuery, GetConferencePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConferencePageQuery, GetConferencePageQueryVariables>(GetConferencePageDocument, options);
        }
export function useGetConferencePageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetConferencePageQuery, GetConferencePageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetConferencePageQuery, GetConferencePageQueryVariables>(GetConferencePageDocument, options);
        }
export type GetConferencePageQueryHookResult = ReturnType<typeof useGetConferencePageQuery>;
export type GetConferencePageLazyQueryHookResult = ReturnType<typeof useGetConferencePageLazyQuery>;
export type GetConferencePageSuspenseQueryHookResult = ReturnType<typeof useGetConferencePageSuspenseQuery>;
export type GetConferencePageQueryResult = Apollo.QueryResult<GetConferencePageQuery, GetConferencePageQueryVariables>;