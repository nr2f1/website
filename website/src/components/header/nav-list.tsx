import { usePathname, useSearchParams } from 'next/navigation';
import { type RefObject, Suspense, useEffect, useRef } from 'react';
import styles from './nav-list.module.scss';

interface NavListProps {
  name: string | null;
  children: React.ReactNode;
  nested?: boolean;
}

const close = (details: HTMLDetailsElement | null) => {
  if (details) {
    details.open = false;
  }
};

// Search params are only known at request time, so reading them outside a
// Suspense boundary would keep the whole header out of the prerendered HTML.
const CloseOnSearchParamsChange = ({
  detailsRef,
}: {
  detailsRef: RefObject<HTMLDetailsElement | null>;
}) => {
  const searchParams = useSearchParams();

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the menu when the search params change
  useEffect(() => {
    close(detailsRef.current);
  }, [searchParams]);

  return null;
};

const NavList = ({ name, children, nested = false }: NavListProps) => {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the menu when the pathname changes
  useEffect(() => {
    close(ref.current);
  }, [pathname]);

  return (
    <>
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
      <Suspense fallback={null}>
        <CloseOnSearchParamsChange detailsRef={ref} />
      </Suspense>
    </>
  );
};

export default NavList;
