import styled, { css } from 'styled-components';

const ProfileFeedListCardWrapper = styled.ul`
  margin-bottom: 90px;

  ${({ theme }) => {
    return css`
      border-top: 1px solid ${theme.colors.colorBorder};
    `;
  }}

  li {
    padding: 16px 16px 0 16px;

    p {
      text-align: left;
    }
  }
`;

export default ProfileFeedListCardWrapper;
