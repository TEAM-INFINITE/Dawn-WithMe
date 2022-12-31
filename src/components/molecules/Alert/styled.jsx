import styled, { css } from 'styled-components';

const AlertWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 260px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};
      color: ${theme.colors.colorBorder};
    `;
  }}

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;
  }

  strong {
    padding: 22px 50px;
    grid-column: 1/3;
    ${({ theme }) => {
      return css`
        border-bottom: 1px solid ${theme.colors.colorDB};
      `;
    }}
  }

  button {
    padding: 14px 50px;
    ${({ theme }) => {
      return css`
        color: ${theme.colors.colorBorder};
        &.right {
          color: ${theme.colors.colorWarning};
          border-left: 1px solid ${theme.colors.colorDB};
        }
      `;
    }}
  }
`;

export default AlertWrapper;
