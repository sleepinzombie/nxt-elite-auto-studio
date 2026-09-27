"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/ssr";
import { Children, type ReactNode, useRef, useState } from "react";

type MobileCarouselProps = { ariaLabel: string; children: ReactNode; className?: string };

const MobileCarousel = ({ ariaLabel, children, className = "" }: MobileCarouselProps) => {
  const slides = Children.toArray(children);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  const goTo = (index: number) => {
    const nextIndex = (index + total) % total;
    const slide = viewportRef.current?.children[nextIndex] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(nextIndex);
  };

  if (!total) return null;

  return <div aria-label={ariaLabel} className={`mobile-carousel ${className}`.trim()} role="region"><div className="mobile-carousel__viewport" onScroll={(event) => { const { clientWidth, scrollLeft, scrollWidth } = event.currentTarget; if (scrollWidth > clientWidth) setActiveIndex(Math.round((scrollLeft / (scrollWidth - clientWidth)) * (total - 1))); }} ref={viewportRef}>{slides.map((slide, index) => <div className="mobile-carousel__slide" key={index}>{slide}</div>)}</div><div className="mobile-carousel__footer"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span><div className="mobile-carousel__controls"><button aria-label="Previous item" onClick={() => goTo(activeIndex - 1)} type="button"><CaretLeftIcon aria-hidden="true" size={15} weight="bold" /></button><button aria-label="Next item" onClick={() => goTo(activeIndex + 1)} type="button"><CaretRightIcon aria-hidden="true" size={15} weight="bold" /></button></div></div></div>;
};

export default MobileCarousel;
