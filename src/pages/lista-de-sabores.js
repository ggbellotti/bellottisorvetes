import { ButtonPrimary } from "../components/Buttons"
import Layout from "../components/Layout"
// import ListAllProducts from "../components/ListAllProducts"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO
      title="Lista de sabores"
      description="Confira todos os nossos sabores disponíveis para encomenda. Nossos pedidos são realizados via WhatsApp"
    />
    <ListAllProducts /> */}
    <SEO
      title="Página desativada"
      description="Confira todos os nossos sabores disponíveis para encomenda. Nossos pedidos são realizados via WhatsApp"
    />
    <div
      style={{
        height: "calc(100vh - 289px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "25px" }}>
        Página desativada temporariamente
      </h1>
      <ButtonPrimary to="/" title="Voltar a home" />
    </div>
    {/* <ListAllProducts /> */}
  </Layout>
)

export default IndexPage
