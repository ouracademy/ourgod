import React from "react"
import GoogleMapReact from "google-map-react"
import { Layout } from "./layout"
import { Box, Grid, Heading, Image, Paragraph, Button } from "grommet"
import { LinkNext } from "grommet-icons"

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

const DayMessage = () => (
  <Box>
    <Heading level="2" size="large">
      Un mensaje
    </Heading>
    <Box direction="row-responsive" gap="large" margin={{ vertical: "medium" }}>
      <Box justify="center">
        <Paragraph size="large" margin={{ vertical: "xsmall" }}>
          Creemos que la presencia de Dios puede tocar y transformar las vidas.
          Nuestra esperanza es que vivas tu propia experiencia real con Él.
        </Paragraph>
      </Box>
      <Box>
        <p>
          Mensaje Diario/Biblia de Promesas: 04 de Enero: Hechos Sobre Palabras
          Palabra: Así también la fe, si no tiene obras, es muerta en sí misma
          (Santiago 2:17)
        </p>
        <p>
          Una importante lección que me fue dada de la gran sabiduría de mi
          abuela materna, es que no sólo son nuestras palabras las que convencen
          a ...<a href="/">Leer más</a>
        </p>
      </Box>
    </Box>

    <Box direction="row-responsive" gap="large" margin={{ vertical: "medium" }}>
      <Box justify="center">
        <Paragraph size="large">
          Tambien puedes ver nuestras predicas en vivo. Siguenos en facebook,
          donde además compartimos mensajes de la biblia cada día
        </Paragraph>
        <a
          href="https://www.facebook.com/pg/puertaalcielomc/videos/?ref=page_internal"
          target="__blank"
        >
          <Button
            reverse
            label="Ver online"
            primary
            icon={<LinkNext />}
          ></Button>
        </a>
      </Box>
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpuertaalcielomc%2Fvideos%2F916860155368025%2F&show_text=0&width=560"
        width="560"
        height="315"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        title="Mensaje"
      ></iframe>
    </Box>
  </Box>
)

const Groups = () => (
  <Box>
    <Heading level="2" size="large">
      Dando el siguiente paso...
    </Heading>
    <div>
      <Heading level="3" size="large">
        Grupos
      </Heading>
      <Paragraph size="large">
        Creemos que Dios nos creó para vivir relacionándonos unos con otros y
        solo así podemos vivir la vida plena que Él quiere para nosotros.
      </Paragraph>
      <Box
        direction="row-responsive"
        margin={{ vertical: "large" }}
        gap="large"
        style={{ alignItems: "center" }}
      >
        {groups.map(x => (
          <Box height="30vh" width="30vh" justify="center" key={x.name}>
            <Image fit="contain" src={x.imageURL} alt={x.abbreviation}></Image>
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

export const Profile = ({ partyId }) => {
  const party = parties.find(x => x.id === partyId)

  return (
    <Layout>
      <Box gap="xlarge">
        <Heading level="1" size="large">
          {party.name}
        </Heading>
        <DayMessage />
        <Groups />
        <ScheduleAndAddress party={party} />
      </Box>
    </Layout>
  )
}
