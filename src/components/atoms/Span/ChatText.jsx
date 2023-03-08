import styled, { css } from 'styled-components';

const chatBubble = (user) => {
  switch (user) {
    case 'ibubble':
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          color: ${theme.LIGHT_TEXT};
          font-weight: 400;
          line-height: 18px;
          background-color: ${theme.MAIN};
          padding: 12px;
          border-radius: 10px;
          border-top-right-radius: 0px;
          margin-left: 6px;
        `;
      };

    case 'yoububble':
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          color: #000000;
          font-weight: 400;
          line-height: 18px;
          background-color: ${theme.LIGHT_TEXT};
          border: 1px solid ${theme.TEXT};
          padding: 12px;
          border-radius: 10px;
          border-top-left-radius: 0px;
          margin-right: 6px;
        `;
      };

    default:
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          color: ${theme.LIGHT_TEXT};
          font-weight: 400;
          line-height: 18px;
        `;
      };
  }
};

const ChatText = styled.span`
  ${({ user }) => chatBubble(user)}
`;

export default ChatText;
