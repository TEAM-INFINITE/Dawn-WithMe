import styled, { css } from 'styled-components';

const ProfileInfoCardWrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 0 16px 26px;
      margin-bottom: 6px;
      border-bottom: 1px solid ${theme.colors.colorBorder};
    `;
  }}
`;

export const ProfileImgTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
  }

  > div {
    p {
      &:first-child {
        margin-bottom: 6px;
      }
    }
  }
`;

export const ProfileInfoWrapper = styled.div`
  margin-top: 30px;

  > p {
    &:first-child {
      margin-bottom: 6px;
    }
    &:nth-child(2) {
      margin-bottom: 16px;
    }

    &:nth-child(3) {
      margin-bottom: 24px;
    }
  }
  ${({ theme }) => {
    return css`
      .profile-btn {
        display: block;
        width: 120px;
        margin: 0 auto;
        padding: 8px 0;
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        line-height: 18px;
        background-color: ${theme.colors.colorMain};
        border-radius: 17px;
      }
    `;
  }}
`;

export default ProfileInfoCardWrapper;
