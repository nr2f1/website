'use client';

import styles from './index.module.scss';

import MainLogo from '@components/logos/main';
import { useGetHeaderSuspenseQuery } from '@graphql/queries/header/index.generated';
import { AvailableLocale } from '@i18n/locales';
import { donateId, registerPatientId } from '@models/links';
import {
  aboutBbsoasId,
  aboutUsId,
  livingWithBbsoasId,
  researchId,
  supportUsId,
} from '@models/navlinks';
import { LocalisedLinkProps } from '@shared/types/link';
import { getLocalisedLinkProps } from '@shared/utils/link';
import Link from 'next/link';
import { useState } from 'react';
import LocaleSelector from './locale-selector';
import NavList from './nav-list';

const RegisterPatientButton: React.FC<LocalisedLinkProps> = ({
  href,
  content,
}) => (
  <Link href={href} className="button button--on-dark" title={content}>
    {content}
  </Link>
);

interface DonateButtonProps extends LocalisedLinkProps {
  isMobile?: boolean;
}

const DonateButton: React.FC<DonateButtonProps> = ({
  isMobile,
  href,
  content,
}) => (
  <Link
    href={href}
    className={`button button--accent-on-dark ${
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

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    data: {
      registerPatient,
      donate,
      aboutBbsoas,
      livingWithBbsoas,
      research,
      aboutUs,
      supportUs,
    },
    // TODO: Handle error
    error,
  } = useGetHeaderSuspenseQuery({
    variables: {
      locale: lang,
      registerPatientId,
      donateId,
      aboutBbsoasId,
      livingWithBbsoasId,
      researchId,
      aboutUsId,
      supportUsId,
    },
  });

  const aboutBbsoasLinkItems = getLocalisedLinkProps(
    aboutBbsoas?.linksCollection?.items,
  );

  const livingWithBbsoasLinkItems = getLocalisedLinkProps(
    livingWithBbsoas?.linksCollection?.items,
  );

  const researchLinkItems = getLocalisedLinkProps(
    research?.linksCollection?.items,
  );

  const aboutUsLinkItems = getLocalisedLinkProps(
    aboutUs?.linksCollection?.items,
  );

  const supportUsLinkItems = getLocalisedLinkProps(
    supportUs?.linksCollection?.items,
  );

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
              <MainLogo />
            </Link>
          </div>
          <div className={styles.header__top_right}>
            <nav title="primary">
              <ul>
                <li>
                  <RegisterPatientButton
                    content={registerPatient?.content ?? ''}
                    href={registerPatient?.href ?? ''}
                  />
                </li>
                <li>
                  <DonateButton
                    content={donate?.content ?? ''}
                    href={donate?.href ?? ''}
                  />
                </li>
              </ul>
            </nav>
            <LocaleSelector />
            <button
              title="hambuguer-button"
              type="button"
              className="button button--on-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <div className={styles.header__content_wrapper}>
          <nav title="secondary">
            <NavList name={aboutBbsoas?.name} items={aboutBbsoasLinkItems} />
            <NavList
              name={livingWithBbsoas?.name}
              items={livingWithBbsoasLinkItems}
            />
            <NavList name={research?.name} items={researchLinkItems} />
            <NavList name={aboutUs?.name} items={aboutUsLinkItems} />
            <NavList name={supportUs?.name} items={supportUsLinkItems} />
          </nav>
          <div className={styles.header__bottom_medium_screen}>
            <ul>
              <li>
                <RegisterPatientButton
                  content={registerPatient?.content ?? ''}
                  href={registerPatient?.href ?? ''}
                />
              </li>
              <li>
                <DonateButton
                  content={donate?.content ?? ''}
                  href={donate?.href ?? ''}
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

export default Header;
