import styled from "styled-components"

export const FirstContainer = styled.div`
  margin-top: -22px;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  font-family: serif
`
export const Heading = styled.div`
  color: #000;
  font-size: 25px;
  padding: 3rem 2.5rem;
`
export const CardsDiv = styled.div`

`;

export const CardsContainer = styled.div`
display: flex;
width: 90%;
margin: auto;
gap: 30px;
flex-wrap: wrap;
justify-content: center;
`;
export const Banner = styled.div`
position:relative;
`
export const Cart = styled.div`
background: #14d614;
width: 27px;
height: 27px;
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
flex: 0 1 calc(25% - 1em);

&:hover{
box-shadow: 5px 5px 5px 10px #1410100d;
}
&:hover ${Cart} {
  display:grid;
}
`;

export const CardTitle = styled.div`
color: #80808091;
 padding: 5px;
`;

export const WaterMark = styled.span`
position: absolute;
top: 50%;
left: 30%;
color: #8f8a8a;
font-size: 20px;
font-weight: 50px;
display: grid;
justify-content: center;
align-content: center;
opacity: 3;
font-variant-caps: all-small-caps;

`

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;