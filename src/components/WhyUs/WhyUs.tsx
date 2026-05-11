import { FaUsers, FaClock, FaEuroSign, FaStar } from 'react-icons/fa'
import './WhyUs.css'

const reasons = [
  {
    icon: <FaUsers />,
    title: 'Feste Ansprechpartner',
    text: 'Direkter Kontakt für schnelle Lösungen.',
  },
  {
    icon: <FaClock />,
    title: 'Flexible Einsatzzeiten',
    text: 'Wir reinigen dann, wenn es Ihnen passt.',
  },
  {
    icon: <FaEuroSign />,
    title: 'Transparente Preise',
    text: 'Klare Angebote ohne versteckte Kosten.',
  },
  {
    icon: <FaStar />,
    title: 'Konstante Qualität',
    text: 'Sauberkeit auf gleichbleibend hohem Niveau.',
  },
]

function WhyUs() {
  return (
    <section className="whyus" id="ueber-uns">
      <div className="container">
        <span className="section-label">WARUM WIR?</span>
        <h2 className="section-title">Darum entscheiden sich Kunden für uns</h2>
        <div className="whyus__grid">
          {reasons.map((r) => (
            <div className="whyus__item" key={r.title}>
              <div className="whyus__icon">{r.icon}</div>
              <h3 className="whyus__title">{r.title}</h3>
              <p className="whyus__text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
