import SymbolLogoCard from '../../molecules/SymbolLogoCard/SymbolLogoCard';
import LoginButtonForm from '../../organisms/LoginButtonForm/LoginButtonForm';
import LoginButtonWrapper from './styled';
import colorFullLogo from '../../../assets/images/color-full-logo.png';

const LoginButtonTemplate = () => {
  return (
    <LoginButtonWrapper>
      <SymbolLogoCard src={colorFullLogo} />
      <LoginButtonForm />
    </LoginButtonWrapper>
  );
};

export default LoginButtonTemplate;
