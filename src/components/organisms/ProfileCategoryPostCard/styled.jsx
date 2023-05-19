import styled, { css } from 'styled-components';

const ProfileCategoryPostCardWrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 20px 16px;
      border-top: 1px solid ${theme.TEXT};
      border-bottom: 1px solid ${theme.TEXT};

      select {
        display: block;
        margin-bottom: 16px;
      }

      h3 {
        font-size: ${theme.fontSizes.xl};
        color: ${theme.LIGHT_TEXT};
        text-align: left;
        margin-bottom: 8px;
      }

      ul {
        display: flex;
        overflow-x: scroll;
        gap: 10px;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    `;
  }}
`;
export default ProfileCategoryPostCardWrapper;
