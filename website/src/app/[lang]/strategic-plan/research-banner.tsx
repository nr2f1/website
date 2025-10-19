import Banner from '@components/banner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetBannerDocument,
  type GetBannerQuery,
} from '@graphql/queries/banner/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { researchBannerId } from '@models/banners/banner';

interface ResearchBannerProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const ResearchBanner: React.FC<ResearchBannerProps> = async ({ lang }) => {
  const { data, error } = await query<GetBannerQuery>({
    query: GetBannerDocument,
    variables: {
      id: researchBannerId,
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
    <Banner
      headingContent={headingContent}
      textContent={textContent}
      ctaContent={ctaContent}
      ctaUrl={ctaUrl}
      imageUrl={imageUrl}
      theme="navy"
    />
  );
};

export default ResearchBanner;
