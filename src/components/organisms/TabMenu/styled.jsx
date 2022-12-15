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
  background-color: #2f3136;
`;

export const TabNavLink = styled(NavLink)`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.color76};
      display: block;
      width: 84px;
      text-align: center;

      &.active {
        p {
          color: ${theme.colors.colorMain};
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
