import React from "react"
import { Router } from "@reach/router"
import { Home } from "./home"
import { Profile } from "./profile"

const App = () => (
  <Router>
    <Home path="/" />
    <Profile path=":partyId" />
  </Router>
)

export default App
