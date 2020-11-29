import { graphql, useStaticQuery } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import React from "react"

const Logo = () => {
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-bellotti-sorvetes.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <AniLink to="/">
      <Img fluid={logo.file.childImageSharp.fluid} />
    </AniLink>
  )
}

export default Logo
