'use client';

import { HttpLink } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import { CONTENTUL_GRAPHQL_API } from '@config/utils';
import { isDev } from '@graphql/client';

const makeClient = () => {
  const httpLink = new HttpLink({
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
    uri: CONTENTUL_GRAPHQL_API,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    devtools: {
      enabled: isDev,
    },
    link: httpLink,
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
