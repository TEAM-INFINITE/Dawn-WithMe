import styled, { css } from 'styled-components';

const ChatUserWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 24px 16px 84px;
      position: relative;
      overflow: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    `;
  }}

  .set-image-bubble {
    border-radius: 10px;
    align-self: flex-start;
    margin: 0 0 10px 52px;
  }
`;

export default ChatUserWrapper;
