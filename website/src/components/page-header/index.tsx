import styles from './index.module.css';

import type { AvailableLocale } from '@i18n/locales';
import { getIntlDateStrings } from '@shared/utils/intl-date';

interface PageHeaderProps {
  imageUrl?: string;
  lang: AvailableLocale;
  lastUpdated: string;
  pageTitle: string;
  sectionTitle: string;
}

type LastUpdated = Record<AvailableLocale, string>;

const lastUpdatedI18n: LastUpdated = {
  en: 'Last updated',
  es: 'Última actualización',
  fr: 'Dernière mise à jour',
  de: 'Zuletzt aktualisiert',
};

const PageHeader: React.FC<PageHeaderProps> = ({
  imageUrl,
  lang,
  lastUpdated,
  pageTitle,
  sectionTitle,
}) => {
  const { publishedString, dateTime } = getIntlDateStrings({
    date: lastUpdated,
    locale: lang,
  });

  const haveImageUrl = imageUrl && imageUrl.length > 0;

  switch (true) {
    case haveImageUrl: {
      return (
        <div className={styles['page-header']}>
          <section>
            <div>
              <p>{sectionTitle}</p>
              <h1>{pageTitle}</h1>
            </div>
            <div
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
          </section>
          <div>
            <div className="content-wrapper">
              <p>
                {lastUpdatedI18n[lang]}:{' '}
                <time dateTime={dateTime}>{publishedString}</time>
              </p>
            </div>
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className={styles['page-header--mobile']}>
          <section>
            <p>{sectionTitle}</p>
            <h1>{pageTitle}</h1>
          </section>
          <div>
            <div className="content-wrapper">
              <p>
                {lastUpdatedI18n[lang]}:{' '}
                <time dateTime={dateTime}>{publishedString}</time>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default PageHeader;