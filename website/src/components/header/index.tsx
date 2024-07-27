'use client';

import styles from './index.module.scss';

import MainLogo from '@components/logos/main';
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
    className={`button button--accent-on-dark ${
      isMobile ? 'button--accent-on-dark--mobile' : ''
    }`}
    title="Donate"
  >
    Donate
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.header} ${
        isMenuOpen ? styles['header--menu-open'] : ''
      }`}
    >
      <div className={styles.header__top}>
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
      <div className={styles.header__bottom}>
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
    </header>
  );
};

export default Header;
