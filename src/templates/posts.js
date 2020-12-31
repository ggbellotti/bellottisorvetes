import "keen-slider/keen-slider.min.css"

import * as S from "./styles"

import React, { useState } from "react"

import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft"
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
import Layout from "../components/Layout"
import NumericInput from "react-numeric-input"
// import SEO from "../components/seo"
import { graphql } from "gatsby"
import { rand } from "@jsweb/randkey"
import { useKeenSlider } from "keen-slider/react"

const WorkPost = ({ data }) => {
  const post = data.markdownRemark

  //INFOS PRODUCTS
  const InfosProduct = post.frontmatter
  const phone = data.site.siteMetadata.phone
  const options = InfosProduct.packs
  const [selectedOption, setSelectedOption] = useState(options[0])
  const message = "Gostaria de fazer essa encomenda"

  //GET YEAR AND GENERATE ORDER NUMBER
  const today = new Date()
  const year = today.getFullYear()
  const orderNumber = year + "-" + rand(8, 6)
  const [quantity, setQuantity] = useState(1)
  const value = parseFloat(
    selectedOption.toString().split("litros,", 2)[1].replace(",", ".")
  )

  //TOTAL ORDER
  const qty = quantity
  const total = value * qty
  const totalPrice = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })

  //SLIDER
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
  const ImagesProduct = post.frontmatter.images

  return (
    <Layout>
      <S.GlobalStyle />
      <S.Container>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {ImagesProduct.map(({ id, childImageSharp: { fluid } }) => (
              <div key={id} className="keen-slider__slide">
                <S.Image fluid={fluid} />
              </div>
            ))}
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
              <span
                onClick={e => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
                onKeyDown={e => e.stopPropagation() || slider.prev()}
                role="button"
              >
                <ArrowRight />
              </span>
            </div>
          )}
        </div>
        <S.InfoProduct>
          <h1>{InfosProduct.name}</h1>
          <p>{InfosProduct.description}</p>
          <S.Pack>
            <span>Selecione a embalagem</span>
            <select
              name="packs"
              id="packs"
              defaultValue={options[0][1]}
              onBlur={e => setSelectedOption(e.target.value)}
              onChange={e => setSelectedOption(e.target.value)}
            >
              {options.map(product => (
                <option key={product[0]} value={product}>
                  {product[0]}
                </option>
              ))}
            </select>
          </S.Pack>
          <S.Quantity>
            <span>Quantidade</span>
            <NumericInput
              min={1}
              max={99}
              type="up-down"
              value={quantity}
              onChange={value => setQuantity(value)}
            />
          </S.Quantity>
          <S.Price>
            <span>
              R$ {selectedOption.toString().split("litros,", 2)[1]}&nbsp;
            </span>
            <span>/Uni</span>
          </S.Price>
          <p className="timeOrder">
            *Lembrando que nossa produção leva de 2 a 3 dias úteis
          </p>

          <S.ButtonPrimary
            href={`https://wa.me/${phone}?text=${message} \uD83E\uDC1B %0a
            %0a*Número do pedido*: ${orderNumber} %0a
            %0a\u2192 *${InfosProduct.name.toUpperCase()}*
            %0a      \`\`\`\u2022 Embalagem de: ${
              selectedOption.toString().split("litros,", 2)[0]
            }litros\`\`\`
            %0a      \`\`\`\u2022 R$ ${
              selectedOption.toString().split("litros,", 2)[1]
            } /uni\`\`\`
            %0a      \`\`\`\u2022 Quantidade: ${quantity}\`\`\`
            %0a*TOTAL: ${totalPrice}*
            %0a%0a \u002A _Lembrando que nossa produção leva de *2 a 3 dias úteis*_`}
            rel="noopener noreferrer"
            target="_blank"
            title="Pedir via WhatsApp"
          >
            Pedir via WhatsApp
          </S.ButtonPrimary>
        </S.InfoProduct>
      </S.Container>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    site {
      siteMetadata {
        siteURL
        phone
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      frontmatter {
        name
        description
        packs
        images {
          id
          childImageSharp {
            fluid(maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      html
    }
  }
`
export default WorkPost
