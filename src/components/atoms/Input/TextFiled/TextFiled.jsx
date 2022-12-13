import styled, { css } from 'styled-components';

const TextFiled = styled.input`
  width: 100%;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.base};
      line-height: 14px;
      background-color: ${theme.colors.colorBg};
      border: none;
      padding: 10px 0 8px;
      color: ${theme.colors.colorWhite};
      border-bottom: 1px solid ${theme.colors.colorDB};

      &:focus {
        border-bottom: 1px solid ${theme.colors.colorMain};
        outline: none;
      }
    `;
  }}
`;

export default TextFiled;
