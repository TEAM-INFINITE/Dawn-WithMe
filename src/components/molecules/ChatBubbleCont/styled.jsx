import styled, { css } from 'styled-components';

const ChatBubbleContWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  .time {
    ${({ theme }) => {
      return css`
        color: ${theme.colors.color76};
        font-weight: 400;
        font-size: ${theme.fontSizes.small};
      `;
    }}
  }
`;

export default ChatBubbleContWrapper;
