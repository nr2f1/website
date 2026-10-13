import { getClient } from '@graphql/client';
import { GetFooterDocument } from '@graphql/queries/footer/index.generated';
import { stayInTouchId } from '@models/headings';
import {
  contactUsId,
  copyrightId,
  socialMediaTextId,
  warningId,
} from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { cacheLife, cacheTag } from 'next/cache';
import Footer from './markup';

const FooterWithData: React.FC<ComponentPropsWithLocale> = async ({ lang }) => {
  'use cache';
  cacheLife('hours');
  cacheTag('contentful');

  const { query } = getClient();
  const { data, error } = await query({
    query: GetFooterDocument,
    variables: {
      contactUsId,
      copyrightId,
      locale: lang,
      socialMediaTextId,
      stayInTouchId,
      warningId,
    },
  });

  if (error || !data) {
    return null;
  }

  return <Footer data={data} lang={lang} />;
};

export default FooterWithData;
