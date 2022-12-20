import Button from '../../atoms/Button/Button';
import TextFiledCard from '../../molecules/SignUpFiredCard/SignUpFiredCard';
import SignFormWrapper from './styled';

const SignForm = ({
  loginValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  emailValidation,
  passwordValidation,
  error,
  pwError,
}) => {
  const { email, password } = loginValue;

  return (
    <SignFormWrapper onSubmit={onSubmitButtonHandler}>
      <TextFiledCard
        value={email}
        type='text'
        id='email'
        name='email'
        onChange={onChangeInputHandler}
        onKeyUp={emailValidation}
        autoFocus={true}
        placeholder='이메일 주소를 입력해 주세요.'
      >
        이메일
      </TextFiledCard>
      {error && <p>{error}</p>}
      <TextFiledCard
        value={password}
        type='password'
        id='password'
        name='password'
        onChange={onChangeInputHandler}
        onKeyUp={passwordValidation}
        placeholder='비밀번호를 설정해 주세요.'
      >
        패스워드
      </TextFiledCard>
      {pwError && <p>{pwError}</p>}
      <Button
        width='100%'
        size='large'
        type='submit'
        disabled={!email || !password}
      >
        다음
      </Button>
    </SignFormWrapper>
  );
};

export default SignForm;
