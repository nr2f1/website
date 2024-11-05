'use client';

import styles from './index.module.scss';

import MainOnLight from '@components/logos/main-on-light';
import { useGetHeaderSuspenseQuery } from '@graphql/queries/header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { donateId, registerPatientId } from '@models/links';
import {
  aboutBbsoasId,
  aboutUsId,
  livingWithBbsoasId,
  researchId,
  supportUsId,
} from '@models/navlinks';
import type { LocalisedLinkProps } from '@shared/types/link';
import { getLocalisedLinkProps } from '@shared/utils/link';
import Link from 'next/link';
import { useState } from 'react';
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

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    data: {
      // @ts-ignore
      registerPatient,
      // @ts-ignore
      donate,
      // @ts-ignore
      aboutBbsoas,
      // @ts-ignore
      livingWithBbsoas,
      // @ts-ignore
      research,
      // @ts-ignore
      aboutUs,
      // @ts-ignore
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
              <MainOnLight />
            </Link>
          </div>
          <div className={styles.header__top_right}>
            <LocaleSelector />
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
                  isMobile
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
