import { FaArrowRight, FaPhone } from 'react-icons/fa'
import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div className="cta-banner__icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
            <path d="M16 32 C18 24, 24 16, 32 16" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
            <circle cx="32" cy="16" r="3" fill="rgba(255,255,255,0.5)" />
          </svg>
        </div>
        <div className="cta-banner__content">
          <h2 className="cta-banner__title">Bereit für perfekte Sauberkeit?</h2>
          <p className="cta-banner__text">
            Wir beraten Sie kostenlos und finden die passende Lösung für Sie.
          </p>
        </div>
        <div className="cta-banner__actions">
          <a href="#kontakt" className="cta-banner__btn cta-banner__btn--primary">
            Kostenlose Beratung anfragen <FaArrowRight />
          </a>
          <a href="tel:03012345678" className="cta-banner__btn cta-banner__btn--secondary">
            <FaPhone /> 030 123 456 78
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
