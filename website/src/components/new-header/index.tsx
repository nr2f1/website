import { PreloadQuery } from '@graphql/client';
import { GetHeaderDocument } from '@graphql/queries/header/index.generated';
import { donateId, registerPatientId } from '@models/links';
import {
  aboutBbsoasId,
  aboutUsId,
  livingWithBbsoasId,
  researchId,
  supportUsId,
} from '@models/navlinks';
import { Suspense } from 'react';
import Header, { type HeaderProps } from './markup';

const NewHeaderWithData: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <PreloadQuery
      // @ts-ignore
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
      {/* TODO: handle loading */}
      <Suspense fallback={<span>loading</span>}>
        <Header lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default NewHeaderWithData;
