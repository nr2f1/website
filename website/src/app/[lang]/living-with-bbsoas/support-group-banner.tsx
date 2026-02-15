import Banner from '@components/banner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetBannerDocument,
  type GetBannerQuery,
} from '@graphql/queries/banner/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { supportGroupBannerId } from '@models/banners/banner';

interface SupportGroupBannerProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const SupportGroupBanner: React.FC<SupportGroupBannerProps> = async ({
  lang,
}) => {
  const { data, error } = await query<GetBannerQuery>({
    query: GetBannerDocument,
    variables: {
      id: supportGroupBannerId,
      locale: lang,
    },
  });

  const banner = data?.banner;

  if (error || !banner) {
    return null;
  }

  const { heading, content, cta, image } = banner;

  const headingContent = heading?.content ?? '';
  const textContent = documentToReactComponents(content?.content?.json);
  const ctaContent = cta?.text?.content ?? '';
  const ctaUrl = cta?.target?.url ?? '/';
  const imageUrl = image?.url ?? '';

  return (
    <Banner
      headingContent={headingContent}
      textContent={textContent}
      ctaContent={ctaContent}
      ctaUrl={ctaUrl}
      imageUrl={imageUrl}
    />
  );
};

export default SupportGroupBanner;
