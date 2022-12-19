import styled, { css } from 'styled-components';

const CategoryTemplateWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 34px 0;
  position: relative;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};
    `;
  }}
`;

export default CategoryTemplateWrapper;
