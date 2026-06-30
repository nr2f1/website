import type { Options } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import type { ReactNode } from 'react';

declare module '@contentful/rich-text-react-renderer' {
  export function documentToReactComponents(
    richTextDocument: Document | null | undefined,
    options?: Options,
  ): ReactNode;
}
