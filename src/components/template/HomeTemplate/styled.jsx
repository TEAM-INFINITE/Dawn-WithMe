import styled, { css } from 'styled-components';

const HomeTemplateWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  /* padding: 20px 16px 90px; */
  position: relative;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};
    `;
  }}
`;

export default HomeTemplateWrapper;
