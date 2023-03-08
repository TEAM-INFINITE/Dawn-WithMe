import styled, { css } from 'styled-components';

const setType = (type) => {
  switch (type) {
    case 'username':
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          color: ${theme.TEXT};
          font-weight: 500;
          line-height: 18px;
        `;
      };

    case 'userid':
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.smallMid};
          color: ${theme.SUB_TEXT};
          font-weight: 400;
          line-height: 14px;
        `;
      };

    case 'userintro':
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.smallMid};
          color: ${theme.SUB_TEXT};
          font-weight: 400;
          line-height: 14px;
        `;
      };

    default:
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          color: ${theme.LIGHT_TEXT};
          font-weight: 400;
          line-height: 18px;
        `;
      };
  }
};

const FeedText = styled.p`
  ${({ type }) => setType(type)}
`;

export default FeedText;
