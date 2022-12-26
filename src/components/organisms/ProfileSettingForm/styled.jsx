import styled, { css } from 'styled-components';

const ProfileSettingFormWrapper = styled.form`
  div {
    text-align: left;
    &:nth-child(n + 1):nth-child(-n + 3) {
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

export default ProfileSettingFormWrapper;
