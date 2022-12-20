import styled, { css } from 'styled-components';

const SignUpFormWrapper = styled.form`
  div {
    text-align: left;
    &:nth-child(2) {
      margin-top: 16px;
    }
  }

  button {
    margin-top: 30px;
  }

  ${({ theme }) => {
    return css`
      p {
        margin: 6px 0px 16px 0px;
        text-align: left;
        line-height: 14px;
        font-size: ${theme.fontSizes.smallMid};
        color: ${theme.colors.colorWarning};
      }
    `;
  }}
`;

export default SignUpFormWrapper;
