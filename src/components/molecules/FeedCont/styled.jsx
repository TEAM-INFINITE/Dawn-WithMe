import styled, { css } from 'styled-components';

const FeedContWrapper = styled.div`
  ${({ theme }) => {
    return css`
      p {
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        margin: 16px 0;
      }
      .feedImg {
        border-radius: 10px;
        max-height: 350px;
        object-fit: cover;
      }
    `;
  }}
`;

export default FeedContWrapper;
