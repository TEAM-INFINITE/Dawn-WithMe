import { LoginButtonWrapper, StarCardWrapper } from './styled';
import SplashLogoCard from '../../molecules/SplashLogoCard/SplashLogoCard';
import Star from '../../atoms/Star/Star';
import LoginButtonForm from '../../organisms/LoginButtonForm/LoginButtonForm';

const LoginButtonTemplate = () => {
  return (
    <LoginButtonWrapper>
      <SplashLogoCard />
      <StarCardWrapper>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarCardWrapper>
      <LoginButtonForm />
    </LoginButtonWrapper>
  );
};

export default LoginButtonTemplate;
