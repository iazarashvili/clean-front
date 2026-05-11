import { FaBed, FaBuilding, FaHome, FaCheck } from 'react-icons/fa'
import { MdApartment } from 'react-icons/md'
import hotelImg from '../../assets/services/hotel.webp'
import officeImg from '../../assets/services/officeImg.png'
import buildingImg from '../../assets/services/buildingImg.jpg'
import homeImg from '../../assets/services/homeImg.jpg'
import './Services.css'

const services = [
  {
    icon: <FaBed />,
    title: 'Hotels',
    subtitle: 'Perfekte Sauberkeit für zufriedene Gäste.',
    items: ['Zimmerreinigung', 'Wellness- & Spa-Bereiche', 'Öffentliche Bereiche'],
    color: '#2d5a3d',
    image: hotelImg,
  },
  {
    icon: <FaBuilding />,
    title: 'Büros',
    subtitle: 'Saubere Arbeitsplätze für mehr Produktivität.',
    items: ['Unterhaltsreinigung', 'Sanitärreinigung', 'Büro- & Glasreinigung'],
    color: '#2d5a3d',
    image: officeImg,
  },
  {
    icon: <MdApartment />,
    title: 'Gebäude & Treppenhäuser',
    subtitle: 'Werterhalt durch professionelle Pflege.',
    items: ['Treppenhausreinigung', 'Unterhaltsreinigung', 'Fensterreinigung'],
    color: '#2d5a3d',
    image: buildingImg,
  },
  {
    icon: <FaHome />,
    title: 'Privathaushalte',
    subtitle: 'Sauberkeit zum Wohlfühlen.',
    items: ['Grundreinigung', 'Regelmäßige Reinigung', 'Spezialreinigung'],
    color: '#2d5a3d',
    image: homeImg,
  },
]

function Services() {
  return (
    <section className="services" id="leistungen">
      <div className="container">
        <span className="section-label">UNSERE LEISTUNGEN</span>
        <h2 className="section-title">Für jede Umgebung die passende Reinigungslösung</h2>
        <div className="services__grid">
          {services.map((s) => (
            <div className="services__card" key={s.title}>
              <div className="services__card-image">
                {s.image && (
                  <img src={s.image} alt={s.title} className="services__card-img" />
                )}
                <div className="services__card-icon">{s.icon}</div>
              </div>
              <div className="services__card-body">
                <h3 className="services__card-title">{s.title}</h3>
                <p className="services__card-subtitle">{s.subtitle}</p>
                <ul className="services__card-list">
                  {s.items.map((item) => (
                    <li key={item}>
                      <FaCheck className="services__card-check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
