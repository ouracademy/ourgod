import React from "react"
import GoogleMapReact from "google-map-react"
import { Layout } from "./layout"
import { Box, Grid, Heading } from "grommet"

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

const Map = ({ latitude, longitude, zoom = 16, text }) => {
  const renderMarker = (map, maps) => {
    new maps.Marker({
      map: map,
      position: new maps.LatLng(latitude, longitude)
    })
  }

  return (
    <Box width="xxlarge" height="medium">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => renderMarker(map, maps)}
      />
    </Box>
  )
}

const mainSchedule = ["Jueves 8:00pm", "Domingo 9:00am y 11:00am"]

const scheduleByGroup = [
  {
    name: "Mujeres",
    schedule: ["Miércoles 9:00am"]
  },
  {
    name: "Jóvenes (UNO)",
    schedule: ["Viernes 8:00pm"]
  },
  {
    name: "Jóvenes Adultos (JVP)",
    schedule: ["Miércoles 7:30pm"]
  },
  {
    name: "Intercesión",
    schedule: ["Lunes 9:00am"]
  }
]

export const Profile = ({ partyId }) => {
  const party = parties.find(x => x.id === partyId)

  return (
    <Layout>
      <h1>{party.name}</h1>
      <ScheduleAndAddress party={party} />
    </Layout>
  )
}

const ScheduleAndAddress = ({ party }) => (
  <Box direction="row">
    <Box fill>
      <p>Av. Canadá 1290 / 4to Piso</p>
      <Heading level="3" margin={{ vertical: "small" }}>
        Horarios
      </Heading>
      <Schedule schedule={mainSchedule} />
      <GroupsSchedule></GroupsSchedule>
    </Box>
    <Box>
      <Map
        latitude={party.address.latitude}
        longitude={party.address.longitude}
        text={party.name}
      />
    </Box>
  </Box>
)

const GroupsSchedule = () => (
  <div>
    <Heading level="3">Grupos</Heading>
    <Grid
      columns={{
        count: 2,
        size: "auto"
      }}
    >
      {scheduleByGroup.map(x => (
        <div key={x.name}>
          <Heading level="4" margin={{ vertical: "xsmall" }}>
            {x.name}
          </Heading>
          <Schedule schedule={x.schedule} />
        </div>
      ))}
    </Grid>
  </div>
)

const Schedule = ({ schedule }) => (
  <div>
    {schedule.map(f => (
      <p key={f}>{f}</p>
    ))}
  </div>
)
