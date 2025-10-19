import Accordion from '@components/accordion';
import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetConferencePageDocument,
  type GetConferencePageQuery,
} from '@graphql/queries/pages/conference/index.generated';
import {
  bookTicketsHeadingId,
  faqsHeadingId,
  nextConferenceHeadingId,
  offerHeadingId,
  pastConferencesHeadingId,
  sponsorshipHeadingId,
} from '@models/headings';
import { bookTicketsLinkId } from '@models/links';
import {
  infoParagraphId,
  introParagraphId,
  offerParagraphsId,
  pastConferencesParagraphsId,
  sponsorshipParagraphsId,
} from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';
import { type Links, renderOptions } from '@shared/utils/rich-text';
import styles from './index.module.scss';

const { query } = getClient();

const ConferencePageBody: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const { data, error } = await query<GetConferencePageQuery>({
    query: GetConferencePageDocument,
    variables: {
      bookTicketsHeadingId,
      bookTicketsLinkId,
      faqsHeadingId,
      infoParagraphId,
      introParagraphId,
      locale: lang,
      nextConferenceHeadingId,
      offerHeadingId,
      offerParagraphsId,
      pastConferencesHeadingId,
      pastConferencesParagraphsId,
      sponsorshipHeadingId,
      sponsorshipParagraphsId,
    },
  });

  if (error || !data) {
    return null;
  }

  const headings = [
    data.nextConferenceHeading?.content ?? '',
    data.bookTicketsHeading?.content ?? '',
    data.offerHeading?.content ?? '',
    data.sponsorshipHeading?.content ?? '',
    data.faqsHeading?.content ?? '',
    data.pastConferencesHeading?.content ?? '',
  ];

  const BookTicketButton = () => (
    <a
      className={`button button--on-light ${styles.conference__button}`}
      href={data.bookTicketsLink?.target?.url ?? ''}
    >
      {data.bookTicketsLink?.text?.content}
    </a>
  );

  return (
    <PageBody lang={lang} headings={headings} className={styles.conference}>
      <section
        className={`${styles.conference__intro} ${styles.conference__with_image}`}
      >
        {documentToReactComponents(
          data.introParagraph?.content?.json,
          renderOptions(data.introParagraph?.content?.links as Links),
        )}
      </section>
      <section
        className={`${styles.conference__info} ${styles.conference__with_image}`}
      >
        <h2 id={createHashLink(data.nextConferenceHeading?.content ?? '')}>
          {data.nextConferenceHeading?.content}
        </h2>
        <BookTicketButton />
        {documentToReactComponents(
          data.infoParagraph?.content?.json,
          renderOptions(data.infoParagraph?.content?.links as Links),
        )}
      </section>
      <section className={styles.conference__book_tickets}>
        <h2 id={createHashLink(data.bookTicketsHeading?.content ?? '')}>
          {data.bookTicketsHeading?.content}
        </h2>
        <BookTicketButton />
      </section>
      <section>
        <h2 id={createHashLink(data.offerHeading?.content ?? '')}>
          {data.offerHeading?.content}
        </h2>
        {documentToReactComponents(data.offerParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(data.sponsorshipHeading?.content ?? '')}>
          {data.sponsorshipHeading?.content}
        </h2>
        {documentToReactComponents(data.sponsorshipParagraphs?.content?.json)}
      </section>
      <section className={styles.conference__faqs}>
        <h2 id={createHashLink(data.faqsHeading?.content ?? '')}>
          {data.faqsHeading?.content}
        </h2>

        {data.accordionCollection?.items.map((item) => (
          <Accordion
            key={crypto.randomUUID()}
            title={item?.title ?? ''}
            content={documentToReactComponents(item?.content?.json)}
          />
        ))}
      </section>
      <section className={styles.conference__past_conferences}>
        <h2 id={createHashLink(data.pastConferencesHeading?.content ?? '')}>
          {data.pastConferencesHeading?.content}
        </h2>
        {documentToReactComponents(
          data.pastConferencesParagraphs?.content?.json,
        )}
      </section>
    </PageBody>
  );
};

export default ConferencePageBody;
