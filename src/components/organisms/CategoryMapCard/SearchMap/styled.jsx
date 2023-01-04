import styled, { css } from 'styled-components';

const SearchFormWrapper = styled.form`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;

  ${({ theme }) => {
    return css`
      input {
        border: none;
        background-color: ${theme.colors.colorBg};
        color: ${theme.colors.colorWhite};
        font-size: ${theme.fontSizes.xl};
        width: 250px;
        height: 30px;
        text-align: center;
      }

      button {
        width: 50px;
        height: 25px;
        background-color: ${theme.colors.colorMain};
        border-radius: 10px;
        margin-left: 20px;
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        &:disabled {
          font-size: ${theme.fontSizes.base};
          background-color: ${theme.colors.color76};
          color: ${theme.colors.colorWhite};
          cursor: not-allowed;
        }
      }
    `;
  }}
`;

export default SearchFormWrapper;
