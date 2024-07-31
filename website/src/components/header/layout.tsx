'use client';

import styles from './index.module.scss';

import MainLogo from '@components/logos/main';
import { useGetHeaderQuery } from '@graphql/queries/header/index.generated';
import { AvailableLocale } from '@i18n/locales';
import Link from 'next/link';
import { useState } from 'react';
import LocaleSelector from './locale-selector';
import NavList, { NavItem } from './nav-list';

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Menu Item',
  },
  {
    href: '/',
    label: 'Menu Item',
  },
  {
    href: '/',
    label: 'Menu Item',
  },
  {
    href: '/',
    label: 'Menu Item',
  },
];

const RegisterPatientButton = () => (
  <Link href="/" className="button button--on-dark" title="Register a patient">
    Register a patient
  </Link>
);
interface DonateButtonProps {
  isMobile?: boolean;
}

const DonateButton: React.FC<DonateButtonProps> = ({ isMobile }) => (
  <Link
    href="/"
    className={`button button--accent-on-light ${
      isMobile ? 'button--accent-on-light--mobile' : ''
    }`}
    title="Donate"
  >
    Donate
  </Link>
);

export interface HeaderProps {
  lang: AvailableLocale;
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data, loading, error } = useGetHeaderQuery();
  console.log({ data, loading, error });

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
                  <RegisterPatientButton />
                </li>
                <li>
                  <DonateButton />
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
            <NavList name="About BBSOS" items={navItems} />
            <NavList name="Living with BBSOS" items={navItems} />
            <NavList name="Research" items={navItems} />
            <NavList name="About us" items={navItems} />
            <NavList name="Support us" items={navItems} />
          </nav>
          <div className={styles.header__bottom_medium_screen}>
            <ul>
              <li>
                <RegisterPatientButton />
              </li>
              <li>
                <DonateButton isMobile />
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
