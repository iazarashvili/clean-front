import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/footerLogo.png";
import type { LegalKey } from "../LegalModal/legalContent";
import "./Footer.css";

type Props = {
  onOpenLegal: (key: LegalKey) => void;
};

function Footer({ onOpenLegal }: Props) {
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
          <h4 className="footer__title">Sauberkeit, die Eindruck macht.</h4>

          {/* <p className="footer__slogan">Sauberkeit, die Eindruck macht.</p> */}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">KONTAKT</h4>
          <ul className="footer__list">
            <li>
              <FaPhone className="footer__list-icon" /> +43 650 67 00 692
            </li>
            <li>
              <FaEnvelope className="footer__list-icon" />{" "}
              info@tamisglanzwerk.at
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
              <button
                type="button"
                className="footer__link-btn"
                onClick={() => onOpenLegal("impressum")}
              >
                Impressum
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer__link-btn"
                onClick={() => onOpenLegal("datenschutz")}
              >
                Datenschutz
              </button>
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
          <a href="https://wa.me/436506700692" className="footer__social-link" aria-label="WhatsApp">
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
