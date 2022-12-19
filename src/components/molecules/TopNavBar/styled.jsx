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
        font-size: ${theme.fontSizes.xxl};
        color: ${theme.colors.colorBorder};
      }
    `;
  }}
`;

export default TopNavBarWarpper;
