import ProfileSettingForm from '../../organisms/ProfileSettingForm/ProfileSettingForm';
import { ProfileSettingWrapper, ImgWrapper } from './styled';
import defaultProfilePhoto from '../../../assets/images/profile-logo.png';
import fileUploadButton from '../../../assets/images/upload-file.png';

const ProfileSettingTemplate = ({
  onChangeInputHandler,
  onSubmitButtonHandler,
  profileValue,
  error,
}) => {
  return (
    <ProfileSettingWrapper>
      <h2>프로필 설정</h2>
      <p>나중에 언제든지 변경할수있습니다.</p>
      <ImgWrapper>
        <img
          src={defaultProfilePhoto}
          alt='프로필 사진 미리보기'
          className='defaultProfilePhoto'
        />
        <img
          src={fileUploadButton}
          alt='버튼을 누르면 프로필사진을 선택하고 등록합니다'
          className='fileUploadButton'
        />
        <input
          type='file'
          accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
          name='imgFile'
          id='imgFile'
          className='profileImg-input'
        />
      </ImgWrapper>
      <ProfileSettingForm
        profileValue={profileValue}
        onChangeInputHandler={onChangeInputHandler}
        onSubmitButtonHandler={onSubmitButtonHandler}
        error={error}
      />
    </ProfileSettingWrapper>
  );
};

export default ProfileSettingTemplate;
