import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const Container = styled.footer`
  margin-left: 60px;
  overflow: hidden;
  background-color: #371b01;
  .powered {
    font-size: 11px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Titillium Web";
    font-weight: 200;
    display: block;
    text-align: center;
    margin-bottom: 25px;
  }
  .deliveryIfood {
    display: inline-block;
    width: fit-content;
    &::after {
      content: "";
      display: block;
      opacity: 0;
      width: 100%;
      height: 2px;
      bottom: 9px;
      position: relative;
      background-color: white;
      transition: all var(--animations-time);
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`
export const Wrapper = styled.div`
  padding: 70px 30px;
  display: flex;
  justify-content: center;
  color: white;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 35px;
  }
  @media (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`
export const LogoImg = styled.div`
  width: 90px;
  height: auto;
  a {
    display: block !important;
    width: 100% !important;
    &:hover {
      text-decoration: none !important;
      &::after {
        opacity: 0 !important;
      }
    }
  }
`
export const Title = styled.h3`
  font-family: "Titillium Web";
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
`
export const SubTitle = styled.h4`
  font-family: "Titillium Web";
  color: white;
  font-size: 0.875rem;
  font-weight: 200;
  margin-bottom: 10px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
`
export const Link = styled(AniLink)`
  display: inline-block;
  width: fit-content;
  &::after {
    content: "";
    display: block;
    opacity: 0;
    width: 100%;
    height: 2px;
    bottom: 9px;
    position: relative;
    background-color: white;
    transition: all var(--animations-time);
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`
export const Column = styled.div`
  margin: 0 45px;
  display: flex;
  flex-direction: column;
  a {
    display: inline-block;
    width: fit-content;
    &::after {
      content: "";
      display: block;
      opacity: 0;
      width: 100%;
      height: 2px;
      bottom: 9px;
      position: relative;
      background-color: white;
      transition: all var(--animations-time);
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
  &:first-of-type {
    margin-right: 85px;
    margin-left: -25px;
  }
  @media (max-width: 1024px) {
    &:first-of-type {
      margin-right: 25px;
      margin-left: 0;
    }
    margin: 0 25px;
  }
  @media (max-width: 768px) {
    &:first-of-type {
      grid-row-end: 1;
      grid-row-start: 3;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 570px) {
    &:first-of-type {
      margin: 0;
    }
    align-items: center;
    justify-content: center;
  }
`
