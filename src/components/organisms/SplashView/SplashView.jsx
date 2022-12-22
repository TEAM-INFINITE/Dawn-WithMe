import styled, { keyframes } from 'styled-components';
import SymbolLogoCard from '../../molecules/SymbolLogoCard/SymbolLogoCard';
import SplashViewWrapper from './styled';
import grayFullLogo from '../../../assets/images/gray-full-logo.png';

const sunset = keyframes`
    0% {
        transform: scale(1, 1) rotate(-85deg);
    }
    100% {
        transform: scale(0.2, 0) rotate(-85deg);
        transform-origin: bottom;
    }
`;

const SplashViewAnimation = styled.div`
  width: 50px;
  height: 105px;
  background-color: rgb(218, 101, 58);
  box-shadow: 0 0 10px 15px rgb(218, 101, 58);
  position: absolute;
  top: 510px;
  left: 293px;
  border-radius: 0% 100% 100% 0% / 46% 47% 53% 54%;
  animation: ${sunset} 2s forwards;
`;

const SplashView = () => {
  return (
    <SplashViewWrapper>
      <SymbolLogoCard src={grayFullLogo} />
      <SplashViewAnimation />
    </SplashViewWrapper>
  );
};

export default SplashView;
