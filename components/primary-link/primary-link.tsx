import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
type PrimaryLinkProps = { href: string; children: ReactNode; variant?: "gold" | "outline" };
const PrimaryLink = ({ href, children, variant = "gold" }: PrimaryLinkProps) => <a className={`inline-flex items-center justify-center gap-4 whitespace-nowrap px-[1.15rem] py-4 text-[0.65rem] font-bold uppercase tracking-[0.1em] transition-transform duration-200 hover:-translate-y-0.5 ${variant === "outline" ? "border border-[var(--color-ivory)] bg-[var(--color-void)] text-[var(--color-ivory)]" : "bg-[var(--color-gold)] text-[var(--color-void)]"}`} href={href}>{children}<ArrowUpRightIcon aria-hidden="true" size={14} weight="bold" /></a>;
export default PrimaryLink;
