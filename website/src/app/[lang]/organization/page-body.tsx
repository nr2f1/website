import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetOrganizationPageDocument,
  type GetOrganizationPageQuery,
} from '@graphql/queries/pages/organization/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  boardHeadingId,
  organizationResearchHeadingId,
  scientificHeadingId,
  volunteersHeadingId,
} from '@models/headings';
import {
  boardParagraphsId,
  organizationResearchParagraphsId,
  scientificParagraphsId,
} from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';
import { createBlogImageProps } from '@shared/utils/image-optimisation';

const { query } = getClient();

interface MemberProps {
  name: string | null | undefined;
  image: {
    url?: string | null;
    width?: number | null;
  } | null;
  title?: string | null;
  email?: string | null;
  lang: AvailableLocale;
  about: React.ReactNode;
}

const Member: React.FC<MemberProps> = ({
  name,
  image,
  title,
  email,
  lang,
  about,
}) => {
  const imageProps = createBlogImageProps({
    alt: name ?? '',
    baseUrl: image?.url ?? '',
    originalWidth: image?.width ?? 0,
  });

  return (
    <article>
      <div>
        <picture>
          <source
            media={imageProps.sources.avif.mobile.media}
            srcSet={imageProps.sources.avif.mobile.srcSet}
            type={imageProps.sources.avif.mobile.type}
          />
          <source
            media={imageProps.sources.avif.tablet.media}
            srcSet={imageProps.sources.avif.tablet.srcSet}
            type={imageProps.sources.avif.tablet.type}
          />
          <source
            srcSet={imageProps.sources.avif.desktop.srcSet}
            type={imageProps.sources.avif.desktop.type}
          />
          <source
            media={imageProps.sources.webp.mobile.media}
            srcSet={imageProps.sources.webp.mobile.srcSet}
            type={imageProps.sources.webp.mobile.type}
          />
          <source
            media={imageProps.sources.webp.tablet.media}
            srcSet={imageProps.sources.webp.tablet.srcSet}
            type={imageProps.sources.webp.tablet.type}
          />
          <source
            srcSet={imageProps.sources.webp.desktop.srcSet}
            type={imageProps.sources.webp.desktop.type}
          />
          <img {...imageProps.img} alt={name ?? ''} />
        </picture>
      </div>
      <h3>{name}</h3>
      {title && <p>{title}</p>}
      {email && (
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}

      <details>
        <summary>About</summary>
        {about}
      </details>
    </article>
  );
};

export const OrganizationPageBody: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const {
    data: {
      boardHeading,
      boardParagraphs,
      volunteersHeading,
      scientificHeading,
      researchHeading,
      scientificParagraphs,
      researchParagraphs,
      boardMembers,
    },
    error,
  } = await query<GetOrganizationPageQuery>({
    query: GetOrganizationPageDocument,
    variables: {
      boardHeadingId,
      boardParagraphsId,
      locale: lang,
      organizationResearchHeadingId,
      organizationResearchParagraphsId,
      scientificHeadingId,
      scientificParagraphsId,
      volunteersHeadingId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    boardHeading?.content ?? '',
    volunteersHeading?.content ?? '',
    scientificHeading?.content ?? '',
    researchHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(boardHeading?.content ?? '')}>
          {boardHeading?.content}
        </h2>
        {documentToReactComponents(boardParagraphs?.content?.json)}

        <div>
          {boardMembers?.items?.map((member) => {
            return (
              <Member
                key={crypto.randomUUID()}
                name={member?.name}
                image={member?.image ?? null}
                title={member?.title ?? null}
                email={member?.email ?? null}
                lang={lang}
                about={documentToReactComponents(member?.about?.json)}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2 id={createHashLink(volunteersHeading?.content ?? '')}>
          {volunteersHeading?.content}
        </h2>
      </section>
      <section>
        <h2 id={createHashLink(scientificHeading?.content ?? '')}>
          {scientificHeading?.content}
        </h2>
        {documentToReactComponents(scientificParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(researchHeading?.content ?? '')}>
          {researchHeading?.content}
        </h2>
        {documentToReactComponents(researchParagraphs?.content?.json)}
      </section>
    </PageBody>
  );
};

export default OrganizationPageBody;
