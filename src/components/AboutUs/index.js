import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const AboutUs = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query AboutUs {
      markdownRemark(
        fileAbsolutePath: { regex: "/contato/" }
        frontmatter: { active: { eq: "yes" } }
      ) {
        html
        frontmatter {
          subtitle
          title
        }
      }
    }
  `)
  const aboutUs = markdownRemark.frontmatter
  return (
    <S.Container>
      <S.Wrapper>
        <S.SubTitle>{aboutUs.subtitle}</S.SubTitle>
        <div
          className="publication"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        ></div>
      </S.Wrapper>
    </S.Container>
  )
}

export default AboutUs
