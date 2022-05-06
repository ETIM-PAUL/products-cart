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
  &:hover{
    text-decoration: underline;
    color: green;
  }
  &:focus{
    color:green;
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
export const SingleIcon = styled.div`
  font-size: 20px;
  color: black;
  float:right;
  position: relative;
  margin-right: 20px;
  padding-top: 10px;

`

export const DropDownContent = styled.select`
list-style-type: none;
box-shadow: 5px 5px 5px 5px #1410100d;
border:none;
width:36px;
`

export const DropItem = styled.option`
background-color: white;
padding: 3px;
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