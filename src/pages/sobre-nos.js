import AboutUs from "../components/AboutUs"
import Layout from "../components/Layout"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Sobre nós"
      description="Como surgiu a Bellotti Sorvetes? Como é fazemos nossos sorvetes? Confira mais detalhes sobre nós."
    />
    <AboutUs />
  </Layout>
)

export default IndexPage
