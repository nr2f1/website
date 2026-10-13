export const GA_ID = 'GTM-N8JW7VZF';
export const LOCAL_STORAGE_KEY_TRACKING_KEY = 'tracking_consent';

export enum TRACKING_CONSENT {
  GRANTED = 'granted',
  DENIED = 'denied',
}

// The stored consent is interpolated into an inline script, so only the two
// values the cookie banner writes may pass.
export const isTrackingConsent = (value: unknown): value is TRACKING_CONSENT =>
  value === TRACKING_CONSENT.GRANTED || value === TRACKING_CONSENT.DENIED;
