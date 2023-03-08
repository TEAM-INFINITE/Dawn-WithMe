import styled, { css } from 'styled-components';

const TextLabel = styled.label`
  width: 100%;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.smallMid};
      color: ${theme.TEXT};
      font-weight: 500;
      line-height: 15px;
      margin-bottom: 10px;
    `;
  }}
`;

export default TextLabel;
