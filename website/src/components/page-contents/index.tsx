import { createHashLink } from '@shared/utils/hash-links';
import styles from './index.module.scss';

import type { AvailableLocale, LocalisedString } from '@i18n/locales';

interface HeadingsProps {
  headings: string[];
}

interface PageContentsProps extends HeadingsProps {
  lang: AvailableLocale;
}

const summary: LocalisedString = {
  en: 'Page contents',
  es: 'Contenido de la página',
  fr: 'Contenu de la page',
  de: 'Seiteninhalt',
};

const Headings: React.FC<HeadingsProps> = ({ headings }) => {
  return (
    <nav>
      <ul>
        {headings.map((heading) => (
          <li key={crypto.randomUUID()}>
            <a href={`#${createHashLink(heading)}`}>{heading}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const PageContents: React.FC<PageContentsProps> = ({ lang, headings }) => {
  const summaryText = summary[lang];

  return (
    <div className={styles['page-contents']}>
      <details>
        <summary>{summaryText}</summary>
        <Headings headings={headings} />
      </details>
      <div>
        <h3>{summaryText}</h3>
        <Headings headings={headings} />
      </div>
    </div>
  );
};

export default PageContents;
