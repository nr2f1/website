import Footer from '@components/footer';
import Header from '@components/header';
import type { AvailableLocale } from '@i18n/locales';
import { getLocale } from '@shared/utils/get-locale';
import Link from 'next/link';
import styles from './not-found.module.scss';

const translations: Record<AvailableLocale, Record<string, string>> = {
  de: {
    cta: 'Zurück zur Startseite',
    description:
      'Der Link, dem Sie gefolgt sind, ist möglicherweise defekt oder die Seite wurde möglicherweise entfernt.',
    title: 'Entschuldigung, diese Seite ist nicht verfügbar',
  },
  en: {
    cta: 'Back to homepage',
    description:
      'The link you followed may be broken, or the page may have been removed.',
    title: 'Sorry, this page isn’t available',
  },
  es: {
    cta: 'Volver a la página de inicio',
    description:
      'El enlace que seguiste puede estar roto o es posible que se haya eliminado la página.',
    title: 'Lo sentimos, esta página no está disponible',
  },
  fr: {
    cta: 'Retour à la page d’accueil',
    description:
      'Le lien que vous avez suivi peut être cassé ou la page a peut-être été supprimée.',
    title: 'Désolé, cette page n’est pas disponible',
  },
};

import { GoogleAnalytics } from '@next/third-parties/google';
import { GOOGLE_ANALYTICS_ID } from '@shared/utils/google-tracking';
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  adjustFontFallback: false,
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-nunito-sans',
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
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
