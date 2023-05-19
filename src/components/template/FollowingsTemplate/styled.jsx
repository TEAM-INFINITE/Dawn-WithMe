import styled, { css } from 'styled-components';

const FollowersTemplateWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.BACKGROUND};
      margin: 0 auto;
      position: relative;
      overflow: auto;
    `;
  }}
`;

export default FollowersTemplateWrapper;
