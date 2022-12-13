import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import LoginWrapper from './styled';
import titleLogo from '../../../assets/images/title-logo.png';

const LoginTemplate = ({
  loginValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  error,
}) => {
  return (
    <LoginWrapper>
      <h2>로그인</h2>
      <LoginForm
        loginValue={loginValue}
        onChangeInputHandler={onChangeInputHandler}
        onSubmitButtonHandler={onSubmitButtonHandler}
        error={error}
      />
      <Link to='/signup'>이메일로 회원가입</Link>
      <Img src={titleLogo} width='80px' alt='타이틀 로고' />
    </LoginWrapper>
  );
};

export default LoginTemplate;
