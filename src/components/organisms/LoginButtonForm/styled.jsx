import styled, { css } from 'styled-components';

const LoginButtonFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      // 높이, 포지션, 바텀, 레프트, 트렌스폼 수정됨.
      height: 319px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      // margin: 0 auto;
      padding: 50px 34px 82px;
      text-align: center;
      border-radius: 20px 20px 0 0;
      background-color: ${theme.colors.colorBg};

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

      /* .moon {
        width: 16px;
        height: 22px;
        border-radius: 41% 59% 100% 0% / 0% 34% 66% 100%;
        top: 375px;
        left: 247px;
        animation: none;
      } */
    `;
  }}
`;

export default LoginButtonFormWrapper;
