import styled, { css } from 'styled-components';

const LoginButtonFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      padding: 6vh 4vw 10vh;
      background-color: ${theme.colors.colorBg};
      border-radius: 20px 20px 0 0;
      text-align: center;
      margin-top: auto;

      span {
        font-weight: 400;
        font-size: ${theme.fontSizes.smallMid};
        line-height: 15px;
        color: ${theme.colors.colorBorder};
      }

      a {
        display: inline-block;
        font-weight: 400;
        font-size: ${theme.fontSizes.samllMid};
        line-height: 15px;
        color: ${theme.colors.color76};
        margin: 20px 12px 0;
      }
    `;
  }}
`;

export default LoginButtonFormWrapper;
