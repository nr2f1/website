import Script from 'next/script';

const DonateButton = () => {
  return (
    <>
      <Script
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=pu3mFEs44Glxowbo&p=other"
        strategy="beforeInteractive"
      />

      <div className="content-wrapper">
        {/* Donate button */}
        {/* @ts-ignore */}
        <givebutter-widget id="LveB4j" />
      </div>
    </>
  );
};

export default DonateButton;
