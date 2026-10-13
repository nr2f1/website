import { describe, expect, it } from 'vitest';
import { isTrackingConsent, TRACKING_CONSENT } from './analytics-tracking';

describe('isTrackingConsent', () => {
  it('accepts the two values the cookie banner writes', () => {
    expect(isTrackingConsent(TRACKING_CONSENT.GRANTED)).toBe(true);
    expect(isTrackingConsent('denied')).toBe(true);
  });

  it('rejects anything else, including tampered storage', () => {
    expect(isTrackingConsent(null)).toBe(false);
    expect(isTrackingConsent(undefined)).toBe(false);
    expect(isTrackingConsent('')).toBe(false);
    expect(isTrackingConsent("granted'); alert(1); //")).toBe(false);
  });
});
