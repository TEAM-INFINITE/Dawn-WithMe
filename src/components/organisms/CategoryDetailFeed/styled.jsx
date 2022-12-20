import styled, { css } from 'styled-components';

const CategoryDetailFeedWrapper = styled.div`
  margin-bottom: 20px;
  padding: 16px;
  &:last-child {
    margin-bottom: 0;
  }

  > p {
    margin-top: 20px;
  }

  ${({ theme }) => {
    return css`
      &:last-child {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.small};
      }
    `;
  }}
`;

export default CategoryDetailFeedWrapper;
