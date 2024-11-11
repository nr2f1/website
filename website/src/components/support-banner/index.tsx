import styles from './index.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetBannerDocument,
  type GetBannerQuery,
} from '@graphql/queries/banner/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { supportUsBannerId } from '@models/banners/banner';

interface SupportBannerProps {
  lang: AvailableLocale;
}

const SupportBanner: React.FC<SupportBannerProps> = async ({ lang }) => {
  const { query } = getClient();

  const {
    data: { banner },
    error,
  } = await query<GetBannerQuery>({
    query: GetBannerDocument,
    variables: {
      id: supportUsBannerId,
      locale: lang,
    },
  });

  if (error || !banner) {
    return null;
  }

  const { heading, content, cta, image } = banner;

  const headingContent = heading?.content ?? '';
  const textContent = documentToReactComponents(content?.content?.json);
  const ctaContent = cta?.content ?? '';
  const ctaUrl = cta?.href ?? '/';
  const imageUrl = image?.url ?? '';

  return (
    <div className={styles['support-banner']}>
      <div className="content-wrapper">
        <section
          style={{
            backgroundImage: `url(${imageUrl}), linear-gradient(90deg, rgba(0, 0, 0, 0.60) 36.61%, rgba(0, 0, 0, 0.00) 100%)`,
          }}
        >
          <h2>{headingContent}</h2>
          {textContent}
          <a href={ctaUrl} className="button button--accent-on-dark">
            {ctaContent}
          </a>
        </section>
      </div>
    </div>
  );
};

export default SupportBanner;
