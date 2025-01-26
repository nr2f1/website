import styles from './index.module.scss';

import ArrowLeft from '@components/icons/arrow-left';
import ArrowRight from '@components/icons/arrow-right';
import Link from 'next/link';
import { DOTS, type PaginationProps, getPaginationRange } from './helpers';

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 0,
}) => {
  const realCurrentPage = currentPage < 1 ? 1 : currentPage;

  const paginationRange = getPaginationRange({
    totalCount,
    currentPage: realCurrentPage,
    pageSize,
    siblingCount,
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
    <ul className={styles.pagination}>
      <li className={styles.pagination__item}>
        <Link href={`/blog?page=${getPreviousPage()}`} title="previous">
          <ArrowLeft />
        </Link>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
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
              pageNumber === currentPage
                ? `${styles.pagination__item} ${styles['pagination__item--selected']}`
                : styles.pagination__item
            }
          >
            <Link
              href={`/blog?page=${pageNumber}`}
              title={`page ${pageNumber}`}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
      <li className={styles.pagination__item}>
        <Link href={`/blog?page=${getNextPage()}`} title="next">
          <ArrowRight />
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
