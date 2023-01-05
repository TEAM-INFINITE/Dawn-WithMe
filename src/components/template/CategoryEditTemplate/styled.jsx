import styled, { css } from 'styled-components';

const CategoryEditTemplateWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: 30px 34px 0;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};
    `;
  }}
`;

export default CategoryEditTemplateWrapper;
