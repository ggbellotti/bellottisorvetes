import * as S from "./styles"

import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import NumericInput from "react-numeric-input"

const Infos = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query InfosProduct {
      markdownRemark(
        fileAbsolutePath: { regex: "/sabores/" }
        frontmatter: { active: { eq: "yes" } }
      ) {
        id
        frontmatter {
          name
          description
          packs
        }
      }
    }
  `)
  const InfosProduct = markdownRemark.frontmatter
  const options = InfosProduct.packs
  const [selectedOption, setSelectedOption] = useState(options[0])
  return (
    <S.Container>
      <S.InfoProduct>
        <h1>{InfosProduct.name}</h1>
        <p>{InfosProduct.description}</p>
        <S.Pack>
          <span>Selecione a embalagem</span>
          <select
            name="packs"
            id="packs"
            defaultValue={options[0][1]}
            onBlur={e => setSelectedOption(e.target.value)}
            onChange={e => setSelectedOption(e.target.value)}
          >
            {options.map(product => (
              <option key={product[0]} value={product}>
                {product[0]}
              </option>
            ))}
          </select>
        </S.Pack>
        <S.Quantity>
          <span>Quantidade</span>
          <NumericInput min={1} max={99} value={1} />
        </S.Quantity>
        <S.Price>
          <span>
            R$ {selectedOption.toString().split("litros,", 2)[1]}&nbsp;
          </span>
          <span>/Uni</span>
        </S.Price>
      </S.InfoProduct>
    </S.Container>
  )
}

export default Infos
