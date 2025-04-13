import styles from './index.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetHomePageHeroDocument,
  type GetHomePageHeroQuery,
} from '@graphql/queries/homepage-hero/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { heroHeadingId } from '@models/headings';
import { heroImageId } from '@models/images';
import { heroCtaId } from '@models/links';
import { heroNavigationListId } from '@models/navlinks';
import { heroParagraphId } from '@models/paragraphs';

interface HomePageHeroProps {
  lang: AvailableLocale;
}

const HomePageHero: React.FC<HomePageHeroProps> = async ({ lang }) => {
  const { query } = getClient();

  const {
    data: {
      heroCta,
      heroHeading,
      heroNavigationList,
      heroParagraph,
      heroImage,
    },
    error,
  } = await query<GetHomePageHeroQuery>({
    query: GetHomePageHeroDocument,
    variables: {
      heroCtaId,
      heroHeadingId,
      heroNavigationListId,
      heroParagraphId,
      heroImageId,
      locale: lang,
    },
  });

  const heroNavigationLinkItems =
    heroNavigationList?.linksCollection?.items.map((item) => {
      if (!item)
        return {
          href: '#',
          content: 'Missing Link',
        };
      return {
        href: item.target?.url ?? '#',
        content: item.text?.content ?? 'Missing Text',
      };
    }) ?? [];

  return (
    <div className={styles.hero}>
      <div className={styles.hero__content_wrapper}>
        <div className={styles.hero__row}>
          <div className={styles.hero__col}>
            <section className={styles.hero__what_are_we}>
              <h2>{heroHeading?.content}</h2>
              {documentToReactComponents(heroParagraph?.content?.json)}
              <a
                href={heroCta?.target?.url ?? '/'}
                className="button button--on-light"
              >
                {heroCta?.text?.content}
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
          <div
            className={styles.hero__col}
            style={{ backgroundImage: `url(${heroImage?.asset?.url ?? ''})` }}
          />
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
