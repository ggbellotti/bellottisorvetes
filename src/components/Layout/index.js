import * as S from "./styles"

import Footer from "../Footer"
import GlobalStyle from "../Global/styles"
import Menu from "../Menu"
import React from "react"

const Layout = ({ children }) => {
  return (
    <S.Container>
      <GlobalStyle />
      <Menu />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Container>
  )
}

export default Layout
