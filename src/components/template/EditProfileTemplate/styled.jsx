import styled, { css } from 'styled-components';

const EditProfileTemplateWrapper = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 600px;
      height: 100%;
      background-color: ${theme.BACKGROUND};
      margin: 0 auto;
      padding: 30px 34px 0;
      position: relative;
      overflow: auto;
    `;
  }}
  >div {
    > div {
      width: 110px;
      height: 110px;
      margin: 0 auto;
      border-radius: 50%;

      > button {
        right: 0;
        bottom: 0;
      }
    }
  }
`;

export default EditProfileTemplateWrapper;
