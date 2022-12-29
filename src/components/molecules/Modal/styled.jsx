import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 600px;
      height: 122px;
      background-color: #212025;
      border-radius: 10px 10px 0 0;
      margin: 0 auto;
      z-index: 2;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      color: #fff;

      .bar {
        width: 200px;
        height: 5px;
        background-color: ${theme.colors.colorDB};
        margin: 0 auto;
        margin-top: 16px;
        border-radius: 5px;
      }

      li {
        margin-bottom: 8px;
        button {
          display: block;
          color: white;
          font-size: 18px;
        }
      }
    `;
  }}
`;

export default ModalWrapper;
