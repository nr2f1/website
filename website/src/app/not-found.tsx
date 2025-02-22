import styles from './not-found.module.scss';

import Footer from '@components/footer';
import Header from '@components/header';
import type { AvailableLocale } from '@i18n/locales';
import { getLocale } from '@shared/utils/get-locale';
import Link from 'next/link';

const translations: Record<AvailableLocale, Record<string, string>> = {
  en: {
    title: 'Sorry, this page isn’t available',
    description:
      'The link you followed may be broken, or the page may have been removed.',
    cta: 'Back to homepage',
  },
  fr: {
    title: 'Désolé, cette page n’est pas disponible',
    description:
      'Le lien que vous avez suivi peut être cassé ou la page a peut-être été supprimée.',
    cta: 'Retour à la page d’accueil',
  },
  de: {
    title: 'Entschuldigung, diese Seite ist nicht verfügbar',
    description:
      'Der Link, dem Sie gefolgt sind, ist möglicherweise defekt oder die Seite wurde möglicherweise entfernt.',
    cta: 'Zurück zur Startseite',
  },
  es: {
    title: 'Lo sentimos, esta página no está disponible',
    description:
      'El enlace que seguiste puede estar roto o es posible que se haya eliminado la página.',
    cta: 'Volver a la página de inicio',
  },
};

import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  adjustFontFallback: false,
  preload: true,
});

export default async function NotFound() {
  const lang = await getLocale();

  // TODO: remove lang selector from header

  return (
    <html lang={lang} className={nunitoSans.variable}>
      <body>
        <Header lang={lang} />
        <main>
          <div className={styles.notfound}>
            <div className={styles.notfound__content_wrapper}>
              <article>
                <h1>{translations[lang].title}</h1>

                <p>
                  <span>404 error</span>: {translations[lang].description}
                </p>

                <Link href={`/${lang}`} className="button button--on-light">
                  {translations[lang].cta}
                </Link>
              </article>
            </div>
          </div>
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
