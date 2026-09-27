"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { alt: string; credit: string; page: string; src: string; unoptimized?: boolean };

const slides: Slide[] = [
  { src: "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?auto=format&fit=crop&q=88&w=2200", alt: "Person spraying soapy foam onto a black sports car in a garage", credit: "Andre Tan", page: "https://unsplash.com/photos/sports-car-washing-in-garage-pRppMPh4Zho" },
  { src: "https://images.unsplash.com/photo-1605164598708-25701594473e?auto=format&fit=crop&q=88&w=2200", alt: "Car covered in snow inside a garage", credit: "Zulfahmi Khani", page: "https://unsplash.com/photos/a-car-is-covered-in-snow-in-a-garage-9iH_6JO7Ufs" },
  { src: "https://images.unsplash.com/photo-1608259243654-70c070e0f6ed?auto=format&fit=crop&q=88&w=2200", alt: "Driver seated inside a car", credit: "Andre Tan", page: "https://unsplash.com/photos/man-in-black-t-shirt-driving-car-GaOk6CfdMVk" },
  { src: "https://images.unsplash.com/photo-1652898072061-785998d820cb?auto=format&fit=crop&q=88&w=2200", alt: "Car being washed in a garage", credit: "Vladyslav Lytvyshchenko", page: "https://unsplash.com/photos/a-car-is-being-washed-in-a-garage-OYjUY22nsV8" },
  { src: "https://images.unsplash.com/photo-1694025909289-fb9dd4660e97?auto=format&fit=crop&q=88&w=2200", alt: "Man washing a luxury car with a hose", credit: "lucas clarysse", page: "https://unsplash.com/photos/a-man-is-washing-a-car-with-a-hose-t1lSsl_nPCQ" },
  { src: "https://images.unsplash.com/photo-1727791712196-8d35b2ba2918?auto=format&fit=crop&q=88&w=2200", alt: "Car dashboard with a phone and radio", credit: "Olivie Zemanova", page: "https://unsplash.com/photos/a-car-dashboard-with-a-phone-and-a-car-radio-CBb7lEZ69JE" },
];

const HeroBackgroundCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileViewport = window.matchMedia("(max-width: 760px)");
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const offset = reducedMotion.matches || mobileViewport.matches ? 0 : Math.min(window.scrollY * 0.16, 110);
      carousel.style.setProperty("--hero-parallax", `${offset.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    mobileViewport.addEventListener("change", requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      mobileViewport.removeEventListener("change", requestUpdate);
    };
  }, []);

  return <div className="hero-carousel" aria-label="Elite Auto Studio detailing gallery" ref={carouselRef}>{slides.map((slide, index) => <div aria-hidden={index !== activeSlide} className={`hero-carousel__slide${index === activeSlide ? " is-active" : ""}`} key={slide.src}><Image alt={slide.alt} fill preload={index === 0} sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1320px) calc(100vw - 80px), 1240px" src={slide.src} unoptimized={slide.unoptimized} /></div>)}<div className="hero-carousel__overlay" /><div className="hero-carousel__controls">{slides.map((slide, index) => <button aria-label={`Show image ${index + 1}`} aria-pressed={index === activeSlide} key={slide.src} onClick={() => setActiveSlide(index)} type="button" />)}</div></div>;
};

export default HeroBackgroundCarousel;
