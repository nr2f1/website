'use client';

import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import { Authorization, CONTENTUL_GRAPHQL_API } from '@config/utils';

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: CONTENTUL_GRAPHQL_API,
    fetchOptions: { cache: 'no-store' },
    headers: {
      Authorization,
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
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
