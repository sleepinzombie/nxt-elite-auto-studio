import { ArrowDownIcon } from "@phosphor-icons/react/ssr";
import HeroBackgroundCarousel from "@/components/hero-background-carousel/hero-background-carousel";
import PrimaryLink from "@/components/primary-link/primary-link";
import Reveal from "@/components/reveal/reveal";
import { useLanguage } from "@/components/language-provider/language-provider";

const Hero = () => {
  const { language } = useLanguage();
  const copy = language === "fr" ? { aria: "Le detailing livre chez vous", primary: "Detailing", secondary: "A votre", accent: "porte.", lede: "Un lavage auto et un detailing soigne pour le vehicule que vous utilisez au quotidien.", cta: "Reserver un creneau", explore: "Decouvrir les services", lead: "Pense pour la finition.", leadBody: "Un perimetre clair, un travail soigne et un vehicule dont on prend reellement soin.", wash: "Lavage auto", washBody: "Soin exterieur sur", detail: "Detailing", detailBody: "Interieur et exterieur", lights: "Phares", lightsBody: "Nettoyes et polis" } : { aria: "Detailing delivered to your door", primary: "Detailing", secondary: "To your", accent: "door.", lede: "A considered car wash and detailing experience for the vehicle you drive every day.", cta: "Dispatch a team", explore: "Explore services", lead: "Made for the finish.", leadBody: "Clear scope, careful work and a vehicle that feels properly looked after.", wash: "Car wash", washBody: "Safe exterior care", detail: "Detailing", detailBody: "Inside and out", lights: "Headlights", lightsBody: "Cleaned and polished" };
  return <section className="hero" id="home">
  <div className="hero__canvas">
    <HeroBackgroundCarousel />
    <div className="hero__inner shell">
      <Reveal className="hero__masthead">
        <h1 aria-label={copy.aria}><span className="hero__headline-primary">{copy.primary}</span><span className="hero__headline-secondary">{copy.secondary} <span>{copy.accent}</span></span></h1>
        <p className="hero__lede">{copy.lede}</p>
        <div className="hero__actions"><PrimaryLink href="#contact">{copy.cta}</PrimaryLink><a href="#services">{copy.explore} <ArrowDownIcon aria-hidden="true" size={13} weight="bold" /></a></div>
      </Reveal>
      <div className="hero__booking-row"><p><strong>{copy.lead}</strong><span>{copy.leadBody}</span></p><div className="hero__proof"><p><strong>{copy.wash}</strong><span>{copy.washBody}</span></p><p><strong>{copy.detail}</strong><span>{copy.detailBody}</span></p><p><strong>{copy.lights}</strong><span>{copy.lightsBody}</span></p></div></div>
    </div>
  </div>
</section>;
};

export default Hero;
