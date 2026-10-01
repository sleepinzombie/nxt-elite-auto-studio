"use client";

import { CheckIcon } from "@phosphor-icons/react/ssr";
import PrimaryLink from "@/components/primary-link/primary-link";
import { useTrackInView } from "@/lib/use-track-in-view";

type PackageCardProps = { label: string; title: string; description: string; features: string[] };

const PackageCard = ({ label, title, description, features }: PackageCardProps) => {
  const ref = useTrackInView<HTMLElement>("package_view", { package: title });
  return <article className="package-card" ref={ref}><p>{label}</p><h3>{title}</h3><p>{description}</p><ul>{features.map((feature) => <li key={feature}><CheckIcon aria-hidden="true" size={14} weight="bold" />{feature}</li>)}</ul><PrimaryLink href="#contact" track={{ event: "booking_click", params: { location: "package", package: title } }}>Request this package</PrimaryLink></article>;
};

export default PackageCard;
