import Layout from "../components/Layout"
import Packs from "../components/Packs"
import React from "react"
import SEO from "../components/seo"

const EmbalagensPage = () => (
  <Layout>
    <SEO
      title="Embalagens"
      description="Confira todos os nossos sabores e embalagens disponíveis para encomenda. Nossos pedidos são realizados via WhatsApp"
    />
    <Packs />
  </Layout>
)

export default EmbalagensPage
