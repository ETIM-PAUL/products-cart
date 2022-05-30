import styled from "styled-components"

export const DetailsContainer = styled.div`
  display:flex;
  width:90%;
  justify-content: space-between;
  margin: auto;
  font-family: Raleway;
  padding-top: 6rem;
`
export const ProductImages = styled.div`
  height:30px;
  display:grid;
  object-fit:cover;
  `
  export const ProductImage = styled.div`
  display:grid;
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
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
width: 292px;
height: 27px;

font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 27px;

display: flex;
align-items: center;

color: #1D1F22;
`
export const ProductName = styled.div`
letter-spacing: 0em;
text-align: left;
display: flex;
margin-top:15px;
width: 292px;
font-family: 'Raleway';
font-style: normal;
font-weight: 100;
font-size: 30px;
line-height: 27px;
/* identical to box height, or 90% */
display: flex;
align-items: center;
color: #1D1F22;
`

export const ProductParse = styled.div`
position: relative;
width: 292px;
height: 103px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 159.96%;
color: #1D1F22;
`

export const ProductPrice = styled.div`
width: 86px;
height: 46px;
margin-top: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 18px;
display: flex;
align-items: center;

color: #1D1F22;
`

export const AttributeName = styled.div`
width: 250px;
height: 18px;
margin-top:15px;
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: #1D1F22;
`

export const Attribute = styled.div`
width: 50px;
height: 18px;
margin-top: 15px;
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

color: #1D1F22;

`

export const AttributeSwatch = styled.div.attrs((props: {color: string}) => props)`
border: 1px solid black;
cursor: pointer;
  display:flex;
justify-content: center;
align-items:center;
margin-top: 15px;
width: 63px;
height: 45px;
background-color: ${(props) => props.color};
`
export const AttributeStyle = styled.div`
display:flex;
gap:10px;
`

export const AttributeButton = styled.div`
  height: 30px;
  width: 52px;
  border: 1px solid black;
  text-align: center;
  justify-content: center;
  cursor:pointer;
margin-top: 5px;
  display:flex;
align-items:center;
left: 929px;
top: 560px;
  &:hover{
    background-color:#000;
    color:white;
  };
`
export const AddButton = styled.button`
background-color: #5ECE7B;
color: #fff;
border: none;
cursor: pointer;
text-align: center;
margin-top:20px;
margin-bottom:20px;
width: 292px;
height: 52px;
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
