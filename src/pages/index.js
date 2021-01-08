import { HeaderBannerHome } from "../components/HeaderBanner"
import Layout from "../components/Layout"
import ListProducts from "../components/ListProducts"
import React from "react"

const IndexPage = () => (
  <Layout>
    <HeaderBannerHome />
    <ListProducts />
  </Layout>
)

export default IndexPage
