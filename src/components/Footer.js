import styled from "styled-components";

export default function Footer(){
       return(
        <StyledFooter>
        <small>&copy; 2022 Isabell Paulmann</small>
            </StyledFooter>
    )}

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
position: fixed;
padding: 10px 0px;
bottom: 0;
width: 100%;
font-weight: 300;
`