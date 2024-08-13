import SignupForm from '@components/signup-form';
import type { LocaleParamsPath } from '@i18n/locales';
import type { NextPage } from 'next';

const Page: NextPage<LocaleParamsPath> = async ({ params: { lang } }) => {
  return (
    <div className="content-wrapper">
      <h1>Hola</h1>
      <p>
        Language is <strong>{lang}</strong>
      </p>
      <p>
        <a href="/" className="button button--on-light">
          button link
        </a>
      </p>
      <button type="button" className="button" disabled>
        button
      </button>

      <p>
        <a href="/" className="button button--on-dark">
          button link
        </a>
      </p>

      <p>
        <a href="/" className="button button--accent-on-light">
          Donate
        </a>
      </p>
      <button type="button" className="button button--accent-on-light">
        Donate
      </button>
      <p>
        <a href="/" className="button button--accent-on-dark">
          button link
        </a>
      </p>
      <button type="button" className="button button--accent-on-light" disabled>
        Donate
      </button>
      <button type="button" className="button button--accent-on-dark" disabled>
        Donate
      </button>
      <SignupForm />
    </div>
  );
};

export default Page;
