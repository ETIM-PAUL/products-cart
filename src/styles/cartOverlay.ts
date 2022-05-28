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
padding-left:2px;

`
export const AttributesBanner = styled.div`
// height:90px;
`

export const Attribute = styled.span`
  font-variant-caps: all-small-caps;
  font-weight: 600;
`
export const TotalAndButton = styled.div`
display: grid;
margin-bottom: 30px;
font-family: "Roboto";
margin-top:10px;
`
export const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top:10px;

`
export const TotalDiv = styled.div`
display: flex;
justify-content: space-between;
font-size: 15px;

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

export const CartOverlaySplit = styled.div`
background-color: #fff;
position: relative;
`
export const CartOverlayBanner = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`
export const ItemsCart = styled.div`
width: 100%;
`

export const CartDiv = styled.div`
height: 450px;
width: 100%;
overflow: auto;
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
};
scrollbar-width: none;
-ms-overflow-style: none; 
`

export const CartOverlayImage = styled.div`
display: flex;
gap: 4px;
position: absolute;
right: 6%;
top: 84%;
`
export const OverlaySide = styled.div`
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
`
export const ItemQuantityChange = styled.div`
line-height: 33px;
`
export const Button = styled.div`
width: 25px;
height: 25px;
background-color: #fff;
border: 1px solid black;
cursor: pointer;
&:hover{
background-color: gainsboro;
}
display:flex;
justify-content: center;
align-items:center;
`
export const SecondButton = styled.button`
width: 110px;
height: 40px;
background-color: green;
color: white;
border: none;
cursor:pointer;
`
export const ViewBag = styled.button`
  width: 110px;
  height: 40px;
  background-color: #fff;
  color: black;
  border: 1px solid black;
  cursor:pointer;
  &:hover{
    background-color: gainsboro;
    }
`
