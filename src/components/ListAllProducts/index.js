import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const ListAllProducts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query listAllProducts {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/sabores/" }
          frontmatter: { active: { eq: "yes" } }
        }
        sort: { fields: frontmatter___name, order: ASC }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            active
            name
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)
  const products = allMarkdownRemark.nodes
  return (
    <S.Container>
      <h2>Lista de sabores</h2>
      <h1>Escolha seu sabor favorito</h1>
      <p>
        Selecione seu sabor favorito e faça sua encomenda. Trabalhamos com
        embalagens de 1,5 litros, 5 litros e 10 litros.
      </p>
      <S.ListProducts>
        {products.map(
          ({
            id,
            fields: { slug },
            frontmatter: {
              name,
              image: {
                childImageSharp: { fluid },
              },
            },
          }) => (
            <S.Products cover bg="#2B1500" key={id} to={slug}>
              <S.BackgroundImage fluid={fluid} />
              <S.Overlay />
              <S.Infos>
                <S.Name>{name}</S.Name>
                <S.Icon>
                  <svg
                    width="30"
                    height="8"
                    viewBox="0 0 30 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M28.9939 4.35355C29.1891 4.15829 29.1891 3.84171 28.9939 3.64645L25.8119 0.464466C25.6166 0.269204 25.3 0.269204 25.1048 0.464466C24.9095 0.659728 24.9095 0.976311 25.1048 1.17157L27.9332 4L25.1048 6.82843C24.9095 7.02369 24.9095 7.34027 25.1048 7.53553C25.3 7.7308 25.6166 7.7308 25.8119 7.53553L28.9939 4.35355ZM0.462646 4.5H28.6403V3.5H0.462646V4.5Z" />
                  </svg>
                </S.Icon>
              </S.Infos>
            </S.Products>
          )
        )}
        {/* <S.Products to="/" bg="">
          <S.Overlay />
          <S.Infos>
            <S.Name>Mousse de maracujá com creme de avelã</S.Name>
            <S.Icon>
              <svg
                width="30"
                height="8"
                viewBox="0 0 30 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.9939 4.35355C29.1891 4.15829 29.1891 3.84171 28.9939 3.64645L25.8119 0.464466C25.6166 0.269204 25.3 0.269204 25.1048 0.464466C24.9095 0.659728 24.9095 0.976311 25.1048 1.17157L27.9332 4L25.1048 6.82843C24.9095 7.02369 24.9095 7.34027 25.1048 7.53553C25.3 7.7308 25.6166 7.7308 25.8119 7.53553L28.9939 4.35355ZM0.462646 4.5H28.6403V3.5H0.462646V4.5Z" />
              </svg>
            </S.Icon>
          </S.Infos>
        </S.Products> */}
      </S.ListProducts>
    </S.Container>
  )
}

export default ListAllProducts
