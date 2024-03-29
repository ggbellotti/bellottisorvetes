import "keen-slider/keen-slider.min.css"

import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft"
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
import React from "react"
import { useKeenSlider } from "keen-slider/react"

const ListPacks = props => {
  var slidesPerView = 5 //only numbers
  // // Solve bug with arrows slider
  // if (window.innerWidth <= "1280") {
  //   slidesPerView = 3
  // }
  // if (window.innerWidth <= "575") {
  //   slidesPerView = 2
  // }

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: 5,
    spacing: 15,
    mode: "free",
    breakpoints: {
      "(max-width: 1280px)": {
        slidesPerView: 3,
      },
      "(max-width: 768px)": {
        slidesPerView: 3,
        centered: true,
        initial: 1,
        loop: true,
      },
      "(max-width: 575px)": {
        slidesPerView: 2,
        centered: false,
        initial: 0,
        loop: true,
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ListPacks {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/embalagens/" }
          frontmatter: { active: { eq: "yes" } }
        }
        limit: 16
        sort: { fields: frontmatter___relevance, order: ASC }
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
                fluid(maxWidth: 800, quality: 75) {
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
      <S.Wrapper>
        <S.InfosList>
          <h2>{props.subtitle ? props.subtitle : "Produtos disponíveis"}</h2>
          <h1>{props.title ? props.title : "Escolha seu produtos"}</h1>
          <p>
            {props.description
              ? props.description
              : "Escolha seu produto, depois escolha o sabor e faça sua encomenda. Após escolher, você será redirecionado para a página do produto. Após isso, finalize sua encomenda."}
          </p>
        </S.InfosList>
      </S.Wrapper>
      <S.SliderImage>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
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
                <div key={id} className="keen-slider__slide">
                  <S.Products cover bg="#2B1500" to={slug} title={name}>
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
                </div>
              )
            )}
          </div>
        </div>
        {slider && (
          <div className="prevNext">
            <span
              onClick={e => e.stopPropagation() || slider.prev()}
              onKeyDown={e => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
              role="button"
            >
              <ArrowLeft />
            </span>
            {window.innerWidth <= "768" ? (
              <span
                onClick={e => e.stopPropagation() || slider.next()}
                disabled={
                  currentSlide === slider.details().size - slidesPerView + 2
                }
                onKeyDown={e => e.stopPropagation() || slider.prev()}
                role="button"
              >
                <ArrowRight />
              </span>
            ) : (
              <span
                onClick={e => e.stopPropagation() || slider.next()}
                disabled={
                  currentSlide === slider.details().size - slidesPerView
                }
                onKeyDown={e => e.stopPropagation() || slider.prev()}
                role="button"
              >
                <ArrowRight />
              </span>
            )}
          </div>
        )}
      </S.SliderImage>
      <S.ViewMore cover bg="#2B1500" title="Ver tudo" to="/embalagens/" />
    </S.Container>
  )
}

export default ListPacks
