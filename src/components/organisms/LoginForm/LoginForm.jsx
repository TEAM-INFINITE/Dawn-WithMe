import Button from '../../atoms/Button/Button';
import TextFiledCard from '../../molecules/TextFiledCard/TextFiledCard';
import LoginFormWrapper from './styled';

const LoginForm = ({
  loginValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  error,
}) => {
  const { email, password } = loginValue;

  return (
    <LoginFormWrapper onSubmit={onSubmitButtonHandler}>
      <TextFiledCard
        value={email}
        type='text'
        id='email'
        name='email'
        onChange={onChangeInputHandler}
        autoFocus={true}
      >
        이메일
      </TextFiledCard>
      <TextFiledCard
        value={password}
        type='password'
        id='password'
        name='password'
        onChange={onChangeInputHandler}
      >
        패스워드
      </TextFiledCard>
      {error && <p>{error}</p>}
      <Button
        width='100%'
        size='large'
        type='submit'
        disabled={!email || !password}
      >
        로그인
      </Button>
    </LoginFormWrapper>
  );
};

export default LoginForm;
