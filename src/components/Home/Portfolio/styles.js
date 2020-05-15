import styled from "styled-components"

export const Container = styled.section`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
`
export const TitleDiv = styled.div`
  padding-bottom: 50px;
`

export const Title = styled.h1`
  color: #353547;
`

export const Cards = styled.section`
  width: 90%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`
