import SplashLogoCardWrapper from './styled';
import Img from '../../atoms/Img/Img';
import colorFullLogo from '../../../assets/images/color-full-logo.png';
import titleLogo from '../../../assets/images/title-logo.png';
import Star from '../../atoms/Star/Star';

const SplashLogoCard = () => {
  return (
    <SplashLogoCardWrapper>
      <Img src={colorFullLogo} width='80%' alt='부엉이 캐릭터' />
      <Img src={titleLogo} width='60%' alt='던윗미 로고' />
      <Star className='moon' />
    </SplashLogoCardWrapper>
  );
};

export default SplashLogoCard;
