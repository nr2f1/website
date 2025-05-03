import { PreloadQuery } from '@graphql/client';
import { GetNewHeaderDocument } from '@graphql/queries/header/index.generated';
import { donateId, registerPatientId } from '@models/links';
import { Suspense } from 'react';
import Header, { type HeaderProps } from './markup';

const HeaderWithData: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <PreloadQuery
      // @ts-ignore
      query={GetNewHeaderDocument}
      variables={{
        locale: lang,
        registerPatientId,
        donateId,
      }}
    >
      {/* TODO: handle loading */}
      <Suspense fallback={<span>loading</span>}>
        <Header lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default HeaderWithData;
