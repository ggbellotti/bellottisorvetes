import Img from "gatsby-image"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  position: relative;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 75px;
  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: baseline;
    min-height: calc(100vh - 80px);
    justify-content: center;
    margin-bottom: 25px;
  `}
  &.contact {
    align-items: flex-start;
    margin-bottom: 0;
    ${media.lessThan("medium")`
      justify-content: flex-start;
      min-height: auto;
    `}
    .infos {
      margin-top: 75px;
      ${media.lessThan("medium")`
        margin-top: 25px;
      `}
    }
    ${media.lessThan("medium")`
      .gatsby-image-wrapper {
        position: relative !important;
        max-height: 200px;
      }
    `}
  }
`
export const BannerImg = styled(Img)`
  height: 100vh;
  width: 50%;
  min-width: 600px;
  object-fit: cover;
  object-position: center;
  margin-right: 50px;
  margin-left: -60px;
  @media (max-width: 1100px) {
    min-width: 250px;
  }
  ${media.lessThan("medium")`
    height: 100%;
    width: calc(100% + 40px);
    margin: 0 0 0 -25px;
    position: absolute !important;
    z-index: -1;
  `}
`
export const OverlayImg = styled.div`
  display: none;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(10px);
  width: calc(100% + 40px);
  margin: 0 0 0 -25px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  ${media.lessThan("medium")`
    display: block;
  `}
  ${media.lessThan("small")`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, .65) 50%,
    rgba(255, 255, 255, .65) 100%
  );
  `}
`
export const Infos = styled.div`
  z-index: 2;
  a:first-child {
    margin-right: 50px;
    margin-bottom: 25px;
  }
  ${media.lessThan("small")`
    a:first-child{
      margin-right: 20px;
    }
  `}
`
export const Buttons = styled.div``
export const Title = styled.h1`
  font-size: 3.625rem;
  line-height: 1.3;
  margin-bottom: 45px;
  ${media.lessThan("small")`
    font-size: 3.375rem;
  `}
  @media(max-width: 350px) {
    font-size: 2.375rem;
  }
`
