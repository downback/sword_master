import React, { useContext, useRef } from "react"

import { LanguageContext } from "../../context/LanguageContext"
import { useScroll, useTransform, motion } from "framer-motion"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Header.css"

const Header = () => {
  const { t } = useContext(LanguageContext)

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // const rotate = useTransform(scrollYProgress, [0, 100], [0, 180], {
  //   clamp: false,
  // })

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.4])

  return (
    <motion.div
      // style={{ opacity }}
      ref={targetRef}
      className="app__header app__wrapper section__padding"
      id="home"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Taste of Korea" />
        <h1 className="app__header-h1">{t("home.title.main")}</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {t("home.title.sub")}
        </p>
        <button type="button" className="custom__button">
          <a href="#menu">{t("home.button")}</a>
        </button>
      </div>

      <motion.div style={{ opacity, scale }} className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </motion.div>
    </motion.div>
  )
}

export default Header
