import styled, { css } from 'styled-components';

const ProfileSettingWrapper = styled.section`
  ${({ theme }) => {
    return css`
      width: 600px;
      height: 100vh;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 30px 34px 0;
      text-align: center;

      h2 {
        color: ${theme.colors.colorBorder};
        font-weight: 500;
        font-size: ${theme.fontSizes.title};
        line-height: 30px;
        margin-bottom: 12px;
        text-align: center;
      }
      p {
        color: ${theme.colors.color76};
        font-weight: 400px;
        text-align: center;
        line-height: 14px;
      }
      img {
        display: block;
        margin: 30px auto 0;
      }
    `;
  }}
`;

export default ProfileSettingWrapper;
