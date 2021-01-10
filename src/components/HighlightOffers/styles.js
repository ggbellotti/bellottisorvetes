import { ButtonPrimary, ButtonSecondary } from "../Buttons"

import Img from "gatsby-image"
import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 75px;
  @media (max-width: 1024px) {
    width: calc(100% + 50px);
    margin-left: -25px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Image = styled(Img)`
  max-width: 540px;
  width: 100%;
  height: 500px;
  @media (max-width: 1024px) {
    display: none;
  }
`
export const BoxInfos = styled.div`
  background-color: ${props => props.bg || "var(--main-color)"};
  max-width: 525px;
  padding: 65px 45px;
  margin-left: -50px;
  margin-top: 50px;
  z-index: 2;
  @media (max-width: 1024px) {
    max-width: 450px;
    padding: 50px 20px;
    margin: 0;
  }
  @media (max-width: 575px) {
    max-width: 450px;
    padding: 45px;
    margin: 0;
  }
  @media (max-width: 375px) {
    max-width: 450px;
    padding: 40px 20px;
    margin: 0;
  }
`
export const Subtitle = styled.h2`
  color: ${props => props.color || "#fff"};
`
export const Title = styled.h1`
  color: ${props => props.color || "#fff"};
  max-width: 350px;
`
export const Description = styled.p`
  color: ${props => props.color || "#fff"};
`
export const BtnPrimary = styled(ButtonPrimary)`
  margin-right: 30px;
  @media (max-width: 575px) {
    margin-bottom: 30px;
  }
`
export const BtnSecondary = styled(ButtonSecondary)``
