'use client';

import { HttpLink } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { GraphQL17Alpha2Handler } from '@apollo/client/incremental';
import { LocalState } from '@apollo/client/local-state';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import { CONTENTUL_GRAPHQL_API } from '@config/utils';

const makeClient = () => {
  const httpLink = new HttpLink({
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
    uri: CONTENTUL_GRAPHQL_API,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),

    /*
    Inserted by Apollo Client 3->4 migration codemod.
    If you are not using the `@defer` directive in your application,
    you can safely remove this option.
    */
    incrementalHandler: new GraphQL17Alpha2Handler(),
    link: httpLink,

    /*
    Inserted by Apollo Client 3->4 migration codemod.
    If you are not using the `@client` directive in your application,
    you can safely remove this option.
    */
    localState: new LocalState({}),
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

if (process.env.NODE_ENV !== 'production') {
  loadDevMessages();
  loadErrorMessages();
}

/*
Start: Inserted by Apollo Client 3->4 migration codemod.
Copy the contents of this block into a `.d.ts` file in your project to enable correct response types in your custom links.
If you do not use the `@defer` directive in your application, you can safely remove this block.
*/

import '@apollo/client';
import type { Defer20220824Handler } from '@apollo/client/incremental';

declare module '@apollo/client' {
  export interface TypeOverrides extends Defer20220824Handler.TypeOverrides {}
}

/*
End: Inserted by Apollo Client 3->4 migration codemod.
*/
