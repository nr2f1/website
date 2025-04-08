import Banner from '@components/banner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetBannerDocument,
  type GetBannerQuery,
} from '@graphql/queries/banner/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { volunteerWithUsBannerId } from '@models/banners/banner';

interface VolunteerWithUsBannerProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const VolunteerWithUsBanner: React.FC<VolunteerWithUsBannerProps> = async ({
  lang,
}) => {
  const {
    data: { banner },
    error,
  } = await query<GetBannerQuery>({
    query: GetBannerDocument,
    variables: {
      id: volunteerWithUsBannerId,
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
    <Banner
      headingContent={headingContent}
      textContent={textContent}
      ctaContent={ctaContent}
      ctaUrl={ctaUrl}
      imageUrl={imageUrl}
      openNewTab
    />
  );
};

export default VolunteerWithUsBanner;
