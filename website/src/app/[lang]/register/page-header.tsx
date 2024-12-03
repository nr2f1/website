import type { AvailableLocale } from '@i18n/locales';

interface RegisterPageHeaderProps {
  lang: AvailableLocale;
}

const RegisterPageHeader: React.FC<RegisterPageHeaderProps> = ({ lang }) => {
  return (
    <div>
      <div className="container-wrapper"></div>
    </div>
  );
};

export default RegisterPageHeader;
