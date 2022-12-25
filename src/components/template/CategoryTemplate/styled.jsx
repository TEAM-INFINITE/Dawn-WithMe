import styled, { css } from 'styled-components';

const CategoryTemplateWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;

  position: relative;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};

      ul {
        height: 100%;
        padding: 20px 16px 90px;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    `;
  }}
`;

export default CategoryTemplateWrapper;
