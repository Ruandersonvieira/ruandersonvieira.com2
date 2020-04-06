import React from "react"

import { Container, Title, Date, Description } from "./styles"

export default function BlogCard({ blogTitle, blogDate, blogDescription }) {
  return (
    <Container>
      <Title>{blogTitle}</Title>
      <Date>{blogDate}</Date>
      <Description>{blogDescription}</Description>
    </Container>
  )
}
