import { SplashViewWrapper, SplashViewAnimation } from './styled';
import SplashLogoCard from '../../molecules/SplashLogoCard/SplashLogoCard';

const SplashView = () => {
  return (
    <SplashViewWrapper>
      <SplashViewAnimation />
      <SplashLogoCard />
    </SplashViewWrapper>
  );
};

export default SplashView;
