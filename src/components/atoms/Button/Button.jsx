import styled, { css } from 'styled-components';

const setSize = (size) => {
  switch (size) {
    case 'large':
      return css`
        padding: 13px 0;
        border-radius: 44px;
      `;
    case 'medium':
      return css`
        padding: 8px 0;
        border-radius: 30px;
      `;
    case 'ms':
      return css`
        border-radius: 32px;
      `;
    default:
      return css`
        border-radius: 26px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      `;
  }
};

const Button = styled.button`
  ${({ theme }) => {
    return css`
      width: ${(props) => props.width};
      background-color: ${theme.colors.colorMain};
      font-size: ${theme.fontSizes.base};
      padding: 7px 0;
      font-weight: 500;
      line-height: 18px;
      color: ${theme.colors.colorWhite};
    `;
  }}

  ${({ size }) => setSize(size)}

  &:disabled {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.colorBorder};
        cursor: not-allowed;
      `;
    }}
  }

  &.active {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.colorBg};
        border: 1px solid ${theme.colors.colorBorder};
      `;
    }}
  }
`;

export default Button;
