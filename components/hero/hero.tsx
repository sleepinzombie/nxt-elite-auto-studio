import { ArrowDownIcon } from "@phosphor-icons/react/ssr";
import HeroBackgroundCarousel from "@/components/hero-background-carousel/hero-background-carousel";
import PrimaryLink from "@/components/primary-link/primary-link";
import Reveal from "@/components/reveal/reveal";

const Hero = () => <section className="hero" id="home">
  <div className="hero__canvas">
    <HeroBackgroundCarousel />
    <div className="hero__inner shell">
      <Reveal className="hero__masthead">
        <h1 aria-label="Detailing delivered to your door"><span className="hero__headline-primary">Detailing</span><span className="hero__headline-secondary">To your <span>door.</span></span></h1>
        <p className="hero__lede">A considered car wash and detailing experience for the vehicle you drive every day.</p>
        <div className="hero__actions"><PrimaryLink href="#contact" track={{ event: "booking_click", params: { location: "hero" } }}>Dispatch a team</PrimaryLink><a href="#services">Explore services <ArrowDownIcon aria-hidden="true" size={13} weight="bold" /></a></div>
      </Reveal>
      <div className="hero__booking-row"><p><strong>Made for the finish.</strong><span>Clear scope, careful work and a vehicle that feels properly looked after.</span></p><div className="hero__proof"><p><strong>Car wash</strong><span>Safe exterior care</span></p><p><strong>Detailing</strong><span>Inside and out</span></p><p><strong>Headlights</strong><span>Cleaned and polished</span></p></div></div>
    </div>
  </div>
</section>;

export default Hero;
