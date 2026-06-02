import { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <img src={logo} alt="TAMIS Glanzwerk" className="header__logo-img" />
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <a href="#" className="header__nav-link header__nav-link--active">
            Startseite
          </a>
          <a href="#leistungen" className="header__nav-link">
            Leistungen
          </a>
          <a href="#ueber-uns" className="header__nav-link">
            Über uns
          </a>
          <a href="#kontakt" className="header__nav-link">
            Kontakt
          </a>
        </nav>

        <div className="header__actions">
          <div className="header__social">
            <a href="#" className="header__social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="header__social-link" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
          <a href="tel:+43 650 67 00 692" className="header__phone">
            <FaPhone className="header__phone-icon" />
            <span>+43 650 67 00 692</span>
          </a>
        </div>

        <button
          className="header__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;
