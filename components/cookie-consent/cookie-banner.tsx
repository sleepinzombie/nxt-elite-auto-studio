"use client";

import { useSyncExternalStore } from "react";
import { getConsent, getServerConsent, setConsent, subscribeToConsent } from "@/lib/cookie-consent";

const CookieBanner = () => {
  const consent = useSyncExternalStore(subscribeToConsent, getConsent, getServerConsent);
  if (consent !== "unset") return null;
  return <section aria-labelledby="cookie-banner-title" className="cookie-banner" role="dialog"><div className="cookie-banner__copy"><p className="section-label" id="cookie-banner-title">Cookies</p><p>We use analytics cookies to understand how visitors use our site and improve it. You can accept or decline at any time.</p></div><div className="cookie-banner__actions"><button className="primary-link primary-link--outline" onClick={() => setConsent("denied")} type="button">Decline</button><button className="primary-link" onClick={() => setConsent("granted")} type="button">Accept</button></div></section>;
};
export default CookieBanner;
