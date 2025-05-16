import styles from './nav-list.module.scss';

import { useState } from 'react';

interface NavListProps {
  name: string | null;
  children: React.ReactNode;
  nested?: boolean;
}

const NavList = ({ name, children, nested = false }: NavListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnBlur = () => {
    setIsOpen(false);
  };

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOnKeyUp = (event: React.KeyboardEvent) => {
    setIsOpen(true);
  };

  return (
    // @ts-ignore
    // name it is a valid attribute for details:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
    <details
      className={
        nested
          ? [styles.details, styles.details__nested].join(' ')
          : styles.details
      }
      onBlur={handleOnBlur}
      onClick={handleOnClick}
      onKeyUp={handleOnKeyUp}
      open={isOpen}
    >
      <summary>
        <span>{name}</span>
      </summary>
      {children}
    </details>
  );
};

export default NavList;
