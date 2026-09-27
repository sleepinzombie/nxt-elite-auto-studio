import { CheckIcon } from "@phosphor-icons/react/ssr";
import PrimaryLink from "@/components/primary-link/primary-link";
import { useLanguage } from "@/components/language-provider/language-provider";

type PackageCardProps = { label: string; title: string; description: string; features: string[] };

const PackageCard = ({ label, title, description, features }: PackageCardProps) => {
  const { language } = useLanguage();
  return <article className="package-card"><p>{label}</p><h3>{title}</h3><p>{description}</p><ul>{features.map((feature) => <li key={feature}><CheckIcon aria-hidden="true" size={14} weight="bold" />{feature}</li>)}</ul><PrimaryLink href="#contact">{language === "fr" ? "Demander ce forfait" : "Request this package"}</PrimaryLink></article>;
};

export default PackageCard;
