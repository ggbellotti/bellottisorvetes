import { HeaderBannerHome } from "../components/HeaderBanner"
import Highlight from "../components/Highlight"
import HighlightOffers from "../components/HighlightOffers"
import Layout from "../components/Layout"
import ListProducts from "../components/ListProducts"
import React from "react"

const IndexPage = () => (
  <Layout>
    <HeaderBannerHome />
    <ListProducts />
    <HighlightOffers />
    <Highlight />
  </Layout>
)

export default IndexPage
