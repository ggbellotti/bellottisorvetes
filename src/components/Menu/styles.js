import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.nav`
  width: ${({ open }) => (open ? "100%" : "60px")};
  position: fixed;
  z-index: 99;
  ${media.lessThan("medium")`
    width: 100%;
  `}
`
export const Wrapper = styled.div`
  height: calc(100vh - 50px);
  min-height: 300px;
  width: 60px;
  background-color: var(--main-color);
  padding: 25px 0;
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.lessThan("medium")`
    width: calc(100% - 50px);
    height: 60px;
    min-height: 30px;
    flex-direction: row;
    padding: 10px 25px;
    align-items: center;
    flex-direction: row-reverse;
  `}
  @media (max-height: 350px) {
    min-height: auto;
  }
`
export const LogoImg = styled.div`
  transition: all 0.25s;
  width: 60px;
  opacity: ${({ open }) => (open ? "0" : "1")};
  ${media.lessThan("medium")`
    opacity: 1;
  `}
`
export const LogoImgMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 99;
  width: 90px;
  ${media.lessThan("medium")`
    display: none;
  `}
`
export const LinkWhatsApp = styled.a`
  display: none;
  background-color: var(--third-color);
  padding: 10px;
  color: var(--main-color);
  font-size: 1.5rem;
  ${media.lessThan("medium")`
    display: block;
  `}
`
export const SocialLinksMenu = styled.div`
  transition: all 0.25s;
  opacity: ${({ open }) => (open ? "0" : "1")};
  ${media.lessThan("medium")`
    display: none;
  `}
  @media (max-height: 350px) {
    display: none;
  }
`
export const BurguerLine = styled.span`
  width: 30px;
  display: block;
  height: 2px;
  background-color: #fff;
  margin-bottom: 6px;
  transition: all var(--animations-time);
  &:last-of-type {
    margin-bottom: 0;
  }
`
export const Burguer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  transition: all var(--animations-time);
  margin-top: -15px;
  width: 60px;
  height: 20px;
  ${media.lessThan("medium")`
    margin-top: 0;
    align-items: baseline;
    width: 30px;
  `}
  ${BurguerLine} {
    &:nth-child(1) {
      transform: rotate(${({ open }) => (open ? "50deg" : "0")});
      margin-top: ${({ open }) => (open ? "8px" : "")};
    }
    &:nth-child(2) {
      transform: rotate(${({ open }) => (open ? "-50deg" : "0")});
      margin-top: ${({ open }) => (open ? "-8px" : "0")};
    }
    &:nth-child(3) {
      transform: translateY(${({ open }) => (open ? "-10px" : "0")});
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
  }
`
export const Menu = styled.div`
  height: 100vh;
  width: calc(100% - 60px);
  display: flex;
  background-color: var(--main-color);
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.35s ease;
  transform: translateX(${({ open }) => (open ? "0" : "-120%")});
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: 98;
  overflow: auto;
  ${media.lessThan("medium")`
    width: 100%;
    transition: all 0.25s ease;
    transform: none;
    height: ${({ open }) => (open ? "calc(100vh - 80px)" : "0")};
    position: relative;
    align-items: center;
    /* transform: ${({ open }) =>
      open ? "translateY(0) " : "translateY(-100%)"}; */
  `}
  @media (max-height: 600px) {
    align-items: baseline;
  }
`
export const MenuList = styled.ul`
  list-style: none;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.lessThan("medium")`
    height: 575px;
    margin-top: -50px;
  `}
  @media (max-height: 500px) {
    height: 575px;
  }
`
export const MenuItems = styled.li`
  margin-bottom: 45px;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${media.lessThan("medium")`
    &:last-of-type {
      margin-bottom: 35px;
    }
  `}
`
export const MenuItemsLinks = styled(AniLink)`
  font-size: 1.75rem;
  color: #fff;
  background-color: transparent;
  padding: 5px;
  &:hover {
    background-color: var(--fourth-color);
  }
`
