import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetShopDocument,
  type GetShopQuery,
} from '@graphql/queries/pages/shop/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { shopHeadingId } from '@models/headings';
import { shopLinkCtaId } from '@models/links';
import { shopParagraphsId } from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';

interface ShopBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const ShopBody: React.FC<ShopBodyProps> = async ({ lang }) => {
  const {
    data: { heading, paragraphs, link },
    error,
  } = await query<GetShopQuery>({
    query: GetShopDocument,
    variables: {
      locale: lang,
      shopHeadingId,
      shopParagraphsId,
      shopLinkCtaId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [heading?.content ?? ''];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(heading?.content ?? '')}>{heading?.content}</h2>
        {documentToReactComponents(paragraphs?.content?.json)}

        <a
          className="button button--on-light-open-new-tab"
          href={link?.target?.url ?? ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link?.text?.content}
        </a>
      </section>
    </PageBody>
  );
};

export default ShopBody;
