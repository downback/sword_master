import React, { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

import { images } from "../../constants"
import "./AboutUs.css"

const AboutUs = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0])
  const xLeft = useTransform(scrollYProgress, [0.1, 0.5], ["-80%", "0%"])
  const xRight = useTransform(scrollYProgress, [0.1, 0.5], ["80%", "0%"])

  return (
    <div
      ref={targetRef}
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <motion.h1 style={{ x: xLeft }} className="headtext__cormorant">
            About Us
          </motion.h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <motion.div
          style={{ opacity }}
          className="app__aboutus-content_knife flex__center"
        >
          <img src={images.knife} alt="about_knife" />
        </motion.div>

        <div className="app__aboutus-content_history">
          <motion.h1 style={{ x: xRight }} className="headtext__cormorant">
            Our History
          </motion.h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
