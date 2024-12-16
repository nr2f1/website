import PageHeader from '@components/page-header';

import type { AvailableLocale } from '@i18n/locales';

interface RegisterPageHeaderProps {
  lang: AvailableLocale;
}

const RegisterPageHeader: React.FC<RegisterPageHeaderProps> = ({ lang }) => {
  return (
    <PageHeader
      lang={lang}
      pageTitle="Register a BBSOAS patient"
      sectionTitle="Living with BBSOAS"
      lastUpdated="2024-12-16"
      // imageUrl="https://pataruco.s3.amazonaws.com/public/register-patient-page-header.png"
    />
  );
};

export default RegisterPageHeader;
