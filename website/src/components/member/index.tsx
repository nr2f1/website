import type { AvailableLocale } from '@i18n/locales';
import { createBlogImageProps } from '@shared/utils/image-optimisation';

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

export default Member;
