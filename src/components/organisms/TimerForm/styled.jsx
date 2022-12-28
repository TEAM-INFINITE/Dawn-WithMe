import styled, { css } from 'styled-components';

const TimerFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      input {
        margin-top: 30px;
        border: none;
        border-radius: 10px;
        background-color: ${theme.colors.colorBg};
        color: ${theme.colors.colorMain};
        font-size: ${theme.fontSizes.xl};
        width: 100px;
        height: 30px;
        text-align: center;
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      span {
        color: ${theme.colors.color76};
      }
    `;
  }}
`;

export default TimerFormWrapper;
