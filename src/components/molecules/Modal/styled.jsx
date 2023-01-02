import styled, { css, keyframes } from 'styled-components';
import darkTheme from '../../../styles/theme';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }`;

const setTextName = (textName) => {
  switch (textName) {
    case '삭제' || '로그아웃':
      return css`
        &:hover {
          color: ${darkTheme.colors.colorMain};
        }
      `;
    case '신고하기':
      return css`
        &:hover {
          color: ${darkTheme.colors.colorWarning};
        }
      `;
    default:
      return css`
        border-radius: 26px;
        font-weight: 400;
        line-height: 15px;
        color: #fff;
      `;
  }
};

export const OpacityBg = styled.div`
  position: fixed;
  inset: 0px;
  width: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 99;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 600px;
  height: 160px;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
  z-index: 2;
  color: #fff;
  animation: ${fadeInUp} 0.5s;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};

      .bar {
        width: 100px;
        height: 5px;
        background-color: ${theme.colors.colorMain};
        margin: 0 auto;
        margin-top: 16px;
        border-radius: 5px;
      }
    `;
  }}
`;

export const ModalList = styled.li`
  padding: 14px 26px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  margin: 16px 0 10px 0;
  ${({ theme }) => {
    return css`
      &:hover {
        color: ${theme.colors.colorWarning};
      }
    `;
  }}
  ${({ textName }) => setTextName(textName)}
`;
