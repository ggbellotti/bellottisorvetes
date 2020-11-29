import * as S from "./styles"

import React, { useEffect, useState } from "react"

import Logo from "../Logo"
import SocialLinks from "../SocialLinks"
import links from "./content"

const Menu = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle("showMenu", open)
  }, [open])
  return (
    <S.Container>
      <S.Wrapper>
        <S.Burguer open={open} onClick={() => setOpen(!open)}>
          <S.BurguerLine />
          <S.BurguerLine />
          <S.BurguerLine />
        </S.Burguer>
        <S.LogoImg open={open}>
          <Logo />
        </S.LogoImg>
        <S.SocialLinksMenu open={open}>
          <SocialLinks />
        </S.SocialLinksMenu>
      </S.Wrapper>
      <S.Menu open={open}>
        <S.LogoImgMenu>
          <Logo />
        </S.LogoImgMenu>
        <S.MenuList>
          {links.map((link, i) => (
            <S.MenuItems key={i}>
              <S.MenuItemsLinks to={link.url}>{link.label}</S.MenuItemsLinks>
            </S.MenuItems>
          ))}
        </S.MenuList>
      </S.Menu>
    </S.Container>
  )
}

export default Menu
