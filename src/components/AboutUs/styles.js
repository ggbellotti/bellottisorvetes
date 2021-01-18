import styled from "styled-components"

export const Container = styled.div`
  margin: 75px 0;
  min-height: 90vh;
`
export const Wrapper = styled.div`
  .publication {
    h2 {
      font-size: 24px;
      font-family: "Playfair Display";
      letter-spacing: 2px;
      text-transform: initial;
    }
    .grid {
      p {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        height: 100%;
        width: 100%;
        gap: 20px;
        margin: 50px 0;
        .gatsby-resp-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`
export const SubTitle = styled.h2``
export const Title = styled.h1``
