import styled from "styled-components"

export const DetailsContainer = styled.div`
  display:flex;
  justify-content: space-between;
  width: 90%;
  margin: 25px auto;
  padding: 15px;
`
export const ProductImages = styled.div`
  width:15%;
  height:100vh;
`
export const ProductImage = styled.div`
  width:50%;
  height:100vh;
  margin-left:30px;
`
export const ImageHover = styled.img`
  width:150px;
  height:80px;
  cursor:pointer;
  &:hover{
    border: 1px solid green;
  }
`
export const ProductInfo = styled.div`
  width:35%;
  height:100vh;
  margin-left:30px;
  color:#1D1F22;
`
export const ProductBrand = styled.div`
font-family: Raleway;
font-size: 30px;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
`
export const ProductName = styled.div`
font-family: Raleway;
font-size: 15px;
font-weight: 300;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
`

export const ProductParse = styled.div`
height: 200px;
overflow:scroll;
`

export const ProductPrice = styled.div`
font-weight: 600;
`

export const Attribute = styled.div`
  font-variant-caps: all-small-caps;
  font-weight: 600;
padding-top:10px;
`

export const AttributeSwatch = styled.button`
height: 20px;
width: 20px;
border: 1px solid black;
cursor: pointer;
&:hover{
border: 1px solid red;
};
`

export const AttributeButton = styled.button`
  height: 30px;
  background-color: #fff;
  width: 52px;
  border: 1px solid black;
  textAlign: center;
  justify-content: center;
  cursor:pointer;
  &:hover{
    background-color:#000;
    color:white;
  };
  &:focus{
    background-color:#000;
    color:white;
  };
  

`
export const AddButton = styled.button`
width: 100%;
height: 35px;
color: #fff;
background-color: #5ECE7B;
border: none;
textAlign: center;
cursor: pointer;
margin-top:20px;

 &:hover{
  background-color:#0a430a;
}
`
export const OutOfStock = styled.button`
width: 100%;
height: 35px;
color: #fff;
background-color: #0a430a;
border: none;
textAlign: center;
`
