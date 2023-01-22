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
