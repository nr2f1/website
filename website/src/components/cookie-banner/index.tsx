import { PreloadQuery } from '@graphql/client';
import { GetCookieBannerDocument } from '@graphql/queries/cookie-banner/index.generated';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { Suspense } from 'react';
import CookieBanner from './markup';

const CookieBannerWithData: React.FC<ComponentPropsWithLocale> = ({ lang }) => {
  return (
    <PreloadQuery
      query={GetCookieBannerDocument}
      variables={{
        locale: lang,
      }}
    >
      <Suspense fallback={<span>loading</span>}>
        <CookieBanner lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default CookieBannerWithData;
