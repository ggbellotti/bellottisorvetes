import { ButtonPrimary, ButtonSecondary } from "../Buttons"

import Img from "gatsby-image"
import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 75px;
  @media (max-width: 1024px) {
    width: calc(100% + 50px);
    margin-left: -25px;
  }
  @media (max-width: 570px) {
    margin-bottom: 25px;
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
  height: 600px;
  margin-top: 90px;
  margin-left: -200px;
  z-index: 2;
  @media (max-width: 1366px) {
    margin-left: -40px;
    max-width: 430px;
  }
  @media (max-width: 1280px) {
    z-index: 1;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
export const BoxInfos = styled.div`
  background-color: ${props => props.bg || "var(--main-color)"};
  max-width: 950px;
  width: 100%;
  height: 50vh;
  min-height: 540px;
  padding: 0;
  z-index: 2;
  margin-top: -50px;
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 50px 20px;
    margin: 0;
    height: auto;
    min-height: auto;
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
export const Infos = styled.div`
  padding: 65px 45px;
  max-width: 600px;
  @media (max-width: 1366px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 1024px) {
    padding: 0;
    max-width: 100%;
  }
`
export const Subtitle = styled.h2`
  color: ${props => props.color || "#fff"};
`
export const Title = styled.h1`
  color: ${props => props.color || "#fff"};
  max-width: 350px;
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`
export const Description = styled.p`
  color: ${props => props.color || "#fff"};
`
export const BtnPrimary = styled(ButtonPrimary)`
  margin-right: 30px;
  margin-top: 35px;
  @media (max-width: 575px) {
    margin-bottom: 0;
  }
`
export const BtnSecondary = styled(ButtonSecondary)``
