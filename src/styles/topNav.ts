import styled from "styled-components"

export const TopHeading = styled.div`
  display: flex;
  justify-content:space-between;
  width: 90%;
  margin: auto;
  font-variant-caps: all-small-caps;
`

export const Item = styled.p`
  font-size: 15px;
  color: black;
  &:hover{
    text-decoration: underline;
    color: green;
  }
  &:active{
    color:green;
  }
  cursor:pointer;
  padding: 0 10px;
  `
  
  export const Menu = styled.p`
  display: inline-flex;
`

export const Logo = styled.p`
  font-size: 15px;
  color: black;
`
export const SingleIcon = styled.div`
  font-size: 15px;
  color: black;
  float:right;
  padding: 10px;
`

export const DropDownContent = styled.select`
list-style-type: none;
box-shadow: 5px 5px 5px 5px #1410100d;
border:none;
// margin-bottom:10px;
`

export const DropItem = styled.option`
background-color: white;
padding: 3px;
`