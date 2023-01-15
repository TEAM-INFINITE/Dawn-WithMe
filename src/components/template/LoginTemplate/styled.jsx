import styled, { css } from 'styled-components';

const LoginWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100vh;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 30px 34px 0;
      text-align: center;

      h2 {
        color: ${theme.colors.colorBorder};
        font-weight: 500;
        font-size: ${theme.fontSizes.title};
        line-height: 30px;

        margin-bottom: 40px;
      }

      a {
        display: inline-block;
        font-weight: 400;
        font-size: ${theme.fontSizes.smallMid};
        line-height: 15px;
        color: ${theme.colors.colorWhite};
        margin-top: 20px;
      }

      img {
        display: block;
        margin: 30px auto 0;
      }
    `;
  }}
`;

export default LoginWrapper;
