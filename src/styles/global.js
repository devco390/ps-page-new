import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-family: "Times New Roman", "Source Serif Pro" ;
    overflow: hidden;
  }

  div,
  a {
    box-sizing: border-box;
  }

  h1,
  h2 {
    margin: 0;
    padding: 0;
  }

  a,
  a:active,
  a:focus,
  a:visited {
    text-decoration: none;
  }

  form {
    height: 100%;
  }

  .cyan {
    background: cyan;
  }
  .yellow {
    background: yellow;
  }
  .magenta {
    background: magenta;
  }
`;

export default GlobalStyles;
