import * as S from "./styles"

import { ButtonPrimary, ButtonSecondary } from "../Buttons"
import React, { Component } from "react"

import BannerImg from "./BannerImg"
import Contact from "../Contact"

class HeaderBannerHome extends Component {
  render() {
    return (
      <S.Container>
        <S.Wrapper>
          <BannerImg />
          <S.OverlayImg />
          <S.Infos>
            <S.Title>
              Cremoso, <br />
              saboroso <br />e apetitoso
            </S.Title>
            <S.Buttons>
              {/* <ButtonPrimary to="/lista-de-sabores/" title="Ver sabores" /> */}
              <ButtonPrimary to="/embalagens/" title="Comprar" />
              <ButtonSecondary to="/contato/" title="Contato" />
            </S.Buttons>
          </S.Infos>
        </S.Wrapper>
      </S.Container>
    )
  }
}

class HeaderBannerContact extends Component {
  render() {
    return (
      <S.Container>
        <S.Wrapper className="contact">
          <BannerImg />
          <Contact />
        </S.Wrapper>
      </S.Container>
    )
  }
}

export { HeaderBannerHome, HeaderBannerContact }
