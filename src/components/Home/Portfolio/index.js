import React from "react"

import { Container, TitleDiv, Title, Cards } from "./styles"
import Card from "../../Card"

export default function HomePortfolio() {
  return (
    <Container className="container-fluid">
      <TitleDiv>
        <Title>Projetos</Title>
      </TitleDiv>
      <Cards>
        <Card
          title={"Projeto 1"}
          description={"Applicativo de teste 1"}
          type={"Mobile"}
          tech={"[REACT, NODE, REACT-NATIVE]"}
          url={"/projects/projeto-1"}
        />
        <Card
          title={"Projeto 2"}
          description={"Applicativo de teste 2"}
          type={"Mobile"}
          tech={"[REACT, NODE, REACT-NATIVE]"}
          url={"/projects/projeto-2"}
        />
        <Card
          title={"Projeto 3"}
          description={"Applicativo de teste 3"}
          type={"Mobile"}
          tech={"[REACT, NODE, REACT-NATIVE]"}
          url={"/projects/projeto-3"}
        />
        <Card
          title={"Projeto 4"}
          description={"Applicativo de teste 4"}
          type={"Mobile"}
          tech={"[REACT, NODE, REACT-NATIVE]"}
          url={"/projects/projeto-4"}
        />
      </Cards>
    </Container>
  )
}
