import styled, { css } from 'styled-components';

const CategoryFeedContWrapper = styled.div`
  ${({ theme }) => {
    return css`
      p {
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        margin: 16px 0;

        &:last-child {
          text-align: right;
        }
      }
      .feedImg {
        border-radius: 10px;
      }
      span {
        color: ${theme.colors.colorMain};
      }
    `;
  }}
`;

export default CategoryFeedContWrapper;
