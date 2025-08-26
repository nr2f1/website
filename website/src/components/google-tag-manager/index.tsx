'use client';
import { LOCAL_STORAGE_KEY_TRACKING_KEY } from '@shared/utils/analytics-tracking';
import Script from 'next/script';
import { useLocalStorage } from 'website/src/hooks/local-storage';

export const GA_ID = 'GTM-N8JW7VZF';

export const GoogleTag = () => {
  const [consent] = useLocalStorage(LOCAL_STORAGE_KEY_TRACKING_KEY);

  if (!consent) return null;

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
