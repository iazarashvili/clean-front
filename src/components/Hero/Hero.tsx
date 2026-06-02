import { FaArrowRight } from "react-icons/fa";
import mainBodyLogo from "../../assets/mainBodyLogo.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img
          src={mainBodyLogo}
          alt="TAMIS Glanzwerk"
          className="hero__image-img"
        />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__label">REINIGUNGSSERVICE</span>
          <h1 className="hero__title">
            Sauberkeit,
            <br />
            die <em>Eindruck</em> macht.
          </h1>
          <p className="hero__subtitle">
            Für Büros, Hotels, Gebäude und Privathaushalte –
            <br />
            gründlich, zuverlässig und professionell.
          </p>
          <div className="hero__buttons">
            <a href="#kontakt" className="hero__btn hero__btn--primary">
              Kostenlose Beratung anfragen <FaArrowRight />
            </a>
            <a href="#leistungen" className="hero__btn hero__btn--secondary">
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
