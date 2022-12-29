import FullWrapper from '../../atoms/Wrapper/FullWrapper';
import SymbolLogoCard from '../../molecules/SymbolLogoCard/SymbolLogoCard';
import LoginButtonForm from '../../organisms/LoginButtonForm/LoginButtonForm';
import StarCard from '../../molecules/StarCard/StarCard';
import Star from '../../atoms/Star/Star';
import LoginButtonWrapper from './styled';
import colorFullLogo from '../../../assets/images/color-full-logo.png';

const LoginButtonTemplate = () => {
  return (
    <FullWrapper>
      <LoginButtonWrapper>
        <StarCard />
        <Star className='moon' />
        <SymbolLogoCard src={colorFullLogo} />
      </LoginButtonWrapper>
      <LoginButtonForm />
    </FullWrapper>
  );
};

export default LoginButtonTemplate;
