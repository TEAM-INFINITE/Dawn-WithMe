import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../fonts/SpoqaHanSansNeo-Light.woff2') format('woff2'),
        url('../fonts/SpoqaHanSansNeo-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
        url('../fonts/SpoqaHanSansNeo-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
        url('../fonts/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
        url('../fonts/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../fonts/SpoqaHanSansNeo-Thin.woff2') format('woff2'),
        url('../fonts/SpoqaHanSansNeo-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}


  ${reset}

  *{
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
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
`;

export default GlobalStyled;
