import styled, { css } from 'styled-components';

const TextFiled = styled.input`
  width: 100%;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.base};
      line-height: 14px;
      background-color: ${theme.BACKGROUND};
      border: none;
      padding: 10px 0 8px;
      color: ${theme.LIGHT_TEXT};
      border-bottom: 1px solid ${theme.BORDER};

      &:focus {
        border-bottom: 1px solid ${theme.MAIN};
        outline: none;
      }
    `;
  }}
`;

export default TextFiled;
