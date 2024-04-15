import DonateButton from '@components/widgets/button';
import DonateForm from '@components/widgets/form';
import Script from 'next/script';

const Page = () => {
  return (
    <>
      <Script
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=pu3mFEs44Glxowbo&p=other"
        strategy="beforeInteractive"
      />

      <div className="content-wrapper">
        <h1>Donate</h1>
        <DonateButton />
        <DonateForm />
      </div>
    </>
  );
};
export default Page;
