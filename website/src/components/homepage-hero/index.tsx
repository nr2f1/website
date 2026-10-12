import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import { GetHomePageHeroDocument } from '@graphql/queries/homepage-hero/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { heroHeadingId } from '@models/headings';
import { heroImageId } from '@models/images';
import { heroCtaId } from '@models/links';
import { heroNavigationListId } from '@models/navlinks';
import { heroParagraphId } from '@models/paragraphs';
import { optimisedAvifImageUrl } from '@shared/utils/image-optimisation';
import { localiseHref } from '@shared/utils/localise-href';
import styles from './index.module.scss';

interface HomePageHeroProps {
  lang: AvailableLocale;
}

const HomePageHero: React.FC<HomePageHeroProps> = async ({ lang }) => {
  const { query } = getClient();

  const { data } = await query({
    query: GetHomePageHeroDocument,
    variables: {
      heroCtaId,
      heroHeadingId,
      heroImageId,
      heroNavigationListId,
      heroParagraphId,
      locale: lang,
    },
  });

  if (!data) {
    return null;
  }

  const { heroCta, heroHeading, heroNavigationList, heroParagraph, heroImage } =
    data;

  // This background image is the page's Largest Contentful Paint element. A CSS
  // background cannot be discovered until styles are computed, so preload it
  // with a high priority. The image column is `display: none` below 672px, so
  // scope the preload to the screens that actually render it.
  const heroImageUrl = heroImage?.asset?.url
    ? optimisedAvifImageUrl(heroImage.asset.url)
    : '';

  const heroNavigationLinkItems =
    heroNavigationList?.linksCollection?.items.map((item) => {
      if (!item)
        return {
          content: 'Missing Link',
          href: '#',
        };
      return {
        content: item.text?.content ?? 'Missing Text',
        href: localiseHref(item.target?.url ?? '#', lang),
      };
    }) ?? [];

  return (
    <>
      {heroImageUrl && (
        // React hoists this into <head>. Preloading the LCP background image
        // with a high priority lets the browser start it without waiting for
        // styles to resolve. Scoped to the screens that render the image column.
        <link
          rel="preload"
          as="image"
          href={heroImageUrl}
          fetchPriority="high"
          media="(min-width: 672px)"
        />
      )}
      <div className={styles.hero}>
        <div className={styles.hero__content_wrapper}>
          <div className={styles.hero__row}>
            <div className={styles.hero__col}>
              <section className={styles.hero__what_are_we}>
                <h2>{heroHeading?.content}</h2>
                {documentToReactComponents(heroParagraph?.content?.json)}
                <a
                  href={localiseHref(heroCta?.target?.url ?? '/', lang)}
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
                      <li key={href}>
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
              style={{
                backgroundImage: `url(${heroImageUrl})`,
              }}
            />
          </div>
          <section className={styles.hero__how_can_we_help_tablet}>
            <h3>{heroNavigationList?.name}</h3>
            <nav>
              <ul>
                {heroNavigationLinkItems.map(({ href, content }) => (
                  <li key={href}>
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
    </>
  );
};

export default HomePageHero;
