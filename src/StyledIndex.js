import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-weight: 300;
    line-height: 2.1rem;
    overflow: hidden;
    position: relative;
  }

  #root {
    height: 100%;
  }
`;
export default GlobalStyle;
