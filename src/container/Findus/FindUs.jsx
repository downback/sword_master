import React from "react"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

const FindUs = () => {
  const defaultProps = {
    center: {
      lat: 52.54735078418611,
      lng: 13.425236202979676,
    },
    zoom: 17,
  }

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <div style={{ height: "50vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        {/* <img src={images.findus} alt="finus_img" /> */}
      </div>
    </div>
  )
}

export default FindUs
