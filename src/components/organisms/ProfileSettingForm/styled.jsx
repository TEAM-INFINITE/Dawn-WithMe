import styled, { css } from 'styled-components';

const ProfielSettingFormWrapper = styled.form`
  div {
    text-align: left;
    margin-bottom: 16px;
  }

  button {
    margin-top: 30px;
  }

  ${({ theme }) => {
    return css`
      p {
        margin-top: 100px;
        text-align: left;
        line-height: 14px;
        font-size: ${theme.fontSizes.smallMid};
        color: ${theme.colors.colorWarning};
      }
    `;
  }}
`;

export default ProfielSettingFormWrapper;
