import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`

  ${reset}

  #root{
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }

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

  li{
    list-style: none;
  }

  .hidden {
    position: absolute;
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

  input {
    &:focus {
      outline:none;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #212025 inset;
      -webkit-text-fill-color: #fff;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
    
  }


*,html {
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  box-sizing: border-box;
}

input {
    &:focus {
      outline:none;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0 30px #fff inset;
      -webkit-text-fill-color: #fff;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
    
  }
#root {
  height: 100vh;
}
`;

export default GlobalStyled;
