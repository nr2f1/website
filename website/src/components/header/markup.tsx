'use client';

import { useSuspenseQuery } from '@apollo/client/react';
import MainOnLight from '@components/logos/main-on-light';
import {
  GetHeaderDocument,
  type GetHeaderQuery,
  type GetHeaderQueryVariables,
} from '@graphql/queries/header/index.generated';
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
  fundraiseLinkId,
  getInvolvedInBbsoasLinkId,
  livingWithBbsoasLinkId,
  patientCountLinkId,
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
import { localiseHref } from '@shared/utils/localise-href';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  // Close menu when route changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: must be when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
  } = useSuspenseQuery<GetHeaderQuery, GetHeaderQueryVariables>(
    GetHeaderDocument,
    {
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
        fundraiseLinkId,
        getInvolvedInBbsoasLinkId,
        livingWithBbsoasLinkId,
        livingWithBbsoasMicrocopyId,
        locale: lang,
        patientCountLinkId,
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
    },
  );

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
    fundraiseLink,
    patientCountLink,
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
                    href={localiseHref(
                      registerPatient?.target?.url ?? '',
                      lang,
                    )}
                  />
                </li>
                <li>
                  <DonateButton
                    content={donate?.text?.content ?? ''}
                    href={localiseHref(donate?.target?.url ?? '', lang)}
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
                      <Link
                        href={localiseHref(
                          aboutUsLinkOrganisation?.target?.url ?? '/',
                          lang,
                        )}
                      >
                        {aboutUsLinkOrganisation?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localiseHref(
                          aboutUsLinkOurStrategy?.target?.url ?? '/',
                          lang,
                        )}
                      >
                        {aboutUsLinkOurStrategy?.text?.content ?? ''}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>{whatWeDo?.value ?? ''}</span>
                  <ul>
                    <li>
                      <Link
                        href={localiseHref(
                          aboutUsLinkOurNews?.target?.url ?? '/',
                          lang,
                        )}
                      >
                        {aboutUsLinkOurNews?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localiseHref(
                          aboutUsFinancials?.target?.url ?? '/',
                          lang,
                        )}
                      >
                        {aboutUsFinancials?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localiseHref(
                          aboutUsParnerships?.target?.url ?? '/',
                          lang,
                        )}
                      >
                        {aboutUsParnerships?.text?.content ?? ''}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={localiseHref(
                          aboutUsConference?.target?.url ?? '/',
                          lang,
                        )}
                      >
                        {aboutUsConference?.text?.content ?? ''}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </NavList>
            <Link href={localiseHref(whatIsBbsoas?.target?.url ?? '/', lang)}>
              <span>{whatIsBbsoas?.text?.content ?? ''}</span>
            </Link>
            <NavList name={livingWithBbsoasMicrocopy?.value ?? ''}>
              <ul>
                <li>
                  <Link
                    href={localiseHref(
                      livingWithBbsoasLink?.target?.url ?? '/',
                      lang,
                    )}
                  >
                    {livingWithBbsoasLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(
                      registerABbsoasPatientLink?.target?.url ?? '/',
                      lang,
                    )}
                  >
                    {registerABbsoasPatientLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(
                      supportGroupsLink?.target?.url ?? '/',
                      lang,
                    )}
                  >
                    {supportGroupsLink?.text?.content ?? ''}
                  </Link>
                </li>
              </ul>
            </NavList>
            <NavList name={researchMicrocopy?.value ?? ''}>
              <ul>
                <li>
                  <Link
                    href={localiseHref(researchLink?.target?.url ?? '/', lang)}
                  >
                    {researchLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(
                      patientCountLink?.target?.url ?? '/',
                      lang,
                    )}
                  >
                    {patientCountLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(
                      getInvolvedInBbsoasLink?.target?.url ?? '/',
                      lang,
                    )}
                  >
                    {getInvolvedInBbsoasLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(
                      resourcesAvailableToresearchersLink?.target?.url ?? '/',
                      lang,
                    )}
                  >
                    {resourcesAvailableToresearchersLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(
                      publicationsLink?.target?.url ?? '/',
                      lang,
                    )}
                  >
                    {publicationsLink?.text?.content ?? ''}
                  </Link>
                </li>
              </ul>
            </NavList>
            <NavList name={supportUsMicrocopy?.value ?? ''}>
              <ul>
                <li>
                  <Link
                    href={localiseHref(supportUsLink?.target?.url ?? '/', lang)}
                  >
                    {supportUsLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(fundraiseLink?.target?.url ?? '/', lang)}
                  >
                    {fundraiseLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link href={localiseHref(donate?.target?.url ?? '/', lang)}>
                    {donate?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localiseHref(volunteerLink?.target?.url ?? '/', lang)}
                  >
                    {volunteerLink?.text?.content ?? ''}
                  </Link>
                </li>
                <li>
                  <a
                    className={styles['open-other-tab']}
                    href={localiseHref(shopLink?.target?.url ?? '/', lang)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {shopLink?.text?.content ?? ''}
                  </a>
                </li>
              </ul>
            </NavList>
            <Link href={localiseHref(contactUs?.target?.url ?? '', lang)}>
              <span>{contactUs?.text?.content ?? ''}</span>
            </Link>
          </nav>
          <div className={styles.header__bottom_medium_screen}>
            <ul>
              <li>
                <RegisterPatientButton
                  content={registerPatient?.text?.content ?? ''}
                  href={localiseHref(registerPatient?.target?.url ?? '', lang)}
                  isMobile
                />
              </li>
              <li>
                <DonateButton
                  content={donate?.text?.content ?? ''}
                  href={localiseHref(donate?.target?.url ?? '', lang)}
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
