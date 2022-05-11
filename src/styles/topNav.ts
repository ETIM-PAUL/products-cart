import styled from "styled-components"

export const TopHeading = styled.div`
  display: flex;
  justify-content:space-between;
  width: 90%;
  margin: 15px auto;
  font-variant-caps: all-small-caps;
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
  padding-bottom: 10px;

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
margin: 5px -15px;
z-index:1;
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
position: fixed; 
width: 100%; 
height: 100vh; 
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5); 
z-index: 2; 
cursor: pointer; 
margin-top: 50px;
display:none;
`
export const CartDiv = styled.div`
  font-size: 20px;
  color: black;
  float:right;
  position: relative;
  cursor:pointer;
  padding-top: 10px;

  &:hover ${Overlay}{
    display:block;
  }
`
export const MiniCart = styled.div`
backgroundColor: #fff;
width: 250px;
max-width:250px;
height:100vh;
position: relative;
top: 0;
left: 77%;
overflow:auto;
font-size:10px;
`