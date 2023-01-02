import {
  SplashViewWrapper,
  SplashViewAnimation,
  SymbolAnimationWrapper,
} from './styled';
import Img from '../../atoms/Img/Img';
import titleLogo from '../../../assets/images/title-logo.png';
import colorFullLogoLarge from '../../../assets/images/color-full-logo.png';

const SplashView = () => {
  return (
    <SplashViewWrapper>
      <SymbolAnimationWrapper>
        <Img
          className='owl'
          src={colorFullLogoLarge}
          width='200px'
          alt='부엉이미지'
        />
        <Img
          className='logoAnimation'
          src={titleLogo}
          width='140px'
          alt='타이틀 로고'
        />
      </SymbolAnimationWrapper>
      <SplashViewAnimation />
    </SplashViewWrapper>
  );
};

export default SplashView;
