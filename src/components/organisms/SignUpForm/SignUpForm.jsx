import Button from '../../atoms/Button/Button';
import TextFiledCard from '../../molecules/TextFiledCard/TextFiledCard';
import SignUpFormWrapper from './styled';

const SignForm = ({
  loginValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  error,
  pwError,
}) => {
  const { email, password } = loginValue;

  return (
    <SignUpFormWrapper onSubmit={onSubmitButtonHandler}>
      <TextFiledCard
        value={email}
        type='text'
        id='inpEmail'
        name='email'
        onChange={onChangeInputHandler}
        autoFocus={true}
        required
        placeholder='이메일 주소를 입력해 주세요.'
      >
        이메일
      </TextFiledCard>
      {error && <p>{error}</p>}
      <TextFiledCard
        value={password}
        type='password'
        id='inpPassword'
        name='password'
        onChange={onChangeInputHandler}
        required
        placeholder='비밀번호를 설정해 주세요.'
      >
        비밀번호
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
    </SignUpFormWrapper>
  );
};

export default SignForm;
