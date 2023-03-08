import styled, { css } from 'styled-components';

const CommentInputWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 13px 16px 12px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #212025;
  border-top: 1px solid #dbdbdb;

  img {
    border-radius: 50%;
  }

  input {
    width: 90%;
    border: none;
    margin: 0 18px;
  }

  ${({ theme }) => {
    return css`
      button {
        color: ${theme.TEXT};
        width: 35px;
      }
    `;
  }}
`;

export default CommentInputWrapper;
