import type { HeaderProps } from '@components/header/markup';
import { PreloadQuery } from '@graphql/client';
import { GetFooterDocument } from '@graphql/queries/footer/index.generated';
import { stayInTouchId } from '@models/headings';
import {
  contactUsId,
  copyrightId,
  socialMediaTextId,
  warningId,
} from '@models/paragraphs';
import { Suspense } from 'react';
import Footer from './markup';

const FooterWithData: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <PreloadQuery
      query={GetFooterDocument}
      variables={{
        contactUsId,
        copyrightId,
        locale: lang,
        socialMediaTextId,
        stayInTouchId,
        warningId,
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
