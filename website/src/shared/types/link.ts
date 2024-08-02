export interface ContenfulLink {
  __typename?: 'Link';
  content?: string | null;
  href?: string | null;
}

export type LinkItem = ContenfulLink | null;

export interface LocalisedLinkProps {
  href: string;
  content: string;
}
