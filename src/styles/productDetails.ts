import styled from "styled-components"

export const DetailsContainer = styled.div`
  display:flex;
  justify-content: space-between;
  width: 90%;
  // background: blue;
  margin: 25px auto;
`
export const ProductImages = styled.div`
  // background:green;
  width:15%;
  height:100vh;
`
export const ProductImage = styled.div`
  // background:red;
  width:50%;
  height:100vh;
  margin-left:30px;
`
export const ProductInfo = styled.div`
  // background:yellow;
  width:35%;
  height:100vh;
  margin-left:30px;
`

export const Attribute = styled.span`
  font-variant-caps: all-small-caps;
  font-weight: 600;
`

export const AttributeButton = styled.button`
  background-color: #fff;
  height: 30px;
  width: 45px;
  border: 1px solid black;
  cursor: pointer;
  textAlign: center;
  &:hover{
    background-color:#000;
    color:white;
  }

`

export const AddButton = styled.button`
width: 100%;
height: 35px;
color: #fff;
background-color: green;
border: none;
textAlign: center;
cursor: pointer;
 &:hover{
  background-color:#0a430a;
}
`