import styled from "styled-components"

export default function Header(){
    return(
    <>
      <StyledHeader>Isabell Paulmann</StyledHeader>
                </>
    )
}
const StyledHeader = styled.h1`
padding: 10px 5px;
margin: 20px;
border-radius: 10px;
display:flex;
justify-content: center;
align-items:center;
background:#733131;
font-size: 1.4em;
font-weight: 300;
box-shadow: 1px 1px 15px #222`