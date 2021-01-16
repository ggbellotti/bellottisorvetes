import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Logo from "../Logo"
import React from "react"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query deliveryIfood {
      site {
        siteMetadata {
          deliveryIfood
        }
      }
    }
  `)
  return (
    <S.Container>
      <S.Wrapper>
        <S.Column>
          <S.LogoImg>
            <Logo />
          </S.LogoImg>
        </S.Column>
        <S.Column>
          <S.Title>Institucional</S.Title>
          <S.Link to="/blog/">
            <S.SubTitle>Blog</S.SubTitle>
          </S.Link>
          <S.Link to="/sobre-nos/">
            <S.SubTitle>Sobre nós</S.SubTitle>
          </S.Link>
          <S.Link to="/lista-de-sabores/">
            <S.SubTitle>Lista de sabores</S.SubTitle>
          </S.Link>
        </S.Column>
        <S.Column>
          <S.Title>SAC</S.Title>
          <S.Link to="/contato/">
            <S.SubTitle>Contato</S.SubTitle>
          </S.Link>
          <S.Link to="/contato/">
            <S.SubTitle>Dúvidas gerais</S.SubTitle>
          </S.Link>
        </S.Column>
        <S.Column>
          <S.Title>Social</S.Title>
          <S.Link to="/contato/">
            <S.SubTitle>Instagram</S.SubTitle>
          </S.Link>
          <S.Link to="/contato/">
            <S.SubTitle>WhatsApp</S.SubTitle>
          </S.Link>
        </S.Column>
        <S.Column>
          <S.Title>Delivery</S.Title>
          <a
            className="deliveryIfood"
            target="_blank"
            href={site.siteMetadata.deliveryIfood}
            rel="noopener noreferrer"
          >
            <S.SubTitle>Ifood</S.SubTitle>
          </a>
        </S.Column>
      </S.Wrapper>
      <a
        className="powered"
        target="_blank"
        href="https://www.guilhermebellotti.dev"
        rel="noopener noreferrer"
      >
        Feito por Guilherme Bellotti
      </a>
    </S.Container>
  )
}

export default Footer
