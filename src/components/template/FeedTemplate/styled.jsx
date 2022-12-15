import styled, { css } from 'styled-components';

export const FeedWrapper = styled.section`
  ${({ theme }) => {
    return css`
      width: 600px;
      margin: 0 auto;
      border: 1px solid black;
      background-color: ${theme.colors.colorBg};
    `;
  }}
`;

export const FeedCard = styled.li`
  padding: 20px 16px 16px 0;
`;
