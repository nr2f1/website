import type { AvailableLocale, LocalisedString } from '@i18n/locales';
import { createHashLink } from '@shared/utils/hash-links';
import styles from './index.module.scss';

interface HeadingsProps {
  headings: string[];
}

interface PageContentsProps extends HeadingsProps {
  lang: AvailableLocale;
}

export const pageContents: LocalisedString = {
  de: 'Seiteninhalt',
  en: 'Page contents',
  es: 'Contenido de la página',
  fr: 'Contenu de la page',
  it: 'Contenuto della pagina',
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
  const pageContextText = pageContents[lang];

  return (
    <div className={styles['page-contents-headings']}>
      <details>
        <summary>{pageContextText}</summary>
        <Headings headings={headings} />
      </details>
      <div>
        <h2>{pageContextText}</h2>
        <Headings headings={headings} />
      </div>
    </div>
  );
};

export default PageContents;
