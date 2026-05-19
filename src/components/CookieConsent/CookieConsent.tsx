import { useEffect, useState } from "react";
import "./CookieConsent.css";

const STORAGE_KEY = "tamis-cookie-consent";

type Consent = "accepted" | "rejected";

type Props = {
  onOpenPrivacy: () => void;
};

function CookieConsent({ onOpenPrivacy }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const setConsent = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie-Einwilligung">
      <div className="cookie-consent__inner">
        <div className="cookie-consent__text">
          <h3 className="cookie-consent__title">Wir respektieren Ihre Privatsphäre</h3>
          <p>
            Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten und Ihr
            Nutzungserlebnis zu verbessern. Sie können selbst entscheiden, welche Cookies Sie zulassen.
            Weitere Informationen finden Sie in unserer{" "}
            <button type="button" className="cookie-consent__link" onClick={onOpenPrivacy}>
              Datenschutzerklärung
            </button>
            .
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--ghost"
            onClick={() => setConsent("rejected")}
          >
            Ablehnen
          </button>
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--primary"
            onClick={() => setConsent("accepted")}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
