import styled, { css } from 'styled-components';

const CategoryDetailTemplateWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: auto;

  ${({ theme }) => {
    return css`
      background-color: ${theme.BACKGROUND};
    `;
  }}
`;
export default CategoryDetailTemplateWrapper;
