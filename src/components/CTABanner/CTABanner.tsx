import { FaArrowRight, FaPhone } from "react-icons/fa";
import "./CTABanner.css";

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner__card">
          <div className="cta-banner__icon" aria-hidden>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z"
                fill="var(--color-accent)"
              />
              <path
                d="M19 3 L19.6 5.4 L22 6 L19.6 6.6 L19 9 L18.4 6.6 L16 6 L18.4 5.4 Z"
                fill="var(--color-accent)"
              />
            </svg>
          </div>
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">
              Bereit für perfekte Sauberkeit?
            </h2>
            <p className="cta-banner__text">
              Wir beraten Sie kostenlos und finden die passende Lösung für Sie.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a
              href="#kontakt"
              className="cta-banner__btn cta-banner__btn--primary"
            >
              Kostenlose Beratung anfragen <FaArrowRight />
            </a>
            <a
              href="tel:+43 650 67 00 692"
              className="cta-banner__btn cta-banner__btn--secondary"
            >
              <FaPhone />+43 650 67 00 692
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
