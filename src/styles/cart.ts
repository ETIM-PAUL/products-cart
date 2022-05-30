import styled from "styled-components"

export const CartContainer = styled.div`
  width: 90%;
  margin: auto;
  background-color: #fff;
  padding-top: 6rem;
  font-family: "Raleway";
  padding-bottom: 15px;
`

export const Span = styled.span`
font-weight:300;
`
export const Heading = styled.h3`
`
export const Heading2 = styled.h4`
text-align:center;
`
export const NoStyleDiv = styled.div`
`
export const Paragraph = styled.p`
`
export const Bold = styled.b`
padding-left:3px;
`
export const RelativePosition = styled.div`
position: relative;
`
export const CartRow = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`
export const CartSplit = styled.div`
display: flex;
gap: 10px;
justify-content:center;
align-items: center;
`

export const ProductBrand = styled.div`
font-family: "Raleway";
font-weight: 600;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
`
export const ProductName = styled.div`
font-family: "Raleway";
font-weight: 300;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
`
export const ProductPrice = styled.div`
font-weight: 600;
`
export const Attribute = styled.span`
  font-variant-caps: all-small-caps;
  font-weight: 600;
`
export const AttributesDiv = styled.div`
display: flex;
gap: 10px;
`
export const AttributesFlex = styled.div`
// height:100px;
width: 180px;
`
export const AttributesContainer = styled.div`

line-height:25px;

`

export const AttributeButton = styled.div`
  height: 23px;
  width: 30px;
  border: 1px solid black;
font-size: 9px;
justify-content: center;
align-items: center;
display:flex;
`;

export const AttributeSwatch = styled.div.attrs((props: {color: string}) => props)`
height: 18px;
width: 20px;
border: 1px solid black;
background-color: ${(props) => props.color};

`
export const CartItemIterator = styled.div`
line-height: 55px;
`

export const ChangeItemQuantity = styled.div`
  height: 30px;
  background-color: #fff;
  width: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  display:flex;
`
export const GalleryDiv = styled.div`
  display:flex;
  gap: 4px;
  position:absolute;
  bottom:2%;
  right:6%;
`
export const ChangeImages = styled.img`
background-color: black;
color: white;
height:17px;
  `
export const OrderButton = styled.button`
width: 250px;
height: 40px;
background-color: #5ECE7B;
color: white;
border: none;
cursor: pointer;
display:flex;
justify-content: center;
align-items:center;
font-size:15px;
`
export const OrderText = styled.span`
font-family:"Raleway";
`
export const OrderDiv = styled.div`
display: grid;
marginTop: 30px;
line-height: 30px;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
width: 279px;
height: 159px;
margin-top: 25px;
margin-bottom: 25px;
`

export const TotalSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 198px;
flex: none;
order: 0;
flex-grow: 0;
`
