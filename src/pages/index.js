import { HeaderBannerHome } from "../components/HeaderBanner"
import Highlight from "../components/Highlight"
import HighlightOffers from "../components/HighlightOffers"
import Layout from "../components/Layout"
import ListProducts from "../components/ListProducts"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Encomende seu sorvete online"
      description="Desde 1996 oferecendo a melhor qualidade. Entre no nosso site e faça sua encomenda!"
    />
    <HeaderBannerHome />
    <ListProducts />
    <HighlightOffers />
    <Highlight />
  </Layout>
)

export default IndexPage
