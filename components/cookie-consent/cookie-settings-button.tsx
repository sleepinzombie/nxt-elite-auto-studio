"use client";

import { setConsent } from "@/lib/cookie-consent";

const CookieSettingsButton = () => <button className="cookie-settings-button" onClick={() => setConsent("unset")} type="button">Cookie settings</button>;
export default CookieSettingsButton;
