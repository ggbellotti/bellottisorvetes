import * as S from "./styles"

import GlobalStyle from "../Global/styles"
import Menu from "../Menu"
import React from "react"

const Layout = () => {
  return (
    <S.Container>
      <GlobalStyle />
      <Menu />
    </S.Container>
  )
}

export default Layout
