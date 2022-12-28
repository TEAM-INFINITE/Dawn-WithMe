import styled, { css } from 'styled-components';

const MyProfileTemplateWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 30px 0 0;
      text-align: center;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    `;
  }}
`;

export default MyProfileTemplateWrapper;
