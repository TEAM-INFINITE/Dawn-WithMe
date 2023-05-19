import styled, { css } from 'styled-components';

const LoginButtonCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button + button {
    margin-top: 10px;
  }

  img {
    float: left;
  }

  button {
    font-weight: 400;
    text-align: center;
    ${({ theme }) => {
      return css`
        background-color: ${theme.BACKGROUND};
      `;
    }}
    &:nth-child(1) {
      border: 1px solid #f2c94c;
      padding-left: 17px;
      padding-right: 17px;
    }
    &:nth-child(2) {
      border: 1px solid #767676;
      padding-left: 17px;
      padding-right: 17px;
    }
    &:nth-child(3) {
      border: 1px solid #2d9cdb;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

export default LoginButtonCardWrapper;
