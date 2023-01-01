import styled, { css } from 'styled-components';

const SearchWrapper = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 20px 16px 90px;
      position: relative;
      overflow: auto;
    `;
  }}
`;

export default SearchWrapper;
