import * as S from "./styles"

import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Logo from "../Logo"
import SocialLinks from "../SocialLinks"
import downloadFile from "../../../static/lista-de-sabores.pdf"
import links from "./content"

const Menu = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle("showMenu", open)
  }, [open])
  const { site } = useStaticQuery(graphql`
    query codeWhatsapp {
      site {
        siteMetadata {
          codeWhatsApp
        }
      }
    }
  `)
  const WhatsApp = site.siteMetadata.codeWhatsApp
  // const MessageWhatsApp = "Olá tudo bem? Meu nome é ".replace(/ /g, "%20")
  // No WhatsApp Business, o texto padrão é direto no celular e nãa na URL
  return (
    <S.Container open={open}>
      <S.Wrapper>
        <S.Burguer title="Menu" open={open} onClick={() => setOpen(!open)}>
          <S.BurguerLine />
          <S.BurguerLine />
          <S.BurguerLine />
        </S.Burguer>
        <S.LogoImg open={open}>
          <Logo />
        </S.LogoImg>
        <S.SocialLinksMenu open={open}>
          <SocialLinks />
        </S.SocialLinksMenu>
      </S.Wrapper>
      <S.Menu open={open}>
        <S.LogoImgMenu>
          <Logo />
        </S.LogoImgMenu>
        <S.MenuList>
          {links.map((link, i) => (
            <S.MenuItems key={i}>
              <S.MenuItemsLinks
                paintDrip
                hex="#F25B22"
                to={link.url}
                title={link.label}
              >
                {link.label}
              </S.MenuItemsLinks>
            </S.MenuItems>
          ))}
          <S.DownloadFile
            className="download-file"
            href={downloadFile}
            download
          >
            Baixar lista de sabores
          </S.DownloadFile>
          <S.LinkWhatsApp
            href={`https://wa.me/message/${WhatsApp}`}
            rel="nofollow noreferrer"
            target="_blank"
          >
            WhatsApp
          </S.LinkWhatsApp>
        </S.MenuList>
      </S.Menu>
    </S.Container>
  )
}

export default Menu
