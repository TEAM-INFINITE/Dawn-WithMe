import { useRef } from 'react';
import ProfileSettingForm from '../../organisms/ProfileSettingForm/ProfileSettingForm';
import { ProfileSettingWrapper, ImgWrapper } from './styled';
import defaultProfilePhoto from '../../../assets/images/profile-logo.png';
import fileUploadButton from '../../../assets/images/upload-file.png';
import Img from '../../atoms/Img/Img';

const ProfileSettingTemplate = ({
  inputValue,
  onChangeInputHandler,
  onSubmitButtonHandler,
  userError,
  AccountError,
  onChangeImg,
  imgSrc,
}) => {
  const photoInput = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    photoInput.current.click();
  };

  return (
    <ProfileSettingWrapper>
      <h2>프로필 설정</h2>
      <p className='profile-subtit'>나중에 언제든지 변경할수있습니다.</p>
      <ImgWrapper>
        <Img
          src={imgSrc || defaultProfilePhoto}
          alt='프로필 사진 미리보기'
          className='defaultProfilePhoto'
        />
        <button type='button' onClick={handleClick}>
          <Img
            src={fileUploadButton}
            alt='버튼을 누르면 프로필사진을 선택하고 등록합니다'
            className='fileUploadButton'
          />
        </button>
        <input
          type='file'
          accept='image/*'
          name='imgFile'
          id='imgFile'
          className='profileImg-input'
          ref={photoInput}
          onChange={onChangeImg}
        />
      </ImgWrapper>
      <ProfileSettingForm
        inputValue={inputValue}
        onChangeInputHandler={onChangeInputHandler}
        onSubmitButtonHandler={onSubmitButtonHandler}
        userError={userError}
        AccountError={AccountError}
      />
    </ProfileSettingWrapper>
  );
};
export default ProfileSettingTemplate;
