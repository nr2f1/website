import type { AvailableLocale } from '@i18n/locales';

export interface NewsPageBodyProps {
  lang: AvailableLocale;
  page?: string | string[] | undefined;
}

export const getSkipPagination = (
  page: NewsPageBodyProps['page'],
  limit: number,
) => {
  if (!page) {
    return 0;
  }

  const pageNumber = Number(page) - 1;

  if (pageNumber < 0) {
    return 0;
  }

  return pageNumber * limit;
};
