import styled, { css } from 'styled-components';

const EditProfileFormWrapper = styled.form`
  margin-top: 30px;
  div {
    margin-bottom: 16px;
  }

  ${({ theme }) => {
    return css`
      p {
        color: ${theme.colors.colorWarning};
        font-size: ${theme.fontSizes.smallMid};
        margin-bottom: 8px;
      }
    `;
  }}
`;
export default EditProfileFormWrapper;
