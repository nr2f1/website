import type { LocalisedLinkProps } from '@shared/types/link';

export type GetLocalisedProps = Array<
  | {
      __typename?: 'Link';
      target?: {
        __typename?: 'Hyperlink';
        url?: string | null;
      } | null;
      text?: {
        __typename?: 'LinkContent';
        content?: string | null;
      } | null;
    }
  | undefined
  | null
>;

export const getLocalisedLinkProps = (
  items: GetLocalisedProps | undefined,
): LocalisedLinkProps[] => {
  if (!items) return [];
  return items.map((item) => {
    if (item?.text && item.target) {
      const { text, target } = item;
      return {
        content: text?.content || '',
        href: target?.url || '',
      };
    }
    return {
      content: '',
      href: '',
    };
  });
};
