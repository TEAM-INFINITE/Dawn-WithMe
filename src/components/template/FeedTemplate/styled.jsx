import styled, { css } from 'styled-components';

export const FeedWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 20px 16px 90px;
      position: relative;
      overflow: auto;
    `;
  }}
`;

export const FeedCard = styled.li`
  padding: 20px 16px 16px 0;
`;
