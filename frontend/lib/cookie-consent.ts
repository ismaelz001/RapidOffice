export const COOKIE_CONSENT_KEY = 'rodorte-cookie-consent';

export type CookieConsentChoice = 'accepted' | 'rejected';

export function getCookieConsent(): CookieConsentChoice | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === 'accepted' || value === 'rejected') {
    return value;
  }
  return null;
}

export function setCookieConsent(choice: CookieConsentChoice): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
}

export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(COOKIE_CONSENT_KEY);
}
