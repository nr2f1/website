'use client';

import styles from './index.module.scss';

import Contentful from '@components/logos/contentful';
import MainLogo from '@components/logos/main';
import SignupForm from '@components/signup-form';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useGetFooterSuspenseQuery } from '@graphql/queries/footer/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { stayInTouchId } from '@models/headings';
import {
  contactUsId,
  copyrightId,
  socialMediaTextId,
  warningId,
} from '@models/paragraphs';
import { renderText } from '@shared/utils/rich-text';
import SocialMediaLinks from './social-media-links';

export interface FooterProps {
  lang: AvailableLocale;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const {
    data,
    // TODO: Handle error
    error,
  } = useGetFooterSuspenseQuery({
    variables: {
      locale: lang,
      stayInTouchId,
      socialMediaTextId,
      copyrightId,
      warningId,
      contactUsId,
    },
  });

  if (!data) {
    return null;
  }

  const { stayInTouch, socialMediaText, copyright, warning, contactUs } = data;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__content_wrapper}>
          <div className={styles.footer__top_row}>
            <div className={styles.footer__top_column}>
              <p>{stayInTouch?.content}</p>
              {documentToReactComponents(socialMediaText?.content?.json)}
              <SocialMediaLinks variant="light" />
            </div>
            <div className={styles.footer__top_column}>
              <SignupForm lang={lang} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__middle}>
        <div className={styles.footer__content_wrapper}>
          <div className={styles.footer__middle_row}>
            <div className={styles.footer__middle_column}>
              <div className={styles.footer__logo}>
                <MainLogo />
              </div>

              {documentToReactComponents(copyright?.content?.json, {
                preserveWhitespace: true,
                renderText,
              })}

              {documentToReactComponents(warning?.content?.json)}
            </div>
            <div className={styles.footer__middle_column}>
              <SocialMediaLinks variant="dark" />

              {documentToReactComponents(contactUs?.content?.json)}

              <address>
                NR2F1 Foundation <br /> PO Box 0588 <br />
                Pflugerville, TX 78691-058
              </address>
              <a href="mailto:info@nr2f1.org" title="info@nr2f1.org">
                info@nr2f1.org
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__content_wrapper}>
          <div className={styles.footer__contentful}>
            <Contentful />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
