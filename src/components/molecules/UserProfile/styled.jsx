import styled from 'styled-components';

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
    gap: 2px;
  }
`;
