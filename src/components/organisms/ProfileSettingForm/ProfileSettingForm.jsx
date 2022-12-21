import TextFiledCard from '../../molecules/TextFiledCard/TextFiledCard';
import Button from '../../atoms/Button/Button';
import ProfileSettingFormWrapper from './styled';

const ProfileSettingForm = ({
  onChangeInputHandler,
  onSubmitButtonHandler,
  profileValue,
  error,
}) => {
  const { username, accountname, intro } = profileValue;
  return (
    <ProfileSettingFormWrapper onSubmit={onSubmitButtonHandler}>
      <TextFiledCard
        type='text'
        id='username'
        name='email'
        onChange={onChangeInputHandler}
        placeholder='2~10자 이내여야 합니다.'
        autoFocus={true}
      >
        사용자 이름
      </TextFiledCard>
      <TextFiledCard
        type='text'
        id='userId'
        name='userId'
        onChange={onChangeInputHandler}
        placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
      >
        계정 ID
      </TextFiledCard>
      {error && <p>{error}</p>}
      <TextFiledCard
        type='text'
        id='userIntro'
        name='userIntro'
        onChange={onChangeInputHandler}
        placeholder='자신을 소개해주세요!'
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
