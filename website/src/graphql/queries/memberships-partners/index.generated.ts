import * as Types from '../../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetMembershipPartnersQueryVariables = Types.Exact<{
  membershipPartnersId: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetMembershipPartnersQuery = { __typename?: 'Query', navigationList?: { __typename?: 'NavigationList', name?: string | null, linksCollection?: { __typename?: 'NavigationListLinksCollection', items: Array<{ __typename?: 'Link', target?: { __typename?: 'Hyperlink', url?: string | null } | null, text?: { __typename?: 'LinkContent', content?: string | null } | null, referenceCollection?: { __typename?: 'LinkReferenceCollection', items: Array<
            | { __typename?: 'Accordion' }
            | { __typename?: 'Banner' }
            | { __typename?: 'BlogPage' }
            | { __typename?: 'ConferenceBanner' }
            | { __typename?: 'FundraisingIdea' }
            | { __typename?: 'Heading' }
            | { __typename?: 'HtmlHeadMetadata' }
            | { __typename?: 'Hyperlink' }
            | { __typename?: 'Image', asset?: { __typename?: 'Asset', url?: string | null } | null }
            | { __typename?: 'Link' }
            | { __typename?: 'LinkContent' }
            | { __typename?: 'Member' }
            | { __typename?: 'MicrocopyResource' }
            | { __typename?: 'NavigationList' }
            | { __typename?: 'Newsletter' }
            | { __typename?: 'PageHeader' }
            | { __typename?: 'Paragraphs' }
            | { __typename?: 'Podcast' }
            | { __typename?: 'Publication' }
            | { __typename?: 'ResourceSet' }
           | null> } | null } | null> } | null } | null };


export const GetMembershipPartnersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembershipPartners"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"membershipPartnersId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"membershipPartnersId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"linksCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMembershipPartnersQuery, GetMembershipPartnersQueryVariables>;