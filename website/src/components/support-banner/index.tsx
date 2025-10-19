import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetBannerDocument,
  type GetBannerQuery,
} from '@graphql/queries/banner/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { supportUsBannerId } from '@models/banners/banner';
import { optimisedAvifImageUrl } from '@shared/utils/image-optimisation';
import styles from './index.module.scss';

interface SupportBannerProps {
  lang: AvailableLocale;
}

const SupportBanner: React.FC<SupportBannerProps> = async ({ lang }) => {
  const { query } = getClient();

  const { data, error } = await query<GetBannerQuery>({
    query: GetBannerDocument,
    variables: {
      id: supportUsBannerId,
      locale: lang,
    },
  });

  if (error || !data) {
    return null;
  }

  const headingContent = data.banner?.heading?.content ?? '';
  const textContent = documentToReactComponents(
    data.banner?.content?.content?.json,
  );
  const ctaContent = data.banner?.cta?.text?.content ?? '';
  const ctaUrl = data.banner?.cta?.target?.url ?? '/';
  const imageUrl = data.banner?.image?.url ?? '';

  return (
    <div className={styles['support-banner']}>
      <div className="content-wrapper">
        {/* Note: we are injecting the background image url in this way
            to deal with the different overlast per breakpoitns */}
        <section
          style={
            {
              '--bg-image': `url(${optimisedAvifImageUrl(imageUrl)})`,
            } as React.CSSProperties
          }
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
