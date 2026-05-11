import { FaEnvelope, FaFileAlt, FaSprayCan, FaArrowRight } from 'react-icons/fa'
import './HowItWorks.css'

const steps = [
  {
    number: '1',
    icon: <FaEnvelope />,
    title: 'Anfrage stellen',
    text: 'Online oder telefonisch Kontakt aufnehmen.',
  },
  {
    number: '2',
    icon: <FaFileAlt />,
    title: 'Angebot erhalten',
    text: 'Schnell und unverbindlich.',
  },
  {
    number: '3',
    icon: <FaSprayCan />,
    title: 'Reinigung beginnt',
    text: 'Zuverlässig und pünktlich.',
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
                <h3 className="howitworks__title">{step.title}</h3>
                <p className="howitworks__text">{step.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="howitworks__arrow">
                  <FaArrowRight />
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
