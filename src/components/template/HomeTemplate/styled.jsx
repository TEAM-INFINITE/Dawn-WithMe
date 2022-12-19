import styled, { css } from 'styled-components';

const HomeTemplateWrapper = styled.section`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 30px 34px 0;
  position: relative;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};
    `;
  }}
`;

export default HomeTemplateWrapper;
