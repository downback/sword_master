import React from "react"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import { Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})
// import GoogleMapReact from "google-map-react"

// const AnyReactComponent = ({ text }) => <div>{text}</div>

const FindUs = () => {
  // const defaultProps = {
  //   center: {
  //     lat: 52.54735078418611,
  //     lng: 13.425236202979676,
  //   },
  //   zoom: 17,
  // }

  const position = [52.5472, 13.4252]

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Dunckerstraße 30, 10439 Berlin, Deutschland
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Sun: 12:00 Pm - 22:00 pm</p>
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
          <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
          </MapContainer>
          {/* <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact> */}
        </div>
        {/* <img src={images.findus} alt="finus_img" /> */}
      </div>
    </div>
  )
}

export default FindUs
