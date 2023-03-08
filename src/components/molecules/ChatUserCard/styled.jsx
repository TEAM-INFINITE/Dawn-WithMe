import styled, { css } from 'styled-components';

const ChatUserCardWrapper = styled.li`
  padding: 2px 0 3px 0;
  display: flex;
  align-items: center;
  gap: 18px;

  div:nth-child(1) {
    line-height: 0;
    position: relative;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .none-read {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    ${({ theme }) => {
      return css`
        background-color: ${theme.MAIN};
      `;
    }}/* &:disabled {
      background-color: transparent;
    }

    &.active {
      ${({ theme }) => {
      return css`
        background-color: ${theme.MAIN};
      `;
    }}
    } */
  }

  ${({ theme }) => {
    return css`
      background-color: ${theme.BACKGROUND};

      .preview-last-chat {
        font-size: ${theme.fontSizes.smallMid};
        color: ${theme.TEXT};
        font-weight: 400;
        line-height: 15px;
      }

      .date-last-chat {
        font-size: ${theme.fontSizes.small};
        color: ${theme.SUB_TEXT};
        font-weight: 400;
        align-self: end;
        line-height: 13px;
        margin-left: auto;
      }
    `;
  }}
`;

export default ChatUserCardWrapper;
