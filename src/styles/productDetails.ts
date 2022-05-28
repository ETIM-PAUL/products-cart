import styled from "styled-components"

export const DetailsContainer = styled.div`
  display:flex;
  width:90%;
  justify-content: space-between;
  margin: auto;
  font-family: Raleway;
  padding-top: 6rem;
  // position:fixed;
`
export const ProductImages = styled.div`
  height:30px;
  display:grid;
  object-fit:cover;
  `
  export const ProductImage = styled.div`
  display:grid;
  // width: 30%;
  // object-fit:cover;
  margin-left:05px;

  `
  export const ImageHover = styled.img`
  height:80px;
  cursor:pointer;
  width:80px;
  margin: 10px 5px;
  &:hover{
    outline: 2px solid green;

  };
  object-fit: cover;
`
export const ProductInfo = styled.div`
  width:100vmin;
  height:100vh;
  margin-left:05px;
  color:#1D1F22;
`
export const ProductBrand = styled.div`
font-size: 30px;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
`
export const ProductName = styled.div`
font-family: "Raleway";
font-size: 15px;
font-weight: 300;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
`

export const ProductParse = styled.div`
font-family:"Roboto";
// height:300px;
// overflow:auto;
// ::-webkit-scrollbar {
//   width: 0px;
//   background: transparent; /* make scrollbar transparent */
// };
// scrollbar-width: none;
// -ms-overflow-style: none; 
`

export const ProductPrice = styled.div`
font-weight: 600;
`

export const Attribute = styled.div`
  text-transform:uppercase;
  font-weight: 600;
padding-top:10px;
font-size:12px;
font-family:"Roboto Condensed";

`

export const AttributeSwatch = styled.div`
height: 20px;
width: 20px;
border: 1px solid black;
cursor: pointer;
  display:flex;
justify-content: center;
align-items:center;
`
export const AttributeStyle = styled.div`
display:flex;
gap:10px;
`

export const AttributeButton = styled.div`
  height: 30px;
  width: 52px;
  border: 1px solid black;
  textAlign: center;
  justify-content: center;
  cursor:pointer;
  display:flex;
justify-content: center;
align-items:center;
  &:hover{
    background-color:#000;
    color:white;
  };
`
export const AddButton = styled.button`
width: 20rem;
height: 35px;
color: #fff;
background-color: #5ECE7B;
border: none;
textAlign: center;
cursor: pointer;
margin-top:20px;
margin-bottom:20px;
 &:hover{
  background-color:#0a430a;
}
`
export const OutOfStock = styled.button`
width: 20rem;
height: 35px;
color: #fff;
background-color: #5ECE7B;
border: none;
textAlign: center;
margin-top:20px;
margin-bottom:20px;

`
