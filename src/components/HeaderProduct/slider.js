import "keen-slider/keen-slider.min.css"

import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft"
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
import React from "react"
import { useKeenSlider } from "keen-slider/react"

const SliderProduct = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
  const { markdownRemark } = useStaticQuery(graphql`
    query SliderProduct {
      markdownRemark(
        fileAbsolutePath: { regex: "/sabores/" }
        frontmatter: { active: { eq: "yes" } }
      ) {
        frontmatter {
          images {
            id
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
  const ImagesProduct = markdownRemark.frontmatter.images
  return (
    <>
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
    </>
  )
}

export default SliderProduct
