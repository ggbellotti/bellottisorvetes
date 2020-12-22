import * as S from "./styles"

import Infos from "./infos"
import React from "react"
import Slider from "./slider"

const HeaderProduct = () => {
  return (
    <S.Container>
      <Slider />
      <Infos />
    </S.Container>
  )
}

export default HeaderProduct
