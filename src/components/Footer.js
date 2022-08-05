import styled from "styled-components";
import {keyframes} from 'styled-components'

export default function Footer(){
       return(
        <StyledFooter>
        <small>&copy; 2022 Isabell Paulmann</small>
            </StyledFooter>
    )}

const fadeIn = keyframes`from {opacity:0
}
to { opacity:1; }
`;

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
position: fixed;
padding: 10px 0px;
bottom: 0;
width: 100%;
font-weight: 300;
animation: ${fadeIn} 2s
`