import Banner from '@components/banner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetBannerDocument,
  type GetBannerQuery,
} from '@graphql/queries/banner/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { homePageBannerId } from '@models/banners/banner';

interface HomePageBannerProps {
  lang: AvailableLocale;
}

const HomePageBanner: React.FC<HomePageBannerProps> = async ({ lang }) => {
  const client = getClient();

  const { data, error } = await client.query<GetBannerQuery>({
    query: GetBannerDocument,
    variables: {
      id: homePageBannerId,
      locale: lang,
    },
  });

  if (error || !data?.banner) {
    return null;
  }

  const { heading, content, cta, image } = data.banner;

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

export default HomePageBanner;
