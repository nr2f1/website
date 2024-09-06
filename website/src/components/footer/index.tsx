import type { HeaderProps } from '@components/header/markup';
import { PreloadQuery } from '@graphql/client';
import { GetFooterDocument } from '@graphql/queries/footer/index.generated';
import { Suspense } from 'react';
import Footer from './markup';
import { stayInTouchId } from '@models/headings';
import {
  socialMediaTextId,
  footerFormId,
  copyrightId,
  warningId,
  contactUsId,
} from '@models/paragraphs';

const FooterWithData: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <PreloadQuery
      // @ts-ignore
      query={GetFooterDocument}
      variables={{
        locale: lang,
        stayInTouchId,
        socialMediaTextId,
        footerFormId,
        copyrightId,
        warningId,
        contactUsId,
      }}
    >
      {/* TODO: handle loading */}
      <Suspense fallback={<span>loading</span>}>
        <Footer lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default FooterWithData;
