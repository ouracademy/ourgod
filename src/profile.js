import React from "react"
import GoogleMapReact from "google-map-react"

const parties = [
  {
    id: "puertaalcielomc",
    name: "Puerta al cielo",
    address: {
      description: "Av. Canadá N° 1290 / 4to Piso",
      latitude: -12.0849088,
      longitude: -77.0131398
    }
  }
]

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Map = ({ latitude, longitude, zoom = 16, text }) => (
  <div style={{ height: "400px", width: "400px" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyChdF-WFU6PaLwZ3DjKpaNY8IHfk1enffw" }}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={zoom}
    >
      <AnyReactComponent lat={latitude} lng={longitude} text={text} />
    </GoogleMapReact>
  </div>
)

export const Profile = ({ partyId }) => {
  const party = parties.find(x => x.id === partyId)

  return (
    <div>
      <h3>{party.name}</h3>
      <Map
        latitude={party.address.latitude}
        longitude={party.address.longitude}
        text={party.name}
      />
    </div>
  )
}
