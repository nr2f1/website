'use client';

import MainOnLight from '@components/logos/main-on-light';
import { useGetHeaderSuspenseQuery } from '@graphql/queries/header/index.generated';
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
  getInvolvedInBbsoasLinkId,
  livingWithBbsoasLinkId,
  publicationsLinkId,
  registerABbsoasPatientLinkId,
  registerPatientId,
  researchLinkId,
  resourcesAvailableToresearchersLinkId,
  shopLinkId,
  supportGroupsLinkId,
  supportUsLinkId,
  volunteerLinkId,
  whatIsBbsoasLinkId,
} from '@models/links';
import {
  livingWithBbsoasMicrocopyId,
  researchMicrocopyId,
  supportUsMicrocopyId,
} from '@models/resource';
import { aboutCopiesId } from '@models/resource-sets';
import type { LocalisedLinkProps } from '@shared/types/link';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
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
  } = useGetHeaderSuspenseQuery({
    variables: {
      aboutCopiesId,
      aboutUsLinkConferenceId,
      aboutUsLinkFinancialsId,
      aboutUsLinkOrganisationId,
      aboutUsLinkOurNewsId,
      aboutUsLinkOurStrategyId,
      aboutUsLinkParnershipsId,
      contactUsLinkId,
      donateId,
      getInvolvedInBbsoasLinkId,
      livingWithBbsoasLinkId,
      livingWithBbsoasMicrocopyId,
      locale: lang,
      publicationsLinkId,
      registerABbsoasPatientLinkId,
      registerPatientId,
      researchLinkId,
      researchMicrocopyId,
      resourcesAvailableToresearchersLinkId,
      shopLinkId,
      supportGroupsLinkId,
      supportUsLinkId,
      supportUsMicrocopyId,
      volunteerLinkId,
      whatIsBbsoasLinkId,
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
    livingWithBbsoasMicrocopy,
    livingWithBbsoasLink,
    registerABbsoasPatientLink,
    supportGroupsLink,
    researchMicrocopy,
    researchLink,
    publicationsLink,
    resourcesAvailableToresearchersLink,
    supportUsMicrocopy,
    supportUsLink,
    volunteerLink,
    shopLink,
    getInvolvedInBbsoasLink,
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
            <NavList name={livingWithBbsoasMicrocopy?.value ?? ''}>
              <ul>
                <li>
                  <Link href={livingWithBbsoasLink?.target?.url ?? '/'}>
                    {livingWithBbsoasLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link href={registerABbsoasPatientLink?.target?.url ?? '/'}>
                    {registerABbsoasPatientLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link href={supportGroupsLink?.target?.url ?? '/'}>
                    {supportGroupsLink?.text?.content ?? ''}
                  </Link>
                </li>
              </ul>
            </NavList>
            <NavList name={researchMicrocopy?.value ?? ''}>
              <ul>
                <li>
                  <Link href={researchLink?.target?.url ?? '/'}>
                    {researchLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link href={getInvolvedInBbsoasLink?.target?.url ?? '/'}>
                    {getInvolvedInBbsoasLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      resourcesAvailableToresearchersLink?.target?.url ?? '/'
                    }
                  >
                    {resourcesAvailableToresearchersLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link href={publicationsLink?.target?.url ?? '/'}>
                    {publicationsLink?.text?.content ?? ''}
                  </Link>
                </li>
              </ul>
            </NavList>
            <NavList name={supportUsMicrocopy?.value ?? ''}>
              <ul>
                <li>
                  <Link href={supportUsLink?.target?.url ?? '/'}>
                    {supportUsLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link href={donate?.target?.url ?? '/'}>
                    {donate?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link href={volunteerLink?.target?.url ?? '/'}>
                    {volunteerLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <a
                    className={styles['open-other-tab']}
                    href={shopLink?.target?.url ?? '/'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {shopLink?.text?.content ?? ''}
                  </a>
                </li>
              </ul>
            </NavList>
            <Link href={contactUs?.target?.url ?? ''}>
              <span>{contactUs?.text?.content ?? ''}</span>
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
