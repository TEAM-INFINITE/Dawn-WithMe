import styled, { css } from 'styled-components';
import uploadFile from '../../../assets/images/upload-file.png';

const ChatInputWrapper = styled.form`
  width: 100%;
  height: 61px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px 12px;
  gap: 8px;
  ${({ theme }) => {
    return css`
      background-color: ${theme.BACKGROUND};
      border-top: 1px solid ${theme.TEXT};
    `;
  }}

  & > div:first-child {
    width: 36px;
    height: 36px;
    background: center/100% no-repeat url(${uploadFile});
    input {
      visibility: hidden;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: row;
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
      border: none;
      &:focus {
        outline: none;
      }
      ${({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          font-weight: 400;
          line-height: 18px;
          color: ${theme.LIGHT_TEXT};
          background-color: ${theme.BACKGROUND};
        `;
      }}
    }
  }

  & button {
    border: none;
    width: 36px;
    ${({ theme }) => {
      return css`
        background-color: ${theme.BACKGROUND};
        color: ${theme.TEXT};
      `;
    }}

    &:disabled {
      ${({ theme }) => {
        return css`
          color: ${theme.SUB_TEXT};
          cursor: not-allowed;
        `;
      }}
    }

    &:active {
      ${({ theme }) => {
        return css`
          background-color: ${theme.BACKGROUND};
          color: ${theme.TEXT};
        `;
      }}
    }
  }
`;

export default ChatInputWrapper;
