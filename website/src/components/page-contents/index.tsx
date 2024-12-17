import styles from './index.module.scss';

import type { AvailableLocale, LocalisedString } from '@i18n/locales';

interface PageContentsProps {
  lang: AvailableLocale;
}

const summary: LocalisedString = {
  en: 'Page contents',
  es: 'Contenido de la página',
  fr: 'Contenu de la page',
  de: 'Seiteninhalt',
};

const PageContents: React.FC<PageContentsProps> = ({ lang }) => {
  const summaryText = summary[lang];

  return (
    <div className={styles['page-contents']}>
      <details>
        <summary>{summaryText}</summary>
        <nav>
          <ul>
            <li>
              <a href="/">Register with us</a>
            </li>
            <li>
              <a href="/">Register with the NR2F1 Patient Registry</a>
            </li>
            <li>
              <a href="/">Register for a Clinical Research ID</a>
            </li>
          </ul>
        </nav>
      </details>
      <div>
        <h3>{summaryText}</h3>
        <nav>
          <ul>
            <li>
              <a href="/">Register with us</a>
            </li>
            <li>
              <a href="/">Register with the NR2F1 Patient Registry</a>
            </li>
            <li>
              <a href="/">Register for a Clinical Research ID</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageContents;
