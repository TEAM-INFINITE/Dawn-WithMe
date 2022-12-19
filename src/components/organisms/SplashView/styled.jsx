import styled, { keyframes } from 'styled-components';
import SplashBackground from '../../../assets/images/splash-background.png';

const darker = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
`;

const SplashViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: no-repeat url(${SplashBackground});
  background-size: 100% 820px;
  display: flex;
  justify-content: center;
  position: relative;
  animation: ${darker} 5s ease-in;
`;

export default SplashViewWrapper;
