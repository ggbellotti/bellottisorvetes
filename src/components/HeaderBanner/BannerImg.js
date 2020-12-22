import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const BannerImg = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BannerHome {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/bannerHome/" }
          frontmatter: { active: { eq: "yes" } }
        }
        limit: 1
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
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
      }
    }
  `)
  const Banner =
    allMarkdownRemark.edges[0].node.frontmatter.image.childImageSharp.fluid
  return <S.BannerImg fluid={Banner} />
}

export default BannerImg
