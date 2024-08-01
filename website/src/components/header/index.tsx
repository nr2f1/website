import { PreloadQuery } from '@graphql/client';
import { GetHeaderDocument } from '@graphql/queries/header/index.generated';
import { Suspense } from 'react';
import { donateId, registerPatientId } from 'website/src/models/links';
import {
  aboutBbsoasId,
  aboutUsId,
  livingWithBbsoasId,
  researchId,
  supportUsId,
} from 'website/src/models/navlinks';
import Header, { type HeaderProps } from './layout';

const HeaderWithData: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <PreloadQuery
      query={GetHeaderDocument}
      variables={{
        locale: lang,
        registerPatientId,
        donateId,
        aboutBbsoasId,
        livingWithBbsoasId,
        researchId,
        aboutUsId,
        supportUsId,
      }}
    >
      <Suspense fallback={<span>loading</span>}>
        <Header lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default HeaderWithData;
