import styled, { css } from 'styled-components';

const TopNavButtonBarWarpper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;

  ${({ theme }) => {
    return css`
      border-bottom: 1px solid ${theme.BORDER};

      a {
        display: flex;
        align-items: center;
      }
    `;
  }}
`;

export default TopNavButtonBarWarpper;
