import ErrorPage from "../components/ErrorPage"
import Layout from "../components/Layout"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="404: Página não encontrada"
      description="Desde 1996 oferecendo a melhor qualidade. Entre no nosso site e faça sua encomenda!"
    />
    <ErrorPage />
  </Layout>
)

export default IndexPage
