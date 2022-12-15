import styled, { css } from 'styled-components';

const TopNavBarWarpper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;

  ${({ theme }) => {
    return css`
      border-bottom: 1px solid ${theme.colors.colorDB};
      h2 {
        font-size: 18px;
        color: ${theme.colors.colorBorder};
      }
    `;
  }}
`;

export default TopNavBarWarpper;
