import { PreloadQuery } from '@graphql/client';
import { GetConferenceBannerDocument } from '@graphql/queries/conference-banner/index.generated';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import ConferenceBannerMarkup from './markup';

const ConferenceBanner: React.FC<ComponentPropsWithLocale> = ({ lang }) => {
  return (
    <PreloadQuery
      query={GetConferenceBannerDocument}
      variables={{
        id: '7e3fMz1x8E2LYxiSatGZfg',
        lang,
      }}
    >
      <ConferenceBannerMarkup lang={lang} />
    </PreloadQuery>
  );
};

export default ConferenceBanner;
