import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Social = styled.div`
  display: flex;
  flex-direction: column;
`
export const Links = styled.a`
  color: #fff;
  margin-bottom: 15px;
  text-align: center;
  margin-left: -4px;
  svg {
    width: 22px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
