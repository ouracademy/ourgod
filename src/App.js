import React from "react"
import { Router } from "@reach/router"
import { Home } from "./home"

let Dash = () => <div>Dash</div>

const App = () => (
  <Router>
    <Home path="/" />
    <Dash path="dashboard" />
  </Router>
)

export default App
