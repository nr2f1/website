import styles from './index.module.scss';

import PageContents from '@components/page-contents';
import PageLatestNews from '@components/page-latest-news';
import type { AvailableLocale } from '@i18n/locales';

interface PageBodyProps {
  lang: AvailableLocale;
  headings: string[];
  children: React.ReactNode;
}

const PageBody: React.FC<PageBodyProps> = ({ lang, headings, children }) => {
  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout__row']}>
        <aside className={styles['page-contents']}>
          <PageContents lang={lang} headings={headings} />
        </aside>
        <article className={styles['page-body']}>{children}</article>
        <aside className={styles['latest-news']}>
          <PageLatestNews lang={lang} />
        </aside>
      </div>
    </div>
  );
};

export default PageBody;
