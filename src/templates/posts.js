import * as S from "./styles"

import Layout from "../components/Layout"
import React from "react"
// import SEO from "../components/seo"
import { graphql } from "gatsby"

const WorkPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <S.GlobalStyle />
      <div
        className="publication"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </Layout>
  )
}
export const query = graphql`
  query Post($slug: String!) {
    site {
      siteMetadata {
        siteURL
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
      }
      html
    }
  }
`
export default WorkPost
