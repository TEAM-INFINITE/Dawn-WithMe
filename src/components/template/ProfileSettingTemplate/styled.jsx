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
        margin-bottom: 30px;
      }

      p {
        color: ${theme.colors.color76};
        font-weight: 400;
        font-size: ${theme.fontSizes.base};
        line-height: 14px;
        margin-bottom: 12px;
      }
    `;
  }}
`;

const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;

  .defaultProfilePhoto {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
  }

  .fileUploadButton {
    position: absolute;
    width: 36px;
    height: 36px;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  .profileImg-input {
    display: none;
  }
`;

export { ProfileSettingWrapper, ImgWrapper };
