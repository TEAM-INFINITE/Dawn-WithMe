import styled, { css, keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }`;

export const OpacityBg = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 600px;
      height: 122px;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #212025;
      margin: 0 auto;
      border-radius: 10px 10px 0 0;
      z-index: 2;
      color: #fff;
      animation: ${fadeInUp} 0.5s;

      .bar {
        width: 100px;
        height: 5px;
        background-color: #feac23;
        margin: 0 auto;
        margin-top: 16px;
        border-radius: 5px;
      }

      li {
        margin: 16px 0 10px 0;
        .btn-modal {
          width: 100%;
          padding: 14px 0 14px 26px;
          text-align: start;
          font-size: 18px;
          color: white;
          line-height: 17.5px;
        }

        .btn-modal:hover {
          color: ${theme.colors.colorWarning};
        }
        .report {
          color: ${theme.colors.colorWarning};
        }
      }
    `;
  }}
`;

export default ModalWrapper;
