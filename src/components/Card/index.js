import React from "react"
import {
  Container,
  CardContainer,
  Img,
  Title,
  Description,
  Badge,
  BadgeText,
  ViewBottom,
  ViewBottomText,
} from "./styles"

export default function Card({ title, description, type, tech, url }) {
  return (
    <Container>
      <Img src="https://carloslevir.com/wp-content/uploads/2019/12/Group-25-1024x576.png" />
      <CardContainer>
        <Title>{title}</Title>
        {/* <Badge>
          <BadgeText>{type}</BadgeText>
        </Badge> */}
        <Description>{description}</Description>
        <ViewBottom to={url}>
          <ViewBottomText>Ver Mais</ViewBottomText>
        </ViewBottom>
      </CardContainer>
    </Container>
  )
}
