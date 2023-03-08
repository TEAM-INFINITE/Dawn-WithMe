import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ChatButton = styled(Link)`
  ${({ theme }) => {
    return css`
      color: ${theme.LIGHT_TEXT};
      font-size: ${theme.fontSizes.base};
      padding: 10px 12px;
      border: 1px solid ${theme.LIGHT_TEXT};
      border-radius: 18px;

      &:hover {
        background-color: ${theme.MAIN};
        border: 1px solid ${theme.MAIN};
      }
    `;
  }}
`;

export default ChatButton;
