import ArrowLeft from '@components/icons/arrow-left';
import ArrowRight from '@components/icons/arrow-right';
import type { AvailableLocale } from '@i18n/locales';
import Link from 'next/link';
import { DOTS, getPaginationRange, type PaginationProps } from './helpers';
import styles from './index.module.scss';

interface PaginationLocale {
  previous: string;
  next: string;
  page: string;
}

const paginationLocales: Record<AvailableLocale, PaginationLocale> = {
  de: {
    next: 'nächste',
    page: 'seite',
    previous: 'vorherige',
  },
  en: {
    next: 'next',
    page: 'page',
    previous: 'previous',
  },
  es: {
    next: 'siguiente',
    page: 'página',
    previous: 'anterior',
  },
  fr: {
    next: 'suivant',
    page: 'page',
    previous: 'précédent',
  },
};

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 0,
  lang,
  paginationPath = '/news',
  className = '',
}) => {
  const realCurrentPage = currentPage < 1 ? 1 : currentPage;

  const paginationRange = getPaginationRange({
    currentPage: realCurrentPage,
    pageSize,
    siblingCount,
    totalCount,
  });

  if (!paginationRange) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  const getPreviousPage = () =>
    realCurrentPage - 1 < 1 ? 1 : realCurrentPage - 1;

  const getNextPage = () =>
    realCurrentPage + 1 > Number(lastPage) ? lastPage : realCurrentPage + 1;

  return (
    <ul className={`${styles.pagination} ${styles[className]}`}>
      <li className={styles.pagination__item}>
        <Link href={`${paginationPath}?page=${getPreviousPage()}`}>
          <ArrowLeft title={paginationLocales[lang].previous} />
        </Link>
      </li>
      {paginationRange.map((pageNumber) => {
        const isDots = pageNumber === DOTS;
        const isCurrentPage =
          pageNumber === currentPage || (pageNumber === 1 && currentPage === 0);

        if (isDots) {
          return (
            <li
              className={`${styles.pagination__item} ${styles['pagination__item--dots']}`}
              key={crypto.randomUUID()}
            >
              {DOTS}
            </li>
          );
        }

        return (
          <li
            key={crypto.randomUUID()}
            className={
              isCurrentPage
                ? `${styles.pagination__item} ${styles['pagination__item--selected']}`
                : styles.pagination__item
            }
          >
            <Link
              href={`${paginationPath}?page=${pageNumber}`}
              title={`${paginationLocales[lang].page} ${pageNumber}`}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
      <li className={styles.pagination__item}>
        <Link href={`${paginationPath}?page=${getNextPage()}`} title="next">
          <ArrowRight title={paginationLocales[lang].next} />
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
