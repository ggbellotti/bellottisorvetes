import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  min-height: 400px;
  width: 100%;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const AnimationIcon = styled.div`
  height: 350px;
  width: 350px;
  svg {
    max-width: 500px;
    max-height: 500px;
  }
`
export const Title = styled.h1`
  margin-top: 50px;
`
export const Description = styled.p``
export const Link = styled(AniLink)`
  background-color: var(--five-color);
  color: white;
`
