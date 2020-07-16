import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
  }
  html{
    height:100vh;
   body, #root{
     height:100%;
    background: linear-gradient(180deg, #1F1F1F 0%, #222222 100%), #1F1F1F;
  }

  }

  h1{
    color: ${({ theme }) => theme.black};
  }

  hr {
    margin: 10px 0;
  }

`;
