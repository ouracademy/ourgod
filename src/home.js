import React from "react"
import { Layout } from "./layout"
import { Box, Heading, Button } from "grommet"
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
      <Box width="small">
        <Link to="/puertaalcielomc">
          <Button
            reverse
            label="Empieza ya!"
            primary
            icon={<LinkNext />}
          ></Button>
        </Link>
      </Box>
    </Box>
  </Box>
)

export const Home = () => (
  <Layout>
    <Banner />
  </Layout>
)
