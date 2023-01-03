import LoginButtonForm from '../../organisms/LoginButtonForm/LoginButtonForm';
import StarCard from '../../molecules/StarCard/StarCard';
import Star from '../../atoms/Star/Star';
import { LoginButtonWrapper, SymbolWrapper } from './styled';
import Img from '../../atoms/Img/Img';
import titleLogo from '../../../assets/images/title-logo.png';
import colorFullLogoLarge from '../../../assets/images/color-full-logo.png';

const LoginButtonTemplate = () => {
  return (
    <>
      <LoginButtonWrapper>
        <StarCard />
        <Star className='moon' />
        <SymbolWrapper>
          <Img
            className='owl'
            src={colorFullLogoLarge}
            width='200px'
            alt='부엉이 이미지'
          />
          <Img
            className='logo'
            src={titleLogo}
            width='140px'
            alt='타이틀 로고'
          />
        </SymbolWrapper>
      </LoginButtonWrapper>
      <LoginButtonForm />
    </>
  );
};

export default LoginButtonTemplate;
