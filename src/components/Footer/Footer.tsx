import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/footerLogo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img
              src={logo}
              alt="TAMIS Glanzwerk"
              className="footer__logo-img"
            />
          </div>
          {/* <p className="footer__slogan">Sauberkeit, die Eindruck macht.</p> */}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">KONTAKT</h4>
          <ul className="footer__list">
            <li>
              <FaPhone className="footer__list-icon" /> +436 506 700 692
            </li>
            <li>
              <FaEnvelope className="footer__list-icon" />{" "}
              info@tamis-glanzwerk.de
            </li>
            <li>
              <FaMapMarkerAlt className="footer__list-icon" />
              <span>
                Erzstrasse 20
                <br />
                5500 Bischofshofen
              </span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">LEISTUNGEN</h4>
          <ul className="footer__list">
            <li>
              <a href="#leistungen">Hotels</a>
            </li>
            <li>
              <a href="#leistungen">Büros</a>
            </li>
            <li>
              <a href="#leistungen">Gebäude & Treppenhäuser</a>
            </li>
            <li>
              <a href="#leistungen">Privathaushalte</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">RECHTLICHES</h4>
          <ul className="footer__list">
            <li>
              <a href="#">Impressum</a>
            </li>
            <li>
              <a href="#">Datenschutz</a>
            </li>
            <li>
              <a href="#">AGB</a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/tamis.glanzwerk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="#" className="footer__social-link" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; 2026 TAMIS Glanzwerk. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
