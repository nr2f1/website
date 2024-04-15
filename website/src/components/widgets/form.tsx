import Script from 'next/script';

const DonateForm = () => {
  return (
    <>
      <Script
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=pu3mFEs44Glxowbo&p=other"
        strategy="beforeInteractive"
      />
      {/* Form */}
      {/* @ts-ignore */}
      <givebutter-widget id="j2dKdg" />
    </>
  );
};

export default DonateForm;
