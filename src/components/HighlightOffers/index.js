import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const HighlightOffers = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query offers {
      markdownRemark(
        frontmatter: { active: { eq: "yes" } }
        fileAbsolutePath: { regex: "/promocoes/" }
      ) {
        frontmatter {
          subtitle
          title
          description
          titlePrimaryBtn
          urlPrimaryBtn
          titleSecondaryBtn
          urlSecondaryBtn
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
        <S.Image fluid={imagePromo} />
        <S.BoxInfos bg={promo.colorBg}>
          <S.Subtitle color={promo.colorTexts}>{promo.subtitle}</S.Subtitle>
          <S.Title color={promo.colorTexts}>{promo.title}</S.Title>
          <S.Description color={promo.colorTexts}>
            {promo.description}
          </S.Description>
          <S.BtnPrimary
            title={promo.titlePrimaryBtn}
            to={promo.urlPrimaryBtn}
          />
          <S.BtnSecondary
            title={promo.titleSecondaryBtn}
            to={promo.urlSecondaryBtn}
          />
        </S.BoxInfos>
      </S.Wrapper>
    </S.Container>
  )
}

export default HighlightOffers
