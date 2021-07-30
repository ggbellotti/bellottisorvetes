import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 50px;
  .contacts {
    display: flex;
    align-items: center;
    color: #000;
    margin-bottom: 15px !important;
    svg {
      height: auto;
      width: 22px;
      margin-right: 8px;
    }
  }
`
export const Infos = styled.div`
  z-index: 2;
  a {
    max-width: max-content;
  }
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
