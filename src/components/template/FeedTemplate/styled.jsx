import styled, { css } from 'styled-components';

export const FeedWrapper = styled.section`
  ${({ theme }) => {
    return css`
      width: 600px;
      height: 100vh;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
    `;
  }}
`;

export const FeedCard = styled.li`
  padding: 20px 16px 16px 0;
`;
