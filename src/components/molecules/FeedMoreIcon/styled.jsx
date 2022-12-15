import styled, { css } from 'styled-components';

const FeedMoreIconBtn = styled.button`
  cursor: pointer;
  ${({ theme }) => {
    return css`
      img {
        margin-right: 6px;
        vertical-align: -6px;
      }
      span {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.smallMid};
      }
    `;
  }}
`;

export default FeedMoreIconBtn;
