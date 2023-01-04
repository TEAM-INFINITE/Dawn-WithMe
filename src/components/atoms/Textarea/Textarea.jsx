import styled, { css } from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  height: 40vh;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.base};
      line-height: 14px;
      background-color: ${theme.colors.colorBg};
      border: none;
      outline: transparent none 0px;
      resize: none;
      padding: 10px 14px;
      color: ${theme.colors.colorWhite};
    `;
  }}
`;

export default Textarea;
