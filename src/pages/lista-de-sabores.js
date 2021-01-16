import Layout from "../components/Layout"
import ListAllProducts from "../components/ListAllProducts"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Lista de sabores"
      description="Confira todos os nossos sabores disponíveis para encomenda. Nossos pedidos são realizados via WhatsApp"
    />
    <ListAllProducts />
  </Layout>
)

export default IndexPage
