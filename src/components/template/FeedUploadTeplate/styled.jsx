import styled, { css } from 'styled-components';

export const FeedUploadWrapper = styled.div`
  img {
    border-radius: 50%;
  }

  ${({ theme }) => {
    return css`
      display: flex;
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

export const FeedTextWrapper = styled.div`
  width: 100%;
`;

export default FeedUploadWrapper;
