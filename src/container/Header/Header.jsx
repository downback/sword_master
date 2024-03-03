import React from "react"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Header.css"

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Taste of Korea" />
      <h1 className="app__header-h1">Kalguksu; Korean Knife cut Noodle</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sword Master's open kitchen is a stage where chefs passionately make
        noodles. It's not just eye candy, it's the unspoken language that turns
        noodles into experiences.
      </p>
      <button type="button" className="custom__button">
        <a href="#menu">Explore Menu</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
)

export default Header
