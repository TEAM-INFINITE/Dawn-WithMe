import TextFiledCard from '../../molecules/TextFiledCard/TextFiledCard';
import Button from '../../atoms/Button/Button';
import ProfileSettingFormWrapper from './styled';

const ProfileSettingForm = ({
  inputValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  userError,
  AccountError,
}) => {
  const { username, accountname, intro } = inputValue;

  return (
    <ProfileSettingFormWrapper onSubmit={onSubmitButtonHandler}>
      <TextFiledCard
        value={username}
        type='text'
        id='userName'
        name='username'
        onChange={onChangeInputHandler}
        placeholder='2~10자 이내여야 합니다.'
        required
        autoFocus={true}
      >
        사용자 이름
      </TextFiledCard>
      {userError && <p>{userError}</p>}
      <TextFiledCard
        value={accountname}
        type='text'
        id='userId'
        name='accountname'
        onChange={onChangeInputHandler}
        required
        placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
      >
        계정 ID
      </TextFiledCard>
      {AccountError && <p>{AccountError}</p>}
      <TextFiledCard
        value={intro}
        type='text'
        id='userIntro'
        name='intro'
        onChange={onChangeInputHandler}
        placeholder='자신을 소개해주세요!'
        required
      >
        소개
      </TextFiledCard>
      <Button
        width='100%'
        size='large'
        type='submit'
        disabled={!username || !accountname || !intro}
      >
        던윗미 시작하기
      </Button>
    </ProfileSettingFormWrapper>
  );
};

export default ProfileSettingForm;
