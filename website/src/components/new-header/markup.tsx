'use client';

import styles from './index.module.scss';

import MainOnLight from '@components/logos/main-on-light';
import { useGetNewHeaderSuspenseQuery } from '@graphql/queries/header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  aboutUsLinkConferenceId,
  aboutUsLinkFinancialsId,
  aboutUsLinkOrganisationId,
  aboutUsLinkOurNewsId,
  aboutUsLinkOurStrategyId,
  aboutUsLinkParnershipsId,
  contactUsLinkId,
  donateId,
  registerPatientId,
  whatIsBbsoasLinkId,
} from '@models/links';
import { aboutCopiesId } from '@models/resource-sets';
import type { LocalisedLinkProps } from '@shared/types/link';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LocaleSelector from './locale-selector';
import NavList from './nav-list';

interface CtaButtons extends LocalisedLinkProps {
  isMobile?: boolean;
}

const RegisterPatientButton: React.FC<CtaButtons> = ({
  content,
  href,
  isMobile,
}) => (
  <Link
    href={href}
    className={isMobile ? 'button button--on-dark' : 'button button--on-light'}
    title={content}
  >
    {content}
  </Link>
);

const DonateButton: React.FC<CtaButtons> = ({ content, href, isMobile }) => (
  <Link
    href={href}
    className={`button button--accent-on-light ${
      isMobile ? 'button--accent-on-dark--mobile' : ''
    }`}
    title={content}
  >
    {content}
  </Link>
);

export interface HeaderProps {
  lang: AvailableLocale;
}

const NewHeader: React.FC<HeaderProps> = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  const {
    data,
    // TODO: Handle error
    error,
  } = useGetNewHeaderSuspenseQuery({
    variables: {
      locale: lang,
      registerPatientId,
      donateId,
      aboutCopiesId,
      aboutUsLinkOrganisationId,
      aboutUsLinkOurStrategyId,
      aboutUsLinkOurNewsId,
      aboutUsLinkFinancialsId,
      aboutUsLinkParnershipsId,
      aboutUsLinkConferenceId,
      whatIsBbsoasLinkId,
      contactUsLinkId,
    },
  });

  if (!data || error) {
    return null;
  }

  const {
    registerPatient,
    donate,
    aboutUsCopies,
    aboutUsLinkOrganisation,
    aboutUsLinkOurStrategy,
    aboutUsLinkOurNews,
    aboutUsFinancials,
    aboutUsParnerships,
    aboutUsConference,
    whatIsBbsoas,
    contactUs,
  } = data;

  const [title, whoWeAre, whatWeDo] =
    aboutUsCopies?.resourcesCollection?.items ?? [];

  return (
    <header
      className={`${styles.header} ${
        isMenuOpen ? styles['header--menu-open'] : ''
      }`}
    >
      <div className={styles.header__top}>
        <div className={styles.header__content_wrapper}>
          <div className={styles.header__logo}>
            <Link href="/">
              <MainOnLight />
            </Link>
          </div>
          <div className={styles.header__top_right}>
            <LocaleSelector />
            <nav title="primary">
              <ul>
                <li>
                  <RegisterPatientButton
                    content={registerPatient?.text?.content ?? ''}
                    href={registerPatient?.target?.url ?? ''}
                  />
                </li>
                <li>
                  <DonateButton
                    content={donate?.text?.content ?? ''}
                    href={donate?.target?.url ?? ''}
                  />
                </li>
              </ul>
            </nav>
            <button
              title="hambuguer-button"
              type="button"
              className="button button--on-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <div className={styles.header__content_wrapper}>
          <nav title="secondary">
            <NavList name={title?.value ?? ''} nested>
              <ul>
                <li>
                  <span>{whoWeAre?.value ?? ''}</span>
                  <ul>
                    <li>
                      <Link href={aboutUsLinkOrganisation?.target?.url ?? '/'}>
                        {aboutUsLinkOrganisation?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link href={aboutUsLinkOurStrategy?.target?.url ?? '/'}>
                        {aboutUsLinkOurStrategy?.text?.content ?? ''}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>{whatWeDo?.value ?? ''}</span>
                  <ul>
                    <li>
                      <Link href={aboutUsLinkOurNews?.target?.url ?? '/'}>
                        {aboutUsLinkOurNews?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link href={aboutUsFinancials?.target?.url ?? '/'}>
                        {aboutUsFinancials?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link href={aboutUsParnerships?.target?.url ?? '/'}>
                        {aboutUsParnerships?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link href={aboutUsConference?.target?.url ?? '/'}>
                        {aboutUsConference?.text?.content ?? ''}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </NavList>
            <Link href={whatIsBbsoas?.target?.url ?? '/'}>
              <span>{whatIsBbsoas?.text?.content ?? ''}</span>
            </Link>
            <NavList name="Living with BBSOAS">
              <ul>
                <li>
                  <Link href="/">Living with BBSOAS</Link>
                </li>
                <li>
                  <Link href="/">Register a BBSOAS patient</Link>
                </li>
                <li>
                  <Link href="/">Support groups</Link>
                </li>
              </ul>
            </NavList>
            <NavList name="Research">
              <ul>
                <li>
                  <Link href="/">Research</Link>
                </li>
                <li>
                  <Link href="/">Publications</Link>
                </li>
                <li>
                  <Link href="/">For researchers</Link>
                </li>
              </ul>
            </NavList>
            <NavList name="Support us">
              <ul>
                <li>
                  <Link href="/">Support us</Link>
                </li>
                <li>
                  <Link href="/">Donate</Link>
                </li>
                <li>
                  <Link href="/">Volunteer</Link>
                </li>
                <li>
                  <Link href="/">Shop</Link>
                </li>
              </ul>
            </NavList>
            <Link href={contactUs?.text?.content ?? ''}>
              <span>{contactUs?.target?.url ?? ''}</span>
            </Link>
          </nav>
          <div className={styles.header__bottom_medium_screen}>
            <ul>
              <li>
                <RegisterPatientButton
                  content={registerPatient?.text?.content ?? ''}
                  href={registerPatient?.target?.url ?? ''}
                  isMobile
                />
              </li>
              <li>
                <DonateButton
                  content={donate?.text?.content ?? ''}
                  href={donate?.target?.url ?? ''}
                  isMobile
                />
              </li>
            </ul>
            <LocaleSelector isMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
