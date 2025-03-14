import styles from './index.module.scss';

import PageContents, { pageContents } from '@components/page-contents';
import PageLatestNews from '@components/page-latest-news';
import type { AvailableLocale } from '@i18n/locales';

interface PageBodyProps {
  lang: AvailableLocale;
  headings: string[];
  children: React.ReactNode;
  className?: string;
}

const PageBody: React.FC<PageBodyProps> = ({
  lang,
  headings,
  children,
  className,
}) => {
  return (
    <div className={`${styles['page-layout']} ${className ?? ''}`}>
      <div className={styles['page-layout__row']}>
        <nav className={styles['page-contents']} title={pageContents[lang]}>
          <PageContents lang={lang} headings={headings} />
        </nav>
        <article className={styles['page-body']}>{children}</article>
        <aside className={styles['latest-news']}>
          <PageLatestNews lang={lang} />
        </aside>
      </div>
    </div>
  );
};

export default PageBody;
