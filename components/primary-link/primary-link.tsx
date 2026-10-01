import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import TrackedLink from "@/components/analytics/tracked-link";
import type { AnalyticsParams } from "@/lib/analytics";
type PrimaryLinkProps = { href: string; children: ReactNode; variant?: "gold" | "outline"; track?: { event: string; params?: AnalyticsParams } };
const PrimaryLink = ({ href, children, variant = "gold", track }: PrimaryLinkProps) => {
  const className = `primary-link primary-link--${variant}`;
  const icon = <ArrowUpRightIcon aria-hidden="true" size={14} weight="bold" />;
  return track ? <TrackedLink className={className} event={track.event} eventParams={track.params} href={href}>{children}{icon}</TrackedLink> : <a className={className} href={href}>{children}{icon}</a>;
};
export default PrimaryLink;
