import styled from "styled-components"

export const FirstContainer = styled.div`
  margin: auto;
  background-color: #fff;
  width: 90%;
  height: 100vh;
  font-family: serif;
  padding-top: 5rem ;
  
  `
  export const Heading = styled.div`
  color: #000;
  font-size: 20px;
  padding-top: 2.5rem;
  `
  export const CardsDiv = styled.div`
  
  `;
  
  export const CardsContainer = styled.div`
  display: inline-flex;
  margin: auto;
  gap: 18px;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 3rem ;
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
&:hover{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
&:hover ${Cart} {
  display:grid;
}
`;

export const CardTitle = styled.div`
color: #80808091;
 padding: 5px;
`;

export const ProductPrice = styled.p`
color: #000;
 padding: 5px;
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
