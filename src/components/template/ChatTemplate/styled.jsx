import styled, { css } from 'styled-components';

const ChatWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 24px 16px 84px;
      /* position: relative; */
      overflow: auto;
    `;
  }}

  a {
    display: block;
    margin-bottom: 20px;
  }

  li + li {
    margin-top: 20px;
  }

  .disabled-link {
    pointer-events: none;
  }
`;

export default ChatWrapper;
