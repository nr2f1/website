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

  const {
    pastConferencesHeading,
    introParagraph,
    bookTicketsLink,
    infoParagraph,
    bookTicketsHeading,
    offerHeading,
    offerParagraphs,
    sponsorshipHeading,
    sponsorshipParagraphs,
    faqsHeading,
    accordionCollection,
    nextConferenceHeading,
    pastConferencesParagraphs,
  } = data;

  const headings = [
    nextConferenceHeading?.content ?? '',
    bookTicketsHeading?.content ?? '',
    offerHeading?.content ?? '',
    sponsorshipHeading?.content ?? '',
    faqsHeading?.content ?? '',
    pastConferencesHeading?.content ?? '',
  ];

  const BookTicketButton = () => (
    <a
      className={`button button--on-light ${styles.conference__button}`}
      href={bookTicketsLink?.target?.url ?? ''}
    >
      {bookTicketsLink?.text?.content}
    </a>
  );

  return (
    <PageBody lang={lang} headings={headings} className={styles.conference}>
      <section
        className={`${styles.conference__intro} ${styles.conference__with_image}`}
      >
        {documentToReactComponents(
          introParagraph?.content?.json,
          renderOptions(introParagraph?.content?.links as Links),
        )}
      </section>
      <section
        className={`${styles.conference__info} ${styles.conference__with_image}`}
      >
        <h2 id={createHashLink(nextConferenceHeading?.content ?? '')}>
          {nextConferenceHeading?.content}
        </h2>
        <BookTicketButton />
        {documentToReactComponents(
          infoParagraph?.content?.json,
          renderOptions(infoParagraph?.content?.links as Links),
        )}
      </section>
      <section className={styles.conference__book_tickets}>
        <h2 id={createHashLink(bookTicketsHeading?.content ?? '')}>
          {bookTicketsHeading?.content}
        </h2>
        <BookTicketButton />
      </section>
      <section>
        <h2 id={createHashLink(offerHeading?.content ?? '')}>
          {offerHeading?.content}
        </h2>
        {documentToReactComponents(offerParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(sponsorshipHeading?.content ?? '')}>
          {sponsorshipHeading?.content}
        </h2>
        {documentToReactComponents(sponsorshipParagraphs?.content?.json)}
      </section>
      <section className={styles.conference__faqs}>
        <h2 id={createHashLink(faqsHeading?.content ?? '')}>
          {faqsHeading?.content}
        </h2>

        {accordionCollection?.items.map((item) => (
          <Accordion
            key={crypto.randomUUID()}
            title={item?.title ?? ''}
            content={documentToReactComponents(item?.content?.json)}
          />
        ))}
      </section>
      <section className={styles.conference__past_conferences}>
        <h2 id={createHashLink(pastConferencesHeading?.content ?? '')}>
          {pastConferencesHeading?.content}
        </h2>
        {documentToReactComponents(pastConferencesParagraphs?.content?.json)}
      </section>
    </PageBody>
  );
};

export default ConferencePageBody;
