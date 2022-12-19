import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`

  ${reset}

  button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer
  }

  a {
    text-decoration: none;
  }

  .hidden {
    position: relative;
    z-index: -1px;
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-break: initial;
    word-wrap: initial;
  }


*,html {
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  box-sizing: border-box;
}
#root {
  height: 100vh;
}
`;

export default GlobalStyled;
