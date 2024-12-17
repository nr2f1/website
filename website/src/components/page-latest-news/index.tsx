import styles from './index.module.scss';

import type { AvailableLocale, LocalisedString } from '@i18n/locales';

interface PageLatestNewsProps {
  lang: AvailableLocale;
}

const latestNewsTitle: LocalisedString = {
  en: 'Latest news',
  es: 'Últimas noticias',
  fr: 'Dernières nouvelles',
  de: 'Neueste Nachrichten',
};

const PageLatestNews: React.FC<PageLatestNewsProps> = ({ lang }) => {
  const latestNewsTitleText = latestNewsTitle[lang];

  return (
    <div className={styles['latest-news-content']}>
      <h3>{latestNewsTitleText}</h3>

      <article>
        <p>Blog</p>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <p>
          <time dateTime="">May 24, 2024</time>
        </p>
      </article>
      <article>
        <p>Blog</p>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <p>
          <time dateTime="">May 24, 2024</time>
        </p>
      </article>
      <article>
        <p>Blog</p>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <p>
          <time dateTime="">May 24, 2024</time>
        </p>
      </article>
    </div>
  );
};

export default PageLatestNews;
