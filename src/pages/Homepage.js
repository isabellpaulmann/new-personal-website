import mypicture from '../images/mypicture2.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {keyframes} from 'styled-components'

export default function Homepage(){
    return(
        <>
        <Header/>
        <main>
        <StyledImageContainer>
        <StyledPicture src={mypicture} alt='Isabell Paulmann'/>
        </StyledImageContainer>
        </main>
        <Footer/>
        </>
    )
}

const fadeIn = keyframes`from {opacity:0
}
to { opacity:1; }
`;



const StyledImageContainer = styled.div`
display: flex;
justify-content: center;
margin: 50px

`


const StyledPicture = styled.img`
max-width: 220px;
height:auto;
border-radius: 90px;
filter: contrast(110%);
box-shadow: 1px 1px 15px #333;
animation: ${fadeIn} 6s;
`