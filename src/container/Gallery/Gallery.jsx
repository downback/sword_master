import React from "react"
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Gallery.css"

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    const containerWidth = current.offsetWidth

    if (direction === "left") {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }

    if (current.scrollLeft <= 0) {
      // loop to the last image
      current.scrollLeft = current.scrollWidth - containerWidth
      console.log("left")
    } else if (current.scrollLeft + containerWidth >= current.scrollWidth) {
      // loop to the first image
      current.scrollLeft = 0
      console.log("right")
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">
          Photo <div />
          Gallery
        </h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
            images.gallery01,
            images.gallery02,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
