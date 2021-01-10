import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const Highlight = props => {
  const { markdownRemark } = useStaticQuery(graphql`
    query contactInfos {
      markdownRemark(
        frontmatter: { active: { eq: "yes" } }
        fileAbsolutePath: { regex: "/contato/" }
      ) {
        frontmatter {
          subtitle
          title
          description
          titleUrl
          url
          colorBg
          colorTexts
          image {
            childImageSharp {
              fluid(maxWidth: 700, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const promo = markdownRemark.frontmatter
  const imagePromo = promo.image.childImageSharp.fluid
  if (!promo.colorBg.includes("#")) {
    promo.colorBg = "#" + promo.colorBg
    alert(promo.colorBg)
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxInfos bg={props.colorBg || promo.colorBg}>
          <S.Infos>
            <S.Subtitle color={props.colorTexts || promo.colorTexts}>
              {props.subtitle || promo.subtitle}
            </S.Subtitle>
            <S.Title color={props.colorTexts || promo.colorTexts}>
              {props.title || promo.title}
            </S.Title>
            <S.Description color={props.colorTexts || promo.colorTexts}>
              {props.description || promo.description}
            </S.Description>
            <S.BtnPrimary
              title={props.titleUrl || promo.titleUrl}
              to={props.url || promo.url}
            />
          </S.Infos>
        </S.BoxInfos>
        <S.Image fluid={props.imagePromo || imagePromo} />
      </S.Wrapper>
    </S.Container>
  )
}

export default Highlight
