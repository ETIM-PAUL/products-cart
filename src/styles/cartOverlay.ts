import styled from "styled-components"
import { Overlay } from "./topNav"

export const Attribute = styled.span`
  font-variant-caps: all-small-caps;
  font-weight: 600;
`

export const AttributeButton = styled.button`
  height: 15px;
  width: 32px;
  background-color: #fff;
  border: 1px solid black;
font-size: 9px;
`;

export const ViewBag = styled.button`
  width: 100px;
  height: 30px;
  background-color: #fff;
  color: black;
  border: 1px solid black;
  &:target ${Overlay}{
    display:none;
  }
`
