import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  background-color: #080a52;
  height: 20%;
  width: 20%;
  margin: 15px;
  border-radius: 20px;
`

export const Img = styled.img`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 100%;
  width: 100%;
`

export const CardContainer = styled.div`
  margin: 10px;
`

export const Title = styled.h4`
  color: #eb2188;
  line-height: 24px;
`

export const Description = styled.h6`
  color: #fff;
  line-height: 18px;
`

export const Badge = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 50px;
  border-radius: 6px;
  color: #eb2188;
  border: 1px solid #eb2188;
`

export const BadgeText = styled.h6`
  /* color: #eb2188; */
`

export const ViewBottom = styled(Link)`
  border-radius: 6px;
  color: #eb2188;
  display: flex;
  justify-content: center;
`

export const ViewBottomText = styled.h5`
  color: #eb2188;
`
