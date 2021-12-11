import React, { ReactElement } from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Nav from "../components/nav"

interface Props {}

function Index(_props: Props): ReactElement {
  return (
    <Layout>
      <Nav logo="test" navItems={["test", "test"]} />
      <Hero />
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </Layout>
  )
}

export default Index
