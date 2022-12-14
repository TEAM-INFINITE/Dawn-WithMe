import Button from '../../atoms/Button/Button';
import ProfileSettingCard from '../../molecules/TextFiledCard/TextFiledCard';
import ProfielSettingFormWrapper from './styled';

const ProfileSettingForm = () => {
  return (
    <ProfielSettingFormWrapper>
      <ProfileSettingCard placeholder='2~10자 이내여야 합니다.'>
        사용자 이름
      </ProfileSettingCard>
      <ProfileSettingCard placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'>
        계정ID
      </ProfileSettingCard>
      <ProfileSettingCard placeholder='자신과 판매할 상품에 대해 소개해 주세요!'>
        소개
      </ProfileSettingCard>
      <Button width='100%' size='large' type='submit'>
        감귤마켓 시작하기
      </Button>
    </ProfielSettingFormWrapper>
  );
};

export default ProfileSettingForm;
