import React from "react"
import { LanguageProvider } from "./context/LanguageContext"

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container"
import { Navbar } from "./components"
import "./App.css"

const App = () => (
  <LanguageProvider>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    {/* <Laurels /> */}
    <Gallery />
    <FindUs />
    <Footer />
  </LanguageProvider>
)

export default App
