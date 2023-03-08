import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BottomNavBarWrapper = styled.article`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => {
    return css`
      border-top: 1px solid ${theme.BORDER};
      background-color: ${theme.BACKGROUND};
    `;
  }}
`;

export const TabNavLink = styled(NavLink)`
  ${({ theme }) => {
    return css`
      color: ${theme.SUB_TEXT};
      display: block;
      width: 84px;
      text-align: center;

      &.active {
        p {
          color: ${theme.MAIN};
        }
      }

      img {
        width: 18px;
        margin-top: 6px;
      }

      p {
        margin-top: 6px;
        font-size: ${theme.fontSizes.smallMid};
        line-height: 14px;
      }
    `;
  }}
`;

export default BottomNavBarWrapper;
