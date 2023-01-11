import styled, { css } from 'styled-components';

const LoginButtonFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 319px;
      padding: 50px 34px 82px;
      background-color: ${theme.colors.colorBg};
      border-radius: 20px 20px 0 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;

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
