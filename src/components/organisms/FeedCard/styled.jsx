import styled, { css } from 'styled-components';

export const FreePostWrap = styled.li`
  padding: 20px 16px 12px 16px;
`;

export const TextWrap = styled.div`
  padding-left: 54px;

  ${({ theme }) => {
    return css`
      &:last-child {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.small};
      }
    `;
  }}
`;

export const FeedMoreIconWrap = styled.section`
  display: flex;
  gap: 16px;
  margin: 12px 0 16px 0;
`;
