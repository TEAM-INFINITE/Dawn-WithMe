import styled, { css } from 'styled-components';

const TimerFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      input {
        border: none;
        border-radius: 10px;
        background-color: ${theme.BACKGROUND};
        color: ${theme.MAIN};
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
        color: ${theme.SUB_TEXT};
      }
      span {
        color: ${theme.SUB_TEXT};
      }
    `;
  }}
`;

export default TimerFormWrapper;
