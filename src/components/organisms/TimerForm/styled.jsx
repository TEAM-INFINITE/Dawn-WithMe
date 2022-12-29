import styled, { css } from 'styled-components';

const TimerFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      input {
        border: none;
        border-radius: 10px;
        background-color: ${theme.colors.colorBg};
        color: ${theme.colors.colorMain};
        font-size: ${theme.fontSizes.xl};
        width: 50px;
        height: 30px;
        text-align: center;
        margin-top: 30px;
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      h2 {
        color: ${theme.colors.color76};
      }
      span {
        color: ${theme.colors.color76};
      }
    `;
  }}
`;

export default TimerFormWrapper;
