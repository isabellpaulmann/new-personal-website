import {createGlobalStyle} from 'styled-components';
import 'typeface-work-sans'
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0
  }
body {
    color:white;
    background-color: #383233;
    font-family: 'Work Sans', sans-serif;
    font-size: 1.125rem;
      }
`
