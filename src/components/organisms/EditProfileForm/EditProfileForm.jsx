import TextFiledCard from '../../molecules/TextFiledCard/TextFiledCard';
import EditProfileFormWrapper from './styled';

const EditProfileForm = ({ profileData, onChangeInputHandler }) => {
  const { username, accountname, intro } = profileData;
  return (
    <EditProfileFormWrapper id='editProfile'>
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
    </EditProfileFormWrapper>
  );
};

export default EditProfileForm;
