import styled, { css } from 'styled-components';

const CategoryFeedContWrapper = styled.div`
  ${({ theme }) => {
    return css`
      p {
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        margin: 16px 0;
      }
      .feedImg {
        border-radius: 10px;
      }
    `;
  }}
`;

export default CategoryFeedContWrapper;
