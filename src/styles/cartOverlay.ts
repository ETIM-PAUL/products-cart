import styled from "styled-components"

export const CartOverlayContainer = styled.div`
width:90%;
margin:auto;
background-color:#fff;
padding-top: 10px;
`
export const CartAttributes = styled.div`
display: flex;
gap: 3px;
width: 20px;
`

export const Attribute = styled.span`
  font-variant-caps: all-small-caps;
  font-weight: 600;
`
export const TotalAndButton = styled.div`
display: grid;
margin-bottom: 30px;
`
export const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
`
export const TotalDiv = styled.div`
display: flex;
justify-content: space-between;
font-size: 15px;
`
export const AttributeButton = styled.button`
  height: 15px;
  width: 37px;
  background-color: #fff;
  border: 1px solid black;
font-size: 9px;
`;

export const AttributeSwatch = styled.button`
height: 10px;
width: 20px;
border: 1px solid black;
`

export const CartOverlaySplit = styled.div`
background-color: #fff;
position: relative;
margin-top: 11px;
`
export const CartOverlayBanner = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
height: 130px;
overflow:auto;
`
export const ItemsCart = styled.div`
height: 130px;
width: 100%;
overflow: auto;
`

export const CartDiv = styled.div`
height: 380px;
width: 100%;
overflow: auto;
`

export const CartOverlayImage = styled.div`
display: flex;
gap: 4px;
position: absolute;
bottom: 15%;
right: 6%;
`
export const OverlaySide = styled.div`
display: flex;
gap: 5px;
`
export const ItemQuantityChange = styled.div`
margin-top: 13px;
line-height: 24px;
`
export const Button = styled.button`
width: 25px;
height: 20px;
background-color: #fff;
border: 1px solid black;
cursor: pointer;
&:hover{
background-color: gainsboro;
}
`
export const SecondButton = styled.button`
width: 100px;
height: 30px;
background-color: green;
color: white;
border: none;
cursor:pointer;
`
export const ViewBag = styled.button`
  width: 100px;
  height: 30px;
  background-color: #fff;
  color: black;
  border: 1px solid black;
  cursor:pointer;
  &:hover{
    background-color: gainsboro;
    }
`
