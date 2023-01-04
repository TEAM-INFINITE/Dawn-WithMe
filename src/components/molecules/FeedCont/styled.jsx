import styled, { css } from 'styled-components';

const FeedContWrapper = styled.div`
  ${({ theme }) => {
    return css`
      p {
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        margin: 16px 0;
      }

      .imgwrapper {
        display: flex;
        gap: 8px;
        overflow-x: scroll;
      }
      .feedImg {
        border-radius: 10px;
        width: 514px;
        max-height: 250px;
        object-fit: cover;
      }
    `;
  }}
`;

export default FeedContWrapper;
