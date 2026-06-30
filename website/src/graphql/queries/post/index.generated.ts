/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import * as Types from '../../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetPostQueryVariables = Exact<{
  locale?: string | null | undefined;
  slug: string;
}>;


export type GetPostQuery = { blogPageCollection: { items: Array<{ title: string | null, excerpt: string | null, date: unknown, body: { json: unknown, links: { entries: { inline: Array<
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
             | null>, block: Array<
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
              | { sys: { id: string } }
             | null> }, assets: { block: Array<{ url: string | null, title: string | null, width: number | null, height: number | null, description: string | null, sys: { id: string } } | null> } } } | null, image: { url: string | null } | null } | null> } | null };


export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;