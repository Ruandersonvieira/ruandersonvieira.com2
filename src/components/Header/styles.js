import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #080a52;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const LogoContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

export const LogoImg = styled.img`
  width: 150px;
  height: 150px;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`

export const MenuTitle = styled.h3`
  font-weight: bold;
  padding-left: 30px;
  padding-right: 30px;
`

export const MenuOptions = styled(Link)`
  color: #fff;
  text-decoration: none;
`
