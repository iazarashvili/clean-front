import { FaEnvelope, FaFileAlt, FaSprayCan } from 'react-icons/fa'
import './HowItWorks.css'

const steps = [
  {
    number: '1',
    icon: <FaEnvelope />,
    title: 'Anfrage stellen',
    text: 'Online oder telefonisch\nKontakt aufnehmen.',
  },
  {
    number: '2',
    icon: <FaFileAlt />,
    title: 'Angebot erhalten',
    text: 'Schnell und\nunverbindlich.',
  },
  {
    number: '3',
    icon: <FaSprayCan />,
    title: 'Reinigung beginnt',
    text: 'Zuverlässig\nund pünktlich.',
  },
]

function HowItWorks() {
  return (
    <section className="howitworks">
      <div className="container">
        <span className="section-label">SO EINFACH FUNKTIONIERT ES</span>
        <div className="howitworks__steps">
          {steps.map((step, i) => (
            <div className="howitworks__step-wrapper" key={step.number}>
              <div className="howitworks__step">
                <div className="howitworks__icon-wrapper">
                  <div className="howitworks__icon">{step.icon}</div>
                  <span className="howitworks__number">{step.number}</span>
                </div>
                <div className="howitworks__content">
                  <h3 className="howitworks__title">{step.title}</h3>
                  <p className="howitworks__text">{step.text}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="howitworks__arrow" aria-hidden>
                  <svg width="40" height="14" viewBox="0 0 64 14" fill="none">
                    <path
                      d="M0 7 L60 7 M52 1 L60 7 L52 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
