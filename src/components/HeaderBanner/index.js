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
              <ButtonPrimary to="/sabores/" title="Ver sabores" />
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
          <S.Infos className="infos">
            <h2>Contato</h2>
            <h1>Está com alguma dúvida?</h1>
            <p>
              Entre em contato conosco pelo WhatsApp ou pelo nosso e-mail.
              Teremos o maior prazer em te ajudar :)
            </p>
            <Contact />
          </S.Infos>
        </S.Wrapper>
      </S.Container>
    )
  }
}

export { HeaderBannerHome, HeaderBannerContact }
