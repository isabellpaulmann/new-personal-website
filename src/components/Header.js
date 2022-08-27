import styled from "styled-components"
import {keyframes} from 'styled-components'

export default function Header(){
    return(
    <>
      <StyledHeader>Isabell Paulmann</StyledHeader>
                </>
    )
}
const fadeIn = keyframes`from {opacity:0
}
to { opacity:1; }
`;

const StyledHeader = styled.h1`
padding: 10px 5px;
margin: 20px;
border-radius: 10px;
display:flex;
justify-content: center;
align-items:center;
background:#733131;
font-size: 1.4em;
font-weight: 400;
box-shadow: 1px 1px 15px #222;
animation: ${fadeIn} 2s`

