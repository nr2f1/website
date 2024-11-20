import styles from './nav-list.module.scss';

import type { LocalisedLinkProps } from '@shared/types/link';
import Link from 'next/link';

interface NavListProps {
  name?: string | null;
  items?: LocalisedLinkProps[];
}

const NavList = ({ name, items }: NavListProps) => {
  return (
    // @ts-ignore
    // name it is a valid attribute for details:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
    <details name="nav" className={styles.details}>
      <summary>{name}</summary>
      <ul>
        {Array.isArray(items) &&
          items.map(({ href, content }) => (
            <li key={crypto.randomUUID()}>
              <Link href={href}>{content}</Link>
            </li>
          ))}
      </ul>
    </details>
  );
};

export default NavList;
