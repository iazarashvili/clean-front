import { FaCheckCircle, FaSearch, FaSlidersH, FaAward } from 'react-icons/fa'
import './Features.css'

const features = [
  {
    icon: <FaCheckCircle />,
    title: 'Zuverlässig',
    text: 'Pünktlich, organisiert und immer erreichbar.',
  },
  {
    icon: <FaSearch />,
    title: 'Gründlich',
    text: 'Sauberkeit bis ins Detail.',
  },
  {
    icon: <FaSlidersH />,
    title: 'Individuell',
    text: 'Passend zu Ihren Anforderungen.',
  },
  {
    icon: <FaAward />,
    title: 'Qualitätsgeprüft',
    text: 'Kontrollierte Ergebnisse bei jedem Einsatz.',
  },
]

function Features() {
  return (
    <section className="features">
      <div className="container features__grid">
        {features.map((f) => (
          <div className="features__item" key={f.title}>
            <div className="features__icon">{f.icon}</div>
            <h3 className="features__title">{f.title}</h3>
            <p className="features__text">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
