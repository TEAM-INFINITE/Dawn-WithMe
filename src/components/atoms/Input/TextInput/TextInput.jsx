import styled, { css } from 'styled-components';

const TextInput = styled.input`
  width: 100%;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.base};
      line-height: 14px;
      background-color: ${theme.colors.colorBg};
      border: none;
      padding: 8px 0;
      color: ${theme.colors.colorWhite};
      border-bottom: 1px solid ${theme.colors.colorDB};
    `;
  }}
`;

export default TextInput;
