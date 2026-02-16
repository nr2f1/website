import * as Types from '../../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetPostQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  slug: Types.Scalars['String']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', title?: string | null, excerpt?: string | null, date?: any | null, body?: { __typename?: 'BlogPageBody', json: any, links: { __typename?: 'BlogPageBodyLinks', entries: { __typename?: 'BlogPageBodyEntries', inline: Array<
              | { __typename?: 'Accordion', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'Banner', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'BlogPage', sys: { __typename?: 'Sys', id: string } }
              | { __typename?: 'ConferenceBanner', sys: { __typename?: 'Sys', id: string } }
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
              | { __typename?: 'ConferenceBanner', sys: { __typename?: 'Sys', id: string } }
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
             | null> }, assets: { __typename?: 'BlogPageBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;