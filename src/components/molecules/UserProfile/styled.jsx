import styled, { css } from 'styled-components';

export const ProfileMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 569px;
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  /* .profile-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  } */

  /* div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  } */
`;

// export const ProfileTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
// `;

// p 태그 공용컴포넌트 사용 예정
export const UserName = styled.p`
  font-size: 14px;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.colorBorder};
    `;
  }}
`;

export const UserId = styled.p`
  font-size: 12px;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.color76};
    `;
  }}
`;
