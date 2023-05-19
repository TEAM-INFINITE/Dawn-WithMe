import styled, { css } from 'styled-components';

const FileUploadWrapper = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 30px;
  bottom: 30px;
  ${({ theme }) => {
    return css`
      p {
        color: ${theme.TEXT};
        font-size: ${theme.fontSizes.smallMid};
        margin-bottom: 18px;
      }

      input {
        display: none;
      }
    `;
  }}
`;

export default FileUploadWrapper;
