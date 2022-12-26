import styled, { css } from 'styled-components';

const MyProfileTemplateWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 30px 16px 0;
      text-align: center;
    `;
  }}
`;

export default MyProfileTemplateWrapper;
