import styled, { css } from 'styled-components';

const NotFoundTemplateWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      text-align: center;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      padding: 200px 0 0;
      &::-webkit-scrollbar {
        display: none;
      }

      p {
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.xl};
        line-height: 14px;
        margin-top: 20px;
      }
      img {
        width: 200px;
        margin: 0 auto;
      }

      a {
        width: 120px;
        padding: 13px 0;
        margin: 20px auto 0;
        background-color: ${theme.colors.colorMain};
        font-size: ${theme.fontSizes.xl};
        font-weight: 500;
        line-height: 18px;
        border-radius: 22px;
        color: ${theme.colors.colorWhite};
      }
    `;
  }}
`;

export default NotFoundTemplateWrapper;
