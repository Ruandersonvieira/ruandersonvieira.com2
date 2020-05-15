import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  background-color: #353547;
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

export const Title = styled.h5`
  color: #eb2188;
  line-height: 24px;
`

export const Description = styled.p`
  color: #fff;
`

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  border-radius: 6px;
  border: 1px solid #eb2188;
`

export const BadgeText = styled.h6`
  color: #eb2188;
  margin-bottom: 0px;
  padding: 3px;
`

export const ViewBottom = styled(Link)`
  border-radius: 6px;
  color: #eb2188;
  display: flex;
  justify-content: center;
`

export const ViewBottomText = styled.h6`
  color: #eb2188;
`
