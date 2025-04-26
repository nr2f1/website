import styles from './nav-list.module.scss';

interface NavListProps {
  name: string | null;
  children: React.ReactNode;
  nested?: boolean;
}

const NavList = ({ name, children, nested = false }: NavListProps) => {
  return (
    // @ts-ignore
    // name it is a valid attribute for details:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
    <details
      name="nav"
      className={
        nested
          ? [styles.details, styles.details__nested].join(' ')
          : styles.details
      }
    >
      <summary>
        <span>{name}</span>
      </summary>
      {children}
    </details>
  );
};

export default NavList;
