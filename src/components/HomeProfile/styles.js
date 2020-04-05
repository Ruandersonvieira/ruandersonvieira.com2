import styled from "styled-components"
import device from "../../assets/styles/deviceSize"

export const Container = styled.section`
  flex: 1;
  background-color: #f8f8f8;

  @media ${device.mobileL} {
    flex-direction: column;
    justify-self: center;
    padding: 100px 50px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 100px 100px;
  }
`

export const ContainerImg = styled.div`
  @media ${device.mobileL} {
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    margin-right: 40px;
  }
`

export const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`
export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.h2`
  font-weight: bold;
`

export const Title = styled.h5`
  font-weight: bold;
  padding-bottom: 20px;
`

export const ContainerBiography = styled.div``

export const Biography = styled.p`
  text-indent: 30px;
  line-height: 22px;
`
export const ContainerSkills = styled.div`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-self: center;
`
