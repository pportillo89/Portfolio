import "../styleSheets/Navbar.css"
import languages from "../image/language.png"
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { i18n } = useTranslation();
  const [menuVisible, setMenuVisible] = useState(false);
  const { t } = useTranslation("translate");

  const cambiarIdioma = (lang) => {
    i18n.changeLanguage(lang);
    setMenuVisible(false); // oculta menú al cambiar idioma
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">{t("navbar.header")}</a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li className="languageSelector">
            <img
            className="languages"
            src={languages}
            alt="Idiomas"
            onClick={() => setMenuVisible(!menuVisible)}
            style={{ cursor: "pointer" }}
            />
            {menuVisible && (
              <div className="language-menu">
                <button onClick={() => cambiarIdioma('es')}>{t("navbar.lang_es")}</button>
                <button onClick={() => cambiarIdioma('en')}>{t("navbar.lang_en")}</button>
                <button onClick={() => cambiarIdioma('de')}>{t("navbar.lang_de")}</button>
              </div>
            )}
          </li>
          <li><a href="#about">{t("navbar.aboutMe")}</a></li>
          <li><a href="#project">{t("navbar.project")}</a></li>
          <li><a href="#contact">{t("navbar.contact")}</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;