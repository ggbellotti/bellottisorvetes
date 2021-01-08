import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 40px;
  .navigation-wrapper {
    ${media.lessThan("medium")`
      padding-left: 10px;
    `}
    @media(max-width: 575px) {
      padding-left: 0;
      margin-left: -25px;
    }
  }
  .keen-slider {
    cursor: grab;
    width: calc(100% + 40px);
    margin-left: -5px;
    height: 100%;
    .keen-slider__slide:first-of-type {
      padding-left: 25px;
    }
    @media (max-width: 1024px) {
      min-width: 350px;
    }
    ${media.lessThan("medium")`
      min-width: 350px;
      height: 50vh;
      width: 125%;
      padding: 0;
    `}
    @media(max-width: 575px) {
      width: 100%;
      min-width: 550px;
      height: 50vh;
    }
  }
  .keen-slider__slide {
    height: 55vh;
    ${media.lessThan("medium")`      
      height: 100%;
    `}
  }
  .prevNext {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    ${media.lessThan("medium")`
      left: -10px;
    `}
    @media(max-width: 575px) {
      display: none;
    }
    span {
      background-color: var(--third-color);
      width: 40px;
      height: 40px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all var(--animations-time);
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
      &:first-of-type {
        margin-bottom: 25px;
        ${media.lessThan("medium")`
          margin-right: 25px;
        `}
      }
      &:hover {
        background-color: var(--fourth-color);
        svg {
          fill: white;
        }
      }
      &[disabled] {
        opacity: 0.5;
        cursor: default;
        &:hover {
          background-color: var(--third-color);
          svg {
            fill: black;
          }
        }
        ${media.lessThan("medium")`
          opacity: 1;
          cursor: pointer;
          &:hover {
            background-color: var(--fourth-color);
            svg {
              fill: white;
            }
          }
        `}
      }
    }
    svg {
      width: 15px;
      height: auto;
    }
  }
`
export const SliderImage = styled.div`
  margin-top: 45px;
  width: 100%;
  position: relative;
  @media (max-width: 1350px) {
    width: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`
export const Wrapper = styled.div``
export const InfosList = styled.div`
  max-width: 475px;
  ${media.lessThan("medium")`
    margin-bottom: 40px;
  `}
`
export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export const BackgroundImage = styled(Img)`
  width: 100%;
  height: 100%;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 3;
  opacity: 0;
  transition: all var(--animations-time);
`
export const Infos = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  height: 100%;
  width: calc(100% - 50px);
  z-index: 2;
  height: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all var(--animations-time);
`
export const Name = styled.div`
  color: white;
  font-size: 1.375rem;
  text-align: center;
  line-height: 1.1;
`
export const Icon = styled.div`
  margin-top: 5px;
  svg {
    fill: white;
  }
`
export const Products = styled(AniLink)`
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${props => props.bg || "var(--third-color)"};
  position: relative;
  &:hover {
    ${Overlay} {
      z-index: 1;
      opacity: 1;
    }
    ${Infos} {
      opacity: 1;
    }
  }
  ${media.lessThan("medium")`
    display: flex;
    align-items: flex-end;
    ${Overlay}{
      display: none;
    }
    ${Infos} {
      opacity: 1;
      bottom: 0;
      top: auto;
      padding: 10px;
      min-height: 20px;
      height: fit-content;
      background-color: var(--main-color);
      width: calc(100% - 20px);;
    }
    ${Name} {
      font-size: 1.125rem;
    }
    ${Icon} {
      display: none;
    }
  `}
`
