import React from "react"
import {
  HeaderContainer,
  LogoContainer,
  LogoImg,
  MenuContainer,
  MenuTitle,
  MenuOptions,
} from "./styles"
import Logo from "../../assets/images/logo.png"

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <LogoImg src={Logo} />
    </LogoContainer>
    <MenuContainer>
      <MenuTitle>
        <MenuOptions to='/'>Home</MenuOptions>
      </MenuTitle>
      <MenuTitle>
        <MenuOptions to='/profile'>Perfil</MenuOptions>
      </MenuTitle>
      <MenuTitle>
        <MenuOptions to='/projects'>Projetos</MenuOptions>
      </MenuTitle>
      <MenuTitle>
        <MenuOptions to='/blog'>Blog</MenuOptions>
      </MenuTitle>
    </MenuContainer>
  </HeaderContainer>
)

export default Header
