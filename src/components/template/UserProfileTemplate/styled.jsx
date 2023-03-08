import styled, { css } from 'styled-components';

const UserProfileTemplateWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.BACKGROUND};
      margin: 0 auto;
      padding: 30px 0 0;
      text-align: center;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    `;
  }}
`;

export default UserProfileTemplateWrapper;
