"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react/ssr";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BrandMark from "@/components/brand-mark/brand-mark";
import PrimaryLink from "@/components/primary-link/primary-link";

const MobileNavigationMap = dynamic(() => import("@/components/mobile-navigation-map/mobile-navigation-map"), { ssr: false, loading: () => <div className="mobile-navigation-map mobile-navigation-map--loading">Loading service area…</div> });

const navigationLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Price packages", "#pricing"],
  ["Our works", "#works"],
  ["Process", "#process"],
  ["FAQs", "#faq"],
  ["Testimonials", "#testimonials"],
];

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}><div className="site-header__inner shell"><div className="site-header__brand-group"><button aria-controls="mobile-navigation" aria-expanded={isMenuOpen} aria-label="Open navigation" className="mobile-menu-toggle" onClick={() => setIsMenuOpen(true)} type="button"><ListIcon aria-hidden="true" size={22} weight="regular" /></button><a className="brand-lockup" href="#home"><span className="brand-lockup__logo"><BrandMark priority variant="icon" /></span><span>Elite Auto Studio</span></a></div><nav aria-label="Primary navigation">{navigationLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><PrimaryLink href="#contact">Book now</PrimaryLink></div>{isMenuOpen && <div className="mobile-navigation"><button aria-label="Close navigation" className="mobile-navigation__backdrop" onClick={() => setIsMenuOpen(false)} type="button" /><aside aria-label="Mobile navigation" aria-modal="true" className="mobile-navigation__panel" id="mobile-navigation" role="dialog"><div className="mobile-navigation__top"><span>Navigation</span><button aria-label="Close navigation" className="mobile-navigation__close" onClick={() => setIsMenuOpen(false)} type="button"><XIcon aria-hidden="true" size={20} weight="regular" /></button></div><nav>{navigationLinks.map(([label, href], index) => <a href={href} key={href} onClick={() => setIsMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}</nav><div className="mobile-navigation__map"><div><span>Service area</span><strong>Brussels &amp; Brabant</strong></div><MobileNavigationMap /></div><PrimaryLink href="#contact">Book now</PrimaryLink></aside></div>}</header>;
};

export default SiteHeader;
