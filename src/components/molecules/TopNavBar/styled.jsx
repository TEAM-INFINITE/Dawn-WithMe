import styled, { css } from 'styled-components';

const TopNavBarWarpper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  ${({ theme }) => {
    return css`
      border-bottom: 1px solid ${theme.BORDER};
      h2 {
        font-size: ${theme.fontSizes.xxl};
        color: ${theme.TEXT};
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
        height: 32px;
        margin: -4px 0 -4px 20px;
        padding: 7px 16px;
        border-radius: 32px;
        border: 1px solid ${theme.TEXT};

        &:focus {
          border: 1px solid ${theme.MAIN};
        }
    `;
  }}
`;

export default TopNavBarWarpper;
