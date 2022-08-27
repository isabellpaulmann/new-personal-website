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
        <StyledSection>
            <button>Webentwicklerin Frontend</button>
            <button>Hobbyfotografin</button>
            <button>Kunst & Design</button>
          
        </StyledSection>
        </main>
        <Footer/>
        </>
    )
}
const StyledSection = styled.section`
display:flex;
justify-content:center;
text-align:center;
align-items: center;
flex-direction: column;

button {
    color:white;
    width: 250px;
    font-family: inherit;
    font-size: 1.05rem;
    margin: 10px;
    padding: 10px;
    border:none;
    font-weight: 400;
    border-radius: 10px;
    background-color: #733131;
    transition: transform 0.35s ease-in-out;
    transition-property: background, color, transform;
    cursor:pointer;
&:hover{
    background: white;
    color:black;
    transform:scale(1.05)
    }}`

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