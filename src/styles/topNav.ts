import styled from "styled-components"

export const TopHeading = styled.div`
width: 100%;
height:60px;
z-index: 3;
background-color: white;
position:fixed;
font-family: "Raleway";
`
export const Heading = styled.div`
justify-content:space-between;
display: flex;
width: 90%;
margin:auto;
padding-top:10px;

`

export const HorizontalLine = styled.hr`
color:#5ECE7B;
display:none;
`
export const ShowHorizontalLine = styled.hr`
color:#5ECE7B;
`

export const Item = styled.div`
color: black;
&:hover ${HorizontalLine} {
  display:block;
}
&:hover {
  color:#5ECE7B;
}
height: 20px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
align-items: center;
text-align: center;
text-transform: uppercase;

`

export const Green = styled(Item)`
color:#5ECE7B;
`

  export const Menu = styled.div`
  display: flex;
  gap: 20px;
  height: 56px;
  padding-top: 10px;
  flex-direction: row;
  align-items: flex-start;
  text-decoration:!none;
text-align:center
`
export const Logo = styled.div`
  // padding-bottom: 10px;

`

export const CurrencyContainer = styled.div`
justify-content:center;
line-height: 35px;
`

export const CurrencyHolder = styled.ul`
display:block;
position: absolute;
cursor: pointer;
list-style: none;
padding: 0px 0px;
width: 110px;
height: 170px;
z-index:1;
margin: 5px -15px;
background-color:#fff;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: justify;
`

export const SingleIcon = styled.div`
width:50px;
font-size: 20px;
color: black;
float:right;
position: relative;
margin-right: 10px;
cursor:pointer;
padding-top:10px;

`
export const CurrencySwitcher = styled.span`
cursor:pointer;
// margin-top:5px;
font-size:20px;
`
export const Currency = styled.li`
&:hover{
  background-color: #EEEEEE;
}
font-size: 18px;
padding-left:10px;

`

export const Arrow = styled.img`
margin: 5px;
`

export const Banner = styled.div`
position:relative;
width:354px;
height:330px;
`

export const CartSpan = styled.div`
width: 23px;
height: 23px;
font-size: 14px;
border-radius: 60px;
text-align: center;
color:#f6f1f1;
background-color:#000;
left:60%;
position:absolute;
bottom: 40%;
display: flex;
justify-content: center;
    align-items: center;
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
width: 350px;
height: 600px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: absolute;
right: 5%;
background-color: #fff;
overflow:auto;
font-size:15px;
font-family: "Raleway";
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
};
scrollbar-width: none;
-ms-overflow-style: none; 
`