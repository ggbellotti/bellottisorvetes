import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import { Instagram } from "@styled-icons/boxicons-logos/Instagram"
import React from "react"
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"

const Socials = () => {
  const { site } = useStaticQuery(graphql`
    query codeWhatsappSocial {
      site {
        siteMetadata {
          codeWhatsApp
          instagramURL
        }
      }
    }
  `)
  const links = [
    {
      label: <Instagram alt="Instagram" />,
      title: "Instagram",
      url: site.siteMetadata.instagramURL,
    },
    {
      label: <Whatsapp alt="WhatsApp" />,
      title: "WhatsApp",
      url: `https://wa.me/message/${site.siteMetadata.codeWhatsApp}`,
    },
  ]
  return (
    <>
      {links.map((link, i) => (
        <S.Links
          key={i}
          href={link.url}
          rel="noopener noreferrer"
          target="_blank"
          title={link.title}
        >
          {link.label}
        </S.Links>
      ))}
    </>
  )
}

export default Socials
