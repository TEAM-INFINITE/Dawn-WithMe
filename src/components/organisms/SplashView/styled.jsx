import styled, { keyframes } from 'styled-components';
import SplashBackground from '../../../assets/images/splash-background.png';

const ball = keyframes`
  0% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(-5%);
  }
`;

const sunset = keyframes`
  0% {
    transform: scale(1, 1) rotate(-85deg);
  }
  100% {
    transform: scale(0.2, 0) rotate(-85deg);
    transform-origin: bottom;
  }
`;

export const SplashViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: no-repeat url(${SplashBackground});
  background-size: 100% 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  img:last-child {
    animation: ${ball} 0.4s ease-out 0s infinite alternate;
  }

  span {
    display: none;
  }
`;

export const SplashViewAnimation = styled.div`
  width: 50px;
  height: 105px;
  background-color: rgb(218, 101, 58);
  border-radius: 0% 100% 100% 0% / 46% 47% 53% 54%;
  box-shadow: 0 0 10px 15px rgb(218, 101, 58);
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${sunset} 2s forwards;
`;
