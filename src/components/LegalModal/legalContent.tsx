import type { ReactNode } from "react";

export type LegalKey = "impressum" | "datenschutz";

type LegalContent = {
  title: string;
  body: ReactNode;
};

export const legalContent: Record<LegalKey, LegalContent> = {
  impressum: {
    title: "Impressum",
    body: (
      <>
        <p>
          Angaben gemäß § 5 ECG (E-Commerce-Gesetz), § 14 UGB und § 24
          Mediengesetz.
        </p>

        <h3>Unternehmen</h3>
        <p>
          TAMIS Glanzwerk
          <br />
          Erzstrasse 20
          <br />
          5500 Bischofshofen
          <br />
          Österreich
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: +43 650 670 06 92
          <br />
          E-Mail: info@tamisglanzwerk.at
        </p>

        <h3>Unternehmensgegenstand</h3>
        <p>
          Reinigungsdienstleistungen für Hotels, Büros, Gebäude und
          Privathaushalte.
        </p>

        <h3>Mitglied der Wirtschaftskammer</h3>
        <p>
          Wirtschaftskammer Salzburg
          <br />
          Fachgruppe der Denkmal-, Fassaden- und Gebäudereiniger
        </p>

        <h3>Anwendbare Rechtsvorschriften</h3>
        <p>
          Gewerbeordnung 1994 (GewO), abrufbar unter{" "}
          <a
            href="https://www.ris.bka.gv.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ris.bka.gv.at
          </a>
        </p>

        <h3>Aufsichtsbehörde / Gewerbebehörde</h3>
        <p>Bezirkshauptmannschaft St. Johann im Pongau</p>

        <h3>Online-Streitbeilegung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Wir sind weder verpflichtet noch bereit, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <h3>Haftungsausschluss</h3>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
        </p>
      </>
    ),
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    body: (
      <>
        <p>
          Diese Datenschutzerklärung informiert Sie gemäß der
          Datenschutz-Grundverordnung (DSGVO) sowie dem österreichischen
          Datenschutzgesetz (DSG) über Art, Umfang und Zwecke der Verarbeitung
          personenbezogener Daten auf dieser Website.
        </p>

        <h3>1. Verantwortlicher</h3>
        <p>
          TAMIS Glanzwerk
          <br />
          Erzstrasse 20, 5500 Bischofshofen, Österreich
          <br />
          E-Mail: info@tamisglanzwerk.at
          <br />
          Telefon: +43 650 670 06 92
        </p>

        <h3>2. Erhebung und Verarbeitung personenbezogener Daten</h3>
        <p>
          Beim Besuch unserer Website werden vom Server automatisch technische
          Informationen (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit des
          Zugriffs) verarbeitet. Eine weitergehende personenbezogene
          Verarbeitung erfolgt nur, wenn Sie uns Daten freiwillig übermitteln,
          etwa über ein Kontakt- oder Buchungsformular.
        </p>

        <h3>3. Zwecke der Verarbeitung und Rechtsgrundlagen</h3>
        <p>
          Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage, zur Erfüllung
          vertraglicher Verpflichtungen (Art. 6 Abs. 1 lit. b DSGVO), zur
          Wahrung berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) sowie auf
          Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <h3>4. Cookies</h3>
        <p>
          Diese Website verwendet technisch notwendige Cookies, die zur
          Bereitstellung der Funktionen erforderlich sind. Weitere Cookies (z.
          B. für Analyse oder Marketing) werden ausschließlich nach Ihrer
          ausdrücklichen Einwilligung gesetzt. Ihre Auswahl können Sie jederzeit
          ändern, indem Sie die Cookie-Einstellungen in Ihrem Browser anpassen.
        </p>

        <h3>5. Weitergabe an Dritte</h3>
        <p>
          Eine Weitergabe Ihrer Daten erfolgt nur, soweit dies zur
          Vertragserfüllung erforderlich ist, Sie eingewilligt haben oder eine
          gesetzliche Verpflichtung besteht.
        </p>

        <h3>6. Speicherdauer</h3>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die
          jeweiligen Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies vorsehen.
        </p>

        <h3>7. Ihre Rechte</h3>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
          Eine erteilte Einwilligung können Sie jederzeit widerrufen. Zur
          Geltendmachung wenden Sie sich bitte an die oben genannten
          Kontaktdaten.
        </p>

        <h3>8. Beschwerderecht</h3>
        <p>
          Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde
          zu beschweren: Österreichische Datenschutzbehörde, Barichgasse 40-42,
          1030 Wien,{" "}
          <a
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dsb.gv.at
          </a>
          .
        </p>

        <h3>9. Sicherheit</h3>
        <p>
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein,
          um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust
          und unberechtigten Zugriff zu schützen.
        </p>
      </>
    ),
  },
};
