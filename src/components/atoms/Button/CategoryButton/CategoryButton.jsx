import styled, { css } from 'styled-components';

const CategoryButton = styled.button`
  ${({ theme }) => {
    return css`
      width: ${(props) => props.width};
      height: 150px;
      background-color: #333;
      color: ${theme.colors.colorWhite};
    `;
  }}
`;

export default CategoryButton;
