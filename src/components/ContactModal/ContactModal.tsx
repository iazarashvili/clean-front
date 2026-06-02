import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import "./ContactModal.css";

const SERVICE_OPTIONS = [
  "Hotels",
  "Büros",
  "Gebäude & Treppenhäuser",
  "Privathaushalte",
] as const;

type Props = {
  selectedService: string | null;
  onClose: () => void;
};

function ContactModal({ selectedService, onClose }: Props) {
  const [form, setForm] = useState({
    service: selectedService ?? SERVICE_OPTIONS[0],
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: EmailJS integration
    console.log("Form submitted:", form);
  };

  return (
    <div className="contact-modal" role="dialog" aria-modal="true">
      <button
        type="button"
        className="contact-modal__backdrop"
        onClick={onClose}
        aria-label="Schließen"
      />
      <div className="contact-modal__panel">
        <header className="contact-modal__header">
          <h2 className="contact-modal__title">Kostenlose Beratung anfragen</h2>
          <button
            type="button"
            className="contact-modal__close"
            onClick={onClose}
            aria-label="Schließen"
          >
            <FaTimes />
          </button>
        </header>

        <form className="contact-modal__form" onSubmit={handleSubmit}>
          <div className="contact-modal__field">
            <label htmlFor="cm-service">Leistung</label>
            <select
              id="cm-service"
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-modal__field">
            <label htmlFor="cm-name">Name</label>
            <input
              id="cm-name"
              name="name"
              type="text"
              required
              placeholder="Ihr Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-modal__field">
            <label htmlFor="cm-email">E-Mail</label>
            <input
              id="cm-email"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-modal__field">
            <label htmlFor="cm-phone">Telefon</label>
            <input
              id="cm-phone"
              name="phone"
              type="tel"
              placeholder="+43 ..."
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contact-modal__row">
            <div className="contact-modal__field">
              <label htmlFor="cm-date">Wunschtermin</label>
              <input
                id="cm-date"
                name="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={handleChange}
              />
            </div>
            <div className="contact-modal__field">
              <label htmlFor="cm-time">Uhrzeit</label>
              <div className="contact-modal__input-icon">
                <input
                  id="cm-time"
                  name="time"
                  type="text"
                  inputMode="numeric"
                  placeholder="HH:MM"
                  maxLength={5}
                  pattern="[0-2][0-9]:[0-5][0-9]"
                  value={form.time}
                  onChange={(e) => {
                    let v = e.target.value.replace(/[^\d]/g, "");
                    if (v.length > 4) v = v.slice(0, 4);
                    if (v.length >= 3) v = v.slice(0, 2) + ":" + v.slice(2);
                    setForm({ ...form, time: v });
                  }}
                />
                <FiClock className="contact-modal__input-icon-svg" />
              </div>
            </div>
          </div>

          <div className="contact-modal__field">
            <label htmlFor="cm-message">Nachricht</label>
            <textarea
              id="cm-message"
              name="message"
              rows={4}
              placeholder="Ihre Nachricht..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="contact-modal__submit">
            Senden
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
