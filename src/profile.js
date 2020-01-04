import React from "react"
import GoogleMapReact from "google-map-react"
import { Layout } from "./layout"
import { Box, Grid, Heading, Image } from "grommet"

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
      <Box gap="large">
        <h1>{party.name}</h1>
        <Groups />
        <ScheduleAndAddress party={party} />
      </Box>
    </Layout>
  )
}

const groups = [
  {
    name: "Ministerio de mujeres",
    abbreviation: "MUJERES",
    imageURL: "mujeres.jpg"
  },
  {
    name: "Ministerio de Jóvenes",
    abbreviation: "UNO",
    imageURL: "uno.jpg"
  },
  {
    name: "Ministerio de interseción",
    abbreviation: "Interseción",
    imageURL: "intercesion.png"
  }
  // {
  //   name: "Ministerio de Jóvenes Adultos",
  //   abbreviation: "JÓVENES JVP",
  //   imageURL: "jvp.jpg"
  // }
]

const Groups = () => (
  <Box>
    <h2>Dando el siguiente paso...</h2>
    <div>
      <h3>Grupos</h3>
      <p>
        Creemos que Dios nos creó para vivir relacionándonos unos con otros y
        solo así podemos vivir la vida plena que Él quiere para nosotros.
      </p>
      <Box direction="row-responsive" gap="medium">
        {groups.map(x => (
          <Box height="30vh" width="30vh">
            <Image fit src={x.imageURL} alt={x.abbreviation}></Image>
          </Box>
        ))}
      </Box>
    </div>
  </Box>
)

const ScheduleAndAddress = ({ party }) => (
  <Box direction="row-responsive">
    <Box fill>
      <Heading level="3" margin={{ vertical: "xsmall" }}>
        Dirección
      </Heading>
      <p>Av. Canadá 1290 / 4to Piso</p>
      <Heading level="3" margin={{ vertical: "xsmall" }}>
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
    <Heading level="4">Grupos</Heading>
    <Grid
      columns={{
        count: 2,
        size: "auto"
      }}
    >
      {scheduleByGroup.map(x => (
        <div key={x.name}>
          <Heading level="5" margin={{ vertical: "xsmall" }}>
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
