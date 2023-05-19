import styled, { css } from 'styled-components';

const PostInputBoxWrapper = styled.div`
  margin-top: 30px;

  > div {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  select {
    margin-bottom: 16px;
  }

  ${({ theme }) => {
    return css`
      p {
        margin-bottom: 8px;
        color: ${theme.WARNING};
        font-size: ${theme.fontSizes.smallMid};
      }
    `;
  }}
`;
export default PostInputBoxWrapper;
