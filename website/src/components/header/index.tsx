import { PreloadQuery } from '@graphql/client';
import { GetHeaderDocument } from '@graphql/queries/header/index.generated';
import { Suspense } from 'react';
import Header, { type HeaderProps } from './layout';

const HeaderWithData: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <PreloadQuery query={GetHeaderDocument}>
      <Suspense fallback={<span>loading</span>}>
        <Header lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default HeaderWithData;
