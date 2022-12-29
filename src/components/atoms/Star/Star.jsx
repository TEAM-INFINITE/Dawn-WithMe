import styled, { css, keyframes } from 'styled-components';

const twinkle = keyframes`
    50% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
`;

const Star = styled.span`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  animation: ${twinkle} 2s infinite;
  background: rgb(223, 208, 172);
  ${({ theme }) => {
    return css`
      box-shadow: 0 0 50px rgb(223, 208, 172),
        0 0 50px ${theme.colors.colrWhite}, 0 0 100px ${theme.colors.colorWhite};
    `;
  }}
`;

export default Star;
