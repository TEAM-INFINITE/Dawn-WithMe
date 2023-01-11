import { LoginButtonWrapper } from './styled';
import StarCard from '../../molecules/StarCard/StarCard';
import SplashLogoCard from '../../molecules/SplashLogoCard/SplashLogoCard';
import LoginButtonForm from '../../organisms/LoginButtonForm/LoginButtonForm';

const LoginButtonTemplate = () => {
  return (
    <LoginButtonWrapper>
      <StarCard />
      <SplashLogoCard />
      <LoginButtonForm />
    </LoginButtonWrapper>
  );
};

export default LoginButtonTemplate;
