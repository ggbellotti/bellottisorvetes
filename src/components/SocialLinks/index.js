import * as S from "./styles"

import React from "react"
import links from "./content"

const SocialLinks = () => {
  return (
    <S.Container>
      <S.Social>
        {links.map((link, i) => (
          <S.Links
            key={i}
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </S.Links>
        ))}
      </S.Social>
    </S.Container>
  )
}

export default SocialLinks
