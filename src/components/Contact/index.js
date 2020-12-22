import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import { Email } from "@styled-icons/material-outlined/Email"
import NumberFormat from "react-number-format"
import React from "react"
import { Whatsapp } from "styled-icons/boxicons-logos"

const Contact = () => {
  const { site } = useStaticQuery(graphql`
    query ContactInfos {
      site {
        siteMetadata {
          codeWhatsApp
          phone
          email
        }
      }
    }
  `)
  const Phone = site.siteMetadata.phone.split("55") //return array with 2 positions
  const EmailContact = site.siteMetadata.email
  return (
    <S.Container>
      <a
        className="contacts"
        href={`https://wa.me/message/${site.siteMetadata.codeWhatsApp}`}
        rel="noopener noreferrer"
        title={`WhatsApp ${Phone[1]}`}
        target="_blank"
      >
        <Whatsapp />
        <NumberFormat
          displayType={"text"}
          value={Phone[1]}
          format="(##) #####-####"
        />
      </a>
      <a
        className="contacts"
        href={`mailto:${EmailContact}`}
        rel="noopener noreferrer"
        title={`WhatsApp ${EmailContact}`}
        target="_blank"
      >
        <Email />
        <span>{EmailContact}</span>
      </a>
    </S.Container>
  )
}

export default Contact
