import styled from "styled-components"

export const FirstContainer = styled.div`
  margin: auto;
  background-color: #fff;
  width: 90%;
  height: 100vh;
  font-family: serif;
  padding-top: 3.5rem ;
font-family: "Raleway";

  
  `
  export const Heading = styled.p`
  color: #000;
  font-size: 30px;
  padding-top: 10px;
  text-transform: capitalize;
width: 299px;
// height: 68px;
left: calc(50% - 299px/2 - 469.5px);
top: calc(50% - 68px/2 - 562.5px);
  `
  export const CardsDiv = styled.div`
  
  `;
  
  export const CardsContainer = styled.div`
  display: flex;
  margin: auto;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 3rem ;
  align-items: flex-start;
`;

export const Banner = styled.div`
position:relative;
`
export const Cart = styled.div`
background: #14d614;
width: 40px;
height: 40px;
border-radius: 50%;
display: none;
align-items: center;
text-align: center;
justify-content: center;
color:#f6f1f1;
cursor:pointer;
left:80%;
position:absolute;
float:left;
top: 93.5%;
&:hover{
  background: green;
}
`;

export const Card = styled.div`
flex: 0 1 calc(32% - 1em);
position:relative;
&:hover{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
&:hover ${Cart} {
  display:grid;
}
`;

export const CardTitle = styled.span`
color: #1D1F22;
`;

export const CardSubTitle = styled.span`
color: #000;
font-weight:500;
`;

export const ProductPrice = styled.span`
font-weight:400;
`;

export const ProductInfo = styled.div`
font-weight: 300;
font-size: 18px;
color: #000;
 padding: 3px;
 margin: 8px;
 display: grid;
 line-height: 160%;
 align-items: center;
`;

export const WaterMark = styled.span`
position: absolute;
top: 50%;
left: 30%;
color: #8f8a8a;
font-size: 30px;
font-weight: 60px;
display: grid;
justify-content: center;
align-content: center;
opacity: 3;
font-variant-caps: all-small-caps;

`
export const OverlayStyle = styled.span`
position: absolute;
top: 0%;
width:100%;
height:405px;
display: grid;
opacity: 0.5;
background-color:white;

`
