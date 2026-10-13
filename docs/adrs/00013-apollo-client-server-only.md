# 13. Apollo Client runs on the server only

Date: 2026-10-13

## Context

ADR 0011 chose Apollo Client to query Contentful. Until now it ran in two places: on the server through `registerApolloClient` and `'use cache'`, and in the browser through `ApolloNextAppProvider`, where the header, footer and cookie banner markup called `useSuspenseQuery` on data that `PreloadQuery` had already fetched during server rendering. The browser never issued its own Contentful request, but every visitor still downloaded Apollo, graphql and the Contentful delivery token: 82 KB gzipped of the 351 KB of JavaScript the home page loaded (clean production build, 13 Oct 2026).

## Decision

Apollo Client is a server-only dependency. Cached server components fetch with `getClient().query(...)` and pass plain data as props to client components, which keep only their interactivity (menu state, consent storage). `ApolloWrapper`, `PreloadQuery` and the client-side `useSuspenseQuery` calls are removed.

## Consequences

- The home page loads 267 KB of JavaScript instead of 351 KB (gzipped), with no Apollo or graphql code, so there is less JavaScript to download, parse and hydrate.
- The Contentful delivery token no longer ships to browsers, so the `NEXT_PUBLIC_CONTENTFUL_*` variables can later be renamed to server-only ones.
- The header is now part of the prerendered HTML. Before, the prerendered HTML held a skeleton and the real header streamed in per request. Its only request-time dependency, closing open menus when the search params change, sits in its own `<Suspense>` boundary.
- Component tests render markup with fixture data instead of mocking Apollo.
- A client component that needs CMS data must receive it as serialisable props from a server component. If a future feature must fetch CMS data from the browser, add a Route Handler rather than reintroducing the client provider.
- `registerApolloClient` still registers a lazy client reference (`SimulatePreloadedQuery`), so the build emits one Apollo chunk that no page requests.
- ADR 0011 still governs the server side.
