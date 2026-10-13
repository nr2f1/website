import { getClient } from '@graphql/client';
import { GetCookieBannerDocument } from '@graphql/queries/cookie-banner/index.generated';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { cacheLife, cacheTag } from 'next/cache';
import CookieBanner from './markup';

const CookieBannerWithData: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  'use cache';
  cacheLife('hours');
  cacheTag('contentful');

  const { query } = getClient();
  const { data, error } = await query({
    query: GetCookieBannerDocument,
    variables: { locale: lang },
  });

  if (error || !data) {
    return null;
  }

  return <CookieBanner data={data} />;
};

export default CookieBannerWithData;
