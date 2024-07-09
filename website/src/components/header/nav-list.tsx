import styles from './nav-list.module.scss';

import Link from 'next/link';

export interface NavItem {
  href: string;
  label: string;
}

interface NavListProps {
  name: string;
  items: NavItem[];
}

const NavList = ({ name, items }: NavListProps) => {
  return (
    // @ts-ignore
    // name it is a valid attribute for details:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
    <details name="nav" className={styles.details}>
      <summary>{name}</summary>
      <ul>
        {items.map(({ href, label }) => (
          <li key={`${href}-${Math.random()}`}>
            <Link href="/">{label}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default NavList;
