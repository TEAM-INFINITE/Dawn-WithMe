import styled, { css } from 'styled-components';

const SearchWrapper = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.BACKGROUND};
      margin: 0 auto;
      padding: 20px 16px 90px;
      position: relative;
      overflow: auto;
    `;
  }}
`;

export const UserMore = styled.p`
  cursor: pointer;
  text-align: center;
  ${({ theme }) => {
    return css`
      color: ${theme.TEXT};
      font-size: ${theme.fontSizes.base};
    `;
  }}
`;

export const UserNotMessage = styled.p`
  text-align: center;
  ${({ theme }) => {
    return css`
      color: ${theme.TEXT};
      font-size: ${theme.fontSizes.base};
    `;
  }}
`;

export default SearchWrapper;
