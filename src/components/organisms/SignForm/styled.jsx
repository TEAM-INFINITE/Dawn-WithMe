import styled, { css } from 'styled-components';

const SignFormWrapper = styled.form`
  div {
    text-align: left;
    &:first-child {
      margin-bottom: 16px;
    }
  }

  button {
    margin-top: 30px;
  }

  ${({ theme }) => {
    return css`
      p {
        margin-top: 6px;
        text-align: left;
        line-height: 14px;
        font-size: ${theme.fontSizes.smallMid};
        color: ${theme.colors.colorWarning};
      }
    `;
  }}
`;

export default SignFormWrapper;
