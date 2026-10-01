import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";

type MediaCardProps = { title: string; label: string; variant: "large" | "small"; position?: string; src: string; credit: string; creditHref: string; unoptimized?: boolean };

const MediaCard = ({ title, label, variant, position = "center", src, credit, creditHref, unoptimized = false }: MediaCardProps) => <article className={`relative min-h-[500px] overflow-hidden text-[var(--color-ivory)] max-[760px]:min-h-[430px] ${variant === "large" ? "max-[1040px]:col-span-full max-[760px]:col-auto" : ""}`}><Image alt={title} className="object-cover" fill sizes={variant === "large" ? "(max-width: 760px) calc(100vw - 40px), 45vw" : "(max-width: 760px) calc(100vw - 40px), 28vw"} src={src} style={{ objectPosition: position }} unoptimized={unoptimized} /><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,5,0.92),transparent_62%)]" /><p className="absolute top-[1.4rem] left-[1.4rem] m-0 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[var(--color-gold)]">{label}</p><div className="absolute right-[1.4rem] bottom-[1.4rem] left-[1.4rem]"><h3 className="mb-[0.7rem] text-[clamp(1.4rem,2vw,2rem)] font-normal tracking-[-0.04em]">{title}</h3><a className="inline-flex items-center gap-[0.35rem] text-[0.54rem] uppercase tracking-[0.06em] text-[var(--color-fog)]" href={creditHref} rel="noreferrer" target="_blank">Photo: {credit} / Unsplash <ArrowUpRightIcon aria-hidden="true" size={12} weight="bold" /></a></div></article>;

export default MediaCard;
