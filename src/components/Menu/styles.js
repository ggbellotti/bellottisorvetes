import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const Container = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 99;
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
`
export const LogoImg = styled.div`
  transition: all 0.25s;
  opacity: ${({ open }) => (open ? "0" : "1")};
`
export const LogoImgMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 99;
  width: 90px;
`
export const SocialLinksMenu = styled.div`
  transition: all 0.25s;
  opacity: ${({ open }) => (open ? "0" : "1")};
`
export const BurguerLine = styled.span`
  width: calc(100% - 34px);
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
  padding: 1px;
  cursor: pointer;
  transition: all var(--animations-time);
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
  transition: all 0.55s ease;
  transform: translateX(${({ open }) => (open ? "0" : "-120%")});
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: 98;
`
export const MenuList = styled.ul`
  list-style: none;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MenuItems = styled.li`
  margin-bottom: 45px;
  &:last-of-type {
    margin-bottom: 0;
  }
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
