import type { AvailableLocale } from '@i18n/locales';
import { optimisedAvifImageUrl } from '@shared/utils/image-optimisation';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import styles from './index.module.scss';

interface PageHeaderProps {
  imageUrl?: string;
  lang: AvailableLocale;
  lastUpdated: string;
  pageTitle: string;
}

type LastUpdated = Record<AvailableLocale, string>;

const lastUpdatedI18n: LastUpdated = {
  de: 'Zuletzt aktualisiert',
  en: 'Last updated',
  es: 'Última actualización',
  fr: 'Dernière mise à jour',
};

const PageHeader: React.FC<PageHeaderProps> = ({
  imageUrl,
  lang,
  lastUpdated,
  pageTitle,
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
          <div className={styles['page-header__background']}>
            <section>
              <div>
                <h1>{pageTitle}</h1>
              </div>
            </section>
            <div
              style={{
                backgroundImage: `url(${optimisedAvifImageUrl(imageUrl)})`,
              }}
            />
          </div>
          <div className={styles['page-header__last-updated']}>
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
        <div className={styles['page-header--no-image']}>
          <section>
            <div className="content-wrapper">
              <h1>{pageTitle}</h1>
            </div>
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
