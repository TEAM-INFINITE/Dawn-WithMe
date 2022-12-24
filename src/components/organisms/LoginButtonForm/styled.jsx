import styled, { css } from 'styled-components';

const LoginButtonFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 600px;
      height: 100vh;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 50px 34px 0;
      text-align: center;
      border-radius: 20px 20px 0 0;

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

      .moon {
        width: 16px;
        height: 22px;
        border-radius: 41% 59% 100% 0% / 0% 34% 66% 100%;
        top: 375px;
        left: 247px;
        animation: none;
      }
    `;
  }}
`;

export default LoginButtonFormWrapper;