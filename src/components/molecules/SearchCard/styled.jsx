import styled, { css } from 'styled-components';

const SearchCardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-bottom: 16px;

  img {
    border-radius: 50%;
    height: 50px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .user-info strong {
    ${({ theme }) => {
      return css`
        color: ${theme.MAIN};
      `;
    }}
  }
`;

export default SearchCardWrapper;
