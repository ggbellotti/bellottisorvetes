import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const Container = styled.div``
export const Button = styled(AniLink)`
  padding: 15px 30px;
  text-decoration: none;
  color: #fff;
  background-color: var(--second-color);
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background-color: var(--main-color);
  }
`
export const ButtonPrimary = styled(Button)``
export const ButtonSecondary = styled(Button)`
  background-color: var(--third-color);
  color: #000;
  &:hover {
    background-color: var(--main-color);
    color: #fff;
  }
`
export const ButtonToAction = styled(Button)`
  background-color: var(--fourth-color);
  &:hover {
    background-color: var(--main-color);
    color: #fff;
  }
`
