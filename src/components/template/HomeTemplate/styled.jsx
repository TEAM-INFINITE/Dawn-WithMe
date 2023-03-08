import styled, { css } from 'styled-components';

const HomeTemplateWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: 26px 30px 90px;
  ${({ theme }) => {
    return css`
      background-color: ${theme.BACKGROUND};
    `;
  }}
`;

export default HomeTemplateWrapper;
