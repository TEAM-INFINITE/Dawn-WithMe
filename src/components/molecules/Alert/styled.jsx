import styled, { css } from 'styled-components';

const NewAlertModalWrapper = styled.article`
  ${({ theme }) => {
    return css`
      width: 252px;
      height: 120px;
      background-color: ${theme.BACKGROUND};
      color: ${theme.TEXT};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      z-index: 9999;
      display: flex;
      flex-wrap: wrap;

      p {
        width: 100%;
        border-bottom: 1px solid ${theme.TEXT};
        font-size: ${theme.fontSizes.xl};
        font-weight: 500;
        line-height: 73px;
        text-align: center;
      }
      button {
        width: 126px;
        height: 46px;
        display: block;
        border-radius: 0 0 0 10px;
        color: ${theme.TEXT};

        &:last-child {
          border-radius: 0 0 10px 0;
          border-left: 1px solid ${theme.MODAL_BORDER};
          color: ${theme.WARNING};
        }
      }
    `;
  }}
`;
export default NewAlertModalWrapper;
