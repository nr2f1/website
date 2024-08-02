import { type LocalisedLinkProps } from '@shared/types/link';

export type GetLocalisedProps = Array<
  | {
      __typename?: 'Link';
      content?: string | null;
      href?: string | null;
    }
  | undefined
  | null
>;

export const getLocalisedLinkProps = (
  items: GetLocalisedProps | undefined,
): LocalisedLinkProps[] => {
  if (!items) return [];
  return items.map((item) => {
    if (item?.content && item.href) {
      const { href, content } = item;
      return {
        href,
        content,
      };
    }
    return {
      href: '',
      content: '',
    };
  });
};
