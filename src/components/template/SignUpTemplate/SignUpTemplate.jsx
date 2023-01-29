import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Img from '../../atoms/Img/Img';
import SignUpForm from '../../organisms/SignUpForm/SignUpForm';
import SignUpWrapper from './styled';
import titleLogo from '../../../assets/images/title-logo.png';

const SignUpTemplate = ({
  loginValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  error,
  pwError,
  isError,
}) => {
  return (
    <SignUpWrapper>
      <h2>이메일로 회원가입</h2>
      <SignUpForm
        loginValue={loginValue}
        onChangeInputHandler={onChangeInputHandler}
        onSubmitButtonHandler={onSubmitButtonHandler}
        error={error}
        pwError={pwError}
      />
      <Link to='/login'>로그인 하러가기</Link>
      <Img src={titleLogo} width='80px' alt='타이틀 로고' />
      {isError && <ToastContainer />}
    </SignUpWrapper>
  );
};

export default SignUpTemplate;
