import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, select, button {
    font-weight: 500;
    font-size: 1rem;
  }

  body {
    padding-top: 4rem;
    color: ${(props) => props.theme.ColorText};
    font-family: ${(props) => props.theme.typeFirst};
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  button, input {
    display: block;
    font-family: ${(props) => props.theme.typeFirst};
    font-size: 1rem;
    color: ${(props) => props.theme.ColorText};
    border: none;
    outline: none;
  }
`;
