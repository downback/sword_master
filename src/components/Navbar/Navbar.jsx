import React, { useContext, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import images from "../../constants/images"
import "./Navbar.css"
import { LanguageContext } from "../../context/LanguageContext"

// import useTranslation from "../../hooks/useTranslation"
// import i18n from "i18next"
// import { useTranslation, initReactI18next } from "react-i18next"

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: {
//           "Welcome to React": "Welcome to React and react-i18next"
//         }
//       }
//     },
//     lng: "en",
//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false
//     }
//   });

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { t, language, updateLanguage } = useContext(LanguageContext)

  const toggleLanguage = () => {
    updateLanguage(language === "en" ? "de" : "en")
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">{t("navbar.home")}</a>
        </li>
        <li className="p__opensans">
          <a href="#about">{t("navbar.about")}</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">{t("navbar.menu")}</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">{t("navbar.contact")}</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          {t("navbar.order")}
        </a>
        <div />
        <button
          type="button"
          className="p__opensans app__navbar-language"
          onClick={toggleLanguage}
          value={language}
        >
          {language === "en" ? "DE" : "EN"}
        </button>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="p__opensans app__navbar-language"
                  onClick={toggleLanguage}
                  value={language}
                >
                  {language === "en" ? "DE" : "EN"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
