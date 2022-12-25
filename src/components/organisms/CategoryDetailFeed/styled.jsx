import styled, { css } from 'styled-components';

const CategoryDetailFeedWrapper = styled.div`
  margin-bottom: 20px;
  padding: 16px;
  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => {
    return css`
      .title,
      .people {
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        margin: 16px 0;
      }
      p {
        &:nth-child(4) {
          text-align: right;
        }
      }

      span {
        color: ${theme.colors.colorMain};
      }
      .people,
      .date {
        margin-top: 20px;
      }

      .date {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.small};
      }
    `;
  }}
`;

export default CategoryDetailFeedWrapper;
