import styled, { keyframes } from 'styled-components';
import LoginButtonBackground from '../../../assets/images/login-button-background.png';

const splashOff = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

const loginButtonOn = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

export const StarCardWrapper = styled.div`
  span {
    &:nth-child(1) {
      left: 9vw;
      top: 15vh;
    }
    &:nth-child(2) {
      left: 15vw;
      top: 41vh;
    }
    &:nth-child(3) {
      right: 9vw;
      top: 43vh;
    }
    &:nth-child(4) {
      right: 11vw;
      top: 6vh;
    }
    &:nth-child(5) {
      right: 17vw;
      top: 18vh;
    }
  }
`;

export const SplashWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  animation: ${splashOff} 2s ease-in;
`;

export const LoginButtonWrapper = styled.section`
  max-width: 600px;
  height: 100%;
  background: no-repeat url(${LoginButtonBackground});
  background-size: 100% 100vh;
  display: flex;
  flex-direction: column;
  & > div:first-child {
    margin-top: auto;
  }
  animation: ${loginButtonOn} 2s;
`;
