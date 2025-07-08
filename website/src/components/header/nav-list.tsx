import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './nav-list.module.scss';

interface NavListProps {
  name: string | null;
  children: React.ReactNode;
  nested?: boolean;
}

const NavList = ({ name, children, nested = false }: NavListProps) => {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // biome-ignore lint/correctness/useExhaustiveDependencies: we need to close the details element when the pathname or searchParams change
  useEffect(() => {
    if (ref.current) {
      ref.current.open = false;
    }
  }, [pathname, searchParams]);

  return (
    // @ts-ignore
    // name it is a valid attribute for details:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
    <details
      name="dev"
      aria-haspopup="true"
      className={
        nested
          ? [styles.details, styles.details__nested].join(' ')
          : styles.details
      }
      ref={ref}
    >
      <summary>
        <span>{name}</span>
      </summary>
      {children}
    </details>
  );
};

export default NavList;
