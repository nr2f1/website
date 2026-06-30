/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import * as Types from '../../../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetConferencePageQueryVariables = Exact<{
  locale?: string | null | undefined;
  nextConferenceHeadingId: string;
  introParagraphId: string;
  bookTicketsLinkId: string;
  infoParagraphId: string;
  bookTicketsHeadingId: string;
  offerHeadingId: string;
  offerParagraphsId: string;
  sponsorshipHeadingId: string;
  sponsorshipParagraphsId: string;
  faqsHeadingId: string;
  pastConferencesHeadingId: string;
  pastConferencesParagraphsId: string;
}>;


export type GetConferencePageQuery = { nextConferenceHeading: { content: string | null } | null, introParagraph: { content: { json: unknown, links: { entries: { inline: Array<
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
           | null> }, assets: { block: Array<{ url: string | null, title: string | null, width: number | null, description: string | null, contentType: string | null, sys: { id: string } } | null> } } } | null } | null, bookTicketsLink: { target: { url: string | null } | null, text: { content: string | null } | null } | null, infoParagraph: { content: { json: unknown, links: { entries: { inline: Array<
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
           | null> }, assets: { block: Array<{ url: string | null, title: string | null, width: number | null, description: string | null, contentType: string | null, sys: { id: string } } | null> } } } | null } | null, bookTicketsHeading: { content: string | null } | null, offerHeading: { content: string | null } | null, offerParagraphs: { content: { json: unknown } | null } | null, sponsorshipHeading: { content: string | null } | null, sponsorshipParagraphs: { content: { json: unknown } | null } | null, faqsHeading: { content: string | null } | null, accordionCollection: { items: Array<{ title: string | null, content: { json: unknown } | null } | null> } | null, pastConferencesHeading: { content: string | null } | null, pastConferencesParagraphs: { content: { json: unknown } | null } | null };


export const GetConferencePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetConferencePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextConferenceHeadingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"introParagraphId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookTicketsLinkId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"infoParagraphId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookTicketsHeadingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offerHeadingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offerParagraphsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sponsorshipHeadingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sponsorshipParagraphsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"faqsHeadingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pastConferencesHeadingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pastConferencesParagraphsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"nextConferenceHeading"},"name":{"kind":"Name","value":"heading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextConferenceHeadingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"introParagraph"},"name":{"kind":"Name","value":"paragraphs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"introParagraphId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bookTicketsLink"},"name":{"kind":"Name","value":"link"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookTicketsLinkId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"infoParagraph"},"name":{"kind":"Name","value":"paragraphs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"infoParagraphId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bookTicketsHeading"},"name":{"kind":"Name","value":"heading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookTicketsHeadingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"offerHeading"},"name":{"kind":"Name","value":"heading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offerHeadingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"offerParagraphs"},"name":{"kind":"Name","value":"paragraphs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offerParagraphsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"sponsorshipHeading"},"name":{"kind":"Name","value":"heading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sponsorshipHeadingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"sponsorshipParagraphs"},"name":{"kind":"Name","value":"paragraphs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sponsorshipParagraphsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"faqsHeading"},"name":{"kind":"Name","value":"heading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"faqsHeadingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accordionCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contentfulMetadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_contains_all"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"conferencePage","block":false}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"sys_firstPublishedAt_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pastConferencesHeading"},"name":{"kind":"Name","value":"heading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pastConferencesHeadingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pastConferencesParagraphs"},"name":{"kind":"Name","value":"paragraphs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pastConferencesParagraphsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]} as unknown as DocumentNode<GetConferencePageQuery, GetConferencePageQueryVariables>;