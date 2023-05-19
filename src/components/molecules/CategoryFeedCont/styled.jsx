import styled, { css } from 'styled-components';

const CategoryFeedContWrapper = styled.div`
  ${({ theme }) => {
    return css`
      p {
        font-size: ${theme.fontSizes.base};
        color: ${theme.LIGHT_TEXT};
        margin: 16px 0;

        &:last-child {
          text-align: right;
        }
      }
      .feedImg {
        border-radius: 10px;
      }
      span {
        color: ${theme.MAIN};
      }
    `;
  }}
`;

export default CategoryFeedContWrapper;
