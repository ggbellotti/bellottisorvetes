import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  margin: 75px 0;
`
export const ListProducts = styled.div`
  display: grid;
  margin-top: 45px;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const BackgroundImage = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
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
  position: relative;
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
  height: 50vh;
  min-height: 350px;
  max-height: 500px;
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
      padding: 10px;
      min-height: 20px;
      height: fit-content;
      background-color: var(--main-color);
      width: 100%;
    }
    ${Name} {
      font-size: 1.125rem;
    }
    ${Icon} {
      display: none;
    }
  `}
`
