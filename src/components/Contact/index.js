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
      <S.Infos className="infos">
        <h2>Contato</h2>
        <h1>Está com alguma dúvida?</h1>
        <p>
          Entre em contato conosco pelo WhatsApp ou pelo nosso e-mail. Teremos o
          maior prazer em te ajudar :)
        </p>
        <a
          className="contacts"
          href={`https://wa.me/message/${site.siteMetadata.codeWhatsApp}`}
          rel="noopener noreferrer"
          title={`WhatsApp: ${Phone[1]}`}
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
          title={`E-mail de contato: ${EmailContact}`}
          target="_blank"
        >
          <Email />
          <span>{EmailContact}</span>
        </a>
      </S.Infos>
    </S.Container>
  )
}

export default Contact
