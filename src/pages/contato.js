import { HeaderBannerContact } from "../components/HeaderBanner"
import Layout from "../components/Layout"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Entre em contato"
      description="Está com dúvidas? Entre em contato conosco. Desde já agradecemos a preferência."
    />
    <HeaderBannerContact />
  </Layout>
)

export default IndexPage
