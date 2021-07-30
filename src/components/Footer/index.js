import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Logo from "../Logo"
import React from "react"
import downloadFile from "../../../static/lista-de-sabores.pdf"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query deliveryIfood {
      site {
        siteMetadata {
          deliveryIfood
          codeWhatsApp
          instagramURL
          poweredBy
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
          <S.Link cover bg="#2B1500" to="/blog/" title="Blog">
            <S.SubTitle>Blog</S.SubTitle>
          </S.Link>
          <S.Link cover bg="#2B1500" to="/sobre-nos/" title="Sobre nós">
            <S.SubTitle>Sobre nós</S.SubTitle>
          </S.Link>
          {/* <S.Link
            cover
            bg="#2B1500"
            to="/lista-de-sabores/"
            title="Lista de sabores"
          >
            <S.SubTitle>Lista de sabores</S.SubTitle>
          </S.Link> */}
          <S.Link cover bg="#2B1500" to="/embalagens/" title="Embalagens">
            <S.SubTitle>Embalagens</S.SubTitle>
          </S.Link>
        </S.Column>
        <S.Column>
          <S.Title>SAC</S.Title>
          <S.Link cover bg="#2B1500" to="/contato/" title="Contato">
            <S.SubTitle>Contato</S.SubTitle>
          </S.Link>
          <S.Link cover bg="#2B1500" to="/contato/" title="Dúvidas gerais">
            <S.SubTitle>Dúvidas gerais</S.SubTitle>
          </S.Link>
          <a
            className="deliveryIfood"
            target="_blank"
            href={downloadFile}
            rel="noopener noreferrer"
          >
            <S.SubTitle>Baixar lista de sabores</S.SubTitle>
          </a>
        </S.Column>
        <S.Column>
          <S.Title>Social</S.Title>
          <a
            href={site.siteMetadata.instagramURL}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <S.SubTitle>Instagram</S.SubTitle>
          </a>
          <a
            href={`https://wa.me/message/${site.siteMetadata.codeWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <S.SubTitle>WhatsApp</S.SubTitle>
          </a>
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
        href={site.siteMetadata.poweredBy}
        rel="noopener noreferrer"
      >
        Feito por Guilherme Bellotti
      </a>
    </S.Container>
  )
}

export default Footer
