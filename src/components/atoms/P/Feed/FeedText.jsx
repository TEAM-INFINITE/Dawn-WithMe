import styled, { css } from 'styled-components';

const setType = (type) => {
  switch (type) {
    case 'username':
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          color: ${theme.colors.colorBorder};
          font-weight: 500;
          line-height: 18px;
        `;
      };

    case 'userid':
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.smallMid};
          color: ${theme.colors.color76};
          font-weight: 400;
          line-height: 14px;
        `;
      };

    default:
      return ({ theme }) => {
        return css`
          font-size: ${theme.fontSizes.base};
          color: ${theme.colors.colorWhite};
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
