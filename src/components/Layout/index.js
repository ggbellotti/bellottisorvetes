import * as S from "./styles"

import Footer from "../Footer"
import GlobalStyle from "../Global/styles"
import Menu from "../Menu"
import React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"

const Layout = ({ children }) => {
  return (
    <S.Container>
      <GlobalStyle />
      <TransitionPortal level="top">
        <Menu />
      </TransitionPortal>
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Container>
  )
}

export default Layout
