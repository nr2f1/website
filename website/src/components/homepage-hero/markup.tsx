'use client';

import styles from './index.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useGetHomePageHeroSuspenseQuery } from '@graphql/queries/homepage-hero/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { heroHeadingId } from '@models/headings';
import { heroCtaId } from '@models/links';
import { heroNavigationListId } from '@models/navlinks';
import { heroParagraphId } from '@models/paragraphs';
import { getLocalisedLinkProps } from '@shared/utils/link';

export interface HomePageHeroProps {
  lang: AvailableLocale;
}

const HomePageHero: React.FC<HomePageHeroProps> = ({ lang }) => {
  const {
    // @ts-ignore
    data: { heroCta, heroHeading, heroNavigationList, heroParagraph },
    error,
  } = useGetHomePageHeroSuspenseQuery({
    variables: {
      heroCtaId,
      heroHeadingId,
      heroNavigationListId,
      heroParagraphId,
      locale: lang,
    },
  });

  const heroNavigationLinkItems = getLocalisedLinkProps(
    heroNavigationList?.linksCollection.items,
  );

  return (
    <div className={styles.hero}>
      <div className={styles.hero__content_wrapper}>
        <div className={styles.hero__row}>
          <div className={styles.hero__col}>
            <section className={styles.hero__what_are_we}>
              <h2>{heroHeading?.content}</h2>
              {documentToReactComponents(heroParagraph?.content?.json)}
              <a
                href={heroCta?.href ?? '/'}
                className="button button--on-light"
              >
                {heroCta?.content}
              </a>
            </section>
            <section className={styles.hero__how_can_we_help}>
              <h3>{heroNavigationList?.name}</h3>
              <nav>
                <ul>
                  {heroNavigationLinkItems.map(({ href, content }) => (
                    <li key={crypto.randomUUID()}>
                      <a href={href} className="signpost-item">
                        {content}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
          <div className={styles.hero__col} />
        </div>
        <section className={styles.hero__how_can_we_help_tablet}>
          <h3>{heroNavigationList?.name}</h3>
          <nav>
            <ul>
              {heroNavigationLinkItems.map(({ href, content }) => (
                <li key={crypto.randomUUID()}>
                  <a href={href} className="signpost-item">
                    {content}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default HomePageHero;
