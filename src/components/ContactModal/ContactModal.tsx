import { useEffect, useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import "./ContactModal.css";

const WEB3FORMS_KEY = "c1fbc47b-3fc6-4069-96dd-78f30aaad0f8";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const SERVICE_OPTIONS = [
  "Hotels",
  "Büros",
  "Gebäude & Treppenhäuser",
  "Privathaushalte",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  selectedService: string;
  onClose: () => void;
};

function ContactModal({ selectedService, onClose }: Props) {
  const [form, setForm] = useState({
    service: selectedService,
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Neue Buchungsanfrage – ${form.service}`,
          from_name: "TAMIS Glanzwerk Buchungsformular",
          Leistung: form.service,
          Name: form.name,
          "E-Mail": form.email,
          Telefon: form.phone || "—",
          Wunschtermin: form.date || "—",
          Uhrzeit: form.time || "—",
          Nachricht: form.message || "—",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data?.message ||
            "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Verbindung fehlgeschlagen. Bitte überprüfen Sie Ihre Internetverbindung."
      );
    }
  };

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

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
          <h2 className="contact-modal__title">
            {isSuccess ? "Vielen Dank!" : "Kostenlose Beratung anfragen"}
          </h2>
          <button
            type="button"
            className="contact-modal__close"
            onClick={onClose}
            aria-label="Schließen"
          >
            <FaTimes />
          </button>
        </header>

        {isSuccess ? (
          <div className="contact-modal__success">
            <FaCheckCircle className="contact-modal__success-icon" />
            <p className="contact-modal__success-text">
              Ihre Anfrage wurde erfolgreich gesendet.
              <br />
              Unser Mitarbeiter wird Sie in Kürze kontaktieren.
            </p>
            <button
              type="button"
              className="contact-modal__submit"
              onClick={onClose}
            >
              Schließen
            </button>
          </div>
        ) : (
          <form className="contact-modal__form" onSubmit={handleSubmit}>
            <div className="contact-modal__field">
              <label htmlFor="cm-service">Leistung</label>
              <select
                id="cm-service"
                name="service"
                value={form.service}
                onChange={handleChange}
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>

            {status === "error" && (
              <p className="contact-modal__error" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="contact-modal__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Senden"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
