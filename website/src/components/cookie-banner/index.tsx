import { PreloadQuery } from '@graphql/client';
import { GetCookieBannerDocument } from '@graphql/queries/cookie-banner/index.generated';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { Suspense } from 'react';
import CookieBanner from './markup';
import CookieBannerSkeleton from './skeleton';

const CookieBannerWithData: React.FC<ComponentPropsWithLocale> = ({ lang }) => {
  return (
    <PreloadQuery
      query={GetCookieBannerDocument}
      variables={{
        locale: lang,
      }}
    >
      <Suspense fallback={<CookieBannerSkeleton />}>
        <CookieBanner lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default CookieBannerWithData;
