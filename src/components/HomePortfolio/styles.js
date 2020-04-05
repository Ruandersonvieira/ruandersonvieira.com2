import styled from "styled-components"
import device from "../../assets/styles/deviceSize"

export const Container = styled.section`
  @media ${device.mobileL} {
    padding: 100px 50px;
  }

  @media ${device.tablet} {
    padding: 100px 100px;
  }
`
export const TitleDiv = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`

export const Title = styled.h1`
  color: #080a52;
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

  @media ${device.mobileL} {
    /* flex-direction: row; */
    /* justify-self: center; */
    /* padding: 100px 50px; */
  }

  @media ${device.tablet} {
    /* flex-direction: row; */
    /* padding: 100px 100px; */
  }
`
