import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ChatButton = styled(Link)`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.colorWhite};
      font-size: ${theme.fontSizes.base};
      padding: 10px 12px;
      border: 1px solid ${theme.colors.colorWhite};
      border-radius: 18px;

      &:hover {
        background-color: ${theme.colors.colorMain};
        border: 1px solid ${theme.colors.colorMain};
      }
    `;
  }}
`;

export default ChatButton;
