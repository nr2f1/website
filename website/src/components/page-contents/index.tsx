'use client';

import styles from './index.module.scss';

import type { AvailableLocale, LocalisedString } from '@i18n/locales';
import { useEffect, useRef, useState } from 'react';

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

  const [open, setOpen] = useState(true);

  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const detailsWidth = detailsRef.current?.offsetWidth ?? 0;
    if (detailsWidth > 224) {
      setOpen(false);
    }
  }, []);

  return (
    <details open={open} className={styles['page-contents']} ref={detailsRef}>
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
  );
};

export default PageContents;
