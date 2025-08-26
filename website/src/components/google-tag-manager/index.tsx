'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export const GA_ID = 'GTM-N8JW7VZF';

export const GoogleTag = () => {
  const [consent, setConsent] = useState<string | null>(null);

  // Set the consent value from localStorage after the client loads
  // Assuming the answer is stored in localStorage called cookie
  useEffect(() => {
    setConsent(
      localStorage.getItem('tracking_consent') === 'true'
        ? 'granted'
        : 'denied',
    );
  }, []);

  if (consent === null) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: we must provide the script content
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'ad_storage': '${consent}',
              'ad_user_data': '${consent}',
              'ad_personalization': '${consent}',
              'analytics_storage': '${consent}'
            });
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
