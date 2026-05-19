import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { legalContent, type LegalKey } from "./legalContent";
import "./LegalModal.css";

type Props = {
  activeKey: LegalKey | null;
  onClose: () => void;
};

function LegalModal({ activeKey, onClose }: Props) {
  useEffect(() => {
    if (!activeKey) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeKey, onClose]);

  if (!activeKey) return null;

  const { title, body } = legalContent[activeKey];

  return (
    <div className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
      <button
        type="button"
        className="legal-modal__backdrop"
        onClick={onClose}
        aria-label="Schließen"
      />
      <div className="legal-modal__panel">
        <header className="legal-modal__header">
          <h2 id="legal-modal-title" className="legal-modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="legal-modal__close"
            onClick={onClose}
            aria-label="Schließen"
          >
            <FaTimes />
          </button>
        </header>
        <div className="legal-modal__body">{body}</div>
      </div>
    </div>
  );
}

export default LegalModal;
