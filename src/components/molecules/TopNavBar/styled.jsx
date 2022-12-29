import styled, { css } from 'styled-components';

const TopNavBarWarpper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  ${({ theme }) => {
    return css`
      border-bottom: 1px solid ${theme.colors.colorDB};
      h2 {
        font-size: ${theme.fontSizes.xxl};
        color: ${theme.colors.colorBorder};
        line-height: 22px;
      }
      button.more button.search {
        display: flex;
        align-items: center;
      }
      a {
        display: flex;
        align-items: center;
      }
    `;
  }}
`;

export default TopNavBarWarpper;
