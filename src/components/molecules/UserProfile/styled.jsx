import styled, { css } from 'styled-components';

export const ProfileMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: fill;
  }

  .profile-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
        color: ${theme.SUB_TEXT};
        font-size: ${theme.fontSizes.small};
      }

      .comment-profile-text span::before {
        content: '· ';
      }
    `;
  }}
`;
