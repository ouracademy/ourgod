import React, { useState } from "react"
import { Helmet } from "react-helmet"
import {
  Heading,
  Box,
  Grommet,
  Button,
  ResponsiveContext,
  Layer,
  Text,
  grommet as theme
} from "grommet"
import { Menu as MenuIcon, Close } from "grommet-icons"
import { navigate, Link } from "@reach/router"

const Container = ({ children }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box align="center" pad="small">
        <Box width={size !== "small" ? "75vw" : "full"}>{children}</Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

const links = [
  {
    label: "Registrate",
    href: "/signup"
  },
  {
    label: "Ingresa",
    href: "/login",
    primary: true
  }
]

const Nav = ({ title }) => (
  <Box as="header" direction="row" align="center" justify="between">
    <Link to="/" style={{ textDecoration: "none" }}>
      <Heading level="2">{title}</Heading>
    </Link>

    <div>
      <ResponsiveContext.Consumer>
        {size => (size === "small" ? <MobileMenu /> : <DesktopNavButtons />)}
      </ResponsiveContext.Consumer>
    </div>
  </Box>
)

const MobileMenu = () => {
  const [showLayer, setShowLayer] = useState(false)

  return (
    <Box pad="small" fill align="center" justify="center">
      <MenuIcon color="plain" onClick={() => setShowLayer(true)} />
      {showLayer && (
        <Layer full>
          <Box fill background="light-1" pad="large">
            <Box align="end">
              <Close onClick={() => setShowLayer(false)} />
            </Box>
            <Box
              fill
              gap="xlarge"
              align="center"
              justify="center"
              pad={{ bottom: "large" }}
            >
              {links.map(link => (
                <Text
                  key={link.label}
                  size="xxlarge"
                  onClick={() => {
                    navigate(link.href)
                  }}
                >
                  {link.label}
                </Text>
              ))}
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  )
}

const DesktopNavButtons = () => (
  <Box direction="row" align="center" gap="xsmall">
    {links.map(({ href, label, ...rest }) => (
      <Link key={href} to={href}>
        <Button label={label} {...rest} />
      </Link>
    ))}
  </Box>
)

const meta = {
  title: "OurGod",
  description: "",
  image: ""
}

export const Layout = ({
  children,
  title,
  description,
  image,
  type = "website"
}) => (
  <Grommet theme={theme}>
    <React.Fragment>
      <SEO
        title={title ? `${title} - ${meta.title}` : meta.title}
        description={description || meta.description}
        type={type}
        image={image || meta.image}
      />
      <Container>
        <Nav title={meta.title} />
        {children}
      </Container>
    </React.Fragment>
  </Grommet>
)

const SEO = ({ title, description, type, image }) => (
  <Helmet>
    <html lang="es" />
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Twitter Card data  */}
    <meta name="twitter:card" value="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {/* Open Graph data */}
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>
    <script>
      {`(adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-7004727473065253",
        enable_page_level_ads: true
      });`}
    </script>*/}
  </Helmet>
)
