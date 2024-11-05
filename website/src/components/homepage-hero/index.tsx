import { PreloadQuery } from '@graphql/client';
import { GetHomePageHeroDocument } from '@graphql/queries/homepage-hero/index.generated';
import { heroHeadingId } from '@models/headings';
import { heroCtaId } from '@models/links';
import { heroNavigationListId } from '@models/navlinks';
import { heroParagraphId } from '@models/paragraphs';
import { Suspense } from 'react';
import HomePageHero, { type HomePageHeroProps } from './markup';

const HomePageHeroWithData: React.FC<HomePageHeroProps> = ({ lang }) => {
  return (
    <PreloadQuery
      // @ts-ignore
      query={GetHomePageHeroDocument}
      variables={{
        heroCtaId,
        heroHeadingId,
        heroNavigationListId,
        heroParagraphId,
        locale: lang,
      }}
    >
      {/* TODO: handle loading */}
      <Suspense fallback={<span>loading</span>}>
        <HomePageHero lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default HomePageHeroWithData;
