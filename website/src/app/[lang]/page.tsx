import DonateButton from '@components/widgets/button';
import { type LocaleParamsPath } from '@i18n/locales';
import { NextPage } from 'next';

const Page: NextPage<LocaleParamsPath> = async ({ params: { lang } }) => {
  return (
    <div className="content-wrapper">
      <DonateButton />
      <p>
        Language is <strong>{lang}</strong>
      </p>
    </div>
  );
};

export default Page;
