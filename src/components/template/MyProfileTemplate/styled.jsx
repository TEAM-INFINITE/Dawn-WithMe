import styled, { css } from 'styled-components';

const MyProfileTemplateWrapper = styled.section`
  ${({ theme }) => {
    return css`
      width: 600px;
      height: 100%;
      background-color: ${theme.colors.colorBg};
      margin: 0 auto;
      padding: 30px 34px 0;
      text-align: center;
    `;
  }}
`;

export default MyProfileTemplateWrapper;
