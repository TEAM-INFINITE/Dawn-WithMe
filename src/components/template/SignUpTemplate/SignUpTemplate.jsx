import SignUpForm from '../../organisms/SignUpForm/SignUpForm';
import SignUpWrapper from './styled';

const SignUpTemplate = ({
  loginValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  error,
  pwError,
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
    </SignUpWrapper>
  );
};

export default SignUpTemplate;
