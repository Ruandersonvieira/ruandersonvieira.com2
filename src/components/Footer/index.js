import React from "react"
import {
  FooterContainer,
  FooterText,
  FooterTextBold,
  FooterLinkBold,
} from "./styles"

export default function Footer() {
  return (
    <FooterContainer className="container-fluid">
      <FooterText>
        © 2017 - {new Date().getFullYear()} by
        <FooterTextBold> {` `}Ruanderson Vieira </FooterTextBold>, Built with{" "}
        <FooterLinkBold href="https://www.gatsbyjs.org">Gatsby</FooterLinkBold>
      </FooterText>
    </FooterContainer>
  )
}
