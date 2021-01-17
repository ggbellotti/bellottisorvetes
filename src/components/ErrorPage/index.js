import * as S from "./styles"

import Lottie from "react-lottie"
import React from "react"
import animationData from "./33800-ice-cream-animation.json"

const ErrorPage = () => {
  const animationError = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.AnimationIcon>
          <Lottie options={animationError} />
        </S.AnimationIcon>
        <S.Title>Página não encontrada :(</S.Title>
        <S.Description>
          Mas não se preocupe,&nbsp;
          <S.Link cover bg="#2B1500" to="/">
            clique aqui para voltar
          </S.Link>
          .
        </S.Description>
      </S.Wrapper>
    </S.Container>
  )
}

export default ErrorPage
