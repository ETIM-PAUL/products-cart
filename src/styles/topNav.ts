import styled from "styled-components"

export const TopHeading = styled.div`
width: 100%;
font-variant-caps: all-small-caps;
z-index: 3;
background-color: white;
position:fixed;
`

export const Heading = styled.div`
justify-content:space-between;
display: flex;
  width: 90%;
  margin:auto;
  padding-top:10px;

`

export const Item = styled.div`
  font-size: 20px;
  color: black;
  height: 30px;
  text-decoration: unset;
  &:hover{
    text-decoration: underline;
    color: green;
  }
  cursor:pointer;
  `
  
  export const Menu = styled.div`
  display: inline-flex;
  gap: 20px;
  padding-top: 10px;
`

export const Logo = styled.div`
  // padding-bottom: 10px;

`

export const CurrencyContainer = styled.div`
`

export const CurrencyHolder = styled.ul`
display:block;
position: absolute;
cursor: pointer;
list-style: none;
padding: 15px 15px;
width: 80px;
height: 120px;
z-index:1;
margin: 5px -15px;
background-color:#fff;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const SingleIcon = styled.div`
font-size: 20px;
color: black;
float:right;
position: relative;
margin-right: 20px;
cursor:pointer;

`
export const CurrencySwitcher = styled.span`
cursor:pointer;
margin-top:5px;
font-size:30px;
`
export const Currency = styled.li`
justify-content:center;
align-item:center;
width:100%;
&:hover{
  background-color: gainsboro;
}

`

export const Arrow = styled.img`
margin: 5px;
`

export const Banner = styled.div`
position:relative;
`

export const CartSpan = styled.span`
width: 23px;
height: 23px;
border-radius: 60%;
text-align: center;
color:#f6f1f1;
background-color:#000;
left:60%;
position:absolute;
bottom: 40%;
`;

export const Overlay = styled.div`
position: absolute; 
top: 0;
left: 0;
right: 0;
bottom: 0;
cursor: pointer; 
margin-top: 50px;
z-index:2;
`
export const CartDiv = styled.div`
  font-size: 20px;
  color: black;
  float:right;
  position: relative;
  cursor:pointer;
  padding-top: 10px;
`
export const MiniCart = styled.div`
backgroundColor: #fff;
width: 320px;
height: 500px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: absolute;
right: 5%;
background-color: #fff;
overflow:auto;
font-size:10px;
`