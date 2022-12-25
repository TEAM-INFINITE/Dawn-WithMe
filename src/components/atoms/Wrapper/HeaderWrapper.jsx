import styled, { css } from 'styled-components';

const HeaderWrapper = styled.header`
  max-width: 600px;
  margin: 0 auto;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};
      h2 {
        font-size: ${theme.fontSizes.xxl};
        color: ${theme.colors.colorBorder};
        line-height: 22px;
      }
    `;
  }}
`;

export default HeaderWrapper;
