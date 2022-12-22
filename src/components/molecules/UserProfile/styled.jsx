import styled, { css } from 'styled-components';

export const ProfileMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 565px;
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  img {
    border-radius: 50%;
  }

  .profile-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .comment-profile-text {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  ${({ theme }) => {
    return css`
      .comment-profile-text span {
        color: ${theme.colors.color76};
        font-size: ${theme.fontSizes.small};
      }

      .comment-profile-text span::before {
        content: '· ';
      }
    `;
  }}
`;
