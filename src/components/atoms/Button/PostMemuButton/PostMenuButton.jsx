import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const PostMenuButton = styled(Link)`
  ${({ theme }) => {
    return css`
      width: 50px;
      height: 50px;
      background-color: ${theme.MAIN};
      border-radius: 25px;
      color: ${theme.LIGHT_TEXT};
      font-size: ${theme.fontSizes.smallMid};
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      transition: 0.5s;
      transform: translate(0);
    `;
  }}
`;
export default PostMenuButton;
