import React from "react"
import { Layout } from "./layout"
import { Box, Image, Heading, Paragraph, Button } from "grommet"
import { LinkNext } from "grommet-icons"
import { Link } from "@reach/router"

const Banner = () => (
  <Box
    pad="large"
    align="center"
    gap="medium"
    direction="row-responsive"
    fill="horizontal"
  >
    <Box basis="auto">
      <Heading size="medium">
        Un lugar que te conecta con nuestro gran amigo Dios
      </Heading>
      <Box direction="row" gap="small" align="center">
        <Heading level="3"> Conectate, Alaba, Sierve </Heading>
      </Box>
    </Box>
  </Box>
)

export default () => (
  <Layout>
    <Banner />
    <Box>
      <Box>
        <Box
          direction="row-responsive"
          gap="small"
          justify="between"
          align="center"
        >
          <Box width="large" pad="medium">
            <Paragraph size="large">Bienvenido a casa! Jesús te ama!</Paragraph>
            <Paragraph>
              La oportunidad que tanto esperabas, para escuchar la palabra de
              nuestro querido amigo Jesús, escuchar alabanzas.
            </Paragraph>

            <Box width="small">
              <Link to="articles">
                <Button
                  reverse
                  label="Empieza ya!"
                  primary
                  icon={<LinkNext />}
                ></Button>
              </Link>
            </Box>
          </Box>
          <Box height="medium" width="large">
            <Image
              fit="contain"
              src="https://scontent.flim1-2.fna.fbcdn.net/v/t1.0-9/79137769_3158429467505064_8394860591914680320_n.jpg?_nc_cat=102&_nc_ohc=jP_Qd-sxd6QAQlRw7l6f9qH6ZyTLN037IM-OvkB50MCyAQ1zj0Ao2RFdQ&_nc_ht=scontent.flim1-2.fna&oh=75ed56c9f143fbef3502e7d6638833b5&oe=5EA7279C"
              alt="Servicios"
            ></Image>
          </Box>
          <Box height="medium" width="large">
            <Image
              fit="contain"
              src="http://caminodevida.com/images/bauti.jpg?crc=466340632"
              alt="Grupos"
            ></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout>
)
