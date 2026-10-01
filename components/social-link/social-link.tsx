import { ArrowUpRightIcon, FacebookLogoIcon, TiktokLogoIcon } from "@phosphor-icons/react/ssr";
import TrackedLink from "@/components/analytics/tracked-link";

type SocialLinkProps = { href: string; label: "Facebook" | "TikTok" };

const SocialLink = ({ href, label }: SocialLinkProps) => {
  const PlatformIcon = label === "Facebook" ? FacebookLogoIcon : TiktokLogoIcon;
  return <TrackedLink className="social-link" event="social_click" eventParams={{ network: label.toLowerCase() }} href={href} rel="noreferrer" target="_blank"><PlatformIcon aria-hidden="true" size={15} weight="fill" /><span>{label}</span><ArrowUpRightIcon aria-hidden="true" className="social-link__arrow" size={12} weight="bold" /></TrackedLink>;
};

export default SocialLink;
