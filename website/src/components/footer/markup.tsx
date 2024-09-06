'use client';

import styles from './index.module.scss';

import Contentful from '@components/logos/contentful';
import MainLogo from '@components/logos/main';
import SignupForm from '@components/signup-form';
import SocialMediaLinks from './social-media-links';
import type { AvailableLocale } from '@i18n/locales';
import { useGetFooterSuspenseQuery } from '@graphql/queries/footer/index.generated';
import { stayInTouchId } from '@models/headings';
import {
  socialMediaTextId,
  footerFormId,
  copyrightId,
  warningId,
  contactUsId,
} from '@models/paragraphs';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export interface FooterProps {
  lang: AvailableLocale;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const {
    data: {
      stayInTouch,
      socialMediaText,
      footerForm,
      copyright,
      warning,
      contactUs,
    },
    // TODO: Handle error
    error,
  } = useGetFooterSuspenseQuery({
    variables: {
      locale: lang,
      stayInTouchId,
      socialMediaTextId,
      footerFormId,
      copyrightId,
      warningId,
      contactUsId,
    },
  });

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
              <p>{documentToReactComponents(footerForm?.content?.json)}</p>
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
              })}

              {documentToReactComponents(warning?.content?.json, {
                preserveWhitespace: true,
              })}
            </div>
            <div className={styles.footer__middle_column}>
              <SocialMediaLinks variant="dark" />

              {documentToReactComponents(contactUs?.content?.json, {
                preserveWhitespace: true,
              })}

              <address>
                NR2F1 Foundation <br /> 416 E. Kenilworth Ave <br />
                Royal Oak, MI 48067
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
