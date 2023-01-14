import { SplashViewWrapper, SplashViewAnimation } from './styled';
import SplashLogoCard from '../../molecules/SplashLogoCard/SplashLogoCard';

const SplashView = () => {
  return (
    <SplashViewWrapper>
      <SplashLogoCard />
      <SplashViewAnimation />
    </SplashViewWrapper>
  );
};

export default SplashView;
