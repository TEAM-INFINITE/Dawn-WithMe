import styled, { css, keyframes } from 'styled-components';

const modalAni = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

const NewModalWrapper = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9999;
      background-color: rgba(255, 255, 255, 0.2);
    `;
  }}
`;

export const NewModalBox = styled.div`
  ${({ theme }) => {
    return css`
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: #212025;
      border-radius: 16px 16px 0 0;
      transform: translateY(100%);
      animation: ${modalAni} 0.3s ease-out forwards;
      > .modal-btn {
        width: 100px;
        height: 5px;
        display: block;
        border-radius: 2.5px;
        background-color: ${theme.colors.colorWhite};
        margin: 16px auto;

        &:hover {
          background-color: ${theme.colors.colorMain};
        }
      }

      ul {
        li {
          color: ${theme.colors.colorWhite};
          padding: 14px 0 14px 26px;
          font-size: ${theme.fontSizes.base};
          line-height: 18px;
        }
      }
    `;
  }}
`;

export default NewModalWrapper;
