import DonateButton from '@components/widgets/button';
import { type LocaleParamsPath } from '@i18n/locales';
import { NextPage } from 'next';

const Page: NextPage<LocaleParamsPath> = async ({ params: { lang } }) => {
  return (
    <div className="content-wrapper">
      <DonateButton />
      <h1>Hola</h1>
      <p>
        Language is <strong>{lang}</strong>
      </p>
      <p>
        <a href="/" className="button button--on-light">
          button link
        </a>
      </p>
      <button type="button" className="button button--on-light" disabled>
        button
      </button>
    </div>
  );
};

export default Page;
