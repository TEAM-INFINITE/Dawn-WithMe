import styled, { css } from 'styled-components';

const TimerWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: calc(100vh - 47px);
      background-color: ${theme.BACKGROUND};
      margin: 0 auto;
      padding: 30px 34px 0;
      text-align: center;

      h2 {
        margin-top: 50px;
        color: ${theme.LIGHT_TEXT};
        font-size: ${theme.fontSizes.title};
      }

      button {
        display: inline-block;
        font-weight: 400;
        font-size: ${theme.fontSizes.smallMid};
        line-height: 15px;
        color: ${theme.LIGHT_TEXT};
        margin: 5px;
        margin-top: 30px;
      }

      img {
        display: block;
        margin: 30px auto 0;
      }
    `;
  }}
`;

export default TimerWrapper;
