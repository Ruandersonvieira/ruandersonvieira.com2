import styled from "styled-components"
import device from "../../assets/styles/deviceSize"

export const Container = styled.section`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 100px 100px;
`
export const TitleDiv = styled.div``

export const Title = styled.h1`
  color: #353547;
`

export const Cards = styled.section`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */

  width: 90%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`
