import React from "react"

import { useRoutes } from "react-router-dom"
import Layout from "./Components/Containers/Layout"
import CV from "./Pages/CV"
import Home from "./Pages/Home"

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cv", element: <CV /> },
  ])

  return <Layout>{routes}</Layout>
}

export default App
