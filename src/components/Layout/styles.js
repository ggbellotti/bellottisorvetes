import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
`
export const Content = styled.main`
  margin-left: 60px;
  padding: 0px 50px;
  ${media.lessThan("medium")`
    padding: 80px 15px 0 15px;
  `}
`
