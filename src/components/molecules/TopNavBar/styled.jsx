import styled, { css } from 'styled-components';

const TopNavBarWarpper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  ${({ theme }) => {
    return css`
      border-bottom: 1px solid ${theme.colors.colorDB};
      h2 {
        font-size: ${theme.fontSizes.xxl};
        color: ${theme.colors.colorBorder};
        line-height: 22px;
        margin-right: auto;
      }
      button {
        height: 24px;
        display: flex;
        align-items: center;
      }
      a {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
      .search {
        margin-right: 0;
      }
      
      input {
        margin-left: 20px;
        padding: 7px 16px;
        border-radius: 32px;
        border: 1px solid ${theme.colors.colorBorder};

        &:focus {
          border: 1px solid ${theme.colors.colorMain};
        }
    `;
  }}
`;

export default TopNavBarWarpper;
