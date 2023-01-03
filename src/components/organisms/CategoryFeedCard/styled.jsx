import styled, { css } from 'styled-components';

export const CategoryFreePostWrapper = styled.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryTextWrapper = styled.div`
  padding-left: 54px;

  ${({ theme }) => {
    return css`
      &:last-child {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.small};
      }

      > p {
        margin-top: 20px;
      }
      img {
        max-height: 300px;
        object-fit: cover;
      }
    `;
  }}
`;
