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
  background-size: 100%;
  margin: 0 auto;
  // position: relative;
  overflow: auto;
  animation: ${loginButtonOn} 2s;

  .moon {
    width: 16px;
    height: 22px;
    border-radius: 41% 59% 100% 0% / 0% 34% 66% 100%;
    top: 375px;
    left: 247px;
    animation: none;
  }
`;

export const SymbolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .owl {
    margin-top: 110px;
  }

  .logo {
    height: 70px;
    margin: 60px 0 61px 0;
  }
`;
