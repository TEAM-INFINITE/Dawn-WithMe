import ProfileSettingForm from '../../organisms/ProfileSettingForm/ProfileSettingForm';
import ProfileSettingWrapper from './styled';
import Img from '../../atoms/Img/Img';
import ProfileImg from '../../../assets/images/profile-logo.png';
import UploadICon from '../../molecules/UploadIcon/UploadICon';

const LoginTemplate = () => {
  return (
    <ProfileSettingWrapper>
      <h2>프로필 설정</h2>
      <p>나중에 언제든지 변경할수 있습니다.</p>
      <div>
        <Img src={ProfileImg} alt='프로필사진' />
        <UploadICon />
      </div>
      <ProfileSettingForm />
    </ProfileSettingWrapper>
  );
};

export default LoginTemplate;
