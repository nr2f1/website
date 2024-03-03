import './index.scss';

import MainLogo from '@components/logos/main';

const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <div className="logo">
          <MainLogo />
        </div>
      </div>
    </header>
  );
};

export default Header;
